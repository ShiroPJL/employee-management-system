# Testing Process

## Purpose

Use this process to plan and perform verification for a change. Detailed testing methods belong in Workflows/skills/testing/SKILL.md.

## Sequence

1. Identify the behavior that changed and the intended result.
2. Read Workflows/tasks/CURRENT.md and only the relevant project context.
3. Assess the risk, scope, affected boundaries, and likely failure modes.
4. Inspect the repository's existing testing and verification conventions.
5. Select the smallest useful set of checks.
6. Run targeted checks first.
7. Expand to broader regression checks when the risk or scope justifies it.
8. Perform manual verification when automated checks cannot cover important behavior.
9. Record passed, failed, skipped, unavailable, and not-run checks honestly.
10. Report the verification result before declaring the work complete.

## Possible Checks

- Existing automated tests
- Targeted tests
- Type checking
- Linting
- Builds
- Runtime checks
- Manual validation
- Regression checks

Do not require every possible check for every small change. Verification should be proportional to risk and scope.

## Relevant Skill

Load Workflows/skills/testing/SKILL.md for detailed check selection, execution, and reporting guidance.
