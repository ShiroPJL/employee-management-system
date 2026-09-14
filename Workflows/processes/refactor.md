# Refactor Process

## Purpose

Use this process for controlled structural improvement without changing intended external behavior.

## Sequence

1. Read Workflows/tasks/CURRENT.md and the relevant project context.
2. Identify why the refactor is needed and define its exact scope.
3. Understand the existing behavior and architecture before editing.
4. Identify behavior, interfaces, data, and compatibility that must remain unchanged.
5. Inspect existing tests and other verification.
6. Plan a limited structural improvement with measurable benefits.
7. Refactor incrementally when practical.
8. Keep unrelated feature work and cleanup out of the change.
9. Run relevant regression checks.
10. Review the diff carefully for accidental behavior changes or unnecessary complexity.
11. Update workflow state only when the operational state actually changed.

## Principles

- Preserve external behavior unless the task explicitly changes it.
- Keep the refactor smaller than a redesign.
- Follow existing conventions.
- Avoid rewriting large areas only because another architecture is preferred.
- Prefer measurable improvements in clarity, duplication, maintainability, or reliability.

## Relevant Skills

- Usually relevant: Workflows/skills/code-review/SKILL.md
- Required when verification is needed: Workflows/skills/testing/SKILL.md
