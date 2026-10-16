import { Alert, Button, FormField, Input, Spinner } from '@nebra/ui'
import { AlertCircle, LockKeyhole, Phone } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './auth-context'
import { useLocale } from '../../app/locale-context'
import { SchoolAuthShell } from './school-auth-shell'
import { SchoolPasswordField } from './school-password-field'
import './auth.css'

type FieldErrors = { phone?: string; password?: string }

export function LoginPage() {
  const { user, login } = useAuth()
  const { locale } = useLocale()
  const ar = locale === 'ar'
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [requestError, setRequestError] = useState('')
  const [busy, setBusy] = useState(false)
  if (user) return <Navigate to="/" replace/>

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const normalized = phone.trim()
    const nextErrors: FieldErrors = {}
    if (normalized.length < 5 || normalized.length > 32) nextErrors.phone = ar ? 'أدخل رقم هاتف صحيحاً' : 'Enter a valid phone number'
    if (password.length < 8) nextErrors.password = ar ? 'كلمة المرور يجب أن تكون 8 أحرف على الأقل' : 'Password must contain at least 8 characters'
    setErrors(nextErrors)
    setRequestError('')
    if (Object.keys(nextErrors).length) return
    setBusy(true)
    try {
      await login(normalized, password)
    } catch {
      setRequestError(ar ? 'تعذّر تسجيل الدخول. تحقق من رقم الهاتف وكلمة المرور وحالة حسابك.' : 'Unable to sign in. Check your phone, password and account status.')
    } finally {
      setBusy(false)
    }
  }

  return <SchoolAuthShell
    eyebrow={ar ? 'مرحباً بعودتك' : 'Welcome back'}
    title={ar ? 'تسجيل دخول إدارة المدرسة' : 'Sign in to School Management'}
    description={ar ? 'أدخل بيانات حسابك للمتابعة إلى لوحة المدرسة.' : 'Enter your account details to continue to your school dashboard.'}
  >
    <form className="auth-form-grid" onSubmit={submit} noValidate>
      {requestError && <Alert variant="danger" icon={<AlertCircle size={18}/>}
        title={ar ? 'تعذّر تسجيل الدخول' : 'Sign in failed'} description={requestError}/>}
      <FormField label={ar ? 'رقم الهاتف' : 'Phone number'} htmlFor="school-login-phone" error={errors.phone} required>
        <div className="auth-input-wrap">
          <Phone size={17} aria-hidden="true"/>
          <Input id="school-login-phone" type="tel" name="phone" dir="ltr"
            inputMode="tel" autoComplete="tel" autoFocus minLength={5} maxLength={32}
            placeholder="+963 9XX XXX XXX" value={phone} disabled={busy} aria-invalid={Boolean(errors.phone)}
            onChange={(e) => { setPhone(e.target.value); if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined })) }}/>
        </div>
      </FormField>
      <FormField label={ar ? 'كلمة المرور' : 'Password'} htmlFor="school-login-password" error={errors.password} required>
        <SchoolPasswordField id="school-login-password" name="password"
          autoComplete="current-password" placeholder={ar ? 'أدخل كلمة المرور' : 'Enter your password'}
          value={password} disabled={busy} minLength={8} aria-invalid={Boolean(errors.password)}
          onChange={(e) => { setPassword(e.target.value); if (errors.password) setErrors((prev) => ({ ...prev, password: undefined })) }}/>
      </FormField>
      <Button className="auth-submit" size="lg" type="submit" disabled={busy}>
        {busy ? <Spinner/> : <LockKeyhole size={17} aria-hidden="true"/>}
        {busy ? (ar ? 'جارٍ تسجيل الدخول...' : 'Signing in...') : (ar ? 'تسجيل الدخول' : 'Sign in')}
      </Button>
      <p className="auth-form-footer">{ar ? 'الدخول مخصص للكادر المخوّل في المدرسة.' : 'Access is restricted to authorized school staff.'}</p>
    </form>
  </SchoolAuthShell>
}