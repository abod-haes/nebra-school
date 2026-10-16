# NEBRA School — S1–S4 completion hardening (2026-10-16)

## Verified code improvements
- S1: restore selected active school and discard stale selection during auth hydration.
- S2: localized CRUD of years/grades/sections/subjects; year date range, statuses for years and subjects; academic.manage permission check.
- S3: staff displayName/email/jobTitle editing against PATCH membership profile; students birth date editing; correct role names; scoped teacher and supervisor assignments with explicit loading guard to prevent clearing assignments accidentally; XLSX import preview summaries and CSV error report.
- S4: schedule time-of-day inputs and localized weekdays; edit homework dueAt; security permissions per API action and attachment handling.

## Automated checks
- `npm run check` (oxlint + tsc -b + vite build) PASS, 0 errors/warnings.

## Acceptance caveat
- This pass does not include live authenticated staging fixtures or full E2E regression testing. Those were explicitly deferred to project-end testing. Runtime per-user school isolation, notification delivery, storage driver behavior and external deployment are not claimed as verified.
- School management repo does not include institute-specific school/group parity; institute is a separate interface/domain.
- Full staff edit, school enrollments and academic year UI are now wired locally, but field-level integration against live authenticated data remains a later check.
