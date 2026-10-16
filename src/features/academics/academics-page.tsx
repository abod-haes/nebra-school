import {useState,type FormEvent} from 'react'
import {useMutation,useQuery,useQueryClient} from '@tanstack/react-query'
import {Card,PageHeader} from '@nebra/ui'
import {useAuth} from '../auth/auth-context'
import {useInstitution} from '../institution/institution-context'
import {useLocale} from '../../app/locale-context'
import {apiClient} from '../../lib/api/client'
import {institutionPath} from '../institution/institution.api'
import {getApiErrorMessage} from '../../lib/api/error-message'
import {createAcademic,listAcademic,removeAcademic,updateAcademic,type AcademicItem,type AcademicKind} from './academics.api'
import './academics.css'
const kinds:AcademicKind[]=['years','grades','sections','subjects']
const labels:Record<AcademicKind,[string,string]>={years:['السنوات الدراسية','Academic years'],grades:['الصفوف','Grades'],sections:['الشعب','Sections'],subjects:['المواد','Subjects']}
type Year=AcademicItem&{startsAt?:string;endsAt?:string}
const fmt=(v?:string)=>v?.slice(0,10)??''
export function AcademicsPage(){
 const {institutionId}=useAuth(),{can}=useInstitution(),{locale}=useLocale()
 const ar=locale==='ar',id=institutionId!,manage=can('institution.academic.manage')
 const qc=useQueryClient(),[kind,setKind]=useState<AcademicKind>('years'),[name,setName]=useState(''),[code,setCode]=useState(''),[gradeId,setGradeId]=useState(''),[startDate,setStartDate]=useState(''),[endDate,setEndDate]=useState(''),[edit,setEdit]=useState<AcademicItem|null>(null),[error,setError]=useState(''),[confirm,setConfirm]=useState<string|null>(null)
 const key=['institution',id,'academic',kind]
 const records=useQuery({queryKey:key,queryFn:()=>listAcademic(id,kind)})
 const grades=useQuery({queryKey:['institution',id,'academic','grades'],queryFn:()=>listAcademic(id,'grades'),enabled:kind==='sections'})
 const clear=()=>{setName('');setCode('');setGradeId('');setStartDate('');setEndDate('');setEdit(null);setError('');setConfirm(null)}
 const save=useMutation({mutationFn:async()=>{const data:Record<string,string|number>={name:name.trim()};if(kind==='subjects'&&code.trim())data.code=code.trim();if(kind==='sections')data.gradeId=gradeId;if(kind==='years'){if(startDate)data.startsAt=new Date(startDate+'T00:00:00.000Z').toISOString();if(endDate)data.endsAt=new Date(endDate+'T00:00:00.000Z').toISOString()}return edit?updateAcademic(id,kind,edit.id,data):createAcademic(id,kind,data)},onSuccess:()=>{clear();void qc.invalidateQueries({queryKey:['institution',id,'academic']})},onError:e=>setError(getApiErrorMessage(e,ar,ar?'تعذّر حفظ البيانات':'Could not save record'))})
 const remove=useMutation({mutationFn:(target:string)=>removeAcademic(id,kind,target),onSuccess:()=>{setConfirm(null);void qc.invalidateQueries({queryKey:key})},onError:e=>setError(getApiErrorMessage(e,ar,ar?'لا يمكن حذف السجل لوجود بيانات مرتبطة به':'Record cannot be deleted'))})
 const changeStatus=useMutation({mutationFn:({recordId,status}:{recordId:string;status:string})=>apiClient.patch(institutionPath(id,'academic/'+kind+'/'+recordId+'/status'),{status}),onSuccess:()=>void qc.invalidateQueries({queryKey:key}),onError:e=>setError(getApiErrorMessage(e,ar,ar?'تعذّر تغيير الحالة':'Status update failed'))})
 function choose(item:AcademicItem){const year=item as Year;setEdit(item);setName(item.name);setCode(item.code??'');setGradeId(item.gradeId??'');setStartDate(fmt(year.startsAt));setEndDate(fmt(year.endsAt));setError('')}
 function submit(e:FormEvent){e.preventDefault();if(!name.trim()||(kind==='sections'&&!gradeId)){setError(ar?'أكمل الحقول المطلوبة':'Complete required fields');return}if(kind==='years'&&startDate&&endDate&&endDate<startDate){setError(ar?'نهاية السنة يجب أن تكون بعد بدايتها':'End date must be after start date');return}setError('');save.mutate()}
 return <section className="academic-page">
  <PageHeader title={ar?'الهيكل الأكاديمي':'Academic structure'} description={ar?'إدارة السنوات الدراسية والصفوف والشعب والمواد':'Manage academic years, grades, sections and subjects'}/>
  <div className="academic-tabs" role="tablist">{kinds.map(k=><button key={k} role="tab" aria-selected={kind===k} className={kind===k?'active':''} onClick={()=>{clear();setKind(k)}}>{labels[k][ar?0:1]}</button>)}</div>
  <div className="academic-layout">
   <Card className="academic-table-card"><h2>{labels[kind][ar?0:1]}</h2>
   {records.isPending?<p role="status">{ar?'جارٍ التحميل...':'Loading...'}</p>:records.isError?<p role="alert">{ar?'فشل تحميل السجلات':'Failed to load records'} <button onClick={()=>void records.refetch()}>{ar?'إعادة المحاولة':'Retry'}</button></p>:records.data?.length===0?<p>{ar?'لا توجد سجلات':'No records'}</p>:<div className="academic-table-scroll"><table><thead><tr><th>{ar?'الاسم':'Name'}</th>{kind==='subjects'&&<th>{ar?'الرمز':'Code'}</th>}{kind==='sections'&&<th>{ar?'الصف':'Grade'}</th>}{kind==='years'&&<><th>{ar?'تاريخ البداية':'Start date'}</th><th>{ar?'تاريخ النهاية':'End date'}</th></>}<th>{ar?'الإجراءات':'Actions'}</th></tr></thead><tbody>{records.data?.map(row=>{const year=row as Year;return <tr key={row.id}><td>{row.name}</td>{kind==='subjects'&&<td>{row.code??'—'}</td>}{kind==='sections'&&<td>{grades.data?.find(g=>g.id===row.gradeId)?.name??'—'}</td>}{kind==='years'&&<><td>{fmt(year.startsAt)||'—'}</td><td>{fmt(year.endsAt)||'—'}</td></>}<td>{manage&&<><button type="button" onClick={()=>choose(row)}>{ar?'تعديل':'Edit'}</button>{(kind==='years'||kind==='subjects')&&<select aria-label={ar?'الحالة':'Status'} value={row.status??'ACTIVE'} disabled={changeStatus.isPending} onChange={e=>changeStatus.mutate({recordId:row.id,status:e.target.value})}>{['ACTIVE','SUSPENDED','ARCHIVED'].map(value=><option key={value} value={value}>{({ACTIVE:ar?'نشط':'Active',SUSPENDED:ar?'موقوف':'Suspended',ARCHIVED:ar?'مؤرشف':'Archived'} as Record<string,string>)[value]}</option>)}</select>}{(kind==='grades'||kind==='sections')&&<button type="button" onClick={()=>setConfirm(row.id)}>{ar?'حذف':'Delete'}</button>}</>}{confirm===row.id&&<div role="group"><span>{ar?'تأكيد الحذف؟':'Confirm deletion?'}</span><button disabled={remove.isPending} onClick={()=>remove.mutate(row.id)}>{ar?'تأكيد':'Confirm'}</button><button onClick={()=>setConfirm(null)}>{ar?'إلغاء':'Cancel'}</button></div>}</td></tr>})}</tbody></table></div>}
   </Card>
   {manage&&<Card className="academic-form-card"><h2>{edit?(ar?'تعديل':'Edit'):(ar?'إضافة':'Add')} {labels[kind][ar?0:1]}</h2><form onSubmit={submit}><label>{ar?'الاسم':'Name'}<input required maxLength={kind==='years'?80:kind==='subjects'?160:120} value={name} onChange={e=>setName(e.target.value)}/></label>{kind==='subjects'&&<label>{ar?'رمز المادة (اختياري)':'Subject code (optional)'}<input maxLength={80} value={code} onChange={e=>setCode(e.target.value)}/></label>}{kind==='sections'&&<label>{ar?'الصف':'Grade'}<select required value={gradeId} onChange={e=>setGradeId(e.target.value)}><option value="">{ar?'اختر الصف':'Select grade'}</option>{grades.data?.map(g=><option key={g.id} value={g.id}>{g.name}</option>)}</select></label>}{kind==='years'&&<><label>{ar?'تاريخ البداية':'Start date'}<input type="date" value={startDate} onChange={e=>setStartDate(e.target.value)}/></label><label>{ar?'تاريخ النهاية':'End date'}<input type="date" value={endDate} onChange={e=>setEndDate(e.target.value)}/></label></>}{error&&<p role="alert">{error}</p>}<button type="submit" disabled={save.isPending}>{ar?'حفظ':'Save'}</button>{edit&&<button type="button" onClick={clear}>{ar?'إلغاء التعديل':'Cancel edit'}</button>}</form></Card>}
  </div>
 </section>
}
