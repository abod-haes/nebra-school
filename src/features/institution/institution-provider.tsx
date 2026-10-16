import {useQuery} from '@tanstack/react-query'
import {type PropsWithChildren} from 'react'
import {useAuth} from '../auth/auth-context'
import {getScope} from './institution.api'
import {InstitutionContext} from './institution-context'
export function InstitutionProvider({children}:PropsWithChildren){const {institutionId}=useAuth();const query=useQuery({queryKey:['institution',institutionId,'scope'],queryFn:()=>getScope(institutionId!),enabled:Boolean(institutionId),retry:false});if(query.isPending)return <main role="status" style={{padding:28}}>جارٍ تحميل صلاحيات المدرسة...</main>;if(query.isError)return <main style={{padding:28}}><h2>تعذر التحقق من صلاحيات المدرسة</h2><button onClick={()=>void query.refetch()}>إعادة المحاولة</button></main>;const scope=query.data??null;return <InstitutionContext.Provider value={{scope,canManage:Boolean(scope?.roleCodes.some(code=>['SCHOOL_DIRECTOR','ADMINISTRATIVE_STAFF'].includes(code))),canOperate:Boolean(scope?.roleCodes.some(code=>['SCHOOL_DIRECTOR','ADMINISTRATIVE_STAFF','SUPERVISOR','TEACHER'].includes(code)))}}>{children}</InstitutionContext.Provider>}
