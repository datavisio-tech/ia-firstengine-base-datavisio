---
name: autonomous-delivery-engine
description: Deliver changes end-to-end: implement, test, validate, fix, retest, document and continue.
---

# autonomous-delivery-engine

## When to use

Use this skill when the task requires: Deliver changes end-to-end: implement, test, validate, fix, retest, document and continue.

## Rules

- Consult STACK.md and docs/ai-context/ before changing behavior.
- Prefer narrow, validated changes over broad rewrites.
- Never expose secrets or production credentials.
- Document contract changes in the appropriate IA context file.

## Output discipline

Operational replies must include STATUS, AGENT, SKILLS and SOURCES CONSULTED.
