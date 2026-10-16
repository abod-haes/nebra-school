# NEBRA School — Implementation Progress (2026-10-16)

## Executed in this iteration
- Protected authentication routes (existing): login/password, identity/me, refresh, password change, logout, single/multi-school selector.
- School-scoped GET /institutions/:institutionId/scopes/me query before rendering the authenticated dashboard. Denied/errors show retry and never silently render content.
- Academic structure working API screens: academic years, grades, sections, subjects, list/create/edit, delete only for grades and sections where backend supports DELETE.
- Read-only live-data listings: students, memberships (staff), attendance sessions, schedule, institution courses, announcements, homework, exams. Student/staff lists use server-side page/search; empty/error/loading handled explicitly. Exam and homework added to navigation.
- Original school branding, locale/theme, local modified README.md and src/config/env.ts preserved; no mock records.
- npm run check passes: lint 0 errors 0 warnings, TypeScript and Vite build pass. Bundle-size notice from Vite should be addressed by route-based splitting in later optimization.
- School API access scoped by institution ID; security still enforced by Nest guards. Frontend role-based edit visibility is coarse and must be replaced by explicit effective permission codes before production.

## Remaining requirements to complete the project
1. Verify LIVE authentication, role access and tenant isolation with representative school director, staff, accountant, teacher and supervisor accounts. Current static checks do not validate API/CORS/credentials.
2. Verify exact local-vs-deployed backend DTOs, 12 missing local remote commits, and return envelopes for list screens.
3. Implement granular permission catalog (the existing /scopes/me yields roleCodes/fullInstitutionAccess, not effective permission codes); do not rely on sidebar hiding for security.
4. S2 completion: academic years activation, subject status, selection flows, row forms with robust validation and details.
5. S3 CRUD: create/edit/view students and staff, memberships, invitations, assignment/scope editors, school enrollments, student import preview/confirm, guardian relations.
6. S4 CRUD: attendance sessions+records; schedule create/edit/conflicts; homework targeting and submission; announcements publish/archive.
7. S5 CRUD: exam grade templates, preview/confirm and publish; course builder units, lessons and media resources.
8. S6 finance ledgers/payments/refunds with confirmations, institution overview and real reporting endpoints pending verification of API gaps.
9. S7 UX/accessibility/translation improvements; permission and Playwright E2E, responsive screenshots, chunking, staging deployment and smoke tests.
10. Fix routing fallback for direct deployment links; complete CI and rollout.

## Backend verification notes
- /identity/me contains institution memberships and status; /institutions/:id/scopes/me contains scope and role codes.
- Academic structure has GET/POST/PATCH for years/grades/sections/subjects, DELETE for grades/sections, PATCH status for years/subjects.
- No invented fields or fake KPI values in this implementation.
- Do not expose passwords, tokens, environment secrets, or internal identifiers in user-facing tables.

## Next critical action
Test the school director journey on staging using non-secret test credentials and document server-side effective permissions. Avoid claiming production readiness until passing role-isolation E2E and CRUD tests.
