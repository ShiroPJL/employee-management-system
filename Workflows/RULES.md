# Project Rules

> These are stable operating rules for coding agents working on this repository.
>
> Follow them during normal development. Current tasks, priorities, bugs, session notes, and temporary blockers belong in the appropriate workflow files, not here.

## Inspect Before Editing

- Read the relevant existing code, configuration, documentation, and tests before making changes.
- Do not infer architecture or behavior from filenames alone.
- Understand the surrounding implementation before selecting an edit.

## Make Targeted Changes

- Make the smallest reasonable change that completes the requested work.
- Avoid unrelated rewrites, broad cleanup, or opportunistic refactoring.
- Keep changes easy to review and explain.

## Preserve Existing Architecture

- Follow the established architecture and repository structure.
- Change the architecture only when the task explicitly requires it, the current design prevents the requested work, or a justified architectural change is part of the task.
- Do not replace a working technology or pattern merely because another option is preferred.

## Preserve Existing Functionality

- Do not silently remove, disable, or change unrelated behavior.
- Preserve existing interfaces, data, configuration, and user-visible behavior unless the task requires a change.
- Explain any necessary compatibility impact.

## Follow Project Conventions

Respect repository evidence and existing conventions for:

- naming;
- formatting;
- structure;
- implementation patterns;
- configuration;
- dependency management;
- testing;
- documentation.

## Requirements Discipline

Use the following sources in order:

1. The user's current explicit instruction.
2. The current task.
3. PROJECT-BRIEF.md for intent, preferences, ideas, and uncertainty.
4. PROJECT.md for confirmed project knowledge.
5. Repository evidence, tests, and current documentation.
6. STATE.md for current operational context.

Do not invent product requirements. If a requirement is uncertain, preserve the uncertainty or ask for clarification when it materially affects the implementation.

## Secrets and Environment Safety

- Do not expose, log, or commit secrets.
- Protect API keys, tokens, credentials, private keys, and sensitive environment values.
- Do not commit .env or equivalent secret files unless the repository intentionally tracks a safe example such as .env.example.
- Avoid printing sensitive values during verification.

## Verification

- Run checks appropriate to the change when practical.
- Choose proportional verification such as targeted tests, type checking, linting, builds, schema validation, or runtime checks.
- Do not require every possible check for every small change.
- Report checks that were skipped and why.

## Review Before Completion

Before declaring work complete:

- review the resulting diff;
- check for accidental unrelated edits;
- verify the requested behavior;
- check relevant documentation;
- identify unresolved issues honestly.

## Project-Specific Constraints

Add stable repository-specific rules here only when they are confirmed and broadly applicable.

-

## Rule Stability

RULES.md is relatively stable. Do not casually rewrite it because a different development style is preferred.

Modify this file only when:

- the user explicitly requests a rule change;
- a task intentionally changes project or workflow rules;
- a justified workflow-system improvement updates the rules.
