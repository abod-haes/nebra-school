import {lazy,Suspense} from 'react'
import {Navigate,Outlet,Route,Routes} from 'react-router-dom'
import {SchoolLayout} from '../components/layout/school-layout'
import {useAuth} from '../features/auth/auth-context'
import {navigation} from './navigation'
import {InstitutionProvider} from '../features/institution/institution-provider'
const OverviewPage=lazy(()=>import('../features/overview/overview-page').then(m=>({default:m.OverviewPage})))
const FoundationPage=lazy(()=>import('../features/foundation/foundation-page').then(m=>({default:m.FoundationPage})))
const LoginPage=lazy(()=>import('../features/auth/login-page').then(m=>({default:m.LoginPage})))
const InstitutionPickerPage=lazy(()=>import('../features/auth/institution-picker-page').then(m=>({default:m.InstitutionPickerPage})))
const ChangePasswordPage=lazy(()=>import('../features/auth/change-password-page').then(m=>({default:m.ChangePasswordPage})))
const AcademicsPage=lazy(()=>import('../features/academics/academics-page').then(m=>({default:m.AcademicsPage})))
const RecordsPage=lazy(()=>import('../features/records/records-page').then(m=>({default:m.RecordsPage})))
const PeoplePage=lazy(()=>import('../features/people/people-page').then(m=>({default:m.PeoplePage})))
function Protected(){const {user,loading,institutionId}=useAuth();if(loading)return <div role="status" style={{padding:30}}>Loading...</div>;if(!user)return <Navigate to="/login" replace/>;if(user.security?.mustChangePassword)return <Navigate to="/change-password" replace/>;if(!institutionId)return <Navigate to="/select-school" replace/>;return <Outlet/>}
export function AppRoutes(){return <Suspense fallback={<div role="status" style={{padding:30}}>جارٍ تحميل الصفحة...</div>}><Routes><Route path="/login" element={<LoginPage/>}/><Route path="/change-password" element={<ChangePasswordPage/>}/><Route path="/select-school" element={<InstitutionPickerPage/>}/><Route element={<Protected/>}><Route element={<InstitutionProvider><SchoolLayout/></InstitutionProvider>}><Route index element={<OverviewPage/>}/><Route path="academics" element={<AcademicsPage/>}/><Route path="students" element={<PeoplePage kind="students"/>}/><Route path="staff" element={<PeoplePage kind="staff"/>}/>{(['attendance','schedule','courses','announcements'] as const).map(kind=><Route key={kind} path={kind} element={<RecordsPage kind={kind}/>}/>)}<Route path="homework" element={<RecordsPage kind="homework"/>}/><Route path="exams" element={<RecordsPage kind="exams"/>}/>{navigation.filter(item=>!['/','/academics','/students','/staff','/attendance','/schedule','/courses','/announcements','/homework','/exams'].includes(item.path)).map(item=><Route key={item.path} path={item.path.slice(1)} element={<FoundationPage item={item}/>}/>)}</Route></Route><Route path="*" element={<Navigate to="/" replace/>}/></Routes></Suspense>}
