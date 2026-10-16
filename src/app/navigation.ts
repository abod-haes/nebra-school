import { BookOpen, CalendarDays, ChartColumn, FileCheck2, NotebookPen, ClipboardCheck, GraduationCap, House, Megaphone, School, Settings, Users, Wallet } from 'lucide-react'
export const navigation=[
 {path:'/',ar:'نظرة عامة',en:'Overview',icon:House},
 {path:'/students',ar:'الطلاب',en:'Students',icon:GraduationCap},
 {path:'/staff',ar:'الكادر',en:'Staff',icon:Users},
 {path:'/enrollments',ar:'التسجيلات المدرسية',en:'Enrollments',icon:GraduationCap},
 {path:'/academics',ar:'الهيكل الأكاديمي',en:'Academics',icon:School},
 {path:'/attendance',ar:'الحضور والغياب',en:'Attendance',icon:ClipboardCheck},
 {path:'/schedule',ar:'الجدول الدراسي',en:'Schedule',icon:CalendarDays},
 {path:'/courses',ar:'الدورات والدروس',en:'Courses & lessons',icon:BookOpen},
 {path:'/announcements',ar:'الإعلانات',en:'Announcements',icon:Megaphone},
 {path:'/homework',ar:'الواجبات',en:'Homework',icon:NotebookPen},
 {path:'/exams',ar:'الامتحانات والعلامات',en:'Exams & Grades',icon:FileCheck2},
 {path:'/finance',ar:'المالية',en:'Finance',icon:Wallet},
 {path:'/reports',ar:'التقارير',en:'Reports',icon:ChartColumn},
 {path:'/settings',ar:'الإعدادات',en:'Settings',icon:Settings}
] as const
