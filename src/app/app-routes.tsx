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
const EnrollmentsPage=lazy(()=>import('../features/enrollments/enrollments-page').then(m=>({default:m.EnrollmentsPage})))
const AnnouncementsPage=lazy(()=>import('../features/operations/announcements-page').then(m=>({default:m.AnnouncementsPage})))
const OperationPage=lazy(()=>import('../features/operations/operation-page').then(m=>({default:m.OperationPage})))
const CoursesPage=lazy(()=>import('../features/courses/courses-page').then(m=>({default:m.CoursesPage})))
const ReportsPage=lazy(()=>import('../features/reports/reports-page').then(m=>({default:m.ReportsPage})))
const FinancePage=lazy(()=>import('../features/finance/finance-page').then(m=>({default:m.FinancePage})))
const ExamsPage=lazy(()=>import('../features/exams/exams-page').then(m=>({default:m.ExamsPage})))
const PeoplePage=lazy(()=>import('../features/people/people-page').then(m=>({default:m.PeoplePage})))
function Protected(){const {user,loading,institutionId}=useAuth();if(loading)return <div role="status" style={{padding:30}}>Loading...</div>;if(!user)return <Navigate to="/login" replace/>;if(user.security?.mustChangePassword)return <Navigate to="/change-password" replace/>;if(!institutionId)return <Navigate to="/select-school" replace/>;return <Outlet/>}
export function AppRoutes(){return <Suspense fallback={<div role="status" style={{padding:30}}>جارٍ تحميل الصفحة...</div>}><Routes><Route path="/login" element={<LoginPage/>}/><Route path="/change-password" element={<ChangePasswordPage/>}/><Route path="/select-school" element={<InstitutionPickerPage/>}/><Route element={<Protected/>}><Route element={<InstitutionProvider><SchoolLayout/></InstitutionProvider>}><Route index element={<OverviewPage/>}/><Route path="academics" element={<AcademicsPage/>}/><Route path="students" element={<PeoplePage kind="students"/>}/><Route path="enrollments" element={<EnrollmentsPage/>}/><Route path="staff" element={<PeoplePage kind="staff"/>}/><Route path="courses" element={<CoursesPage/>}/>{(['homework','attendance','schedule'] as const).map(kind=><Route key={kind} path={kind} element={<OperationPage kind={kind}/>}/>)}<Route path="announcements" element={<AnnouncementsPage/>}/><Route path="exams" element={<ExamsPage/>}/><Route path="finance" element={<FinancePage/>}/><Route path="reports" element={<ReportsPage/>}/>{navigation.filter(item=>!['/','/academics','/students','/staff','/enrollments','/attendance','/schedule','/courses','/announcements','/homework','/exams','/finance','/reports'].includes(item.path)).map(item=><Route key={item.path} path={item.path.slice(1)} element={<FoundationPage item={item}/>}/>)}</Route></Route><Route path="*" element={<Navigate to="/" replace/>}/></Routes></Suspense>}
