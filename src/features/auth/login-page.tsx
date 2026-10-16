import {useState,type FormEvent} from 'react'
import {Navigate} from 'react-router-dom'
import {useAuth} from './auth-context'
import {useLocale} from '../../app/locale-context'
import './auth.css'
export function LoginPage(){const {user,login}=useAuth();const {locale}=useLocale();const ar=locale==='ar';const [phone,setPhone]=useState('');const [password,setPassword]=useState('');const [busy,setBusy]=useState(false);const [error,setError]=useState('')
 if(user)return <Navigate to="/" replace/>
 async function submit(e:FormEvent){e.preventDefault();setError('');setBusy(true);try{await login(phone.trim(),password)}catch{setError(ar?'تعذر تسجيل الدخول. تحقق من البيانات أو حالة الحساب.':'Unable to sign in. Verify credentials and account status.')}finally{setBusy(false)}}
 return <main className="auth-screen"><form className="school-auth-card" onSubmit={submit}><h1>NEBRA</h1><h2>{ar?'تسجيل دخول إدارة المدرسة':'School sign in'}</h2><label>{ar?'رقم الهاتف':'Phone number'}<input autoComplete="tel" type="tel" dir="ltr" value={phone} onChange={e=>setPhone(e.target.value)} required placeholder="+9639..." /></label><label>{ar?'كلمة المرور':'Password'}<input autoComplete="current-password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required minLength={8}/></label>{error&&<p role="alert" className="auth-error">{error}</p>}<button disabled={busy} type="submit">{busy?(ar?'جارٍ الدخول...':'Signing in...'):(ar?'تسجيل الدخول':'Sign in')}</button></form></main>
}
