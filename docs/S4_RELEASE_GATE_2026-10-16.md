# NEBRA SCHOOL — S4 implementation and release gate (2026-10-16)

## Scope delivered in this pass
- Backend GET /institutions/:id/scopes/me now emits permissionCodes from the active InstitutionAccessGuard access context.
- Frontend S4 CRUD controls use action-specific permissionCodes rather than a blanket TEACHER/SUPERVISOR check; Nest PermissionsGuard remains the authority.
- School homework creation sends required academicYearId and grade/section scope and supports notifyTargets, chosen studentRecordIds, secure HTTPS link metadata and multipart file upload.
- Backend POST /institutions/:id/homeworks/:homeworkId/attachments accepts single file, max 10MB, allowed PDF/JPEG/PNG/TXT; verifies manage rights via homework target scope and stores under a tenant/homework-specific opaque key using CourseStorageService.
- Backend GET /institutions/:id/homeworks/:homeworkId/attachments/:fileId verifies read rights and academic visibility before streaming as an attachment with private/no-store cache header.
- Frontend uploads selected file after successful homework creation and supports authenticated download.
- Operations use localized error codes for overlap, duplicate attendance, nonexistent roster, invalid targets, forbidden/unauthorized requests.
- Announcements have student/grade/section targeting and publish confirmation; attendance has per-student records; schedule and homework have edit/delete flows.

## Automated verification performed
- nebra-school: npm run check PASS, 0 lint errors/warnings, TypeScript and Vite build PASS.
- quizy-backend: jest scopes.controller.spec.ts + announcements.service.spec.ts PASS (3 tests, 2 suites).
- quizy-backend: npm run build FAILED due existing/incomplete local dependency installation (exceljs, @aws-sdk/client-s3/lib-storage unavailable; swagger type imports also not valid in current local toolchain). npm install --no-save --package-lock=false --ignore-scripts timed out at 120 s. The new controller/service still require a full build and deployed test.

## Explicit remaining release blockers — S4 is NOT production signed off
1. Fix local backend dependencies and perform successful Nest build, migrations check and regression tests.
2. Execute real authenticated CRUD flows with school director, teacher, supervisor and unauthorized users in staging; test cross-institution 403/404.
3. Verify actual attachment storage (filesystem vs S3), maximum upload, file download access, invalid MIME and cleanup after failed uploads and deleted homework.
4. Check attendance notifications, duplicate session behavior and complete student roster, schedule overlap cases and timezone formatting in staged database.
5. Ensure backend version with permissionCodes and attachment routes is deployed before deploying frontend.
6. Evaluate outstanding S3 object retention on homework deletion; object deletion is not yet coupled to homework remove.
7. Improve partial-success UX: if homework creation succeeds but file upload fails, show created homework and retry attachment upload instead of generic save failure.
8. Earlier phases S3 student/staff edit, enrollment update and staff scope assignment remain incomplete, independent of S4.

## Deployment warning
These commits are local and have not been pushed or deployed. Do not call the whole school product or S4 production-ready until sign-off tests above pass.
