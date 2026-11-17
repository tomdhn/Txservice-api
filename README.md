# Txservice-api

## TX-SERVICE API documentation

This documents the API calls made by https://www.mytransics.com/service.

Open `index.html` in a browser to view the Swagger UI (Try-it-out is enabled). Requests go through the CORS proxy by default; pick the server in the Swagger dropdown. The spec covers 146 read and 155 write operations. Only 13 reads were tested live, and no writes were executed. Calls are mostly JSONP against https://ww4sb.tx-connect.com/SKYCC/api/v1/. Authenticated calls still need the `token` from `/service/environment.js` or the `X-Proxy-Cookie` header.

See `endpoints.md` for the summary table. The OpenAPI 3.0.3 spec is in `openapi.yaml` and `openapi.json`.

The worker source is in `cors-proxy/`. Redeploy it with `wrangler deploy` from that directory.
