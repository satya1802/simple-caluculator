<!-- sdlc:auto:start adr -->
# ADR-0001: Use React 19 for Frontend

Status: Accepted  
Date: 2026-11-10

## Context and Problem Statement

Which Frontend technology does the project use? Decided in architecture v1.

## Considered Options

- React 19
- Vue
- Svelte
- Vanilla JS

## Decision Outcome

Chosen option: React 19, because The entire product is an interactive button-and-display UI with keyboard and touch input and a running-result state machine; React 19's component model and hooks hold the calculator state cleanly and render identically on desktop and mobile from one codebase (US-005, US-006, US-012, NFR-002, NFR-003).

## Consequences

React is heavier than hand-written vanilla JS for such a small app, but the platform scaffold, component reuse and responsive styling make it the lower-maintenance choice here.
<!-- sdlc:auto:end adr -->