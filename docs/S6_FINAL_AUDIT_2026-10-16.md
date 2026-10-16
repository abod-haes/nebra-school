# NEBRA School Dashboard — S6 full-scope audit, 2026-10-16

## Scope and naming
This is the S6 *school dashboard finance and reporting workstream*, not phase 06 of the master NEBRA backend roadmap (student/parent application). Master backend roadmap finance is Phase 07. Avoid conflating phase numbering.

## Delivered
- Institution-scoped per-student ledger: charges, payments, discounts, refunds, void with audit; per-currency derived balances.
- Date filters and export for student statements; printable non-fiscal payment receipts.
- Institution financial transaction report with date range, per-currency grouped totals, export and print.
- Operational reports: student totals, active student totals, school enrollments, attendance sessions, exams/published exams, attendance status breakdown and present-only rate. Operational totals represent all-time data, independent of finance date filters.
- Granular finance permission alignment: charges.create, payments.create, discounts.create, refunds.create, entries.void, read. No reliance on obsolete generic finance.manage.
- Refund UI displays remaining refundable amount and excludes fully refunded payments; backend already enforces Serializable transaction constraints.
- CSV export helper escapes potential formula injection values.

## Verification
- Frontend npm run check passes lint/TS/Vite with zero warnings.
- Backend npm run build passes.
- Backend Jest suite 42/42, tests 142/142 pass, including added operational summary and finance report tests.

## Production acceptance remains separate
- No authenticated end-to-end finance workflow or multi-role/multi-shard staging integration was performed; by prior agreement cross-app E2E occurs at overall project end.
- Browser print layouts, live role permissions, refund race conditions, and deployed database/shard consistency must be checked on staging.
- Receipts are printable records, not legally certified tax invoices.
- Trend reporting, grade averages and attendance rate segmentation by date/teacher are not part of implemented scoped dashboards; add them explicitly as future analytical reporting requirements if desired.
- Neither push nor deployment was run.

## Development decision
S6 school dashboard finance and core reports workstream is development-complete for its scoped baseline but cannot responsibly be certified without production acceptance tests.