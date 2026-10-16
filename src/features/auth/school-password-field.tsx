import { Button, Input } from '@nebra/ui'
import { Eye, EyeOff } from 'lucide-react'
import { useState, type InputHTMLAttributes } from 'react'
import { useLocale } from '../../app/locale-context'

type SchoolPasswordFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>
export function SchoolPasswordField({ className, disabled, ...props }: SchoolPasswordFieldProps) {
  const [visible, setVisible] = useState(false)
  const { locale } = useLocale()
  const ar = locale === 'ar'
  return <div className="auth-password-field">
    <Input
      type={visible ? 'text' : 'password'}
      className={['auth-password-field__input', className].filter(Boolean).join(' ')}
      disabled={disabled}
      {...props}
    />
    <Button type="button" variant="ghost" size="icon" className="auth-password-field__toggle"
      disabled={disabled}
      aria-label={visible ? (ar ? 'إخفاء كلمة المرور' : 'Hide password') : (ar ? 'إظهار كلمة المرور' : 'Show password')}
      aria-pressed={visible}
      onClick={() => setVisible((value) => !value)}>
      {visible ? <EyeOff size={17} aria-hidden="true"/> : <Eye size={17} aria-hidden="true"/>}
    </Button>
  </div>
}