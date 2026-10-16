import {useState} from 'react'
import {useMutation} from '@tanstack/react-query'
import {apiClient} from '../../lib/api/client'
import {institutionPath} from '../institution/institution.api'
import {listAcademic} from '../academics/academics.api'
import {useQuery} from '@tanstack/react-query'
import {getApiErrorMessage} from '../../lib/api/error-message'
type Resource={id:string;title:string;type?:string}
type Lesson={id:string;title:string;sortOrder?:number;isPreview?:boolean;resources?:Resource[]}
type Unit={id:string;title:string;sortOrder?:number;lessons?:Lesson[]}
type Course={id:string;title:string;description?:string;visibility:string;status:string;units?:Unit[];targets?:Array<{gradeId?:string;sectionId?:string}>}
export function CourseAdvanced({course,institutionId,ar,onChanged}:{course:Course;institutionId:string;ar:boolean;onChanged:()=>void}){
 const [lesson,setLesson]=useState<Lesson|null>(null),[resourceTitle,setResourceTitle]=useState(''),[resourceUrl,setResourceUrl]=useState(''),[file,setFile]=useState<File|null>(null),[busy,setBusy]=useState(false),[error,setError]=useState(''),[grade,setGrade]=useState(''),[section,setSection]=useState(''),[targets,setTargets]=useState<Array<{gradeId?:string;sectionId?:string}>>(course.targets?.map(t=>({gradeId:t.gradeId,sectionId:t.sectionId}))??[])
 const grades=useQuery({queryKey:['institution',institutionId,'academic','grades'],queryFn:()=>listAcademic(institutionId,'grades')})
 const sections=useQuery({queryKey:['institution',institutionId,'advanced-sections',grade],queryFn:()=>apiClient.get<Array<{id:string;name:string}>>(institutionPath(institutionId,'academic/sections'),{params:{gradeId:grade}}).then(r=>r.data),enabled:!!grade})
 const [editTitle,setEditTitle]=useState(course.title),[editDesc,setEditDesc]=useState(course.description??''),[visibility,setVisibility]=useState(course.visibility)
 const mutate=useMutation({mutationFn:()=>apiClient.patch('/course-management/courses/'+course.id,{title:editTitle.trim(),description:editDesc.trim(),visibility,targets:visibility==='TARGETED'?targets:[]}),onSuccess:()=>{setError('');onChanged()},onError:e=>setError(getApiErrorMessage(e,ar,ar?'فشل تعديل الدورة':'Could not update course'))})
 async function changeContent(type:'unit'|'lesson',id:string,action:'rename'|'delete'|'up'|'down',sortOrder=0){
  if(action==='delete'&&!confirm(ar?'تأكيد حذف المحتوى؟':'Delete this content?'))return
  const base='/course-management/'+(type==='unit'?'units/':'lessons/')+id
  const title=action==='rename'?prompt(ar?'الاسم الجديد':'New title'):null
  if(action==='rename'&&!title?.trim())return
  try{
   if(action==='delete')await apiClient.delete(base)
   else await apiClient.patch(base,action==='rename'?{title:title?.trim()}:{sortOrder:Math.max(0,sortOrder+(action==='up'?-1:1))})
   setError('');onChanged()
  }catch(e){setError(getApiErrorMessage(e,ar,ar?'تعذر تعديل المحتوى':'Could not change content'))}
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
 async function removeResource(id:string){if(!confirm(ar?'تأكيد حذف المورد؟':'Delete resource?'))return;try{await apiClient.delete('/course-management/resources/'+id);onChanged();setError('')}catch(e){setError(getApiErrorMessage(e,ar,ar?'فشل حذف المورد':'Failed to remove resource'))}}
 return <div className="course-advanced">
 <h3>{ar?'إعدادات الدورة واستهداف الطلاب':'Course settings and targeting'}</h3>
 <label>{ar?'اسم الدورة':'Course name'}<input maxLength={200} value={editTitle} onChange={e=>setEditTitle(e.target.value)}/></label>
 <label>{ar?'الوصف':'Description'}<textarea value={editDesc} onChange={e=>setEditDesc(e.target.value)}/></label>
 <label>{ar?'الظهور':'Visibility'}<select value={visibility} onChange={e=>setVisibility(e.target.value)}><option value="PRIVATE">{ar?'خاصة':'Private'}</option><option value="PUBLIC">{ar?'عامة':'Public'}</option><option value="TARGETED">{ar?'مستهدفة':'Targeted'}</option></select></label>
 {visibility==='TARGETED'&&<div><label>{ar?'الصف':'Grade'}<select value={grade} onChange={e=>{setGrade(e.target.value);setSection('')}}><option value="">—</option>{grades.data?.map(g=><option key={g.id} value={g.id}>{g.name}</option>)}</select></label><label>{ar?'الشعبة (اختياري)':'Section (optional)'}<select value={section} onChange={e=>setSection(e.target.value)}><option value="">—</option>{sections.data?.map(s=><option key={s.id} value={s.id}>{s.name}</option>)}</select></label><button disabled={!grade} onClick={()=>setTargets(v=>[...v,{gradeId:grade,...(section?{sectionId:section}:{})}])}>{ar?'إضافة استهداف':'Add target'}</button>{targets.map((t,i)=><p key={i}>{grades.data?.find(g=>g.id===t.gradeId)?.name??'—'} <button onClick={()=>setTargets(v=>v.filter((_,n)=>n!==i))}>{ar?'إزالة':'Remove'}</button></p>)}</div>}
 <button disabled={mutate.isPending||!editTitle.trim()||(visibility==='TARGETED'&&!targets.length)} onClick={()=>mutate.mutate()}>{ar?'حفظ إعدادات الدورة':'Save course settings'}</button>
 <h3>{ar?'إدارة الوحدات والدروس':'Manage units and lessons'}</h3>
 {course.units?.map(u=><div className="course-unit" key={u.id}><strong>{u.title}</strong> <button onClick={()=>void changeContent('unit',u.id,'rename')}>{ar?'تسمية':'Rename'}</button> <button onClick={()=>void changeContent('unit',u.id,'up',u.sortOrder)} aria-label="Move unit up">↑</button><button onClick={()=>void changeContent('unit',u.id,'down',u.sortOrder)} aria-label="Move unit down">↓</button><button onClick={()=>void changeContent('unit',u.id,'delete')}>{ar?'حذف':'Delete'}</button>
 {u.lessons?.map(l=><div key={l.id}><span>{l.title}</span> <button onClick={()=>setLesson(l)}>{ar?'الموارد':'Resources'}</button><button onClick={()=>void changeContent('lesson',l.id,'rename')}>{ar?'تعديل':'Edit'}</button><button onClick={()=>void changeContent('lesson',l.id,'up',l.sortOrder)}>↑</button><button onClick={()=>void changeContent('lesson',l.id,'down',l.sortOrder)}>↓</button><button onClick={()=>void changeContent('lesson',l.id,'delete')}>{ar?'حذف':'Delete'}</button></div>)}</div>)}
 {lesson&&<section className="course-resources"><h3>{ar?'موارد درس':'Lesson resources'}: {lesson.title}</h3>{lesson.resources?.map(r=><p key={r.id}>{r.title} <button onClick={()=>void removeResource(r.id)}>{ar?'حذف':'Delete'}</button></p>)}<label>{ar?'عنوان المورد':'Resource title'}<input value={resourceTitle} maxLength={200} onChange={e=>setResourceTitle(e.target.value)}/></label><label>{ar?'رابط HTTPS':'HTTPS link'}<input type="url" value={resourceUrl} onChange={e=>setResourceUrl(e.target.value)}/></label><button disabled={busy||!resourceTitle.trim()||!resourceUrl.trim()} onClick={()=>void addResource('link')}>{ar?'إضافة رابط':'Add link'}</button><label>{ar?'رفع فيديو أو PDF أو ملف':'Upload video, PDF or file'}<input type="file" accept="video/*,.pdf,.doc,.docx,.ppt,.pptx" onChange={e=>setFile(e.target.files?.[0]??null)}/></label><button disabled={busy||!file||!resourceTitle.trim()} onClick={()=>void addResource('upload')}>{ar?'رفع الملف':'Upload file'}</button><button onClick={()=>setLesson(null)}>{ar?'إغلاق':'Close'}</button></section>}
 {error&&<p role="alert">{error}</p>}
 </div>
}
