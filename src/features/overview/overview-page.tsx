import {ArrowLeft,BookOpen,GraduationCap,School,Users,Wallet,ChartColumn,CalendarCheck} from 'lucide-react'
import {useQuery} from '@tanstack/react-query'
import {Card,PageHeader} from '@nebra/ui'
import {Link} from 'react-router-dom'
import {useAuth} from '../auth/auth-context'
import {useInstitution} from '../institution/institution-context'
import {useLocale} from '../../app/locale-context'
import {apiClient} from '../../lib/api/client'
import {institutionPath} from '../institution/institution.api'
const areas=[{to:'/students',icon:GraduationCap,ar:'إدارة الطلاب',en:'Students'},{to:'/staff',icon:Users,ar:'الكادر التعليمي',en:'Staff'},{to:'/academics',icon:School,ar:'الهيكل الأكاديمي',en:'Academics'},{to:'/courses',icon:BookOpen,ar:'الدورات والدروس',en:'Courses & lessons'},{to:'/finance',icon:Wallet,ar:'المالية',en:'Finance'},{to:'/reports',icon:ChartColumn,ar:'التقارير',en:'Reports'}]
type Overview={students:number;activeStudents:number;schoolEnrollments:number;attendanceSessions:number;exams:number;publishedExams:number}
export function OverviewPage(){
 const {locale}=useLocale(),{institutionId}=useAuth(),{can}=useInstitution()
 const ar=locale==='ar',id=institutionId!,hasReports=can('institution.finance.read')
 const stats=useQuery({queryKey:['institution',id,'operational-summary'],queryFn:()=>apiClient.get<Overview>(institutionPath(id,'finance/operational-summary')).then(r=>r.data),enabled:hasReports})
 const indicators=[{key:'activeStudents',ar:'الطلاب النشطون',en:'Active students',icon:GraduationCap},{key:'schoolEnrollments',ar:'التسجيلات',en:'Enrollments',icon:Users},{key:'attendanceSessions',ar:'جلسات الحضور',en:'Attendance sessions',icon:CalendarCheck},{key:'publishedExams',ar:'امتحانات منشورة',en:'Published exams',icon:School}] as const
 return <div className="overview-page"><PageHeader title={ar?'نظرة عامة':'Overview'} description={ar?'إدارة عمليات مؤسستك التعليمية من مكان واحد.':'Manage your institution operations from one place.'}/>
 <Card className="welcome-card"><span className="eyebrow">NEBRA SCHOOL</span><h2>{ar?'لوحة المؤسسة التعليمية':'Institution dashboard'}</h2><p>{ar?'تابع الطلاب والكادر والحضور والدورات والامتحانات والمالية حسب صلاحيات حسابك.':'Manage students, staff, attendance, courses, exams, and finance based on your account permissions.'}</p></Card>
 {hasReports&&<div className="area-grid">{stats.isPending?<Card><p role="status">{ar?'جارٍ تحميل المؤشرات':'Loading indicators'}</p></Card>:stats.isError?<Card><button onClick={()=>void stats.refetch()}>{ar?'إعادة المحاولة':'Retry'}</button></Card>:indicators.map(item=><Card key={item.key}><item.icon size={22}/><p>{ar?item.ar:item.en}</p><strong>{new Intl.NumberFormat(ar?'ar-SY':'en-US').format(stats.data?.[item.key]??0)}</strong></Card>)}</div>}
 <div className="area-grid">{areas.filter(a=>a.to!=='/finance'&&a.to!=='/reports'||hasReports).map(area=><Link key={area.to} to={area.to} className="area-link"><Card className="area-card"><area.icon size={23}/><strong>{ar?area.ar:area.en}</strong><ArrowLeft className={ar?'':'flip'} size={17}/></Card></Link>)}</div></div>
}
