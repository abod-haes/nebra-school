# NEBRA School S1–S4 – final development audit pass 2026-10-16

## Implemented now
- S1 authentication: restore the selected active school after identity refresh; clear stale school selection when no active school matches.
- S2 academic structure: move editing permission to exact `institution.academic.manage`; localize tab labels, page heading and description.
- S3 people management: localize staff role and membership state names, preserve correct Prisma enum values.
- S3 XLSX importer: explicit preview summary, prevent confirmation when validation fails, client file restrictions (XLSX / 10MB), offer downloadable UTF-8 CSV import error report.
- S4 schedule editor: localized weekdays, standard time inputs instead of minute counters, correct minute conversion and validation.

## Verification
- `npm run check` PASS (0 lint errors and 0 warnings, TypeScript and Vite production build PASS).

## Release / stage limitations
- No authenticated staging credentials or isolated staging deployment in this run. Do not interpret build success as end-to-end permissions or workflow validation.
- Full audit of school/institute parity, staff record profile editing, destructive action confirmation UX, time/date localization and event notifications remains separate from verified local build.
- E2E test suite deferred to project end by user decision.
