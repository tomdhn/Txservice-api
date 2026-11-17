# Txservice-api

## TX-SERVICE API documentation

This documents the API calls made by https://www.mytransics.com/service.

Open `index.html` in a browser to view the Swagger UI (Try-it-out is disabled). The spec covers 146 read and 155 write operations. Only 13 reads were tested live, and no writes were executed. Calls are mostly JSONP against https://ww4sb.tx-connect.com/SKYCC/api/v1/ using a session token from `environment.js`.

See `endpoints.md` for the summary table. The OpenAPI 3.0.3 spec is in `openapi.yaml` and `openapi.json`.
