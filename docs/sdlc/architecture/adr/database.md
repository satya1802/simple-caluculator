<!-- sdlc:auto:start adr -->
# ADR-0003: Use PostgreSQL 16 for Database

Status: Accepted  
Date: 2026-11-10

## Context and Problem Statement

Which Database technology does the project use? Decided in architecture v1.

## Considered Options

- PostgreSQL 16
- No database
- SQLite

## Decision Outcome

Chosen option: PostgreSQL 16, because The product stores nothing between sessions, so PostgreSQL 16 is provisioned purely as the approved platform default and carries no tables in this MVP (NFR-001, US-014); it is available if saved results or usage counts are added later.

## Consequences

Running an idle database adds cost and nothing functional today; it is retained only to match the approved stack and ease later persistence.
<!-- sdlc:auto:end adr -->