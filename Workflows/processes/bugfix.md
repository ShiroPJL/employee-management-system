# Bugfix Process

## Purpose

Use this process when investigating and correcting unexpected behavior. It prioritizes evidence and root-cause analysis over random trial-and-error edits.

## Sequence

1. Understand the reported behavior and the expected behavior.
2. Read Workflows/tasks/CURRENT.md and the relevant project context.
3. Reproduce the problem when possible, or gather the best available evidence.
4. Inspect relevant code, logs, errors, inputs, outputs, and runtime behavior.
5. Load Workflows/skills/debugging/SKILL.md.
6. Narrow the affected area and identify the important variables.
7. Form an explicit, testable root-cause hypothesis.
8. Test the hypothesis before making unrelated changes.
9. Implement the smallest safe correction once the evidence is sufficient.
10. Verify the original failure no longer occurs.
11. Run relevant regression checks.
12. Review the diff and confirm unrelated behavior was preserved.
13. Update task, state, or handoff files when necessary.

## Guidance

- Prefer evidence → hypothesis → test → root cause → targeted fix → verification.
- Do not repeatedly change code without learning from the result.
- Avoid fixing only a visible symptom when a reasonable root-cause fix is supported.
- If reproduction is impossible, proceed only with the best available evidence and record the uncertainty.

## Relevant Skills

- Required: Workflows/skills/debugging/SKILL.md
- Usually relevant: Workflows/skills/testing/SKILL.md
- Load Workflows/skills/code-review/SKILL.md when the fix has meaningful scope or risk.
