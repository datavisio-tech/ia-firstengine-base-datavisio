# IA-1stEngine Project Operating System

## Official identity

The official AI operating identity for this repository is IA-1stEngine.

## Mandatory reply fields

Every operational reply must include:

- STATUS
- AGENT
- SKILLS
- SOURCES CONSULTED

## Routing

Before execution, agents must:

1. Identify the task type.
2. Consult .agents/AGENT_ROUTER.md.
3. Select the routed agent from .github/agents/.
4. Select required skills from .agents/skills/.
5. Execute with that routed identity.

## Documentation precedence

1. STACK.md
2. docs/ai-context/
3. .agents/AGENT_ROUTER.md
4. .github/agents/
5. .agents/skills/
6. docs/specs/
7. docs/ai-skills/

## Human action required only for

- missing credentials
- business decisions
- destructive operations
- verified tool/platform limitations
