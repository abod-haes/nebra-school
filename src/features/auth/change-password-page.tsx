import { Alert, Button, FormField, Spinner } from '@nebra/ui'
import { AlertCircle, ArrowRight, LogOut, Save } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './auth-context'
import { useLocale } from '../../app/locale-context'
import { SchoolAuthShell } from './school-auth-shell'
import { SchoolPasswordField } from './school-password-field'
import './auth.css'

export function ChangePasswordPage() {
  const { user, changePassword, logout } = useAuth()
  const { locale } = useLocale()
  const ar = locale === 'ar'
  const [current, setCurrent] = useState('')
  const [next, setNext] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  if (!user) return <Navigate to="/login" replace/>
  if (!user.security?.mustChangePassword) return <Navigate to="/" replace/>

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (next.length < 8) {
      setError(ar ? 'كلمة المرور الجديدة يجب أن تتكون من 8 أحرف على الأقل' : 'New password must be at least 8 characters')
      return
    }
    setError('')
    setBusy(true)
    try {
      await changePassword(current, next)
    } catch {
      setError(ar ? 'تعذّر تغيير كلمة المرور. تأكد من البيانات وحاول مجدداً.' : 'Unable to change your password. Verify your details and try again.')
    } finally {
      setBusy(false)
    }
  }

  return <SchoolAuthShell
    eyebrow={ar ? 'حماية حسابك' : 'Account security'}
    title={ar ? 'تغيير كلمة المرور' : 'Change your password'}
    description={ar ? 'يجب تعيين كلمة مرور جديدة قبل الدخول إلى لوحة المدرسة.' : 'Please create a new password before accessing your dashboard.'}
  >
    <form className="auth-form-grid" onSubmit={submit}>
      {error && <Alert variant="danger" icon={<AlertCircle size={18}/>}
        title={ar ? 'تعذّر تغيير كلمة المرور' : 'Password change failed'} description={error}/>}
      <FormField label={ar ? 'كلمة المرور الحالية' : 'Current password'} htmlFor="school-current-password" required>
        <SchoolPasswordField id="school-current-password" name="currentPassword" autoComplete="current-password"
          value={current} disabled={busy} required
          placeholder={ar ? 'كلمة المرور الحالية' : 'Current password'}
          onChange={(e) => setCurrent(e.target.value)}/>
      </FormField>
      <FormField label={ar ? 'كلمة المرور الجديدة' : 'New password'} htmlFor="school-new-password" required>
        <SchoolPasswordField id="school-new-password" name="newPassword" autoComplete="new-password"
          value={next} disabled={busy} required minLength={8}
          placeholder={ar ? '8 أحرف على الأقل' : 'At least 8 characters'}
          onChange={(e) => setNext(e.target.value)}/>
      </FormField>
      <Button size="lg" type="submit" className="auth-submit" disabled={busy}>
        {busy ? <Spinner/> : <Save size={17} aria-hidden="true"/>}
        {busy ? (ar ? 'جارٍ الحفظ...' : 'Saving...') : (ar ? 'حفظ كلمة المرور' : 'Save password')}
      </Button>
      <Button type="button" variant="outline" size="lg" className="auth-submit" disabled={busy}
        onClick={() => void logout()}>
        <LogOut size={16} aria-hidden="true"/>
        {ar ? 'تسجيل الخروج' : 'Sign out'}
        <ArrowRight size={15} className="auth-exit-icon" aria-hidden="true"/>
      </Button>
    </form>
  </SchoolAuthShell>
}