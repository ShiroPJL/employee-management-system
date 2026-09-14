# Resume Handoff Prompt

Continue unfinished work from a previous session, agent, or machine.

Read Workflows/context/HANDOFF.md first. If it says there is no active handoff, report that no continuation work exists instead of treating template text as instructions.

If an active handoff exists, read the referenced Workflows/tasks/CURRENT.md, inspect the actual repository status and relevant files, and compare repository reality with the handoff before continuing.

Do not blindly trust stale session context. If the repository has changed, update your understanding and revise the handoff when necessary. Continue from the exact next action only if it is still valid.

Load only the process and skills relevant to the active task, then continue implementation and verification normally.
