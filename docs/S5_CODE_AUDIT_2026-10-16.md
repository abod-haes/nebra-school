# NEBRA S5 code audit — 2026-10-16

## Confirmed defects fixed
- Institution course creation previously permitted PUBLIC despite backend rejecting it: now only PRIVATE or TARGETED; subject required.
- Editing published courses previously exposed mutation actions although backend only allows DRAFT: detailed edit management only shown for DRAFT.
- Course target payload previously included undefined optional fields: now filter out absent keys; includes individual student targets correctly.
- Dialog: escape-to-dismiss, focus enters the dialog, keyboard Tab focus wraps inside it, focus returns to invoking element after closing.

## Automated verification
- nebra-school npm run check: PASS (oxlint 0 warnings/errors, TypeScript + Vite build PASS).
- quizy-backend npm test -- --silent: PASS (39 suites, 135 tests).

## Open risks (not misrepresented as pass)
- Course sort-order changes are multiple PATCH requests; partial failure can leave incomplete reorder. Implement one transactional reorder endpoint and tests before production sign-off.
- Resource files and HLS/PDF RAG jobs need storage/worker integration testing with authenticated development fixtures.
- Frontend tests for dialog behavior and publish permission matrix still needed.
- Staging E2E deferred by user agreement; no deployment performed.