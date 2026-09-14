# Implement Feature Skill

## Purpose

Provide reusable guidance for implementing a complete feature safely within an existing project.

## Method

1. Understand the requested outcome and distinguish confirmed requirements from assumptions.
2. Inspect existing patterns, architecture, data flow, dependencies, and conventions.
3. Identify affected files, modules, services, and integration boundaries.
4. Clarify relevant unknowns before making decisions that materially affect the result.
5. Reuse the existing architecture when it is suitable.
6. Plan targeted changes with a clear expected behavior.
7. Implement complete behavior rather than superficial placeholders.
8. Handle relevant error, loading, empty, and boundary states when required by the project or feature.
9. Preserve unrelated functionality and avoid unrelated cleanup.
10. Verify the expected behavior using appropriate checks.
11. Review the diff for omissions, duplication, unnecessary abstractions, and accidental changes.
12. Report unresolved requirements or limitations honestly.

## Integration Principles

- Integrate with existing systems instead of creating a duplicate parallel system.
- Follow repository conventions.
- Do not change technologies or architecture without task-based justification.
- Keep the implementation proportional to the feature.
