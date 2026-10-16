// Client-side UX boundary only. Every operation is still authorized by the Nest guards.
type CanPermission = (permission: string) => boolean

const READ_PERMISSIONS: Record<string, string[]> = {
  '/students': ['institution.students.read'],
  '/staff': ['institution.memberships.read'],
  '/enrollments': ['institution.enrollments.read'],
  '/academics': [
    'institution.academic.years.read', 'institution.academic.grades.read',
    'institution.academic.sections.read', 'institution.academic.subjects.read',
  ],
  '/attendance': ['institution.attendance.read'],
  '/schedule': ['institution.schedule.read'],
  '/courses': ['institution.courses.read'],
  '/announcements': ['institution.announcements.read'],
  '/homework': ['institution.homework.read'],
  '/exams': ['institution.exams.read', 'institution.grades.read'],
  '/finance': ['institution.finance.read'],
  '/reports': ['institution.finance.read'],
}

export function canOpenSchoolRoute(path: string, can: CanPermission): boolean {
  const normalized = path.replace(/\/+$/, '') || '/'
  if (normalized === '/' || normalized === '/settings') return true
  const allowed = READ_PERMISSIONS[normalized]
  return allowed ? allowed.some(can) : false
}
