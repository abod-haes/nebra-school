import { createContext,useContext } from 'react'
import type { Identity } from './auth.types'
export type AuthState={user:Identity|null;loading:boolean;institutionId:string|null;login:(phone:string,password:string)=>Promise<void>;logout:()=>Promise<void>;changePassword:(currentPassword:string,newPassword:string)=>Promise<void>;selectInstitution:(id:string)=>void}
export const AuthContext=createContext<AuthState|null>(null)
export function useAuth(){const context=useContext(AuthContext);if(!context)throw new Error('AuthProvider missing');return context}