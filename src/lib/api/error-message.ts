import axios from 'axios'
const messages:Record<string,[string,string]>={
 schedule_overlap:['يوجد تعارض مع حصة أخرى في نفس التوقيت.','This class conflicts with another scheduled entry.'],
 attendance_session_already_exists:['تم تسجيل حضور لهذه الشعبة والمادة بهذا التاريخ مسبقاً.','An attendance session already exists for this date and target.'],
 attendance_target_has_no_active_students:['لا يوجد طلاب مسجلون وفعالون في الشعبة المختارة.','The selected class has no active enrolled students.'],
 homework_target_has_no_active_students:['لا يوجد طلاب فعالون ضمن نطاق الواجب.','The homework target has no active students.'],
 school_homework_requires_academic_year_and_grade_or_section:['حدد السنة والصف أو الشعبة.','Select an academic year and a grade or section.'],
 homework_students_outside_target:['بعض الطلاب المختارين غير مسجلين في الصف أو الشعبة.','Some selected students are outside the assigned class.'],
 announcement_target_outside_institution:['بعض المستهدفين لا يتبعون لهذه المدرسة.','Some targets do not belong to this school.'],
 announcement_grade_section_mismatch:['الشعبة المختارة لا تتبع الصف المحدد.','The selected section does not belong to the selected grade.'],
 only_draft_announcement_is_editable:['يمكن تعديل الإعلان قبل نشره فقط.','Only draft announcements can be edited.'],
 homework_attachment_invalid:['نوع المرفق غير مدعوم أو حجمه أكبر من 10MB.','Unsupported attachment type or file size over 10MB.'],
}
export function getApiErrorMessage(error:unknown,ar:boolean,fallback:string){
 if(!axios.isAxiosError(error))return fallback
 const data=error.response?.data as {code?:string;message?:string|{code?:string}}|undefined
 const code=data?.code??(typeof data?.message==='object'?data.message.code:undefined)
 if(code&&messages[code])return messages[code][ar?0:1]
 if(error.response?.status===403)return ar?'لا تملك صلاحية تنفيذ هذا الإجراء.':'You are not authorized to perform this action.'
 if(error.response?.status===401)return ar?'انتهت الجلسة، يرجى تسجيل الدخول مجدداً.':'Your session has expired. Sign in again.'
 if(error.response?.status===413)return ar?'الملف أكبر من الحجم المسموح.':'File exceeds the size limit.'
 return fallback
}