---
name: failure-recovery-engine
description: Recover known operational failures before surfacing FAIL or HUMAN_ACTION_REQUIRED.
---

# failure-recovery-engine

## When to use

Use this skill when the task requires: Recover known operational failures before surfacing FAIL or HUMAN_ACTION_REQUIRED.

## Rules

- Consult STACK.md and docs/ai-context/ before changing behavior.
- Prefer narrow, validated changes over broad rewrites.
- Never expose secrets or production credentials.
- Document contract changes in the appropriate IA context file.

## Output discipline

Operational replies must include STATUS, AGENT, SKILLS and SOURCES CONSULTED.
