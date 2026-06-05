# Agent Router

Mandatory routing layer for IA-1stEngine operational tasks.

| TASK TYPE | AGENT | SKILLS |
|---|---|---|
| Bootstrap | 000-bootstrap.agent.md | ia-first-engine-discipline |
| Implementation | saas-base.agent.md | autonomous-delivery-engine, failure-recovery-engine |
| Refactoring | 001-ia1st-orchestrator.agent.md | autonomous-delivery-engine, failure-recovery-engine |
| Testing | 020-test-architecture.agent.md | test-orchestration-engine |
| Browser or Playwright | 021-automated-testing.agent.md | browser-validation, failure-recovery-engine |
| Deploy, Release, Promotion, Cutover | 024-deployment.agent.md | deployment-runtime-validation, failure-recovery-engine |
| Governance or Documentation | 028-governance.agent.md | ia-first-engine-discipline |
| Security | 023-security-review.agent.md | auth-security, failure-recovery-engine |

Before execution, identify task type, consult this router, select the routed agent from .github/agents/, select required skills from .agents/skills/, then execute.
