import {createContext,useContext} from 'react'
import type {ScopeInfo} from './institution.api'
export const InstitutionContext=createContext<{scope:ScopeInfo|null;canManage:boolean;canOperate:boolean;can:(permission:string)=>boolean}|null>(null)
export function useInstitution(){const result=useContext(InstitutionContext);if(!result)throw new Error('InstitutionContext is missing');return result}
