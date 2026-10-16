# NEBRA School — Frontend Implementation Plan & Backend Gap Audit
Date: 2026-10-16
Status: Planning / API audit, not live E2E certification

## Scope & sources
- NEBRA V3 phases in quizy-backend/docs/nebra/phases
- Local quizy-backend branch nebra (12 commits behind origin/nebra at review; re-check remote and deployed Swagger before declaring missing endpoints)
- nebra-school routes/navigation.
- Existing local modifications in nebra-school README.md, src/config/env.ts and vite.config.ts intentionally untouched.

## Rules
- School-only dashboard. Platform Admin owns institution provisioning, directors, governorates, database routing, official results platform operations and subscription plans.
- User + active Institution Membership + effective Permissions + Scopes; enforce on server, not merely frontend.
- Student account != institution student record != school enrollment.
- Support school workflows; Institute group flows should be separate if enabled in future.
- No mock data; localized Arabic/English, RTL/LTR, Cairo, shared @nebra/ui, responsive light/dark, search/debounce, unified table/form/date controls.
- Courses owned by institution are not governed by general platform course subscriptions.
- Keep automated quiz engine out of scope; school exams and grades remain in scope.

## Backend inventory observed in local code
| Area | Existing routes / modules | Review status |
|---|---|---|
| Auth | POST /auth/login/password, /auth/refresh, /auth/logout, /auth/password/change; GET /identity/me | Existing: integration and role E2E required |
| Institution context & scopes | GET /institutions/:institutionId/scopes/me, GET/POST/PATCH /institutions/:institutionId/memberships | Existing: verify effective permissions response and school tenant access |
| School academics | /institutions/:institutionId/academic/years, grades, sections, subjects | Existing controllers |
| Students | /institutions/:institutionId/students CRUD/status, imports/students/preview+confirm, enrollments/school | Existing controllers |
| Teaching staff | memberships/roles/profile and scopes/memberships/:id/teacher and /supervisor | Existing controllers |
| Attendance | /institutions/:institutionId/attendance/sessions, sessions/:id/records | Existing controllers |
| Schedule | /institutions/:institutionId/schedule | Existing controllers |
| Homework | /institutions/:institutionId/homeworks | Existing controllers |
| Exams/grades | /institutions/:institutionId/exams, grades/template, grades/preview, grades/confirm, publish | Existing controllers |
| Institution courses | /institutions/:institutionId/courses and /course-management plus course resources | Existing controllers |
| Announcements | /institutions/:institutionId/announcements (including publish/archive) | Existing controllers |
| Finance | /institutions/:institutionId/finance/students/:studentRecordId charges/payments/discounts/refunds/void | Existing per-student controller |
| Institution dashboard KPIs | Dedicated GET /institutions/:id/overview not identified in local audit | Candidate gap; verify latest branch first |
| Aggregate reporting | Institution-wide report/export API not identified in reviewed controllers | Candidate gap; verify latest branch first |
| Institution editable settings | Platform/institutions admin endpoints exist; school-scoped profile/settings update needs verification | Candidate gap |

## Work phases
### S0 — Contract audit and pilot identity
- Compare current deployed /docs/institution-json with latest origin/nebra for exact methods/DTOs/status/permissions.
- Provision real school director via platform (not seed-only account); test login, mustChangePassword, refresh, logout, /identity/me.
- Confirm role/permission list and effective teacher/supervisor scopes; verify 401/403/tenant-isolation tests.
- Deliver API matrix and remaining confirmed gaps before new backend coding.
**Acceptance:** school director logs in and sees only authorized institution; no unrelated tenant access.

### S1 — Application foundation
- Respect existing nebra-school repo and unrelated changes.
- Shared @nebra/ui, responsive shell, AR/EN RTL/LTR, theme, 404/403/500, layouts.
- Auth storage/session lifecycle, protected routes, permission gates and institution selector.
- Axios error normalization, React Query keys, query invalidation, loading/empty/error states, toasts, searchable selectors/date pickers.
**Acceptance:** navigation and session isolation work against actual backend.

### S2 — Academic configuration
- Years, grades, sections, subjects; relationships, active statuses, controlled forms.
- Separate screens under academics rather than single placeholder.
**Acceptance:** director builds year -> grade -> section -> subject workflow with valid IDs and permissions.

### S3 — Staff and students
- Memberships/staff directory, roles/status, teacher/supervisor scope assignments.
- Student list/detail/create/edit/status, bulk Excel preview/confirm, enrollment in year/grade/section, link invitation flows.
**Acceptance:** user can create teacher and student, assign both correctly; cross-tenant requests forbidden.

### S4 — Daily operation
- Schedule and conflict feedback; attendance sessions/records; homework create/edit and targeted list; announcements drafts/publish/archive.
**Acceptance:** authorized teachers manage only assigned classes.

### S5 — Exams and course content
- School exam setup, grade template, Excel preview, import confirm, review/publish; audit & permission checks.
- Institution course builder units/lessons/resources, targeting, publishing, downloadable media rules.
**Acceptance:** student app sees authorized content and published grades only.

### S6 — Finance, overview and reports
- Per-student ledger, charges, payments, discounts, refunds, void with confirmation & audit.
- Implement institution dashboard summary and aggregate reports only after endpoint contract decision.
**Acceptance:** accountant access scoped correctly; balances consistent; financial operations auditable.

### S7 — Hardening and launch
- CI lint/typecheck/build/test, Playwright/E2E representative roles, staging smoke, backups, CORS, production build URL, performance, rollback.
- Validate school/teacher/accountant/student/parent access; no secrets, IDs or infra internals in user UI.
**Acceptance:** signed staging release checklist and no critical permission failures.

## Backend change requests (candidate, not verified absence)
- P0: If scopes/me lacks effective permission codes, add safe institution-aware permissions field or endpoint; avoid frontend guessing.
- P1: GET /institutions/:institutionId/overview for teacher/student/class/attendance/homework KPI aggregates, permission guarded and scoped.
- P1: GET /institutions/:institutionId/reports/{attendance,academic,finance,students} with filters, pagination and optional export jobs.
- P1: GET/PATCH /institutions/:institutionId/settings restricted fields, excluding governorate/shard/platform fields.
- P2: Audit pagination/filter/search/sort contracts per listing, especially students/memberships/finance.
- P2: File storage/upload authorization and download checks for resources; avoid assuming local filesystem safe for multi-replica.
No endpoint above should be implemented until comparison against latest Swagger and a real director token.

## Immediate next action
1. Update/audit backend remote latest safely without overwriting dirty package-lock.json.
2. Produce endpoint-by-endpoint request/response/permissions matrix from /docs/institution-json or current branch.
3. Complete S0 pilot and begin S1 auth + institution context.