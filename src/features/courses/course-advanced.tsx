import {useEffect,useRef,useState} from 'react'
import {useMutation} from '@tanstack/react-query'
import {apiClient} from '../../lib/api/client'
import {institutionPath} from '../institution/institution.api'
import {listAcademic} from '../academics/academics.api'
import {useQuery} from '@tanstack/react-query'
import {getApiErrorMessage} from '../../lib/api/error-message'
import {fetchRecords} from '../records/records.api'
type Resource={id:string;title:string;type?:string}
type Lesson={id:string;title:string;sortOrder?:number;isPreview?:boolean;resources?:Resource[]}
type Unit={id:string;title:string;sortOrder?:number;lessons?:Lesson[]}
type Course={id:string;title:string;description?:string;visibility:string;status:string;coverUrl?:string;units?:Unit[];targets?:Array<{gradeId?:string;sectionId?:string;studentRecordId?:string}>}
export function CourseAdvanced({course,institutionId,ar,onChanged}:{course:Course;institutionId:string;ar:boolean;onChanged:()=>void}){
 const dialogRef=useRef<HTMLDivElement|null>(null),previousFocus=useRef<HTMLElement|null>(null)
 const [dialog,setDialog]=useState<{kind:'rename'|'delete'|'resource';type:'unit'|'lesson'|'resource';id:string;title:string}|null>(null),[dialogTitle,setDialogTitle]=useState(''),[dialogBusy,setDialogBusy]=useState(false),[sortDirection,setSortDirection]=useState<'asc'|'desc'>('asc'),[lesson,setLesson]=useState<Lesson|null>(null),[resourceTitle,setResourceTitle]=useState(''),[resourceUrl,setResourceUrl]=useState(''),[file,setFile]=useState<File|null>(null),[busy,setBusy]=useState(false),[error,setError]=useState(''),[grade,setGrade]=useState(''),[section,setSection]=useState(''),[studentSearch,setStudentSearch]=useState(''),[studentId,setStudentId]=useState(''),[targets,setTargets]=useState<Array<{gradeId?:string;sectionId?:string;studentRecordId?:string}>>(course.targets?.map(t=>({...(t.gradeId?{gradeId:t.gradeId}:{}),...(t.sectionId?{sectionId:t.sectionId}:{}),...(t.studentRecordId?{studentRecordId:t.studentRecordId}:{})}))??[])
 useEffect(()=>{if(!dialog)return;previousFocus.current=document.activeElement instanceof HTMLElement?document.activeElement:null;const node=dialogRef.current;node?.querySelector<HTMLElement>('input,button')?.focus();return()=>previousFocus.current?.focus()},[dialog]);
 const students=useQuery({queryKey:['institution',institutionId,'course-students',studentSearch],queryFn:()=>fetchRecords(institutionId,'students',1,studentSearch.trim()),enabled:studentSearch.trim().length>=2})
 const grades=useQuery({queryKey:['institution',institutionId,'academic','grades'],queryFn:()=>listAcademic(institutionId,'grades')})
 const sections=useQuery({queryKey:['institution',institutionId,'advanced-sections',grade],queryFn:()=>apiClient.get<Array<{id:string;name:string}>>(institutionPath(institutionId,'academic/sections'),{params:{gradeId:grade}}).then(r=>r.data),enabled:!!grade})
 const [editTitle,setEditTitle]=useState(course.title),[editDesc,setEditDesc]=useState(course.description??''),[coverUrl,setCoverUrl]=useState(course.coverUrl??''),[visibility,setVisibility]=useState(course.visibility)
 const mutate=useMutation({mutationFn:()=>apiClient.patch('/course-management/courses/'+course.id,{title:editTitle.trim(),description:editDesc.trim(),visibility,coverUrl:coverUrl.trim()||undefined,...(visibility==='TARGETED'?{targets:targets.map(t=>Object.fromEntries(Object.entries(t).filter(([,value])=>Boolean(value))))}:{targets:[]})}),onSuccess:()=>{setError('');onChanged()},onError:e=>setError(getApiErrorMessage(e,ar,ar?'فشل تعديل الدورة':'Could not update course'))})
 function openDialog(kind:'rename'|'delete'|'resource',type:'unit'|'lesson'|'resource',id:string,title:string){setDialog({kind,type,id,title});setDialogTitle(title);setError('')}
 async function performDialog(){
  if(!dialog)return
  if(dialog.kind==='rename'&&!dialogTitle.trim())return
  setDialogBusy(true)
  try{
   const base=dialog.type==='resource'?'/course-management/resources/'+dialog.id:'/course-management/'+(dialog.type==='unit'?'units/':'lessons/')+dialog.id
   if(dialog.kind==='rename')await apiClient.patch(base,{title:dialogTitle.trim()})
   else await apiClient.delete(base)
   setDialog(null);setError('');onChanged()
  }catch(e){setError(getApiErrorMessage(e,ar,ar?'تعذّر تنفيذ العملية':'Operation failed'))}
  finally{setDialogBusy(false)}
 }
 async function move(type:'unit'|'lesson',item:Unit|Lesson,siblings:Array<Unit|Lesson>,direction:-1|1){
  const ordered=[...siblings].sort((a,b)=>(a.sortOrder??0)-(b.sortOrder??0))
  const i=ordered.findIndex(x=>x.id===item.id),j=i+direction
  if(j<0||j>=ordered.length)return
  const moved=[...ordered];[moved[i],moved[j]]=[moved[j],moved[i]]
  const key=type==='unit'?'units/':'lessons/'
  try{
   for(let n=0;n<moved.length;n++)await apiClient.patch('/course-management/'+key+moved[n].id,{sortOrder:(n+1)*10})
   setError('');onChanged()
  }catch(e){setError(getApiErrorMessage(e,ar,ar?'تعذّر تغيير الترتيب':'Reordering failed'))}
 }
 async function addResource(type:'link'|'upload'){
  if(!lesson||!resourceTitle.trim())return
  setBusy(true);setError('')
  try{
   if(type==='link'){if(!/^https:\/\//i.test(resourceUrl))throw Error('https');await apiClient.post('/course-management/lessons/'+lesson.id+'/resources/link',{title:resourceTitle.trim(),url:resourceUrl.trim()})}
   else {if(!file||file.size>512*1024*1024)throw Error('file');const body=new FormData();body.append('file',file);body.append('title',resourceTitle.trim());await apiClient.post('/course-management/lessons/'+lesson.id+'/resources/upload',body,{timeout:180000})}
   setResourceTitle('');setResourceUrl('');setFile(null);onChanged()
  }catch(e){setError(getApiErrorMessage(e,ar,ar?'فشل رفع المورد أو الرابط':'Resource upload failed'))}finally{setBusy(false)}
 }
 return <div className="course-advanced">{course.status!=='DRAFT'&&<p role="status">{ar?'الدورة منشورة أو مؤرشفة، إدارة المحتوى متاحة للمسودات فقط.':'Only draft courses can be edited.'}</p>}
 <h3>{ar?'إعدادات الدورة واستهداف الطلاب':'Course settings and targeting'}</h3>
 <label>{ar?'اسم الدورة':'Course name'}<input maxLength={200} value={editTitle} onChange={e=>setEditTitle(e.target.value)}/></label>
 <label>{ar?'الوصف':'Description'}<textarea value={editDesc} onChange={e=>setEditDesc(e.target.value)}/></label><label>{ar?'رابط صورة الغلاف':'Cover image URL'}<input type="url" placeholder="https://" value={coverUrl} onChange={e=>setCoverUrl(e.target.value)}/></label>
 <label>{ar?'الظهور':'Visibility'}<select value={visibility} onChange={e=>setVisibility(e.target.value)}><option value="PRIVATE">{ar?'خاصة':'Private'}</option><option value="TARGETED">{ar?'مستهدفة':'Targeted'}</option></select></label>
 {visibility==='TARGETED'&&<div><label>{ar?'الصف':'Grade'}<select value={grade} onChange={e=>{setGrade(e.target.value);setSection('')}}><option value="">—</option>{grades.data?.map(g=><option key={g.id} value={g.id}>{g.name}</option>)}</select></label><label>{ar?'الشعبة (اختياري)':'Section (optional)'}<select value={section} onChange={e=>setSection(e.target.value)}><option value="">—</option>{sections.data?.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}</select></label><button disabled={!grade} onClick={()=>setTargets(v=>[...v,{gradeId:grade,...(section?{sectionId:section}:{})}])}>{ar?'إضافة استهداف':'Add target'}</button><label>{ar?'بحث عن طالب محدد':'Search individual student'}<input value={studentSearch} onChange={e=>{setStudentSearch(e.target.value);setStudentId('')}} placeholder={ar?'اكتب حرفين على الأقل':'Enter at least two characters'}/></label><select value={studentId} onChange={e=>setStudentId(e.target.value)}><option value="">{ar?'اختر طالباً':'Select student'}</option>{students.data?.items.map(st=><option key={String(st.id)} value={String(st.id)}>{String(st.fullName??'')}</option>)}</select><button disabled={!studentId} onClick={()=>{setTargets(v=>[...v,{studentRecordId:studentId}]);setStudentId('');setStudentSearch('')}}>{ar?'إضافة الطالب':'Add student'}</button>{targets.map((t,i)=><p key={i}>{t.studentRecordId?(ar?'طالب محدد':'Individual student'):(grades.data?.find(g=>g.id===t.gradeId)?.name??'—')} <button onClick={()=>setTargets(v=>v.filter((_,n)=>n!==i))}>{ar?'إزالة':'Remove'}</button></p>)}</div>}
 <button disabled={course.status!=='DRAFT'||mutate.isPending||!editTitle.trim()||(visibility==='TARGETED'&&!targets.length)} onClick={()=>mutate.mutate()}>{ar?'حفظ إعدادات الدورة':'Save course settings'}</button>
 <h3>{ar?'إدارة الوحدات والدروس':'Manage units and lessons'}</h3><label>{ar?'ترتيب العرض':'Display order'}<select value={sortDirection} onChange={e=>setSortDirection(e.target.value as 'asc'|'desc')}><option value="asc">{ar?'تصاعدي':'Ascending'}</option><option value="desc">{ar?'تنازلي':'Descending'}</option></select></label>
 {[...(course.units??[])].sort((a,b)=>sortDirection==='asc'?(a.sortOrder??0)-(b.sortOrder??0):(b.sortOrder??0)-(a.sortOrder??0)).map(u=><div className="course-unit" key={u.id}><strong>{u.title}</strong> <button onClick={()=>void openDialog('rename','unit',u.id,u.title)}>{ar?'تسمية':'Rename'}</button> <button onClick={()=>void move('unit',u,course.units??[],-1)} aria-label="Move unit up">↑</button><button onClick={()=>void move('unit',u,course.units??[],1)} aria-label="Move unit down">↓</button><button onClick={()=>void openDialog('delete','unit',u.id,u.title)}>{ar?'حذف':'Delete'}</button>
 {[...(u.lessons??[])].sort((a,b)=>sortDirection==='asc'?(a.sortOrder??0)-(b.sortOrder??0):(b.sortOrder??0)-(a.sortOrder??0)).map(l=><div key={l.id}><span>{l.title}</span> <button onClick={()=>setLesson(l)}>{ar?'الموارد':'Resources'}</button><button onClick={()=>void openDialog('rename','lesson',l.id,l.title)}>{ar?'تعديل':'Edit'}</button><button onClick={()=>void move('lesson',l,u.lessons??[],-1)}>↑</button><button onClick={()=>void move('lesson',l,u.lessons??[],1)}>↓</button><button onClick={()=>void openDialog('delete','lesson',l.id,l.title)}>{ar?'حذف':'Delete'}</button></div>)}</div>)}
 {lesson&&<section className="course-resources"><h3>{ar?'موارد درس':'Lesson resources'}: {lesson.title}</h3>{lesson.resources?.map(r=><p key={r.id}>{r.title} <button onClick={()=>void openDialog('resource','resource',r.id,r.title)}>{ar?'حذف':'Delete'}</button></p>)}<label>{ar?'عنوان المورد':'Resource title'}<input value={resourceTitle} maxLength={200} onChange={e=>setResourceTitle(e.target.value)}/></label><label>{ar?'رابط HTTPS':'HTTPS link'}<input type="url" value={resourceUrl} onChange={e=>setResourceUrl(e.target.value)}/></label><button disabled={busy||!resourceTitle.trim()||!resourceUrl.trim()} onClick={()=>void addResource('link')}>{ar?'إضافة رابط':'Add link'}</button><label>{ar?'رفع فيديو أو PDF أو ملف':'Upload video, PDF or file'}<input type="file" accept="video/*,.pdf,.doc,.docx,.ppt,.pptx" onChange={e=>setFile(e.target.files?.[0]??null)}/></label><button disabled={busy||!file||!resourceTitle.trim()} onClick={()=>void addResource('upload')}>{ar?'رفع الملف':'Upload file'}</button><button onClick={()=>setLesson(null)}>{ar?'إغلاق':'Close'}</button></section>}
 {dialog&&<div className="nebra-dialog-backdrop" role="presentation"><div className="nebra-dialog" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="nebra-dialog-title" onKeyDown={e=>{if(e.key==='Escape'&&!dialogBusy){e.preventDefault();setDialog(null)}if(e.key==='Tab'){const els=Array.from(e.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]),input:not([disabled])'));if(!els.length)return;const first=els[0],last=els[els.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}}}><h3 id="nebra-dialog-title">{dialog.kind==='rename'?(ar?'تعديل الاسم':'Rename'):(ar?'تأكيد الحذف':'Confirm deletion')}</h3><p>{dialog.title}</p>{dialog.kind==='rename'&&<label>{ar?'الاسم الجديد':'New title'}<input autoFocus maxLength={200} value={dialogTitle} onChange={e=>setDialogTitle(e.target.value)}/></label>}<div className="nebra-dialog-actions"><button type="button" disabled={dialogBusy} onClick={()=>setDialog(null)}>{ar?'إلغاء':'Cancel'}</button><button type="button" disabled={dialogBusy||(dialog.kind==='rename'&&!dialogTitle.trim())} onClick={()=>void performDialog()}>{dialog.kind==='rename'?(ar?'حفظ':'Save'):(ar?'حذف':'Delete')}</button></div></div></div>}
 {error&&<p role="alert">{error}</p>}
 </div>
}