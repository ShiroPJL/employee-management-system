# Coding Project Agentic Workflow

## What This Is

This is a lightweight, repository-based workflow for working with coding agents.

Important project knowledge lives in Markdown files inside the repository instead of depending entirely on one AI conversation. This helps when conversations are lost, the agent changes, work moves to another computer, a project resumes after a long break, or another developer continues it.

Git remains authoritative for exact code revisions. The workflow files preserve human- and agent-readable project meaning.

## Core Principle

The repository and workflow files work together:

~~~
user intent
↓
project understanding
↓
current task
↓
relevant process and skills
↓
implementation
↓
verification and review
↓
state or handoff update
↓
Git
~~~

The repository is authoritative for what is actually implemented. Workflows/PROJECT-BRIEF.md is authoritative for user intent, preferences, uncertainty, and desired direction.

## New Project Usage

1. Copy or install this workflow into the repository.
2. Write the raw project idea in Workflows/PROJECT-BRIEF.md.
3. Use Workflows/prompts/initialize-project.md.
4. Let the coding agent inspect the actual repository and the brief.
5. Populate confirmed knowledge in PROJECT.md and the current condition in STATE.md.
6. Create initial tasks and justified decision records only when real information supports them.
7. Continue development through the active task, relevant process, relevant skills, verification, and state updates.

The user does not need to fill every workflow file before development begins.

## Existing Project Usage

For an existing repository:

~~~
existing repository + user goals
↓
agent inspects the code and documentation
↓
confirmed PROJECT.md and current STATE.md
↓
tasks and decisions when justified
↓
continued development
~~~

The brief expresses desired direction; it does not prove that a feature, technology, or architecture exists. Confirm implementation claims from the repository.

## Components

| Component | Responsibility |
|---|---|
| Workflows/PROJECT-BRIEF.md | Raw user intent, ideas, preferences, uncertainty, and future possibilities |
| Workflows/PROJECT.md | Structured and relatively stable project understanding |
| Workflows/RULES.md | Stable rules for coding agents |
| Workflows/STATE.md | Overall current project condition |
| Workflows/tasks/ | Specific active, backlog, and completed task records |
| Workflows/tasks/CURRENT.md | The one specific task currently active |
| Workflows/context/ | Unfinished-session handoffs and occasional semantic snapshots |
| Workflows/processes/ | Ordered workflows for common development activities |
| Workflows/skills/ | Reusable coding abilities and methods |
| Workflows/decisions/ | Reasoning behind meaningful technical or architectural choices |
| Workflows/prompts/ | Reusable instructions for initiating workflow actions |
| Workflows/templates/ | Reusable structures for workflow documents |

## Development Lifecycle

For a normal change:

~~~
CURRENT.md
↓
relevant process
↓
relevant skills
↓
inspect existing code
↓
targeted implementation
↓
verification
↓
review
↓
STATE.md or HANDOFF.md update when needed
↓
Git
~~~

Task lifecycle:

~~~
tasks/backlog/
↓
tasks/CURRENT.md
↓
implementation
↓
verification
↓
tasks/done/
~~~

If work stops unfinished:

~~~
CURRENT.md
↓
context/HANDOFF.md
↓
next session or agent
~~~

## Framework and Project-Specific Files

Reusable framework-oriented files are:

- AGENTS.md
- Workflows/RULES.md
- Workflows/processes/
- Workflows/skills/
- Workflows/prompts/
- Workflows/templates/

Project-specific or evolving files are:

- Workflows/PROJECT-BRIEF.md
- Workflows/PROJECT.md
- Workflows/STATE.md
- Workflows/tasks/
- Workflows/context/
- Workflows/decisions/

This is a responsibility boundary, not an inflexible law. Framework files should not be casually changed during ordinary application work, while project-specific files are expected to evolve.

## Selective Context Loading

Load only what the request needs.

For example:

~~~
feature request
→ feature process
→ implement-feature skill
→ testing skill when needed
~~~

Do not load the entire Workflows/ directory for every operation. Large collections such as decisions, snapshots, backlog, done, prompts, templates, processes, and skills should be opened only when relevant.

## Session Continuity

Keep these responsibilities separate:

- Workflows/STATE.md — overall current project condition.
- Workflows/tasks/CURRENT.md — active task.
- Workflows/context/HANDOFF.md — exact continuation context from unfinished work.

Handoffs should contain a concrete next action. They should not replace Git history, a full task definition, or the project state.

## Working Principles

- Inspect before editing.
- Preserve existing architecture and functionality unless the task requires a change.
- Keep changes targeted.
- Preserve uncertainty instead of inventing facts.
- Verify behavior proportionately.
- Review the final diff.
- Record meaningful decisions, state changes, and handoffs without creating unnecessary documentation overhead.
