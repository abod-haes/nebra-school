import { Navigate, Route, Routes } from 'react-router-dom'
import { SchoolLayout } from '../components/layout/school-layout'
import { OverviewPage } from '../features/overview/overview-page'
import { FoundationPage } from '../features/foundation/foundation-page'
import { navigation } from './navigation'
export function AppRoutes(){return <Routes><Route element={<SchoolLayout/>}><Route index element={<OverviewPage/>}/>{navigation.filter(item=>item.path!=='/').map(item=><Route key={item.path} path={item.path.slice(1)} element={<FoundationPage item={item}/>}/>)}</Route><Route path="*" element={<Navigate to="/" replace/>}/></Routes>}
