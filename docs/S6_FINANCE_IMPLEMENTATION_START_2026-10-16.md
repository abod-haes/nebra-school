# NEBRA School S6 — Finance implementation start (2026-10-16)

Implemented:
- Replace placeholder finance route with a real institution-scoped student finance screen.
- Search/select a student, fetch ledger and outstanding balance per currency.
- Charge, payment, discount, refund forms based on the existing Finance controller and DTOs.
- Refund requires an active payment in the same currency; backend enforces refundable balance.
- Financial entry void uses backend void endpoint and keeps audit trail rather than deleting rows.
- Permission gating: institution.finance.read and institution.finance.manage.
- Bilingual Arabic/English controls and errors.

Verification: npm run check PASS — oxlint zero warnings/errors, TypeScript and Vite production build.

Not yet implemented in S6:
- Institution-wide finance analytics/report endpoints: existing backend only supports per-student history.
- Date-period filters, printable receipts, CSV/XLSX export, full payment-method catalogue.
- Real staging authenticated workflows and refunds/void edge-case UX validation.
- Student/parent app finance screens and role-based E2E testing.

Note: per-currency balances are never combined into one total; no fabricated school-wide figures.
Commit local only, no remote push or deploy.