import axios,{type InternalAxiosRequestConfig} from 'axios'
import {env} from '../../config/env'
import {clearTokens,getTokens,saveTokens} from '../../features/auth/auth.storage'
import type {Tokens} from '../../features/auth/auth.types'
export const apiClient=axios.create({baseURL:env.apiBaseUrl,timeout:15000,headers:{Accept:'application/json'}})
const refreshApi=axios.create({baseURL:env.apiBaseUrl})
let expired:(()=>void)|null=null
export function setSessionExpiredHandler(cb:(()=>void)|null){expired=cb}
let refreshing:Promise<Tokens>|null=null
apiClient.interceptors.request.use(config=>{const token=getTokens()?.accessToken;if(token)config.headers.set('Authorization','Bearer '+token);return config})
type Retry=InternalAxiosRequestConfig&{_retry?:boolean}
apiClient.interceptors.response.use(r=>r,async error=>{
 if(!axios.isAxiosError(error)||error.response?.status!==401)return Promise.reject(error)
 const original=error.config as Retry|undefined
 const tokens=getTokens()
 if(!original||original._retry||!tokens?.refreshToken||original.url?.startsWith('/auth/')){clearTokens();expired?.();return Promise.reject(error)}
 original._retry=true
 try{
  refreshing??=refreshApi.post<Tokens>('/auth/refresh',{refreshToken:tokens.refreshToken}).then(r=>r.data).finally(()=>{refreshing=null})
  const next=await refreshing;saveTokens(next);original.headers.set('Authorization','Bearer '+next.accessToken);return apiClient.request(original)
 }catch(e){clearTokens();expired?.();return Promise.reject(e)}
})
