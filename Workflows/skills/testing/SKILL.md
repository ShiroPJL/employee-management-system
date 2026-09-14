# Testing Skill

## Purpose

Select and perform useful verification that is proportional to the change and its risk.

## Method

1. Begin with the behavior that changed.
2. Identify what could reasonably break.
3. Inspect the existing test infrastructure and project conventions.
4. Select the smallest useful targeted checks.
5. Run targeted checks first.
6. Expand to broader checks when the risk or scope justifies it.
7. Verify important failure paths or edge cases when relevant.
8. Distinguish automated tests from manual verification.
9. Review the results before declaring completion.

## Result Status

Use honest result labels:

- Passed
- Failed
- Skipped
- Not available
- Not run

Include the command or method, relevant scope, and important output or failure reason when useful.

## Principles

- Do not test trivial implementation details unnecessarily.
- Reuse existing testing conventions.
- Do not claim a check passed if it was not actually run.
- Report limitations and unavailable checks clearly.
- Keep verification proportional to the change.
