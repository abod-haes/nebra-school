import { useState, type FormEvent } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Card, PageHeader } from '@nebra/ui'
import { useAuth } from '../auth/auth-context'
import { useLocale } from '../../app/locale-context'
import { useInstitution } from '../institution/institution-context'
import { peopleApi, type StaffPayload, type StudentPayload } from './people.api'
import { roleLabel, useAssignableStaffRoles } from './staff-roles'
import { PeopleManagement } from './people-management'
import { StudentImport } from './student-import'
import { getApiErrorMessage } from '../../lib/api/error-message'
import './people.css'

type Kind = 'students' | 'staff'
const emptyStaff = (): StaffPayload => ({ phone: '', displayName: '', roleCodes: [] })

export function PeoplePage({ kind }: { kind: Kind }) {
  const { institutionId } = useAuth()
  const { locale } = useLocale()
  const { can, scope } = useInstitution()
  const ar = locale === 'ar'
  const isDirector = Boolean(scope?.roleCodes.some((code) => code === 'SCHOOL_DIRECTOR' || code === 'INSTITUTE_DIRECTOR'))
  const roleQuery = useAssignableStaffRoles(institutionId ?? '', isDirector && kind === 'staff')
  const client = useQueryClient()
  const [open, setOpen] = useState(false)
  const [error, setError] = useState('')
  const [student, setStudent] = useState<StudentPayload>({ fullName: '', studentCode: '' })
  const [staff, setStaff] = useState<StaffPayload>(emptyStaff)
  const canCreate = kind === 'students'
    ? can('institution.students.create')
    : can('institution.memberships.create') && isDirector
  const mutation = useMutation({
    mutationFn: () => {
      if (!institutionId) throw new Error('No institution is selected')
      if (kind === 'staff' && (!roleQuery.isSuccess || staff.roleCodes.length === 0 ||
        staff.roleCodes.some((code) => !roleQuery.options.some((role) => role.code === code)))) {
        throw new Error(ar ? 'اختر دوراً مسموحاً به للموظف' : 'Select an assignable staff role')
      }
      return kind === 'students'
        ? peopleApi.createStudent(institutionId, student)
        : peopleApi.createStaff(institutionId, staff)
    },
    onSuccess: () => {
      setOpen(false)
      setError('')
      setStudent({ fullName: '', studentCode: '' })
      setStaff(emptyStaff())
      void client.invalidateQueries({ queryKey: ['institution', institutionId] })
    },
    onError: (err) => setError(getApiErrorMessage(
      err, ar, ar ? 'تعذّر إنشاء السجل' : 'Could not create record',
    )),
  })

  function submit(e: FormEvent) {
    e.preventDefault()
    if (!canCreate) return
    setError('')
    mutation.mutate()
  }
  const changeStudent = (patch: Partial<StudentPayload>) => setStudent((old) => ({ ...old, ...patch }))
  const changeStaff = (patch: Partial<StaffPayload>) => setStaff((old) => ({ ...old, ...patch }))

  return <div className="people-page">
    <div className="people-actions">
      {canCreate && <button type="button" onClick={() => { setError(''); setOpen((value) => !value) }}>
        {open ? (ar ? 'إغلاق' : 'Close') : (kind === 'students' ? (ar ? 'إضافة طالب' : 'Add student') : (ar ? 'إضافة موظف' : 'Add staff'))}
      </button>}
    </div>
    {open && canCreate && <Card className="people-form-card">
      <PageHeader title={kind === 'students' ? (ar ? 'إضافة طالب' : 'Create student') : (ar ? 'إضافة موظف' : 'Create staff')}/>
      <form onSubmit={submit} className="people-form">
        {kind === 'students' ? <>
          <label>{ar ? 'اسم الطالب' : 'Student name'}
            <input required minLength={2} maxLength={200} value={student.fullName} onChange={(e) => changeStudent({ fullName: e.target.value })}/></label>
          <label>{ar ? 'رمز الطالب' : 'Student code'}
            <input required maxLength={80} value={student.studentCode} onChange={(e) => changeStudent({ studentCode: e.target.value })}/></label>
          <label>{ar ? 'الهاتف (اختياري)' : 'Phone (optional)'}
            <input dir="ltr" type="tel" value={student.phone ?? ''} onChange={(e) => changeStudent({ phone: e.target.value || undefined })}/></label>
          <label>{ar ? 'تاريخ الميلاد (اختياري)' : 'Birth date (optional)'}
            <input type="date" value={student.birthDate?.slice(0, 10) ?? ''} onChange={(e) =>
              changeStudent({ birthDate: e.target.value ? e.target.value + 'T00:00:00.000Z' : undefined })}/></label>
        </> : <>
          <label>{ar ? 'الاسم' : 'Name'}
            <input minLength={2} maxLength={200} value={staff.displayName ?? ''} onChange={(e) => changeStaff({ displayName: e.target.value })}/></label>
          <label>{ar ? 'رقم الهاتف' : 'Phone'}
            <input required dir="ltr" type="tel" minLength={5} value={staff.phone} onChange={(e) => changeStaff({ phone: e.target.value })}/></label>
          <label>{ar ? 'البريد الإلكتروني (اختياري)' : 'Email (optional)'}
            <input type="email" dir="ltr" value={staff.email ?? ''} onChange={(e) => changeStaff({ email: e.target.value })}/></label>
          <fieldset>
            <legend>{ar ? 'أدوار الموظف' : 'Staff roles'}</legend>
            {roleQuery.isPending ? <p role="status">{ar ? 'جارٍ تحميل الأدوار...' : 'Loading roles...'}</p> :
              roleQuery.isError ? <p role="alert">{ar ? 'تعذّر تحميل الأدوار' : 'Could not load roles'}
                <button type="button" onClick={() => void roleQuery.refetch()}>{ar ? 'إعادة المحاولة' : 'Retry'}</button></p> :
              roleQuery.options.length === 0 ? <p role="alert">{ar ? 'لا توجد أدوار متاحة' : 'No assignable roles'}</p> :
              roleQuery.options.map((role) => <label key={role.id}>
                <input type="checkbox" checked={staff.roleCodes.includes(role.code)}
                  onChange={(e) => changeStaff({ roleCodes: e.target.checked
                    ? [...staff.roleCodes, role.code]
                    : staff.roleCodes.filter((code) => code !== role.code) })}/>
                {roleLabel(role.code, ar, roleQuery.options)} {!role.isSystem && (ar ? '— دور مخصص' : '— Custom role')}
              </label>)}
          </fieldset>
          <label>{ar ? 'كلمة مرور مؤقتة (للحساب الجديد)' : 'Temporary password (new account)'}
            <input type="password" autoComplete="new-password" minLength={8} value={staff.password ?? ''} onChange={(e) =>
              changeStaff({ password: e.target.value || undefined })}/></label>
          <p>{ar ? 'للحساب الجديد كلمة مرور مؤقتة، وسيُطلب من الموظف تغييرها.' : 'New accounts require a temporary password and a mandatory password change.'}</p>
        </>}
        {error && <p role="alert">{error}</p>}
        <button type="submit" disabled={mutation.isPending || (kind === 'staff' &&
          (!roleQuery.isSuccess || staff.roleCodes.length === 0))}>
          {mutation.isPending ? (ar ? 'جارٍ الحفظ...' : 'Saving...') : (ar ? 'حفظ' : 'Save')}
        </button>
      </form>
    </Card>}
    {kind === 'students' && <StudentImport/>}
    <PeopleManagement kind={kind}/>
  </div>
}
