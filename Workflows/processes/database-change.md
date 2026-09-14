# Database Change Process

## Purpose

Use this process for changes involving schemas, data models, migrations, persistence, queries, or application/data-store integration. Keep the process independent of any particular database technology.

## Sequence

1. Read Workflows/tasks/CURRENT.md and the relevant project context.
2. Inspect the existing schema, data model, and persistence conventions.
3. Understand the affected read and write flows.
4. Identify affected application code, services, integrations, and tests.
5. Consider compatibility with existing data and application versions.
6. Determine whether a migration or equivalent transition is required.
7. Avoid destructive changes unless they are explicitly required and understood.
8. Load Workflows/skills/database/SKILL.md.
9. Load Workflows/skills/testing/SKILL.md and Workflows/skills/code-review/SKILL.md when appropriate.
10. Implement the smallest safe data or schema change.
11. Verify the migration or transition when applicable.
12. Verify affected queries and persistence behavior.
13. Verify application integration.
14. Consider rollback or recovery for risky changes.
15. Note architectural decisions that may need documentation later; do not create decision records in this batch.
16. Review the final diff and current state.

## Guidance

- Do not assume a specific storage model or query language.
- Protect existing data and consistency.
- Make ordering and compatibility concerns explicit.
- Do not treat a successful schema change as sufficient without checking affected application behavior.
