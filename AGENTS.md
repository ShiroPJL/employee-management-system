# Coding Project Workflow

This repository uses the Markdown workflow under Workflows/ as durable project context. Start here, then load only the files relevant to the current request.

## Normal Entry Flow

Read:

1. Workflows/PROJECT.md — understand the confirmed project.
2. Workflows/RULES.md — follow stable coding-agent rules.
3. Workflows/STATE.md — understand the overall current condition.
4. Workflows/tasks/CURRENT.md — determine the one active task.

If CURRENT.md says there is no active task, do not invent one. The user may provide a task directly or use Workflows/prompts/plan-task.md.

## Selective Routing

Load only the relevant process and skills:

- Feature: Workflows/processes/feature.md, then implement-feature and testing skills when useful.
- Bug: Workflows/processes/bugfix.md, then debugging and testing skills when useful.
- Refactor: Workflows/processes/refactor.md, then code-review and testing skills.
- Testing: Workflows/processes/testing.md and the testing skill.
- Database change: Workflows/processes/database-change.md and the database skill, with testing or review when appropriate.
- Release: Workflows/processes/release.md, with testing or review when appropriate.

Inspect Workflows/decisions/ only when a relevant architectural decision may affect the work. Do not load every process, skill, decision, snapshot, completed task, backlog task, prompt, or template at startup.

## New or Existing Projects

For an uninitialized project, use Workflows/prompts/initialize-project.md. Read Workflows/PROJECT-BRIEF.md and inspect the actual repository.

For an existing project:

- the repository is authoritative for what currently exists;
- PROJECT-BRIEF.md represents user intent, preferences, uncertainty, and desired direction;
- do not treat planned or uncertain brief content as implemented.

## Resuming Work

When unfinished work may exist, read Workflows/context/HANDOFF.md and, when useful, Workflows/prompts/resume-handoff.md. Check the actual repository state before trusting an old handoff.

## Completion Check

Before declaring work complete:

- verify the requested behavior;
- run proportionate checks;
- review the diff and changed files;
- confirm the current task's completion criteria;
- update task or overall state when meaningful information changed;
- update HANDOFF.md with an exact next action if work remains unfinished;
- record an ADR only for a meaningful architectural decision.

## Framework Protection

The reusable framework files are AGENTS.md, Workflows/RULES.md, Workflows/processes/, Workflows/skills/, Workflows/prompts/, and Workflows/templates/. Do not casually rewrite them during ordinary application work.

Project-specific and evolving information lives in Workflows/PROJECT-BRIEF.md, Workflows/PROJECT.md, Workflows/STATE.md, Workflows/tasks/, Workflows/context/, and Workflows/decisions/.

Use the canonical Workflows/ path for all workflow files.
