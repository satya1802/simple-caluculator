<!-- sdlc:auto:start adr -->
# ADR-0002: Use FastAPI 0.115 for Backend

Status: Accepted  
Date: 2026-11-10

## Context and Problem Statement

Which Backend technology does the project use? Decided in architecture v1.

## Considered Options

- FastAPI 0.115
- Static-only hosting with no server
- Flask
- Express

## Decision Outcome

Chosen option: FastAPI 0.115, because No calculation needs a server, so the backend's only real job is to serve the app and offer a health endpoint for the AWS target; FastAPI 0.115 is the approved platform default and leaves room for a server-side feature later without restructuring.

## Consequences

A dedicated API server is more than strictly needed for a static-feeling SPA, but it keeps the deployment aligned with the platform default and future-proofs optional features like usage counts.
<!-- sdlc:auto:end adr -->