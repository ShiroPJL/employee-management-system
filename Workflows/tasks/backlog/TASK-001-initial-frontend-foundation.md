# TASK-001 — Establish Initial Frontend and Project Foundation

## Status

Backlog

## Objective

Create the first frontend/project foundation for the integration-focused attendance prototype and demonstrate the initial user-facing flow with mock data.

## Background / Problem

The brief identifies the immediate development goal as an initial frontend and project foundation. A Login Page was created in an earlier direction and needs revision to match the confirmed integration-first architecture, but no corresponding application source is currently present in this repository.

## Relevant Files / Areas

- The future application source and configuration areas, which must be identified after the stack is selected.
- `Workflows/PROJECT-BRIEF.md` for the confirmed prototype scope and user roles.
- `Workflows/PROJECT.md` for confirmed project boundaries and unresolved choices.

## Requirements

- Confirm and document the frontend/project foundation stack before implementation.
- Provide the initial revised Login Page, Employee Dashboard, Employee Attendance History, and IT Administrator Dashboard described in the brief.
- Provide role-based navigation for the defined user roles, using mock or simulated authentication as appropriate for the prototype.
- Show mock integration statuses and standardized attendance data.
- Keep real HRPS, Bundy, Payroll, and Accounting integrations out of scope until their interfaces are verified.

## Constraints

- Preserve the integration-first boundary in ADR-001; do not build replacement HR, payroll, accounting, biometric, or ERP functionality.
- Keep the initial user scope to non-teaching administrative and office-support employees with fixed schedules.
- Use minimum necessary employee information and do not put biometric data, passwords, or salary information in QR-related data.
- Do not make unresolved stack, policy, or integration assumptions without recording them for confirmation.

## Expected Behavior

The prototype should allow representative users to log in through the revised entry point, see only the navigation appropriate to their role, view the relevant dashboard/history screens, and inspect mock attendance and integration-status data in a consistent format.

## Verification / Testing

- Run the selected project's build, lint, type-check, and automated tests when available.
- Manually verify the login-to-dashboard flow for representative roles and confirm unauthorized navigation is not exposed.
- Review the displayed attendance fields and mock integration statuses against the project brief.

## Completion Criteria

- The stack and foundation are documented in the repository.
- The four initial prototype areas and role-based navigation are implemented with mock data.
- The prototype builds and its available checks pass.
- No unverified external integration or replacement-system scope has been introduced.

## Notes / Progress

Backlog after project initialization. Stack, authentication approach, visual requirements, and mock integration details remain to be confirmed when this task becomes current.
