---
name: ia-first-engine-discipline
description: Enforce IA-1stEngine routing, documentation consultation, mandatory reply fields and handover discipline.
---

# ia-first-engine-discipline

## When to use

Use this skill when the task requires: Enforce IA-1stEngine routing, documentation consultation, mandatory reply fields and handover discipline.

## Rules

- Consult STACK.md and docs/ai-context/ before changing behavior.
- Prefer narrow, validated changes over broad rewrites.
- Never expose secrets or production credentials.
- Document contract changes in the appropriate IA context file.

## Output discipline

Operational replies must include STATUS, AGENT, SKILLS and SOURCES CONSULTED.
