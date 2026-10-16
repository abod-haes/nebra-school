import {apiClient} from '../../lib/api/client'
import {institutionPath} from '../institution/institution.api'
export type AcademicItem={id:string;name:string;gradeId?:string;status?:string;code?:string;sortOrder?:number}
export type AcademicKind='years'|'grades'|'sections'|'subjects'
export async function listAcademic(institutionId:string,kind:AcademicKind){const response=await apiClient.get<AcademicItem[]>(institutionPath(institutionId,'academic/'+kind));return response.data}
export async function createAcademic(institutionId:string,kind:AcademicKind,payload:Record<string,string|number>){const response=await apiClient.post(institutionPath(institutionId,'academic/'+kind),payload);return response.data}
export async function updateAcademic(institutionId:string,kind:AcademicKind,id:string,payload:Record<string,string|number>){const response=await apiClient.patch(institutionPath(institutionId,'academic/'+kind+'/'+id),payload);return response.data}
export async function removeAcademic(institutionId:string,kind:AcademicKind,id:string){await apiClient.delete(institutionPath(institutionId,'academic/'+kind+'/'+id))}