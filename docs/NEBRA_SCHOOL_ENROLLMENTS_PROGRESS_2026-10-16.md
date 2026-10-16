# NEBRA School — School Enrollment Implementation

## Added
- Dedicated `/enrollments` school dashboard route and navigation entry.
- Student selection from the existing institution students endpoint, academic year and grade options from academic endpoints, section options filtered by selected grade.
- POST `/api/v1/institutions/:institutionId/enrollments/school` using the exact CreateSchoolEnrollmentDto contract: studentRecordId, academicYearId, gradeId, sectionId.
- GET `/api/v1/institutions/:institutionId/enrollments/school` with page and limit; read-only listing, loading/error/empty states, simple pagination.
- No mock data or direct data mutation outside active institution ID. Submission failure leaves form values intact.
- Routes lazy-loaded; `npm run check` passed with 0 lint warnings/errors and TypeScript/build passing.

## Pending for complete S3
- Student record edit/status/detail screens.
- Enrollment edit/status via PATCH `/enrollments/school/:enrollmentId`; list detail robustness based on exact deployed response schema.
- Staff roles and status mutations, teacher/supervisor scopes, membership profile.
- Real role-based acceptance tests and client permission granularity.
- Validate CORS and live staging response shape with school director account (not run yet).

## Notes
- `nebra-school` is school-only. Institutes are handled separately via `/enrollments/institute`.
- `quizy-backend` local branch was behind origin/nebra at earlier audit; reverify deployed Swagger before production.