# Developer Guide

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start status -->
_Up to date._
<!-- sdlc:auto:end status -->

<!-- sdlc:auto:start source -->
Generated from commit `28c1aa0` · model `claude-sonnet-5`
<!-- sdlc:auto:end source -->

<!-- sdlc:auto:start overview -->
This is a generated two-app repository for a 'simple calculator' project from the Quorq AI SDLC platform. The frontend is a Vite + React 19 single-page app rendering approved screens against seeded sample data (not yet wired to a real API). The backend is a FastAPI 0.115 service scaffolded from no approved architecture yet, so it currently exposes only a health-check route plus the plumbing (SQLAlchemy engine/session, Pydantic stub schemas) for future routers and models to be added.
<!-- sdlc:auto:end overview -->

<!-- sdlc:auto:start prerequisites -->
- Node.js (for npm/Vite, React 19 toolchain)
- Python 3.12
- pip
- Docker and Docker Compose (optional, for the Postgres 16 service in docker-compose.yml)
<!-- sdlc:auto:end prerequisites -->

<!-- sdlc:auto:start setup -->
1. Clone the repository
2. Copy .env.example to .env and adjust values as needed
3. cd backend && pip install -r requirements.txt
4. cd frontend && npm install
5. (optional) docker-compose up db -d to start a local Postgres 16 instance if DATABASE_URL is pointed at it; otherwise the backend defaults to a local SQLite file (app.db)
<!-- sdlc:auto:end setup -->

<!-- sdlc:auto:start run -->
| Name | Command | Description |
|---|---|---|
| backend dev | `cd backend && uvicorn app.main:app --reload` | Runs the FastAPI app locally with auto-reload; creates SQLite tables on startup and serves /health |
| frontend dev | `cd frontend && npm run dev` | Starts the Vite dev server for the React SPA |
| frontend build | `cd frontend && npm run build` | Bundles the app for production (does not typecheck) |
| frontend preview | `cd frontend && npm run preview` | Serves the production build locally |
| db up | `docker-compose up db` | Starts the Postgres 16 container defined in docker-compose.yml |
<!-- sdlc:auto:end run -->

<!-- sdlc:auto:start structure -->
| Path | Purpose |
|---|---|
| `backend` | FastAPI service: app/ (main entrypoint, database, models, schemas, routers), tests/, Dockerfile, requirements.txt |
| `backend/app` | Application code: main.py (entrypoint, CORS, /health), database.py (engine/session), models.py (SQLAlchemy Base, no tables yet), schemas.py (Pydantic stub response), routers/ (empty, one router per future component) |
| `backend/tests` | Pytest suite, currently covering the health check (conftest.py, test_health.py) |
| `frontend` | React + Vite SPA: src/, e2e/, config files for Vite, TypeScript, ESLint, Prettier, Playwright |
| `frontend/src` | App source: main.tsx entrypoint, lib/ (api client, icons, navigation, UI helpers), index.css (brand tokens), test-setup.ts |
| `frontend/e2e` | Playwright end-to-end specs (e.g. example.spec.ts) |
| `.devcontainer` | VS Code devcontainer configuration |
| `.quorq` | Platform metadata (handoff.json) used by the Quorq AI SDLC platform |
<!-- sdlc:auto:end structure -->

<!-- sdlc:auto:start conventions -->
- Backend follows one router per architecture component owning endpoints, with every unimplemented route returning a typed StubResponse (status not_implemented)
- SQLAlchemy models all inherit from the shared declarative Base in app/database.py; tables are created via Base.metadata.create_all on startup rather than migrations
- Backend configuration is via environment variables (DATABASE_URL, ALLOWED_ORIGINS) with safe local defaults (SQLite, localhost CORS origins)
- Frontend API access is centralized in src/lib/api.ts (apiFetch helper), using VITE_API_BASE_URL and VITE_API_SECRET_KEY as the bearer token, with session token stored in localStorage
- Frontend component tests live beside the components they cover and are matched by vitest's src/**/*.{test,spec}.{ts,tsx} pattern; Playwright specs live in e2e/ and are excluded from Vitest's scope
- Frontend screens currently run on seeded sample data and are not yet wired to backend endpoints
<!-- sdlc:auto:end conventions -->

<!-- sdlc:auto:start testing -->
| Name | Command | Description |
|---|---|---|
| backend tests | `cd backend && pytest` | Runs the backend pytest suite (currently the health check tests) |
| backend lint | `cd backend && ruff check .` | Lints backend Python code with Ruff |
| backend format | `cd backend && ruff format .` | Formats backend Python code with Ruff |
| frontend unit tests | `cd frontend && npm test` | Runs Vitest component tests |
| frontend lint | `cd frontend && npm run lint` | Runs ESLint over the frontend app (gate during development) |
| frontend typecheck | `cd frontend && npm run typecheck` | Runs tsc --noEmit; not run by build, but worth keeping green |
| frontend e2e install | `cd frontend && npm run test:e2e:install` | Installs the Chromium browser Playwright needs |
| frontend e2e | `cd frontend && npm run test:e2e` | Runs Playwright acceptance tests from e2e/; without E2E_BASE_URL it boots the backend (from backend/.venv) and builds/serves the frontend locally |
<!-- sdlc:auto:end testing -->

<!-- sdlc:auto:start troubleshooting -->
| Problem | Solution |
|---|---|
| Frontend calls to the API fail with CORS errors | Set ALLOWED_ORIGINS (comma-separated) to the frontend's origin, or rely on the dev defaults http://localhost:5173 / http://127.0.0.1:5173 in app/main.py |
| Backend fails to start against a real database | Set DATABASE_URL to the target Postgres/MySQL connection string; by default it falls back to a local sqlite:///./app.db file with no server required |
| Playwright e2e run fails to boot the backend | Ensure a Python virtualenv exists at backend/.venv with requirements.txt installed, since playwright.config.ts launches 'backend/.venv/bin/python -m uvicorn app.main:app' directly |
| tsc --noEmit fails even though npm run build succeeded | npm run build does not typecheck; run npm run typecheck separately and fix the reported type errors (e.g. untyped useState({})) |
<!-- sdlc:auto:end troubleshooting -->
