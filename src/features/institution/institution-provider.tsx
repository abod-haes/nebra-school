import {useQuery} from '@tanstack/react-query'
import {type PropsWithChildren} from 'react'
import {useAuth} from '../auth/auth-context'
import {getScope} from './institution.api'
import {InstitutionContext} from './institution-context'
export function InstitutionProvider({children}:PropsWithChildren){
 const {institutionId}=useAuth()
 const query=useQuery({queryKey:['institution',institutionId,'scope'],queryFn:()=>getScope(institutionId!),enabled:Boolean(institutionId),retry:false})
 if(query.isPending)return <main role="status" style={{padding:28}}>جارٍ تحميل صلاحيات المدرسة...</main>
 if(query.isError)return <main role="alert" style={{padding:28}}><h2>تعذر التحقق من صلاحيات المدرسة</h2><button onClick={()=>void query.refetch()}>إعادة المحاولة</button></main>
 const scope=query.data??null
 const codes=Array.isArray(scope?.permissionCodes)?scope.permissionCodes:[]
 const can=(permission:string)=>codes.includes('*')||codes.includes(permission)
 return <InstitutionContext.Provider value={{scope,can,canManage:can('institution.students.create')||can('institution.students.update'),canOperate:can('institution.schedule.create')||can('institution.homework.create')||can('institution.attendance.create')}}>{children}</InstitutionContext.Provider>
}