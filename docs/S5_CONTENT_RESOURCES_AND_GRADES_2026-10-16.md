# NEBRA S5 follow-up — 2026-10-16

Implemented in nebra-school:
- Course content manager: edit course name/description/visibility and grade/section targets; rename, delete and adjust sort order of units and lessons; attach HTTPS links or upload videos/PDF/documents, remove resources.
- Exam gradebook now shows a proper student/score/note table, rather than JSON; import preview reflects actual backend rows/errors/digest contract, with safe publish/delete confirmation UI.
- Exam editor can configure parent visibility and parent notification flags.
- `npm run check`: TypeScript + Vite + oxlint PASS, zero warnings/errors.

Known unfinished / dev checks:
- Course resource upload and HLS/PDF RAG processing need authenticated development fixture tests; no full staging tests by current agreement.
- Targeting currently grade/section only; explicit individual student targeting, group handling and teacher assignment scope require UI work.
- Course content edit UX currently uses native prompt/confirm and numeric sortOrder +/-; should migrate to custom dialogs/robust reorder before production.
- Cover image editing, proper notification result preview, content versioning, draft archive/edit polish pending.

No remote push or deployment.