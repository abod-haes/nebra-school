import {useState,type FormEvent} from 'react'
import {useMutation,useQuery,useQueryClient} from '@tanstack/react-query'
import {Card,PageHeader} from '@nebra/ui'
import {useAuth} from '../auth/auth-context'
import {useInstitution} from '../institution/institution-context'
import {useLocale} from '../../app/locale-context'
import {apiClient} from '../../lib/api/client'
import {institutionPath} from '../institution/institution.api'
import {getApiErrorMessage} from '../../lib/api/error-message'
import './settings.css'
type Permission={code:string;description?:string}
type Role={id:string;name:string;slug?:string;description?:string;version:number;isSystem:boolean;isActive:boolean;permissions:Array<{permission:Permission}>;_count?:{membershipAssignments:number}}
export function SettingsPage(){
 const {institutionId}=useAuth(),{scope}=useInstitution(),{locale}=useLocale();const ar=locale==='ar',id=institutionId!,qc=useQueryClient()
 const canManage=Boolean(scope?.roleCodes.some(x=>x==='SCHOOL_DIRECTOR'||x==='INSTITUTE_DIRECTOR')||scope?.permissionCodes.includes('*'))
 const base=institutionPath(id,'access')
 const roles=useQuery({queryKey:['institution',id,'custom-roles'],queryFn:()=>apiClient.get<Role[]>(base+'/roles').then(r=>r.data),enabled:canManage})
 const permissions=useQuery({queryKey:['institution',id,'assignable-permissions'],queryFn:()=>apiClient.get<Permission[]>(base+'/permissions/assignable').then(r=>r.data),enabled:canManage})
 const [creating,setCreating]=useState(false),[selected,setSelected]=useState<string|null>(null),[name,setName]=useState(''),[slug,setSlug]=useState(''),[description,setDescription]=useState(''),[codes,setCodes]=useState<string[]>([]),[error,setError]=useState(''),[notice,setNotice]=useState(''),[confirm,setConfirm]=useState(false)
 const current=roles.data?.find(r=>r.id===selected)
 const invalidate=()=>void qc.invalidateQueries({queryKey:['institution',id]})
 function open(role?:Role){setCreating(!role);setSelected(role?.id??null);setName(role?.name??'');setSlug(role?.slug??'');setDescription(role?.description??'');setCodes(role?.permissions.map(x=>x.permission.code)??[]);setError('');setNotice('');setConfirm(false)}
 const save=useMutation({mutationFn:async()=>{if(current){await apiClient.patch(base+'/roles/'+current.id,{expectedVersion:current.version,name:name.trim(),description:description.trim(),permissionCodes:codes})}else await apiClient.post(base+'/roles',{name:name.trim(),slug:slug.trim().toLowerCase(),description:description.trim(),permissionCodes:codes})},onSuccess:()=>{setNotice(ar?'تم حفظ الدور':'Role saved');setError('');invalidate();setSelected(null);setCreating(false);setName('');setCodes([])},onError:e=>{setError(getApiErrorMessage(e,ar,ar?'تعذر حفظ الدور، حدّث البيانات ثم أعد المحاولة':'Could not save role'));invalidate()}})
 const toggle=useMutation({mutationFn:async()=>{if(!current)return;return apiClient.patch(base+'/roles/'+current.id+'/status',{expectedVersion:current.version,isActive:!current.isActive})},onSuccess:()=>{setConfirm(false);setNotice(ar?'تم تحديث حالة الدور':'Role status updated');invalidate()},onError:e=>{setError(getApiErrorMessage(e,ar,ar?'تعذر تحديث الدور':'Could not update role'));invalidate()}})
 function submit(e:FormEvent){e.preventDefault();setNotice('');setError('');save.mutate()}
 return <section className="settings-page"><PageHeader title={ar?'الإعدادات والصلاحيات':'Settings and permissions'} description={ar?'أدوار مخصصة وصلاحيات المؤسسة':'Institution custom roles and access permissions'}/>
 <Card><h2>{ar?'المؤسسة الحالية':'Current institution'}</h2><p>{ar?'صلاحياتك الفعلية في المؤسسة':'Your assigned institution permissions'}: {scope?.permissionCodes.length??0}</p>{scope?.roleCodes.map(c=><span className="settings-role-code" key={c}>{c}</span>)}</Card>
 {!canManage?<Card><p>{ar?'إدارة الأدوار المخصصة متاحة لمدير المؤسسة فقط.':'Only institution directors can manage custom roles.'}</p></Card>:<>
 <Card><div className="settings-top"><h2>{ar?'الأدوار والصلاحيات':'Roles and permissions'}</h2><button onClick={()=>open()}>{ar?'إضافة دور':'Add role'}</button></div>{roles.isPending?<p role="status">{ar?'جارٍ التحميل':'Loading'}</p>:roles.isError?<button onClick={()=>void roles.refetch()}>{ar?'إعادة المحاولة':'Retry'}</button>:<div className="settings-table"><table><thead><tr><th>{ar?'الدور':'Role'}</th><th>{ar?'النوع':'Type'}</th><th>{ar?'الحالة':'Status'}</th><th>{ar?'الإجراء':'Action'}</th></tr></thead><tbody>{roles.data?.map(r=><tr key={r.id}><td>{r.name}</td><td>{r.isSystem?(ar?'أساسي':'System'):(ar?'مخصص':'Custom')}</td><td>{r.isActive?(ar?'نشط':'Active'):(ar?'غير نشط':'Inactive')}</td><td>{!r.isSystem&&<button onClick={()=>open(r)}>{ar?'تعديل':'Edit'}</button>}</td></tr>)}</tbody></table></div>}</Card>
 {(creating||selected!==null)&&<Card><h2>{current?(ar?'تعديل دور':'Edit role'):(ar?'إضافة دور مخصص':'Create custom role')}</h2><form onSubmit={submit} className="settings-form"><label>{ar?'اسم الدور':'Role name'}<input required minLength={2} maxLength={120} value={name} onChange={e=>setName(e.target.value)}/></label>{!current&&<label>{ar?'الرمز بالإنجليزية':'Slug'}<input required pattern="[a-z][a-z0-9-]{2,63}" value={slug} onChange={e=>setSlug(e.target.value.toLowerCase())}/></label>}<label>{ar?'الوصف':'Description'}<textarea maxLength={500} value={description} onChange={e=>setDescription(e.target.value)}/></label><fieldset><legend>{ar?'الصلاحيات القابلة للتفويض':'Assignable permissions'}</legend>{permissions.isPending?<p>{ar?'جارٍ التحميل':'Loading'}</p>:permissions.isError?<p role="alert">{ar?'تعذر تحميل الصلاحيات':'Could not load permissions'}</p>:<div className="settings-permissions">{permissions.data?.map(p=><label key={p.code}><input type="checkbox" checked={codes.includes(p.code)} onChange={e=>setCodes(v=>e.target.checked?[...v,p.code]:v.filter(x=>x!==p.code))}/><span>{p.description||p.code}</span></label>)}</div>}</fieldset><div className="settings-actions"><button disabled={save.isPending||permissions.isPending||permissions.isError}>{ar?'حفظ':'Save'}</button><button type="button" onClick={()=>{setSelected(null);setCreating(false);setName('');setCodes([])}}>{ar?'إلغاء':'Cancel'}</button>{current&&<button type="button" onClick={()=>setConfirm(true)}>{current.isActive?(ar?'إيقاف الدور':'Deactivate role'):(ar?'تفعيل الدور':'Activate role')}</button>}</div></form></Card>}
 {confirm&&current&&<div className="settings-backdrop"><div className="settings-dialog" role="dialog" aria-modal="true"><h3>{ar?'تأكيد تغيير حالة الدور':'Confirm role status change'}</h3><p>{current.name}</p><div className="settings-actions"><button onClick={()=>setConfirm(false)}>{ar?'إلغاء':'Cancel'}</button><button disabled={toggle.isPending} onClick={()=>toggle.mutate()}>{ar?'تأكيد':'Confirm'}</button></div></div></div>}
 </>}
 {error&&<p role="alert">{error}</p>}{notice&&<p role="status">{notice}</p>}
 </section>
}
