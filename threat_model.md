# Threat Model

## Project Overview

This project is a pnpm monorepo with a public React/Vite storefront (`artifacts/baking-house`) and a small Express 5 API (`artifacts/api-server`) deployed on Replit autoscale. The current production site is primarily a marketing and lead-generation experience for a bakery: users browse static content and initiate orders through WhatsApp or Instagram rather than submitting orders to the backend. The backend currently exposes a minimal JSON API.

Production-scoped analysis should focus on `artifacts/baking-house`, `artifacts/api-server`, and shared libraries they actually import. `artifacts/mockup-sandbox` is a development-only preview environment and should be ignored unless future scans establish production reachability. Assume `NODE_ENV=production` in production. Replit-managed TLS is in place for deployed traffic.

## Assets

- **Brand-controlled contact channels** — the WhatsApp number and Instagram account are the primary user handoff points. If links or generated messages were attacker-controlled, users could be redirected or phished.
- **Application availability** — the public storefront and `/api/healthz` endpoint must remain available because they back the deployed experience and health monitoring.
- **Application secrets and infrastructure credentials** — `DATABASE_URL` and any future integration secrets remain sensitive even though the current production API does not appear to use the database.
- **Future server-side business data** — the repo already contains PostgreSQL/Drizzle infrastructure. If production begins persisting orders or user records, that data will become a primary asset immediately.

## Trust Boundaries

- **Browser to frontend bundle** — all client-side state and navigation are attacker-controlled. The frontend must not trust URL parameters, DOM state, or user input when generating links or rendering content.
- **Browser to API** — requests crossing into `artifacts/api-server` must be treated as fully untrusted. Any future non-health routes will need server-side validation, authorization, and abuse controls.
- **API to database** — `lib/db` opens a privileged PostgreSQL connection from `DATABASE_URL`. Any future route that imports and uses it becomes a high-risk injection and data-exposure boundary.
- **Application to third-party destinations** — WhatsApp and Instagram links transfer users and user-entered text to external services. Generated destinations must remain fixed or allowlisted.
- **Production vs development artifacts** — `artifacts/mockup-sandbox` is a mockup/preview surface and is not production by default. Findings limited to that artifact should not be proposed unless production exposure is demonstrated.

## Scan Anchors

- Production backend entrypoints: `artifacts/api-server/src/index.ts`, `artifacts/api-server/src/app.ts`, `artifacts/api-server/src/routes/**`
- Production frontend entrypoints: `artifacts/baking-house/src/main.tsx`, `artifacts/baking-house/src/App.tsx`, `artifacts/baking-house/src/pages/home.tsx`
- Shared high-risk code if activated by production routes: `lib/db/src/**`, `lib/api-client-react/src/custom-fetch.ts`
- Public surface today: `/` from `baking-house` and `GET /api/healthz` from `api-server`
- Dev-only area to ignore unless proven reachable: `artifacts/mockup-sandbox/**`

## Threat Categories

### Tampering

The main production tampering risk is future server-side acceptance of untrusted input. Today the frontend collects user text and turns it into outbound WhatsApp links, and the backend exposes only a health endpoint. The project must keep third-party destinations fixed or allowlisted, and any future API endpoints must validate request bodies, params, and query strings server-side before using them in database queries, redirects, filesystem access, or external requests.

### Information Disclosure

The application currently exposes minimal server data, but future risk is concentrated in shared database infrastructure and server logging. Server responses and logs must not leak secrets, cookies, authorization headers, stack traces, or future customer data. Public API responses must stay narrowly scoped, and any future database-backed endpoints must return only fields required by the client.

### Denial of Service

Because the deployment is public, every exposed endpoint is reachable from the internet. The current risk is low because the API surface is minimal, but any future public write endpoints, search endpoints, or expensive integrations will need request-size limits, timeouts, and rate limiting to prevent abuse. Health and storefront paths should avoid user-triggerable expensive operations.

### Elevation of Privilege

There is no current authenticated or admin surface, so classic authorization bugs do not yet apply to the deployed application. However, the presence of shared database and API client infrastructure means future scans should immediately re-evaluate for injection, broken access control, and unsafe token handling once authenticated or state-changing endpoints are added. All future database access must use parameterized ORM/query interfaces, and any future privileged routes must enforce authorization server-side.
