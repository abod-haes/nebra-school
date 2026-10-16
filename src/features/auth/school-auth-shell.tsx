import { Button, NebraBrandMark } from '@nebra/ui'
import { BookOpenCheck, Building2, GraduationCap, Languages, Moon, ShieldCheck, Sun } from 'lucide-react'
import type { ReactNode } from 'react'
import { useLocale } from '../../app/locale-context'
import { useTheme } from '../../app/theme-context'

type SchoolAuthShellProps = {
  eyebrow: string
  title: string
  description: string
  children: ReactNode
}

export function SchoolAuthShell({ eyebrow, title, description, children }: SchoolAuthShellProps) {
  const { locale, setLocale } = useLocale()
  const { theme, toggleTheme } = useTheme()
  const ar = locale === 'ar'
  const features = [
    { icon: <Building2 size={17} />, text: ar ? 'إدارة الطلاب والكادر التعليمي من مكان واحد' : 'Manage students and school staff in one place' },
    { icon: <BookOpenCheck size={17} />, text: ar ? 'متابعة الدروس والحضور والامتحانات' : 'Track classes, attendance and examinations' },
    { icon: <ShieldCheck size={17} />, text: ar ? 'صلاحيات آمنة تناسب مسؤوليات فريقك' : 'Secure permissions for every team member' },
  ]

  return (
    <main className="auth-page">
      <section className="auth-brand-panel" aria-label={ar ? 'نبرة لإدارة المدارس' : 'NEBRA School Management'}>
        <div className="auth-brand">
          <NebraBrandMark size={54} tone="dark" />
          <div className="auth-brand__copy">
            <strong>NEBRA</strong>
            <span>{ar ? 'إدارة المدرسة' : 'School Management'}</span>
          </div>
        </div>

        <div className="auth-brand-content">
          <span className="auth-brand-kicker">
            <GraduationCap size={16} aria-hidden="true"/>
            {ar ? 'منظومة نبرة التعليمية' : 'NEBRA Education Platform'}
          </span>
          <h1>{ar ? 'كل ما تحتاجه مدرستك، في مكان واحد.' : 'Everything your school needs, in one place.'}</h1>
          <p>
            {ar
              ? 'نظّم العمل اليومي، تابع التقدّم الأكاديمي، ووصل فريقك بالمعلومات التي يحتاجها بكل وضوح.'
              : 'Organize daily operations, track academic progress, and give your team the information they need.'}
          </p>
          <div className="auth-brand-points">
            {features.map((feature) => (
              <div className="auth-brand-point" key={feature.text}>
                <span>{feature.icon}</span>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        <span className="auth-brand-footnote">NEBRA · {ar ? 'إدارة المدرسة' : 'School Dashboard'}</span>
      </section>

      <section className="auth-form-panel">
        <div className="auth-display-controls">
          <Button variant="ghost" size="sm" type="button"
            aria-label={ar ? 'تغيير اللغة' : 'Change language'}
            onClick={() => setLocale(ar ? 'en' : 'ar')}>
            <Languages size={16} aria-hidden="true"/>
            {ar ? 'EN' : 'عربي'}
          </Button>
          <Button variant="ghost" size="icon" type="button"
            aria-label={ar ? 'تغيير المظهر' : 'Change theme'}
            onClick={toggleTheme}>
            {theme === 'light' ? <Moon size={18} aria-hidden="true"/> : <Sun size={18} aria-hidden="true"/>}
          </Button>
        </div>
        <div className="auth-form-shell">
          <div className="auth-mobile-brand">
            <NebraBrandMark size={38}/>
            <strong>NEBRA</strong>
          </div>
          <header className="auth-form-header">
            <span>{eyebrow}</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </header>
          <div className="auth-form-card">{children}</div>
        </div>
      </section>
    </main>
  )
}