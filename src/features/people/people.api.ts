import {apiClient} from '../../lib/api/client'
import {institutionPath} from '../institution/institution.api'
export type StudentPayload={studentCode:string;fullName:string;phone?:string;birthDate?:string}
export type StaffPayload={displayName?:string;phone:string;email?:string;password?:string;roleCodes:string[]}
export const peopleApi={
 createStudent:async(id:string,body:StudentPayload)=>(await apiClient.post(institutionPath(id,'students'),body)).data,
 updateStudent:async(id:string,recordId:string,body:StudentPayload)=>(await apiClient.patch(institutionPath(id,'students/'+recordId),body)).data,
 updateStudentStatus:async(id:string,recordId:string,status:string)=>(await apiClient.patch(institutionPath(id,'students/'+recordId+'/status'),{status})).data,
 createStaff:async(id:string,body:StaffPayload)=>(await apiClient.post(institutionPath(id,'memberships'),body)).data,
}
