# ADR-001: Integration-First System Boundary

## Status

Accepted

## Context

Arellano University – Juan Sumulong Campus already uses HRPS, a Bundy Clock/Biometric Device, a Payroll System, and an Accounting System. The project originally considered a broader HR/Admin and attendance portal, but the confirmed direction is to connect the beneficiary's existing systems rather than replace them. The exact interfaces and data formats are not yet available.

## Decision

Build an integration-focused attendance system around the existing systems. Add QR Attendance, an API Gateway/integration layer, unified attendance data, validation and processing, correction/approval workflows, and integration monitoring. Treat each existing system as the source of truth for its current responsibility, with HRPS Employee ID as the intended master identifier for employee matching.

## Alternatives Considered

- Replace HRPS, Payroll, Accounting, and Bundy/Biometric functionality with a new all-in-one system.
- Continue with a standalone HR/Admin portal that duplicates the beneficiary's existing systems.

## Reasoning

The integration boundary preserves systems already used by the beneficiary, avoids duplicating authoritative records, and keeps the project focused on attendance data flow and interoperability. It also allows simulated adapters during prototyping while real contracts are still being verified.

## Consequences

- The implementation must define mappings, validation, synchronization, error handling, and audit behavior between systems.
- External interface availability and data-format differences remain risks and must be verified before production integration.
- The project must not silently grow into replacement HR, payroll, accounting, biometric, or ERP functionality.
- Initial logical services may be implemented as modules in one backend; independent microservice deployment is not required by this decision.

## Follow-Up

- Confirm the HRPS, Bundy, Payroll, and Accounting interface methods, formats, identifiers, and ownership with the beneficiary.
- Revisit the decision only if the beneficiary explicitly approves a change in system boundaries.
