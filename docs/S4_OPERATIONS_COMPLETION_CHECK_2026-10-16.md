# NEBRA School — S4 Operations Completion Check (2026-10-16)

## Implemented
- Timetable: GET/POST/PATCH/DELETE schedule; school year/section required.
- Homework: GET/POST/PATCH/DELETE homework, basic title/description/due date targeting.
- Attendance: GET/POST attendance sessions, GET session detail, PUT records, per-student attendance statuses PRESENT/ABSENT/LATE/EXCUSED and notes.
- Announcements: GET/POST/PATCH, publish/archive with confirmation.
- Build and lint pass.

## Critical remaining to close S4
- Real staging E2E for all 4 roles and cross-tenant denials.
- Effective role/permission-based action gating; current canManage coarse and blocks teacher UI despite backend permissions.
- Validate deployed list/detail response envelopes and week/time UI.
- Implement homework individual-student targeting and attachment flow; announcement audience targeting.
- Verify schedule overlap errors and attendance notification effects.
- Backlog from earlier phases: student/staff edits, scope assignments, enrollment updates.

Gate: do not call S4 fully done or advance to S5 until these are verified and addressed.