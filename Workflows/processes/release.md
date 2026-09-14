# Release Process

## Purpose

Use this process to prepare a release or deployable milestone without assuming a particular provider, platform, or CI system.

## Sequence

1. Confirm the intended release scope.
2. Confirm required tasks are complete or intentionally deferred.
3. Review Workflows/STATE.md, known issues, blockers, and relevant project context.
4. Run verification appropriate for the release risk.
5. Review significant changes and their expected impact.
6. Check relevant environment and configuration expectations.
7. Check that secrets are not exposed or accidentally included.
8. Record remaining known risks or issues.
9. Update relevant workflow state when the release preparation changed it.
10. Prepare the repository's existing release or deployment mechanism.

## Guidance

- Do not automatically deploy, publish, tag, commit, or push.
- Perform those actions only when explicitly required by the current task.
- Do not invent release requirements or claim release readiness without verification.

## Relevant Skills

- Usually relevant: Workflows/skills/testing/SKILL.md
- Load Workflows/skills/code-review/SKILL.md when reviewing a significant release.
