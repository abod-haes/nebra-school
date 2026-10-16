import {Navigate,Outlet,Route,Routes} from 'react-router-dom'
import {SchoolLayout} from '../components/layout/school-layout'
import {OverviewPage} from '../features/overview/overview-page'
import {FoundationPage} from '../features/foundation/foundation-page'
import {LoginPage} from '../features/auth/login-page'
import {InstitutionPickerPage} from '../features/auth/institution-picker-page'
import {ChangePasswordPage} from '../features/auth/change-password-page'
import {useAuth} from '../features/auth/auth-context'
import {navigation} from './navigation'
import {InstitutionProvider} from '../features/institution/institution-provider'
import {AcademicsPage} from '../features/academics/academics-page'
import {RecordsPage} from '../features/records/records-page'
function Protected(){const {user,loading,institutionId}=useAuth();if(loading)return <div role="status" style={{padding:30}}>Loading...</div>;if(!user)return <Navigate to="/login" replace/>;if(user.security?.mustChangePassword)return <Navigate to="/change-password" replace/>;if(!institutionId)return <Navigate to="/select-school" replace/>;return <Outlet/>}
export function AppRoutes(){return <Routes><Route path="/login" element={<LoginPage/>}/><Route path="/change-password" element={<ChangePasswordPage/>}/><Route path="/select-school" element={<InstitutionPickerPage/>}/><Route element={<Protected/>}><Route element={<InstitutionProvider><SchoolLayout/></InstitutionProvider>}><Route index element={<OverviewPage/>}/><Route path="academics" element={<AcademicsPage/>}/>{(['students','staff','attendance','schedule','courses','announcements'] as const).map(kind=><Route key={kind} path={kind} element={<RecordsPage kind={kind}/>}/>)}<Route path="homework" element={<RecordsPage kind="homework"/>}/><Route path="exams" element={<RecordsPage kind="exams"/>}/>{navigation.filter(item=>!['/','/academics','/students','/staff','/attendance','/schedule','/courses','/announcements','/homework','/exams'].includes(item.path)).map(item=><Route key={item.path} path={item.path.slice(1)} element={<FoundationPage item={item}/>}/>)}</Route></Route><Route path="*" element={<Navigate to="/" replace/>}/></Routes>}
