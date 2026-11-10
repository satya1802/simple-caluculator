# Deployment Guide

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start how-it-deploys -->
Pushes to `main` run `.github/workflows/deploy.yml`, which builds the API image (if there is a backend) and deploys the SPA to AWS Amplify. Commits touching only `docs/sdlc/**` don't deploy. Deployments can also be started from the platform's Deployment tab.
<!-- sdlc:auto:end how-it-deploys -->

<!-- sdlc:auto:start environments -->
| Name | Service | Runtime | Scaling | Environment |
|---|---|---|---|---|
| SPA Host | S3 + CloudFront (static SPA origin) | React 19 build (static assets) | CDN edge caching, scales with visitor traffic automatically | dev |
| App Server | AWS App Runner / ECS Fargate | FastAPI 0.115 on Python (Uvicorn) | 1 small instance, horizontal auto-scale on request count | dev |
| Database | Amazon RDS for PostgreSQL | PostgreSQL 16 | Single smallest instance; idle — provisioned default, no tables | dev |
<!-- sdlc:auto:end environments -->

<!-- sdlc:auto:start live -->
_Not deployed yet._
<!-- sdlc:auto:end live -->

<!-- sdlc:auto:start topology -->
```mermaid
graph LR
  n_SPA_Host["SPA Host<br/>S3 + CloudFront (static SPA origin)"]
  n_App_Server["App Server<br/>AWS App Runner / ECS Fargate"]
  n_Database["Database<br/>Amazon RDS for PostgreSQL"]
  n_SPA_Host -->|"HTTPS"| n_App_Server
  n_App_Server -->|"TCP/5432 (unused)"| n_Database
```
<!-- sdlc:auto:end topology -->
