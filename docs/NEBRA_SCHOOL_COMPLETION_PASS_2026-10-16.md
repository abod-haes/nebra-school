# NEBRA School completion pass — 2026-10-16

Implemented:
- Replaced final settings Placeholder with native institution custom-role management using `/institutions/:institutionId/access/roles` and `permissions/assignable`, create/edit/permissions/status endpoints with expectedVersion optimistic concurrency.
- Restricted custom role management to institution director roles and allowed permission options returned by backend; system roles are read-only.
- Replaced outdated overview scaffold copy with real operational widgets gated by finance-read permission, and navigation shortcuts.
- No synthetic dashboard values: live API data only.

Validation: `npm run check` passes oxlint (0 warnings/errors), TypeScript compile and Vite production build.

Remaining before full production sign-off:
- Authenticated E2E of each role, permission delegation, scoped teacher flows, institute vs school flows, real notifications, Excel imports, HLS/RAG jobs and parental/student mobile integration.
- Print receipts and responsive layout visual QA, backend API deployment, migration and load tests.
- Custom role editor saves name and permission changes as two optimistic-version requests; second request can fail after first succeeds. Consider backend atomic update if strict all-or-nothing changes are required.
- Need real role-management acceptance tests and user review.