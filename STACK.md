# STACK.md - IA-1stEngine SaaS Base

Version: v0.1.0 bootstrap

## Purpose

This repository is the default DataVisio IA-1stEngine SaaS base. It provides a minimal runnable product shell, governance context, agents, skills and operational rules for new projects.

## Technical stack

- Next.js App Router
- TypeScript strict
- React
- Better Auth as authentication adapter
- Drizzle ORM with PostgreSQL
- Vitest for unit and integration tests
- Playwright for browser smoke validation
- Docker for packaging
- Traefik-compatible labels and examples
- GitHub Actions for CI and release promotion

## Required workflow

ANALYZE -> SEARCH -> EXECUTE -> TEST -> VALIDATE -> FIX -> RETEST -> DOCUMENT -> CONTINUE

Agents must consult documentation before proposing changes, route through .agents/AGENT_ROUTER.md, and use the selected agent from .github/agents/.

## Environment model

- DEV: local development and isolated experimentation.
- HM: homologation for release-candidate validation.
- PROD: customer-facing production.

HM and PROD must remain isolated by compose project, runtime directory, secrets and public host.

## Safety rules

- Never commit real secrets, tokens, private keys or production env files.
- Do not run production deploys without explicit human approval.
- Migrations must be generated, reviewed and validated before production.
- Browser validation must inspect the live runtime, not only source code.
- New domain behavior must update specs, implementation plan, decisions or changelog when it changes operating contracts.

## First fork checklist

1. Rename package and app display name.
2. Replace placeholder domains, image names and GitHub environments.
3. Fill .env.local from .env.example.
4. Customize docs/specs/PROJECT_SPEC.spec.md.
5. Run npm install, npm run typecheck, npm run test, npm run build.
6. Configure GitHub Environments for HM and production before enabling release promotion.
