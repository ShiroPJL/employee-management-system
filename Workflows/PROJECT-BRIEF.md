# Project Brief

> This file captures the user's project intent and context before the coding workflow is initialized.
>
> It is useful for new projects and for onboarding existing repositories. Keep uncertain ideas uncertain. The repository is authoritative about what is actually implemented.

## Project Idea / Overview

Build an integration-focused employee attendance system for Arellano University – Juan Sumulong Campus.

Project title:

**Integration of HRPS, Bundy Clock, QR-Based Attendance, Payroll, and Accounting Systems for Non-Teaching Administrative and Office-Support Employees of Arellano University – Juan Sumulong Campus**

The project should connect systems already used by the beneficiary instead of replacing them.

Existing systems that remain:

- Existing HRPS
- Existing Bundy Clock / Biometric Device
- Existing Payroll System
- Existing Accounting System

The project adds:

- QR Attendance as an additional attendance capability
- API Gateway / Integration Layer
- Integration services
- Unified Attendance Data
- Attendance validation and processing
- Attendance correction and approval workflow
- Integration monitoring and audit logging

The main problem is that employee, attendance, payroll, and accounting information may exist in separate systems and may require manual checking or transfer.

The system should create a more reliable data flow:

**HRPS + Bundy + QR → Unified Attendance → Validation / Processing → Approval → Payroll → Accounting**

The project is primarily an **integration system**, not a replacement HRIS, Payroll System, Accounting System, or biometric system.

---

## Goals / Intended Outcome

The system should:

- Connect the beneficiary's existing HRPS, Bundy, Payroll, and Accounting systems.
- Add QR Attendance without replacing the existing Bundy/Biometric attendance process.
- Use HRPS as the source of official employee information.
- Use Employee ID from HRPS as the main identifier for matching records.
- Convert Bundy and QR attendance into one standardized attendance format.
- Store standardized records in Unified Attendance Data.
- Detect invalid, duplicate, missing, or inconsistent attendance records.
- Calculate attendance information such as late and undertime.
- Support attendance corrections and authorized approval.
- Generate verified attendance information.
- Send payroll-ready attendance information to the Existing Payroll System.
- Exchange approved payroll information with the Existing Accounting System.
- Provide technical monitoring for integrations, errors, users, permissions, and logs.

A useful first result would be a working prototype showing:

- Revised Login Page
- Employee Dashboard
- Employee Attendance History
- IT Administrator Dashboard
- Role-based navigation
- Mock integration statuses
- Standard attendance data

Later versions should replace mock data with real or simulated integration logic.

---

## Users / Use Cases

### Intended Users

- Non-Teaching Employee
- HR / Attendance Staff
- Supervisor
- Payroll Staff
- Accounting Staff
- IT Administrator

### Important Use Cases

#### Non-Teaching Employee

- Log in.
- View today's attendance status.
- View work schedule.
- Use QR Attendance when allowed.
- View attendance history.
- View attendance details.
- Submit an attendance correction request.

#### HR / Attendance Staff

- Monitor employee attendance.
- Review attendance problems.
- Review correction requests.
- View employee and schedule information coming from HRPS.
- Generate attendance reports.

#### Supervisor

- Review attendance exceptions.
- Approve or reject attendance corrections.
- Review employee schedule and attendance information relevant to approval.

#### Payroll Staff

- View verified attendance information.
- View payroll-ready attendance data.
- Monitor transfer status to the Existing Payroll System.

#### Accounting Staff

- View approved payroll information relevant to integration.
- Monitor transfer/synchronization with the Existing Accounting System.

#### IT Administrator

- Monitor HRPS integration.
- Monitor Bundy/Biometric ETL.
- Monitor QR Attendance service.
- Monitor Payroll and Accounting integrations.
- Manage user accounts.
- Manage roles and permissions.
- View integration errors.
- View audit logs.
- Monitor synchronization status.

### Who Benefits

- Non-teaching administrative employees
- HR / Attendance personnel
- Supervisors
- Payroll department
- Accounting department
- IT administrators
- AU-JSC administrative operations

---

## Features / Requirements

### Confirmed Requirements

#### Existing System Integration

- Existing HRPS must remain.
- Existing Bundy Clock / Biometric Device must remain.
- Existing Payroll System must remain.
- Existing Accounting System must remain.
- The project must not create a replacement HR/Admin system.

#### HRPS

HRPS is the source of official employee information.

Required information may include:

- Employee ID
- Employee Name
- Department
- Position
- Employment Status
- Work Schedule

Employee ID from HRPS should be treated as the main master identifier.

#### Bundy / Biometric Integration

The project should use attendance logs produced by the Bundy/Biometric device.

The system does not need:

- fingerprint images
- biometric templates
- facial biometric data

The system needs attendance log information such as:

- device employee ID
- timestamp
- device/source information

Bundy logs should be:

**Extracted → Transformed → Matched → Loaded**

#### QR Attendance

QR Attendance is an additional attendance method.

QR attendance should:

- identify the employee securely
- record date/time
- identify source as QR
- validate employee status
- prevent invalid or duplicate attendance where possible
- create records using the same attendance format as Bundy

#### Unified Attendance Data

Bundy and QR records must be converted to one common format.

Core fields:

- Employee ID
- Date
- Time-In
- Time-Out
- Source
- Status

Additional implementation fields may include:

- Record ID
- Schedule ID
- Late Minutes
- Undertime Minutes
- Overtime Minutes
- Validation Status
- Approval Status
- Created At
- Updated At

#### Attendance Validation

The system should be able to identify conditions such as:

- valid record
- duplicate record
- missing time-in
- missing time-out
- employee not found
- inactive employee
- invalid QR
- unmatched Bundy employee
- schedule mismatch
- record requiring review

#### Attendance Processing

The system should compare attendance with the employee's assigned schedule.

Possible results include:

- Present
- Late
- Absent
- Undertime
- Overtime
- Missing Time-Out
- Rest Day
- Holiday
- Approved Leave

Exact rules must follow actual beneficiary policy when confirmed.

#### Attendance Correction

Employees should be able to request corrections for attendance problems.

Possible issues:

- Missing Time-In
- Missing Time-Out
- Incorrect Time
- Incorrect Attendance Status
- Other Attendance Concern

Correction records should have statuses such as:

- Submitted
- Under Review
- Approved
- Rejected
- Needs Additional Information

#### Approval

Attendance corrections or exceptions may require Supervisor or authorized approval.

The system should record:

- reviewer
- decision
- date/time
- affected attendance record

#### Payroll Integration

Only verified attendance should be forwarded to Payroll.

Possible payroll-ready information:

- Employee ID
- Payroll Period
- Present Days
- Late Minutes
- Undertime Minutes
- Approved Overtime
- Absences
- Approved Leave

The project should not recreate the entire Payroll System.

#### Accounting Integration

Approved payroll information may be passed to the Existing Accounting System.

Possible information includes:

- Payroll Period
- Payroll Reference
- Total Payroll Expense
- Approved Payroll Amount
- Deduction / Contribution Summary
- Transaction Reference
- Posting Status

The project should not recreate a complete Accounting System.

#### Authentication and RBAC

Planned roles:

- Non-Teaching Employee
- HR / Attendance Staff
- Supervisor
- Payroll Staff
- Accounting Staff
- IT Administrator

Users should only access pages and actions allowed by their role.

#### Integration Administration

The IT Administrator should be able to monitor:

- HRPS
- Bundy ETL
- QR Attendance
- Unified Attendance
- Payroll Integration
- Accounting Integration
- synchronization status
- failed transfers
- errors
- audit logs

---

### Feature Ideas / Preferences

- Employee QR Attendance page.
- Attendance correction evidence upload.
- Integration health indicators such as:
  - Online
  - Offline
  - Warning
  - Error
- Success / Failed / Pending synchronization counters.
- Integration retry actions for IT Administrator.
- Dashboard summary cards.
- Attendance filtering by date and status.
- Bundy vs QR source filtering.
- Integration event timeline.
- Reports for:
  - Late
  - Undertime
  - Missing Time-Out
  - Verified Attendance
  - Integration Errors
- Secure QR token instead of exposing raw employee information.

These should only be implemented if they support the integration scope.

---

## Tech Stack / Technical Ideas

### Confirmed Choices

Not fully finalized yet.

The development repository and project foundation will be prepared first.

The system is expected to have:

- frontend application
- backend/API layer
- database
- authentication
- role-based access
- integration services

### Preferences

Preferred architecture:

**Frontend**
→ **Backend/API**
→ **API Gateway / Integration Layer**
→ **Integration Services**
→ **Existing Systems**

Logical integration services:

- Employee Information Integration
- Bundy/Biometric ETL
- QR Attendance Service
- Attendance Validation Service
- Attendance Processing Service
- Correction / Approval Service
- Payroll Integration Service
- Accounting Integration Service
- Report Generation Service

These do not necessarily need to be independently deployed microservices. They may be implemented as modules in one backend during the initial version.

### Being Considered

Still to be decided:

- Frontend framework
- Backend framework
- Database
- Authentication provider
- Production hosting
- Exact HRPS integration method
- Bundy log extraction method
- Payroll API/file format
- Accounting API/file format
- Whether real university APIs will be available
- Whether unavailable integrations will use mock/simulated adapters for demonstration

---

## Constraints

### Scope

The system must remain an integration project.

Do not build:

- replacement HRPS
- replacement Payroll System
- replacement Accounting System
- replacement Bundy/Biometric system
- complete university ERP
- Student Information System
- student enrollment
- grading system
- LMS
- library system

### User Scope

Initial scope:

**Non-teaching administrative and office-support employees with fixed work schedules.**

College professors are excluded from the initial scope because their attendance may depend on:

- class schedules
- assigned subjects
- teaching hours
- teaching assignments

Do not assume professors use the Bundy Clock unless confirmed.

### Existing System Access

Real HRPS, Bundy, Payroll, and Accounting APIs/data formats may not be available during development.

If unavailable, mock data or integration adapters may be required for demonstration.

### Data Privacy

Use minimum necessary employee information.

Do not store or transmit unnecessary:

- biometric images
- fingerprint templates
- passwords
- salary information inside QR codes
- unrelated HR information

### Schedule / Deadline

Development is already starting.

Current immediate goal is to create the initial frontend and project foundation before deeper integrations.

---

## Existing Project Context

The project originally followed a different direction.

The earlier idea included a new HR/Admin portal and attendance system.

After professor feedback, the direction changed.

The current rule is:

> Integrate the systems already being used by the beneficiary instead of replacing them.

The old concept of a separate full HR/Admin portal should not be continued.

### Architecture Work Already Completed

Activity 6:

**Initial Architecture Design Based on Stakeholder Needs**

Focus:

- users
- existing systems
- API Gateway
- integration services
- connected data/outputs

Activity 7:

**Data Integration Blueprint**

Focus:

- HRPS
- Bundy
- QR
- MDM
- ETL
- Unified Attendance Data
- Payroll
- Accounting

Core distinction:

- Activity 6 = structure and connections
- Activity 7 = data movement and transformation

### Current Development Stage

The project is now in the software-development stage.

The Login Page exists but needs revision because it was created before the final architecture direction was confirmed.

Current Week 1 assignments:

#### Villegas

- GitHub/project setup
- IT Administrator Dashboard

#### De Leon

- Revise Login Page
- Employee Dashboard

#### Pimentel

- Employee Attendance History

#### Jaranilla

- Research/reference task supporting frontend and system design

Jaranilla's research should cover:

1. HR / Employee Management reference
2. Attendance / Biometric reference
3. Integration / Admin Monitoring reference

The research is intended to support development rather than become part of the production system.

---

## Future Ideas

Ideas that may be considered later:

- More advanced attendance analytics
- Automated notification system
- Real-time integration health alerts
- Advanced correction workflow
- Attendance anomaly detection
- Additional attendance sources
- More detailed synchronization history
- Mobile-focused QR experience
- Extended reports
- Faculty attendance integration

Faculty support should remain outside the current scope unless explicitly approved later.

---

## Open Questions / Uncertainties

- What exact HRPS platform/version does AU-JSC use?
- Does HRPS provide an API?
- If not, how can required employee data be retrieved?
- What model/vendor is the Bundy/Biometric device?
- What format does the device use for attendance logs?
- Are Bundy employee IDs identical to HRPS Employee IDs?
- If not, how will employee mapping be maintained?
- Does the Existing Payroll System expose an API?
- Does Payroll instead require CSV/Excel/file import?
- What information does Payroll actually require from attendance?
- Does the Existing Accounting System provide an API?
- What approved payroll information should be sent to Accounting?
- Who officially approves attendance corrections: HR, Supervisor, or both?
- What are the actual AU-JSC rules for:
  - lateness
  - undertime
  - overtime
  - missing time-out
  - holidays
  - leave
- When should QR Attendance be used instead of Bundy?
- Should QR codes be static, rotating, or session/token based?
- What authentication system should be used?
- What frontend/backend/database stack will be finalized?
- Will the final prototype use real integration or simulated/mock integrations?

These questions must remain open until verified with the beneficiary, professor, repository, or technical documentation.

---

## Additional Notes

The main development principle is:

**Integration first, replacement never unless explicitly approved.**

The main system flow is:

**HRPS Employee Data**
+
**Bundy Attendance Logs**
+
**QR Attendance Records**

→ Employee ID Matching  
→ Standardization  
→ Unified Attendance Data  
→ Validation  
→ Attendance Processing  
→ Correction / Approval  
→ Verified Attendance  
→ Existing Payroll System  
→ Existing Accounting System

The project should always preserve the beneficiary's existing systems as the source of truth for their respective responsibilities.