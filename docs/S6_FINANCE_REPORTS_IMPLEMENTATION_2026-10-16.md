# NEBRA S6 implementation follow-up — 2026-10-16

Backend additions:
- GET /institutions/:institutionId/finance/summary with optional ISO from/to query; institution.finance.read permission.
- Active finance charges/payments/discounts/refunds grouped by currency, using transaction-effective date and optional period.
- Clearly distinguished transaction-period net from accumulated outstanding balance. No summing across currencies.
- Added FinanceService summary tests including currency balance math and reversed date rejection.

Frontend additions:
- /reports now connects to finance summary with date range, per-currency totals, CSV export, print.
- /finance keeps per-student ledger with period filters, statement CSV export, print and payment receipt view.
- Existing institution finance permissions applied.

Verification:
- Backend npm run build: PASS.
- Backend npm test -- --silent: 40 suites, 137 tests PASS.
- Frontend npm run check: lint 0 warnings/errors, TypeScript and Vite build PASS.

Remaining acceptance work:
- Authenticated API/staging integration, including cross-governorate shards and finance accountant rights; deferred E2E by prior agreement.
- Integrated visual print quality, refund partial/void cases, and real currency datasets to be verified.
- School operational KPI report (attendance, enrollments, exams) is outside this finance summary endpoint and not yet implemented.
- Printable receipt is browser print view, not a server-issued fiscal invoice; do not describe as tax invoice.
- No push or deployment.