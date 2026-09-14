# Code Review Skill

## Purpose

Provide a meaningful review of an implementation or change, whether written by the current agent or another contributor.

## Review Order

1. Compare the change with the confirmed requirements and expected behavior.
2. Look for missing requirements and unintended behavior changes.
3. Check consistency with the existing architecture and conventions.
4. Inspect error handling, important edge cases, and data boundaries.
5. Check for obvious security, privacy, or sensitive-data exposure issues.
6. Look for unnecessary complexity, duplication, or risky abstractions.
7. Review test and verification quality.
8. Check for accidental unrelated edits, debug code, temporary artifacts, or silent removal of existing behavior.

## Priority Model

Classify meaningful findings by impact:

- Blocking or correctness issue
- Important risk
- Maintainability concern
- Minor observation

Prioritize problems that affect behavior, safety, data, compatibility, or completion. Do not overwhelm the review with stylistic nitpicking.

## Review Output

For each finding, provide:

- the priority;
- the relevant file or area;
- the problem;
- why it matters;
- a focused recommendation when useful.

If no meaningful findings are found, say so and report important verification limitations.
