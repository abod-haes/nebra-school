import {useState,type FormEvent} from 'react'
import {useMutation,useQuery,useQueryClient} from '@tanstack/react-query'
import {Card,PageHeader} from '@nebra/ui'
import {useAuth} from '../auth/auth-context'
import {useInstitution} from '../institution/institution-context'
import {useLocale} from '../../app/locale-context'
import {listAcademic} from '../academics/academics.api'
import {apiClient} from '../../lib/api/client'
import {institutionPath} from '../institution/institution.api'
import './operations.css'
import {ManageExisting} from './manage-existing'
type Kind='schedule'|'homework'|'attendance'
type Form={title:string;description:string;subjectId:string;academicYearId:string;gradeId:string;sectionId:string;dayOfWeek:string;startTime:string;endTime:string;room:string;attendanceDate:string;dueAt:string}
const initial:Form={title:'',description:'',subjectId:'',academicYearId:'',gradeId:'',sectionId:'',dayOfWeek:'MONDAY',startTime:'08:00',endTime:'09:00',room:'',attendanceDate:'',dueAt:''}
const weekdays=['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']
const weekdayArabic=['الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت']
const endpoint:Record<Kind,string>={schedule:'schedule',homework:'homeworks',attendance:'attendance/sessions'}
const minutes=(s:string)=>{const [h,m]=s.split(':').map(Number);return h*60+m}
export function OperationPage({kind}:{kind:Kind}){
 const {institutionId}=useAuth();const {canManage}=useInstitution();const {locale}=useLocale();const ar=locale==='ar';const id=institutionId!;const qc=useQueryClient();const [open,setOpen]=useState(false),[form,setForm]=useState<Form>(initial),[error,setError]=useState('')
 const subjects=useQuery({queryKey:['institution',id,'academic','subjects'],queryFn:()=>listAcademic(id,'subjects')})
 const years=useQuery({queryKey:['institution',id,'academic','years'],queryFn:()=>listAcademic(id,'years'),enabled:kind!=='homework'})
 const grades=useQuery({queryKey:['institution',id,'academic','grades'],queryFn:()=>listAcademic(id,'grades')})
 const sections=useQuery({queryKey:['institution',id,'academic','sections',form.gradeId],queryFn:()=>apiClient.get(institutionPath(id,'academic/sections'),{params:{gradeId:form.gradeId}}).then(r=>r.data as {id:string;name:string}[]),enabled:!!form.gradeId})
 const update=(field:keyof Form,value:string)=>setForm(f=>({...f,[field]:value,...(field==='gradeId'?{sectionId:''}:{})}))
 const mutation=useMutation({mutationFn:()=>{let body:Record<string,unknown>;if(kind==='homework')body={title:form.title.trim(),description:form.description.trim()||undefined,subjectId:form.subjectId,gradeId:form.gradeId||undefined,sectionId:form.sectionId||undefined,dueAt:form.dueAt?new Date(form.dueAt).toISOString():undefined};else if(kind==='schedule')body={subjectId:form.subjectId,academicYearId:form.academicYearId||undefined,gradeId:form.gradeId||undefined,sectionId:form.sectionId||undefined,dayOfWeek:form.dayOfWeek,startMinute:minutes(form.startTime),endMinute:minutes(form.endTime),room:form.room||undefined};else body={attendanceDate:new Date(form.attendanceDate+'T12:00:00').toISOString(),academicYearId:form.academicYearId||undefined,sectionId:form.sectionId||undefined,subjectId:form.subjectId||undefined};return apiClient.post(institutionPath(id,endpoint[kind]),body)},onSuccess:()=>{setError('');setOpen(false);setForm(initial);void qc.invalidateQueries({queryKey:['institution',id,'records',kind]})},onError:()=>setError(ar?'لم يتم الحفظ. تحقق من البيانات والصلاحيات والتعارضات.':'Could not save. Check data, permissions or conflicts.')})
 function submit(e:FormEvent){e.preventDefault();if((kind==='schedule'||kind==='attendance')&&(!form.academicYearId||!form.sectionId)){setError(ar?'السنة الدراسية والشعبة إلزاميتان':'Academic year and section are required');return}if(kind==='schedule'&&minutes(form.endTime)<=minutes(form.startTime)){setError(ar?'وقت النهاية يجب أن يكون بعد البداية':'End time must be after start time');return}setError('');mutation.mutate()}
 return <div className="operation-page"><div className="operation-actions">{canManage&&<button type="button" onClick={()=>setOpen(v=>!v)}>{open?(ar?'إغلاق':'Close'):(ar?'إضافة':'Add')}</button>}</div>{open&&<Card className="operation-card"><PageHeader title={ar?(kind==='schedule'?'إضافة حصة':kind==='homework'?'إضافة واجب':'تسجيل جلسة حضور'):(kind==='schedule'?'Add class':kind==='homework'?'Add homework':'Create attendance session')}/><form onSubmit={submit}>
 {kind==='homework'&&<><label>{ar?'عنوان الواجب':'Title'}<input required maxLength={200} value={form.title} onChange={e=>update('title',e.target.value)}/></label><label>{ar?'الوصف':'Description'}<textarea rows={3} value={form.description} onChange={e=>update('description',e.target.value)}/></label></>}
 <label>{ar?'المادة':'Subject'}<select required={kind!=='attendance'} value={form.subjectId} onChange={e=>update('subjectId',e.target.value)}><option value="">{ar?'اختر المادة':'Select subject'}</option>{subjects.data?.map(x=><option key={x.id} value={x.id}>{x.name}</option>)}</select></label>
 {kind!=='homework'&&<label>{ar?'السنة الدراسية':'Academic year'}<select required value={form.academicYearId} onChange={e=>update('academicYearId',e.target.value)}><option value="">{ar?'اختر السنة':'Select year'}</option>{years.data?.map(x=><option key={x.id} value={x.id}>{x.name}</option>)}</select></label>}
 <label>{ar?'الصف':'Grade'}<select value={form.gradeId} onChange={e=>update('gradeId',e.target.value)}><option value="">{ar?'اختر الصف':'Select grade'}</option>{grades.data?.map(x=><option key={x.id} value={x.id}>{x.name}</option>)}</select></label>
 <label>{ar?'الشعبة':'Section'}<select required={kind!=='homework'} disabled={!form.gradeId} value={form.sectionId} onChange={e=>update('sectionId',e.target.value)}><option value="">{ar?'اختر الشعبة':'Select section'}</option>{sections.data?.map(x=><option key={x.id} value={x.id}>{x.name}</option>)}</select></label>
 {kind==='schedule'&&<><label>{ar?'اليوم':'Weekday'}<select value={form.dayOfWeek} onChange={e=>update('dayOfWeek',e.target.value)}>{weekdays.map((day,i)=><option key={day} value={day}>{ar?weekdayArabic[i]:day}</option>)}</select></label><label>{ar?'بداية الحصة':'Start time'}<input type="time" required value={form.startTime} onChange={e=>update('startTime',e.target.value)}/></label><label>{ar?'نهاية الحصة':'End time'}<input type="time" required value={form.endTime} onChange={e=>update('endTime',e.target.value)}/></label><label>{ar?'القاعة (اختياري)':'Room (optional)'}<input maxLength={120} value={form.room} onChange={e=>update('room',e.target.value)}/></label></>}
 {kind==='attendance'&&<label>{ar?'تاريخ الحضور':'Attendance date'}<input type="date" required value={form.attendanceDate} onChange={e=>update('attendanceDate',e.target.value)}/></label>}
 {kind==='homework'&&<label>{ar?'تاريخ التسليم (اختياري)':'Due date (optional)'}<input type="datetime-local" value={form.dueAt} onChange={e=>update('dueAt',e.target.value)}/></label>}
 {error&&<p role="alert">{error}</p>}<button disabled={mutation.isPending}>{mutation.isPending?(ar?'جارٍ الحفظ...':'Saving...'):(ar?'حفظ':'Save')}</button></form></Card>}<ManageExisting kind={kind}/></div>
}
