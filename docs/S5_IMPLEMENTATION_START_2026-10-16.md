# S5 — Exams, Grades, Courses — implementation start (2026-10-16)

## Implemented
- Replaced read-only exams route with dedicated bilingual ExamsPage.
- Exam draft creation for school year, subject, grade, section, date and maximum score; draft edit/delete UI.
- Gradebook table, XLSX template download, grade import preview and digest-confirm, publish confirmation.
- Replaced read-only courses route with bilingual CoursesPage.
- Institution course creation, course listing, managed course details, adding units/lessons, preview lesson flag, readiness-gated publish action.
- UI controls based on institution.exams.manage, institution.grades.read/manage/publish and institution.courses.manage.

## Verification
- npm run check PASS: 0 warnings/errors in oxlint, TypeScript and Vite build.

## S5 is NOT complete
- Course resource creation/upload and lesson media assignment, edits/deletes/reordering of units/lessons, targeting controls, image/cover, managed course editing and archive remain.
- Gradebook needs validation on authenticated fixtures, parent flags and notification workflow UI, pagination/filtering; preview error details could improve.
- Real staging tests explicitly deferred to later project-wide test period.
- Commits local only; do not claim remote deployment.
