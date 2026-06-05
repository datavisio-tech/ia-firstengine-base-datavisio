---
name: test-orchestration-engine
description: Separate unit, integration, runtime and browser validation lanes.
---

# test-orchestration-engine

## When to use

Use this skill when the task requires: Separate unit, integration, runtime and browser validation lanes.

## Rules

- Consult STACK.md and docs/ai-context/ before changing behavior.
- Prefer narrow, validated changes over broad rewrites.
- Never expose secrets or production credentials.
- Document contract changes in the appropriate IA context file.

## Output discipline

Operational replies must include STATUS, AGENT, SKILLS and SOURCES CONSULTED.
