# S4 follow-up 2026-10-16 — targeted announcements

Implemented in nebra-school:
- Individual student lookup and selection for announcement targets through institution-scoped student GET.
- Multi-target payload combines grade/section target with separate studentRecordId targets using confirmed CreateAnnouncementDto targets contract.
- Preserves individually targeted student IDs when loading an existing announcement to edit.
- Publishing only offered for DRAFT announcements; archive withheld for ARCHIVED records.
- Publishing confirmation warns when no targets are provided, because backend resolves all institution student recipients.

Verification: npm run check passed (lint 0 warnings/errors; TypeScript + build).

S4 is NOT formally closed: file attachment solution for homework remains unverified; effective action permissions and cross-tenant staging tests have not been completed. Need validate runtime API, per-role teacher scopes and scheduling conflicts. No backend edits performed.
