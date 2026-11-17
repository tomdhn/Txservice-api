# TX-SERVICE CORS proxy

A Cloudflare Worker that lets a browser (including a locally opened `index.html` Swagger page) call the Transics TX-SERVICE APIs without CORS errors.

Deployed at: `https://txservice-cors-proxy.dhoine-tom.workers.dev`

## URL scheme

```
https://txservice-cors-proxy.dhoine-tom.workers.dev/<upstream-host>/<path>?<query>
```

Example:

```
https://txservice-cors-proxy.dhoine-tom.workers.dev/www.mytransics.com/api/statuscheck
https://txservice-cors-proxy.dhoine-tom.workers.dev/ww4sb.tx-connect.com/SKYCC/api/v1/customers
```

Only these upstream hosts are allowed (anything else returns 403):

- `ww4sb.tx-connect.com`
- `www.mytransics.com`
- `dwhrestapi.transics.com`

This is not an open proxy.

## CORS

The worker answers `OPTIONS` preflights with `204` and adds:

- `Access-Control-Allow-Origin` — reflects the request `Origin`, or `*` when Origin is missing or `null` (so a `file://` page works)
- `Access-Control-Allow-Methods`: GET, POST, PUT, PATCH, DELETE, OPTIONS
- `Access-Control-Allow-Headers` — reflects `Access-Control-Request-Headers`
- `Access-Control-Expose-Headers`: `*`
- `Access-Control-Max-Age`

`Origin` and `Referer` are set to `https://www.mytransics.com` on the upstream request. Redirects to an allowlisted HTTPS host have their `Location` rewritten to go back through this proxy.

## Cookies and auth

Browsers will not send the myTransics session cookie to this worker. For calls that need it:

- Send the upstream cookie string in the `X-Proxy-Cookie` request header. The worker forwards it as `Cookie`.
- Upstream `Set-Cookie` is returned as `X-Proxy-Set-Cookie` (not as `Set-Cookie`).

SKYCC / DWH / AWS sync calls also need the `token` query parameter or body field (`user.token` from `/service/environment.js`). The proxy does not log in for you and does not log request bodies or tokens.

## Deploy

From this directory, with Wrangler authenticated to the same Cloudflare account:

```sh
npx wrangler deploy
```
