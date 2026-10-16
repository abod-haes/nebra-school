import {apiClient} from '../../lib/api/client'
export type ScopeInfo={membershipId:string;roleCodes:string[];permissionCodes:string[];fullInstitutionAccess:boolean;teacherAssignments:unknown[];supervisorScopes:unknown[]}
export async function getScope(institutionId:string){const response=await apiClient.get<ScopeInfo>('/institutions/'+institutionId+'/scopes/me');return response.data}
export function institutionPath(id:string,path:string){return '/institutions/'+encodeURIComponent(id)+'/'+path}