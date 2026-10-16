import { apiClient } from '../../lib/api/client'
import type { Identity, Tokens } from './auth.types'
export const authApi={
 login:async(phone:string,password:string)=> (await apiClient.post<Tokens>('/auth/login/password',{phone,password})).data,
 me:async()=> (await apiClient.get<Identity>('/identity/me')).data,
 refresh:async(refreshToken:string)=> (await apiClient.post<Tokens>('/auth/refresh',{refreshToken})).data,
 logout:async()=> (await apiClient.post('/auth/logout')).data,
 changePassword:async(currentPassword:string,newPassword:string)=> (await apiClient.post<Tokens>('/auth/password/change',{currentPassword,newPassword})).data
}