import { Alert, Button } from '@nebra/ui'
import { ArrowLeft, Building2, LogOut } from 'lucide-react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './auth-context'
import { useLocale } from '../../app/locale-context'
import { SchoolAuthShell } from './school-auth-shell'
import './auth.css'

export function InstitutionPickerPage() {
  const { user, institutionId, selectInstitution, logout } = useAuth()
  const { locale } = useLocale()
  const ar = locale === 'ar'
  if (!user) return <Navigate to="/login" replace/>
  if (user.security?.mustChangePassword) return <Navigate to="/change-password" replace/>
  if (institutionId) return <Navigate to="/" replace/>
  const schools = user.memberships.filter((member) =>
    member.status === 'ACTIVE' && member.institution.status === 'ACTIVE' && member.institution.type === 'SCHOOL',
  )
  return <SchoolAuthShell
    eyebrow={ar ? 'حسابك المدرسي' : 'Your school account'}
    title={ar ? 'اختر المدرسة' : 'Choose a school'}
    description={ar ? 'اختر المدرسة التي تريد إدارة بياناتها للمتابعة.' : 'Choose the school you want to manage to continue.'}
  >
    <div className="auth-form-grid">
      {schools.length ? <div className="school-auth-choices">
        {schools.map((member) => (
          <button type="button" className="school-auth-choice" key={member.id}
            onClick={() => selectInstitution(member.institution.id)}>
            <span className="school-auth-choice__icon"><Building2 size={20} aria-hidden="true"/></span>
            <strong>{member.institution.name}</strong>
            <ArrowLeft className="school-auth-choice__arrow" size={18} aria-hidden="true"/>
          </button>
        ))}
      </div> : <Alert variant="warning" title={ar ? 'لا توجد عضوية مدرسة فعّالة' : 'No active school membership'}
        description={ar ? 'تواصل مع مسؤول المنصة للتأكد من ربط حسابك بمدرسة فعّالة.' : 'Contact the platform administrator to link your account to an active school.'}/>}
      <Button type="button" variant="outline" size="lg" className="auth-submit" onClick={() => void logout()}>
        <LogOut size={17} aria-hidden="true"/>{ar ? 'تسجيل الخروج' : 'Sign out'}
      </Button>
    </div>
  </SchoolAuthShell>
}