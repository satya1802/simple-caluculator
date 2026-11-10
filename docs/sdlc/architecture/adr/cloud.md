<!-- sdlc:auto:start adr -->
# ADR-0004: Use AWS for Cloud

Status: Accepted  
Date: 2026-11-10

## Context and Problem Statement

Which Cloud technology does the project use? Decided in architecture v1.

## Considered Options

- AWS
- Vercel/Netlify static hosting
- Azure
- GCP

## Decision Outcome

Chosen option: AWS, because A free public calculator needs dependable, globally fast hosting for a single-page app; AWS is the approved platform default and serves the SPA via CloudFront and the API via a small container with always-on availability for phone and desktop visitors (NFR-002).

## Consequences

AWS involves more setup than a one-click static host, but it is the approved target and comfortably scales the public page as visitor numbers rise.
<!-- sdlc:auto:end adr -->