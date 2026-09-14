# Project Knowledge

> This file records the project's confirmed, relatively stable understanding.
>
> PROJECT-BRIEF.md captures user intent and ideas. STATE.md captures current development status. RULES.md captures stable agent behavior. Verify claims against the repository before recording them here.

## Project Summary

- Project name: Integration of HRPS, Bundy Clock, QR-Based Attendance, Payroll, and Accounting Systems for Non-Teaching Administrative and Office-Support Employees of Arellano University – Juan Sumulong Campus
- One-sentence summary: An integration-focused attendance system that combines HRPS employee data, Bundy/biometric logs, and QR attendance into unified, validated attendance data and sends approved outputs to the existing Payroll and Accounting systems.
- Purpose: Improve the reliability of employee attendance processing and reduce manual checking or transfer while preserving the beneficiary's existing HRPS, Bundy/Biometric, Payroll, and Accounting systems.

## Problem / Purpose

Describe the problem, need, or opportunity this project addresses.

The beneficiary's employee, attendance, payroll, and accounting information may be distributed across separate systems, creating manual checking and transfer work. The intended solution standardizes employee and attendance information, validates and processes attendance, supports correction and approval workflows, and passes verified downstream data to the systems that already own payroll and accounting responsibilities.

This repository includes a static frontend prototype and workflow scaffolding. The project knowledge below distinguishes implemented prototype behavior from unimplemented backend and external integration behavior.

## Target Users

Describe known users, roles, or audiences. Leave unknown details unresolved.

- Non-Teaching Employee
- HR / Attendance Staff
- Supervisor
- Payroll Staff
- Accounting Staff
- IT Administrator

## Core Capabilities

Record only capabilities confirmed by the repository, verified documentation, or explicit confirmed project context.

### Confirmed Capabilities

- Integration-first scope: existing HRPS, Bundy/Biometric, Payroll, and Accounting systems remain in place; the project adds QR attendance, an integration layer, unified attendance, validation/processing, correction/approval, monitoring, and audit logging.
- HRPS is the intended source of official employee information, with HRPS Employee ID as the intended master identifier for matching records.
- Bundy and QR attendance are intended to be converted into one common attendance format containing Employee ID, date, time-in, time-out, source, and status, with additional processing and approval fields as needed.
- Verified attendance is intended to be the only attendance output sent to the existing Payroll System, and approved payroll information may be exchanged with the existing Accounting System.
- Role-based access is intended for the defined user roles, including IT Administrator monitoring of integrations, synchronization, errors, and audit logs.
- These are requirements confirmed by the project brief. The repository currently verifies the static IT Administrator dashboard prototype only; backend, persistence, and external integration behavior remain unimplemented.

### Not Yet Confirmed

- Exact attendance rules for lateness, undertime, overtime, missing time-out, holidays, leave, and schedule exceptions.
- The implementation stack, authentication provider, database, hosting platform, and deployment model.
- Availability and technical details of HRPS, Bundy/Biometric, Payroll, and Accounting interfaces, including APIs, files, formats, and identifier mappings.
- Whether the initial prototype can use real integrations or must use mock/simulated adapters.

## Technology Stack

Record technologies that are confirmed to be in use. Do not promote preferences or possibilities from PROJECT-BRIEF.md into confirmed choices.

### Confirmed

- Languages: HTML, CSS, and JavaScript.
- Frameworks and runtime: Browser-native ES modules and vanilla JavaScript; Tailwind CSS loaded through the CDN.
- Database and storage: None confirmed; the current dashboard uses static mock data.
- Hosting and platform: Static web hosting or a local HTTP server for the prototype; production platform is not confirmed.
- Important libraries: Tailwind CSS through the CDN only; no npm packages.

### Unknown / To Verify

- Frontend, backend/API, database, authentication, hosting, and deployment choices.
- Integration mechanisms and data formats for HRPS, Bundy/Biometric, Payroll, and Accounting.
- Data-retention, access-control, and beneficiary-policy details needed for production behavior.

## High-Level Architecture

Describe the major application layers, modules, services, boundaries, or frontend/backend relationships when they are known. Do not force architecture details that have not been verified.

The repository currently implements the static frontend slice of the intended architecture. Its runtime path is:

~~~
Static dashboard HTML
→ ES module sidebar and navbar components
→ Lightweight browser interactions over mock data
~~~

The broader intended architecture remains:

~~~
Frontend
→ Backend / API
→ API Gateway / Integration Layer
→ Logical integration modules or services
→ Existing HRPS, Bundy/Biometric, Payroll, and Accounting systems
~~~

The brief identifies logical areas for employee information integration, Bundy ETL, QR attendance, attendance validation and processing, correction/approval, payroll, accounting, and reporting. These may initially be modules in one backend; independent deployment as microservices has not been decided.

## External Services / Integrations

Record confirmed APIs, authentication providers, databases, storage, cloud services, payment systems, and other third-party integrations.

- Existing HRPS — intended source of official employee information.
- Existing Bundy Clock / Biometric Device — intended source of attendance logs; biometric images and templates are out of scope.
- Existing Payroll System — intended recipient of verified attendance and payroll-ready information.
- Existing Accounting System — intended recipient of approved payroll information relevant to accounting integration.
- QR Attendance — intended new attendance capability, with its external provider and implementation details not yet confirmed.

No concrete API endpoints, providers, credentials, or file formats are present in the repository. The dashboard uses mock states and makes no network calls to these systems.

## Important Project Structure

Record only repository areas or modules that are important for orientation. Avoid maintaining a complete file tree.

- `admin/dashboard.html` is the static IT Administrator dashboard page.
- `admin/layout/sidebar.js` and `admin/layout/navbar.js` export reusable layout components.
- `js/admin-dashboard.js` mounts the layout components and handles lightweight browser interactions.
- `css/admin.css` contains custom visual, status, and flow styles; Tailwind is loaded from the CDN.
- `Workflows/` contains the durable project brief, project knowledge, state, task records, processes, prompts, templates, and handoff context.
- `Workflows/tasks/backlog/` and `Workflows/tasks/done/` are available for task records; `Workflows/tasks/CURRENT.md` contains the current dashboard implementation prompt.
- No backend, persistence, real integration adapters, package manifest, or test suite is currently present.

## Constraints

Record stable project constraints such as target platforms, compatibility requirements, hosting limitations, budget-related technical limits, or intentional scope boundaries.

- The project is an integration system, not a replacement HRPS, Payroll System, Accounting System, Bundy/Biometric system, or complete university ERP.
- Initial user scope is non-teaching administrative and office-support employees with fixed work schedules. Faculty/professor attendance is outside the initial scope unless explicitly approved later.
- Real beneficiary interfaces or data formats may be unavailable during development; mock data or simulated adapters may be used for demonstration.
- Store and transmit only the minimum necessary employee information. Do not include biometric images/templates, passwords, salary information in QR codes, or unrelated HR data.
- Beneficiary policies and interface contracts must be verified before production attendance or payroll behavior is finalized.

## Non-Goals

Record things intentionally outside the project's current intended scope, when confirmed.

- Replacement HRPS, Payroll, Accounting, or Bundy/Biometric systems.
- A complete university ERP, Student Information System, student enrollment, grading, LMS, or library system.
- Faculty attendance integration during the initial scope.

## Open / Unconfirmed Project-Level Information

Keep relatively stable unknowns or unresolved project knowledge visible without turning this file into a task list or current-status tracker.

- Which HRPS platform/version and integration method are available.
- Which Bundy/Biometric vendor and attendance-log format are available, and whether device IDs match HRPS Employee IDs.
- Whether Payroll and Accounting expose APIs or require file-based exchange, and which fields they require.
- Who approves attendance corrections and which AU-JSC rules govern attendance processing.
- The QR token/security model, authentication approach, final technology stack, hosting, and whether real or simulated integrations will be used in the prototype.
