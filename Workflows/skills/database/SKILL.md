# Database Skill

## Purpose

Provide technology-neutral guidance for safe changes to schemas, data models, persistence, queries, and data-store integration.

## Investigation

1. Inspect the existing schema or data model.
2. Understand entities, relationships, constraints, and relevant indexes or equivalents.
3. Identify affected reads, writes, queries, and application boundaries.
4. Inspect existing migrations, transition conventions, and compatibility expectations.
5. Consider existing user or production data and the effect of old and new application states.

## Safety

- Preserve data consistency and referential integrity where applicable.
- Avoid destructive operations by default.
- Understand migration impact and ordering.
- Consider failure scenarios and partial completion.
- Consider rollback or recovery for risky changes.
- Protect credentials and sensitive data.

## Implementation

- Make the smallest safe change.
- Preserve compatibility when possible.
- Keep application changes and data changes coordinated.
- Do not assume a specific database, storage model, or query language.

## Verification

Verify, as applicable:

- the schema or data-model change;
- the migration or transition;
- affected queries and reads;
- affected writes;
- application integration;
- important failure and recovery paths.

Report checks honestly and identify any remaining migration or recovery risk.
