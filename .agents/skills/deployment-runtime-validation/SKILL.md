---
name: deployment-runtime-validation
description: Validate live runtime, health, active image, proxy routing and smoke behavior before release closure.
---

# deployment-runtime-validation

## When to use

Use this skill when the task requires: Validate live runtime, health, active image, proxy routing and smoke behavior before release closure.

## Rules

- Consult STACK.md and docs/ai-context/ before changing behavior.
- Prefer narrow, validated changes over broad rewrites.
- Never expose secrets or production credentials.
- Document contract changes in the appropriate IA context file.

## Output discipline

Operational replies must include STATUS, AGENT, SKILLS and SOURCES CONSULTED.
