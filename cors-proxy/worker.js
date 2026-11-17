/**
 * Allowlisted CORS proxy for the Transics TX-SERVICE API.
 * URL shape: https://<this-worker>/<upstream-host>/<path>?<query>
 *
 * Allowed hosts only — this is not an open proxy.
 * Request bodies, tokens, and cookie values are never logged.
 */

const ALLOWED_HOSTS = new Set([
  'ww4sb.tx-connect.com',
  'www.mytransics.com',
  'dwhrestapi.transics.com',
]);

const UPSTREAM_SITE = 'https://www.mytransics.com';
const ALLOWED_METHODS = 'GET, POST, PUT, PATCH, DELETE, OPTIONS';
const MAX_AGE = '86400';
const DEFAULT_ALLOW_HEADERS =
  'X-Proxy-Cookie, Content-Type, Accept, Authorization, X-Requested-With';

const HOP_BY_HOP = new Set([
  'connection',
  'keep-alive',
  'proxy-authenticate',
  'proxy-authorization',
  'te',
  'trailer',
  'transfer-encoding',
  'upgrade',
  'host',
  'content-length',
  'cookie',
  'origin',
  'referer',
]);

export default {
  async fetch(request) {
    try {
      return await handle(request);
    } catch {
      return corsResponse(request, 502, 'Upstream request failed.');
    }
  },
};

async function handle(request) {
  const url = new URL(request.url);

  if (request.method === 'OPTIONS') {
    const parsed = parseUpstream(url);
    if (!parsed.ok && url.pathname !== '/' && url.pathname !== '') {
      return corsResponse(request, 403, parsed.error);
    }
    return preflight(request);
  }

  if (url.pathname === '/' || url.pathname === '') {
    return corsResponse(
      request,
      200,
      JSON.stringify(
        {
          name: 'txservice-cors-proxy',
          usage: 'https://<worker>/<upstream-host>/<path>?<query>',
          allowedHosts: [...ALLOWED_HOSTS],
          cookie:
            'Send upstream cookies in X-Proxy-Cookie; Set-Cookie is returned as X-Proxy-Set-Cookie.',
        },
        null,
        2,
      ),
      { 'Content-Type': 'application/json; charset=utf-8' },
    );
  }

  const parsed = parseUpstream(url);
  if (!parsed.ok) {
    return corsResponse(request, 403, parsed.error);
  }

  const outgoing = new Headers();
  for (const [name, value] of request.headers) {
    if (shouldForwardRequestHeader(name)) {
      outgoing.set(name, value);
    }
  }

  outgoing.set('Origin', UPSTREAM_SITE);
  outgoing.set('Referer', UPSTREAM_SITE + '/');

  const proxyCookie = request.headers.get('X-Proxy-Cookie');
  if (proxyCookie) {
    outgoing.set('Cookie', proxyCookie);
  }

  const method = request.method.toUpperCase();
  const init = {
    method,
    headers: outgoing,
    redirect: 'manual',
  };

  if (method !== 'GET' && method !== 'HEAD') {
    init.body = request.body;
    init.duplex = 'half';
  }

  const upstreamRes = await fetch(parsed.url, init);
  return passThrough(request, upstreamRes, parsed.url);
}

/**
 * @param {URL} url
 * @returns {{ok: true, url: string, host: string} | {ok: false, error: string}}
 */
function parseUpstream(url) {
  const segments = url.pathname.split('/');
  // pathname is "/host/path...", so [0] is "".
  const host = (segments[1] || '').toLowerCase();

  if (!host || !/^[a-z0-9][a-z0-9.-]*[a-z0-9]$|^[a-z0-9]$/.test(host)) {
    return { ok: false, error: 'Forbidden: missing or invalid upstream host.' };
  }
  if (!ALLOWED_HOSTS.has(host)) {
    return { ok: false, error: 'Forbidden: host is not on the allowlist.' };
  }

  const path = '/' + segments.slice(2).join('/');
  return { ok: true, host, url: 'https://' + host + path + url.search };
}

function shouldForwardRequestHeader(name) {
  const n = name.toLowerCase();
  if (HOP_BY_HOP.has(n)) return false;
  if (n.startsWith('cf-') || n.startsWith('cdn-loop')) return false;
  if (n.startsWith('x-forwarded-') || n === 'x-real-ip' || n === 'forwarded') return false;
  if (n.startsWith('sec-')) return false;
  if (n.startsWith('access-control-')) return false;
  if (n === 'x-proxy-cookie') return false;
  if (n === 'accept-encoding') return false;
  return true;
}

function corsHeaderMap(request) {
  const origin = request.headers.get('Origin');
  const allowOrigin = !origin || origin === 'null' ? '*' : origin;
  const requested = request.headers.get('Access-Control-Request-Headers');
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': ALLOWED_METHODS,
    'Access-Control-Allow-Headers': requested || DEFAULT_ALLOW_HEADERS,
    'Access-Control-Expose-Headers': '*',
    'Access-Control-Max-Age': MAX_AGE,
    Vary: 'Origin, Access-Control-Request-Headers',
  };
}

function applyCors(request, headers) {
  const cors = corsHeaderMap(request);
  for (const [name, value] of Object.entries(cors)) {
    headers.set(name, value);
  }
}

function preflight(request) {
  const headers = new Headers(corsHeaderMap(request));
  return new Response(null, { status: 204, headers });
}

function corsResponse(request, status, body, extra) {
  const headers = new Headers(corsHeaderMap(request));
  if (extra) {
    for (const [name, value] of Object.entries(extra)) {
      headers.set(name, value);
    }
  }
  if (!headers.has('Content-Type') && body != null) {
    headers.set('Content-Type', 'text/plain; charset=utf-8');
  }
  return new Response(body, { status, headers });
}

function passThrough(request, upstreamRes, upstreamUrl) {
  const headers = new Headers();

  for (const [name, value] of upstreamRes.headers) {
    const n = name.toLowerCase();
    if (n === 'set-cookie') continue;
    if (n.startsWith('access-control-')) continue;
    if (HOP_BY_HOP.has(n) && n !== 'cookie') continue;
    headers.append(name, value);
  }

  const setCookies =
    typeof upstreamRes.headers.getSetCookie === 'function'
      ? upstreamRes.headers.getSetCookie()
      : [];
  for (const cookie of setCookies) {
    headers.append('X-Proxy-Set-Cookie', cookie);
  }

  const location = upstreamRes.headers.get('Location');
  if (location) {
    const rewritten = rewriteLocation(location, upstreamUrl, request);
    if (rewritten) headers.set('Location', rewritten);
  }

  applyCors(request, headers);

  return new Response(upstreamRes.body, {
    status: upstreamRes.status,
    statusText: upstreamRes.statusText,
    headers,
  });
}

function rewriteLocation(location, upstreamUrl, request) {
  try {
    const dest = new URL(location, upstreamUrl);
    if (dest.protocol !== 'https:') return location;
    if (!ALLOWED_HOSTS.has(dest.hostname.toLowerCase())) return location;
    const proxy = new URL(request.url);
    proxy.pathname = '/' + dest.hostname.toLowerCase() + dest.pathname;
    proxy.search = dest.search;
    proxy.hash = dest.hash;
    return proxy.toString();
  } catch {
    return location;
  }
}
