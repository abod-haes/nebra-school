import { useCallback,useEffect,useState,type PropsWithChildren } from 'react'
import { AuthContext } from './auth-context'
import { authApi } from './auth.api'
import { clearTokens,getTokens,saveTokens } from './auth.storage'
import type { Identity,Tokens } from './auth.types'
import { setSessionExpiredHandler } from '../../lib/api/client'
const INSTITUTION_KEY='nebra.school.institution'
function allowed(user:Identity){return user.memberships.filter(m=>m.status==='ACTIVE'&&m.institution.status==='ACTIVE'&&m.institution.type==='SCHOOL')}
export function AuthProvider({children}:PropsWithChildren){
 const [user,setUser]=useState<Identity|null>(null)
 const [loading,setLoading]=useState(()=>Boolean(getTokens()))
 const [institutionId,setInstitutionId]=useState<string|null>(null)
 const clear=useCallback(()=>{clearTokens();sessionStorage.removeItem(INSTITUTION_KEY);setUser(null);setInstitutionId(null)},[])
 const initialize=useCallback(async(tokens:Tokens)=>{saveTokens(tokens);const me=await authApi.me();const schools=allowed(me);setUser(me);const remembered=sessionStorage.getItem(INSTITUTION_KEY);const selected=schools.find(m=>m.institution.id===remembered)?.institution.id??(schools.length===1?schools[0].institution.id:null);setInstitutionId(selected);if(selected)sessionStorage.setItem(INSTITUTION_KEY,selected)},[])
 useEffect(()=>{setSessionExpiredHandler(clear);if(!getTokens())return;authApi.me().then(me=>{setUser(me);const schools=allowed(me);const previous=sessionStorage.getItem(INSTITUTION_KEY);const selected=schools.find(m=>m.institution.id===previous)?.institution.id??(schools.length===1?schools[0].institution.id:null);setInstitutionId(selected);if(selected)sessionStorage.setItem(INSTITUTION_KEY,selected);else sessionStorage.removeItem(INSTITUTION_KEY)}).catch(clear).finally(()=>setLoading(false));return()=>setSessionExpiredHandler(null)},[clear])
 const login=async(phone:string,password:string)=>{const tokens=await authApi.login(phone,password);try{await initialize(tokens)}catch(err){clear();throw err}}
 const logout=async()=>{try{if(getTokens())await authApi.logout()}finally{clear()}}
 const changePassword=async(currentPassword:string,newPassword:string)=>{const tokens=await authApi.changePassword(currentPassword,newPassword);await initialize(tokens)}
 const selectInstitution=(id:string)=>{if(!user||!allowed(user).some(m=>m.institution.id===id))return;sessionStorage.setItem(INSTITUTION_KEY,id);setInstitutionId(id)}
 return <AuthContext.Provider value={{user,loading,institutionId,login,logout,changePassword,selectInstitution}}>{children}</AuthContext.Provider>
}