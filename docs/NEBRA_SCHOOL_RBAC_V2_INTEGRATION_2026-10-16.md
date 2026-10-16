# NEBRA School — RBAC V2 Integration Pass
Date: 2026-10-16
Scope: `nebra-school` branch `main`, complementary `quizy-backend` branch `nebra`

## Features implemented locally

1. Replaced legacy generic `*.manage` frontend gates with atomic operation permission codes corresponding to Nest controllers:
   - Academic structure years/grades/sections/subjects: create, update, status, delete per entity.
   - Enrollment create/update.
   - Attendance, homework and schedule create/update/delete as available.
   - Institution courses create and managed course content owner access.
   - Exams create/update/delete; grade template/read, import preview/confirm and publish separated.
   - Announcements create/update/publish/archive.
   - Student Excel preview and confirm independently.
   - Student status vs profile update; staff membership profile, roles and status independently.
2. Added institution role lookup under `/institutions/:institutionId/access/roles` with active custom role support:
   - School director can choose multiple system/custom roles when creating a staff member.
   - Staff editor uses the live list, displays custom role names, allows multi-role selection, and presents historical SUPERVISOR as a legacy assignment only.
   - Directors are not manageable through the staff role/status editor (Platform Admin flow remains authoritative).
3. Unified presentation of `ADMINISTRATIVE_STAFF` as **الموجّه / الموظف الإداري**; no automatic conversion of existing SUPERVISOR memberships.
4. Staff edits now use **separate save buttons** for profile, roles, and status, preventing accidental partial multi-step save attempts.
5. Supervisor and teacher scope edits require explicit loading of existing scopes first, and use the new precise assignment permissions.
6. Client navigation and direct-route UX are filtered by actual read permissions from `/scopes/me`. Nest remains the real authorization boundary; UI gating is not a security control.
7. In `quizy-backend`, `PATCH /institutions/:institutionId/access/roles/:roleId` accepts optional `permissionCodes` and commits role details + full permission replacement in **one optimistic-lock transaction**. Existing `PUT /roles/:roleId/permissions` remains supported. The combined path enforces permission allowlist and no self-escalation; tests cover both.

## Key API contracts

| UI | API | Required server permission |
|---|---|---|
| List available roles | GET /institutions/:id/access/roles | Director / Platform Admin |
| Create role | POST /institutions/:id/access/roles | Director / Platform Admin |
| Atomic custom role edit | PATCH /institutions/:id/access/roles/:roleId | Director / Platform Admin |
| Assign staff roles | PATCH /institutions/:id/memberships/:memberId/roles | institution.memberships.roles.assign |
| Update staff profile | PATCH /institutions/:id/memberships/:memberId/profile | institution.memberships.profile.update |
| Change staff status | PATCH /institutions/:id/memberships/:memberId/status | institution.memberships.status |
| Assign supervisor scopes | PUT /institutions/:id/scopes/memberships/:memberId/supervisor | institution.scopes.supervisor.assign |
| Teacher assignments | PUT /institutions/:id/scopes/memberships/:memberId/teacher | institution.scopes.teacher.assign |

## Local verification

- Frontend: `npm run check` (oxlint, tsc, Vite build) succeeds with 0 warnings.
- Backend: `npm run build` succeeds; `npm test` passes 45 suites and 160 tests, including atomic role update and own-role escalation.
- Local unauthenticated `/login` HTTP smoke: 200; browser loaded the Vite document and scripts. External font requests had transient failures; the unauthenticated smoke does **not** validate protected routes or real APIs.

## Remaining release gates (not executed)

- Push/merge both local branches safely: local school `origin/main` tracking is currently marked `[gone]`; verify remote/ref state without overwriting the existing dirty changes in README, config/env.ts and prior planning doc.
- Apply pending RBAC migrations and seed to Staging with DB backups; deploy Backend **before** the new school bundle.
- Use real test director/administrative supervisor/teacher/accountant accounts on Staging:
  - Create and assign a custom role; verify only assignable codes appear; attempt cross-institution assignment and own-role escalation.
  - Verify disabled roles and director memberships cannot be changed via school staff editor.
  - Verify teacher can import grades as draft and supervisor can publish only within authorized scope.
  - Verify legacy SUPERVISOR memberships remain least privileged and migrate only after individual review.
  - Verify school/institute differences via respective separate clients; School UI currently explicitly filters memberships to type SCHOOL.
  - Verify proper 401/403 handling, search, reports, exports, keyboard/mobile UX.
- Confirm HLS/video, Excel imports, notifications, print receipts and payment workflows with real storage, shards and background workers.
- Full browser Playwright E2E requires staging test credentials. **No authenticated E2E certification claimed.**

## Important boundaries

- The change does **not** migrate SUPERVISOR rows or grant publication automatically.
- The change does **not** modify user local `README.md`, `src/config/env.ts`, or the pre-existing untracked audit doc.
- The role-grant system remains authoritative on the server even when UI state is stale.
- Do not treat a successful build or local HTTP response as production readiness.
