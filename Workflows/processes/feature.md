# Feature Process

## Purpose

Use this process when implementing a new or changed product capability. It defines the order of work; detailed implementation methods belong in the relevant skills.

## Sequence

1. Read Workflows/tasks/CURRENT.md and identify the active task.
2. Read only the relevant project context from Workflows/PROJECT.md, Workflows/RULES.md, Workflows/STATE.md, Workflows/PROJECT-BRIEF.md, and repository documentation.
3. Inspect the existing implementation before editing.
4. Identify affected components, files, dependencies, data flows, and project conventions.
5. Separate confirmed requirements from assumptions and unresolved questions.
6. Plan the smallest complete implementation that fits the existing architecture.
7. Load Workflows/skills/implement-feature/SKILL.md.
8. Load Workflows/skills/testing/SKILL.md and any other relevant skill only when needed.
9. Implement the smallest complete solution, preserving unrelated behavior.
10. Run verification proportionate to the change and its risk.
11. Review the diff and the affected behavior for omissions or unrelated edits.
12. Update task, state, or handoff files when the work changed their information.

## Guidance

- Do not begin by rewriting unrelated code.
- Do not turn a speculative idea into a confirmed requirement without evidence.
- Do not require every available skill for every feature.
- Do not declare the feature complete until the relevant behavior has been verified.

## Relevant Skills

- Required when useful: Workflows/skills/implement-feature/SKILL.md
- Usually relevant: Workflows/skills/testing/SKILL.md
- Load Workflows/skills/database/SKILL.md only when the feature changes persistence or data flows.
- Load Workflows/skills/code-review/SKILL.md when the change is broad or risk is significant.
