# Initialize Project Prompt

Initialize or onboard the Coding Project workflow for the current repository.

Read Workflows/PROJECT-BRIEF.md first, then inspect the repository and only the workflow files relevant to initialization.

Determine whether the repository is new or mostly empty, or an existing implementation.

Use this authority model:

- The repository is authoritative for what currently exists.
- Workflows/PROJECT-BRIEF.md is authoritative for user intent, preferences, uncertainty, and desired direction.

Use verified information to populate or update Workflows/PROJECT.md and the current condition in Workflows/STATE.md. Preserve unknowns rather than converting plans into implementation facts.

Create appropriate initial tasks only when the user has provided actual work to track, using the existing task structure. Create an ADR only when a meaningful technical decision already exists or a real initialization decision justifies one.

Do not implement the whole project unless implementation was explicitly requested. Load relevant processes, skills, decisions, or snapshots only when directly needed. Do not read the entire workflow by default.
