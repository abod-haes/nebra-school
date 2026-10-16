import { useState } from "react";
import { roleLabel, useAssignableStaffRoles } from "./staff-roles";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Card } from "@nebra/ui";
import { useAuth } from "../auth/auth-context";
import { useLocale } from "../../app/locale-context";
import { useInstitution } from "../institution/institution-context";
import { fetchRecords } from "../records/records.api";
import { apiClient } from "../../lib/api/client";
import { institutionPath } from "../institution/institution.api";
import { getApiErrorMessage } from "../../lib/api/error-message";
import { listAcademic } from "../academics/academics.api";
type Kind = "students" | "staff";
type Person = {
  id: string;
  fullName?: string;
  studentCode?: string;
  phone?: string;
  birthDate?: string;
  status?: string;
  roles?: Array<{ role: { code: string } }>;
  user?: { displayName: string; email?:string };
  jobTitle?: string;
};
const states: Record<Kind, string[]> = {
  students: ["ACTIVE", "SUSPENDED", "ARCHIVED"],
  staff: ["INVITED", "ACTIVE", "SUSPENDED", "LEFT"],
};
export function PeopleManagement({ kind }: { kind: Kind }) {
  const { institutionId } = useAuth(),
    { locale } = useLocale(),
    { can, scope } = useInstitution();
  const ar = locale === "ar",
    id = institutionId!;
  const isDirector = Boolean(scope?.roleCodes.some((code) => code === "SCHOOL_DIRECTOR" || code === "INSTITUTE_DIRECTOR"));
  const canAssignRoles = isDirector && can("institution.memberships.roles.assign");
  const roleQuery = useAssignableStaffRoles(id, kind === "staff" && canAssignRoles);
  const qc = useQueryClient(),
    [search, setSearch] = useState(""),
    [selected, setSelected] = useState<Person | null>(null),
    [name, setName] = useState(""),
    [code, setCode] = useState(""),
    [phone, setPhone] = useState(""),
    [email,setEmail]=useState(""),
    [jobTitle,setJobTitle]=useState(""),
    [birthDate,setBirthDate]=useState(""),
    [status, setStatus] = useState(""),
    [roles, setRoles] = useState<string[]>([]),
    [error, setError] = useState(""),
    [scopeLoaded, setScopeLoaded] = useState(false),
    [subjectId, setSubjectId] = useState(""),
    [gradeId, setGradeId] = useState(""),
    [sectionId, setSectionId] = useState(""),
    [assignments, setAssignments] = useState<
      Array<{ subjectId: string; gradeId?: string; sectionId?: string }>
    >([]),
    [supervisorScopes, setSupervisorScopes] = useState<
      Array<{ gradeId?: string; sectionId?: string }>
    >([]);
  const list = useQuery({
    queryKey: ["institution", id, "manage", kind, search],
    queryFn: () => fetchRecords(id, kind, 1, search.trim()),
  });
  const subjects = useQuery({
    queryKey: ["institution", id, "academic", "subjects"],
    queryFn: () => listAcademic(id, "subjects"),
    enabled: kind === "staff",
  });
  const grades = useQuery({
    queryKey: ["institution", id, "academic", "grades"],
    queryFn: () => listAcademic(id, "grades"),
    enabled: kind === "staff",
  });
  const sections = useQuery({
    queryKey: ["institution", id, "academic", "sections"],
    queryFn: () =>
      apiClient
        .get<Array<{ id: string; name: string; gradeId: string }>>(
          institutionPath(id, "academic/sections"),
        )
        .then((x) => x.data),
    enabled: kind === "staff",
  });
  const currentScope = useQuery({
    queryKey: ["institution", id, "staff-scopes", selected?.id],
    queryFn: () =>
      apiClient
        .get(institutionPath(id, "scopes/memberships/" + selected!.id))
        .then(
          (x) =>
            x.data as {
              teacherAssignments?: Array<{
                subjectId: string;
                gradeId?: string;
                sectionId?: string;
              }>;
              supervisorScopes?: Array<{
                gradeId?: string;
                sectionId?: string;
              }>;
            },
        ),
    enabled:
      kind === "staff" && !!selected?.id && can("institution.scopes.read"),
  });
  const canEditProfile = can("institution.memberships.profile.update");
  const canChangeStaffStatus = can("institution.memberships.status");
  const canChangeStudentStatus = can("institution.students.status");
  const canEditStaff = canEditProfile || canAssignRoles || canChangeStaffStatus;
  const canEditStudents = can("institution.students.update") || canChangeStudentStatus;
  const selectedRoleCodes = selected?.roles?.map((assignment) => assignment.role.code) ?? [];
  const rolesChanged = [...roles].sort().join("|") !== [...selectedRoleCodes].sort().join("|");
  const directorMembership = selectedRoleCodes.some((code) => code === "SCHOOL_DIRECTOR" || code === "INSTITUTE_DIRECTOR");
  const change = useMutation({
    mutationFn: async (action: "profile" | "roles" | "status") => {
      if (!selected) throw Error("No selected record");
      const root = institutionPath(id, (kind === "students" ? "students/" : "memberships/") + selected.id);
      if (action === "profile") {
        if (kind === "students" && can("institution.students.update")) {
          return apiClient.patch(root, {
            fullName: name.trim(), studentCode: code.trim(),
            phone: phone.trim() || undefined,
            birthDate: birthDate ? birthDate + "T00:00:00.000Z" : undefined,
          });
        }
        if (kind === "staff" && canEditProfile) {
          return apiClient.patch(root + "/profile", {
            displayName: name.trim(), email: email.trim() || undefined,
            jobTitle: jobTitle.trim() || undefined,
          });
        }
      }
      if (action === "roles" && kind === "staff" && canAssignRoles && !directorMembership && rolesChanged) {
        if (!roleQuery.isSuccess || roles.length === 0 ||
          roles.some((role) => !roleQuery.options.some((item) => item.code === role) && !selectedRoleCodes.includes(role))) {
          throw new Error(ar ? "الأدوار غير متاحة أو غير مسموح بها" : "Invalid or unavailable roles");
        }
        return apiClient.patch(root + "/roles", { roleCodes: roles });
      }
      if (action === "status" && !directorMembership && status && status !== selected.status &&
        (kind === "students" ? canChangeStudentStatus : canChangeStaffStatus)) {
        return apiClient.patch(root + "/status", { status });
      }
      throw new Error(ar ? "هذا الإجراء غير مسموح أو لا يحتوي تغييرات" : "Action not allowed or unchanged");
    },
    onSuccess: () => {
      setSelected(null);
      setError("");
      void qc.invalidateQueries({ queryKey: ["institution", id] });
    },
    onError: (e) => setError(getApiErrorMessage(
      e, ar, ar ? "تعذّر حفظ الإجراء" : "Could not save the action",
    )),
  });
  const saveAssignments = useMutation({
    mutationFn: async () => {
      if (!selected) throw Error("No staff selected");
      await apiClient.put(
        institutionPath(id, "scopes/memberships/" + selected.id + "/teacher"),
        { assignments },
      );
    },
    onSuccess: () => {
      setError("");
      void qc.invalidateQueries({
        queryKey: ["institution", id, "staff-scopes", selected?.id],
      });
    },
    onError: (e) =>
      setError(
        getApiErrorMessage(
          e,
          ar,
          ar ? "تعذّر حفظ تكليف المدرّس" : "Could not save teacher assignments",
        ),
      ),
  });
  const saveSupervisor = useMutation({
    mutationFn: async () => {
      if (!selected) throw Error("No staff selected");
      await apiClient.put(
        institutionPath(
          id,
          "scopes/memberships/" + selected.id + "/supervisor",
        ),
        { scopes: supervisorScopes },
      );
    },
    onSuccess: () => {
      setError("");
      void qc.invalidateQueries({
        queryKey: ["institution", id, "staff-scopes", selected?.id],
      });
    },
    onError: (e) =>
      setError(
        getApiErrorMessage(
          e,
          ar,
          ar ? "تعذر حفظ نطاق الإشراف" : "Could not save supervisor scopes",
        ),
      ),
  });
  function edit(p: Person) {
    setSelected(p);
    setName(p.fullName ?? p.user?.displayName ?? "");
    setCode(p.studentCode ?? "");
    setPhone(p.phone ?? "");
    setBirthDate(p.birthDate?.slice(0,10)??"");
    setEmail(p.user?.email??"");
    setJobTitle(p.jobTitle??"");
    setStatus(p.status ?? "ACTIVE");
    setRoles(p.roles?.map((r) => r.role.code) ?? []);
    setAssignments([]);
    setSupervisorScopes([]);
    setScopeLoaded(false);
    setError("");
  }
  return (
    <Card className="people-form-card">
      <h2>
        {ar
          ? kind === "students"
            ? "تعديل الطلاب"
            : "إدارة الموظفين وتكليفاتهم"
          : kind === "students"
            ? "Manage students"
            : "Manage staff and assignments"}
      </h2>
      <label>
        {ar ? "بحث" : "Search"}{" "}
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </label>
      {list.isLoading ? (
        <p>{ar ? "جار التحميل" : "Loading"}</p>
      ) : list.isError ? (
        <button onClick={() => void list.refetch()}>
          {ar ? "إعادة المحاولة" : "Retry"}
        </button>
      ) : (
        <div className="records-scroll">
          <table>
            <thead>
              <tr>
                <th>{ar ? "الاسم" : "Name"}</th>
                <th>{ar ? "الحالة" : "Status"}</th>
                <th>{ar ? "الإجراءات" : "Actions"}</th>
              </tr>
            </thead>
            <tbody>
              {list.data?.items.map((p) => {
                const x = p as Person;
                return (
                  <tr key={x.id}>
                    <td>{x.fullName ?? x.user?.displayName ?? "—"}</td>
                    <td>{({ACTIVE:ar?'نشط':'Active',SUSPENDED:ar?'موقوف':'Suspended',INVITED:ar?'مدعو':'Invited',ARCHIVED:ar?'مؤرشف':'Archived',LEFT:ar?'غادر':'Left'} as Record<string,string>)[x.status??'']??x.status??'—'}</td>
                    <td>
                      {(kind === 'students' ? canEditStudents : (canEditStaff || can('institution.scopes.teacher.assign') || can('institution.scopes.supervisor.assign'))) && (
                        <button type="button" onClick={() => edit(x)}>
                          {ar ? "تعديل" : "Edit"}
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {selected && (
        <div className="people-form">
          <h3>{ar ? "تعديل السجل" : "Edit record"}</h3>
          {kind === "students" ? (
            <>
              <label>
                {ar ? "الاسم" : "Name"}
                <input
                  minLength={2}
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label>
                {ar ? "رمز الطالب" : "Student code"}
                <input
                  required
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </label>
              <label>
                {ar ? "الهاتف" : "Phone"}
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
              <label>{ar?"تاريخ الميلاد":"Birth date"}<input type="date" value={birthDate} onChange={e=>setBirthDate(e.target.value)}/></label>
            </>
          ) : (
            <div><label>{ar?"اسم الموظف":"Staff name"}<input disabled={!canEditProfile} minLength={2} maxLength={200} value={name} onChange={e=>setName(e.target.value)}/></label><label>{ar?"البريد الإلكتروني":"Email"}<input disabled={!canEditProfile} type="email" value={email} onChange={e=>setEmail(e.target.value)}/></label><label>{ar?"المسمى الوظيفي":"Job title"}<input disabled={!canEditProfile} maxLength={160} value={jobTitle} onChange={e=>setJobTitle(e.target.value)}/></label><label>
              {ar ? "الأدوار" : "Roles"}
              {directorMembership && <small>{ar ? "دور المدير يُدار من لوحة مدير المنصة فقط." : "Director access is managed by Platform Admin only."}</small>}
              {!canAssignRoles
                ? (selectedRoleCodes.length ? selectedRoleCodes.map((role) =>
                    <span key={role}>{roleLabel(role, ar)}</span>
                  ) : <span>{ar ? "لا توجد أدوار" : "No roles"}</span>)
                : roleQuery.isPending ? <span role="status">{ar ? "جارٍ تحميل الأدوار" : "Loading roles"}</span>
                : roleQuery.isError ? <span role="alert">{ar ? "تعذر تحميل الأدوار" : "Could not load roles"} <button type="button" onClick={() => void roleQuery.refetch()}>{ar ? "إعادة المحاولة" : "Retry"}</button></span>
                : [...roleQuery.options,
                  ...selectedRoleCodes.filter((code) => !roleQuery.options.some((role) => role.code === code)).map((code) => ({
                    id: code, code, name: roleLabel(code, ar), isSystem: true, isActive: false,
                  }))].map((role) => (
                  <span key={role.code}>
                    <input
                      type="checkbox"
                      disabled={directorMembership || (!role.isActive && !roles.includes(role.code))}
                      checked={roles.includes(role.code)}
                      onChange={(e) =>
                        setRoles((old) => e.target.checked
                          ? [...old, role.code]
                          : old.filter((value) => value !== role.code))
                      }
                    />
                    {roleLabel(role.code, ar, roleQuery.options)}
                    {!role.isActive && (ar ? " (دور قديم أو معطّل)" : " (Legacy or inactive)")}
                    {!role.isSystem && (ar ? " — مخصص" : " — Custom")}
                  </span>
                ))}
            </label></div>
          )}
          <label>
            {ar ? "الحالة" : "Status"}
            <select value={status} disabled={directorMembership || !(kind === "students" ? canChangeStudentStatus : canChangeStaffStatus)} onChange={(e) => setStatus(e.target.value)}>
              {[...new Set([status, ...states[kind]])].map((s) => (
                <option key={s} value={s}>
                  {(
                    {
                      ACTIVE: ar ? "نشط" : "Active",
                      INVITED: ar ? "مدعو" : "Invited",
                      LEFT: ar ? "غادر" : "Left",
                      ARCHIVED: ar ? "مؤرشف" : "Archived",
                      SUSPENDED: ar ? "موقوف" : "Suspended",
                    } as Record<string, string>
                  )[s] ?? s}
                </option>
              ))}
            </select>
          </label>
          {error && <p role="alert">{error}</p>}
          {(kind === "students" ? can("institution.students.update") : canEditProfile) && (
            <button type="button" disabled={change.isPending} onClick={() => change.mutate("profile")}>
              {ar ? "حفظ البيانات" : "Save details"}
            </button>
          )}
          {kind === "staff" && canAssignRoles && (
            <button type="button"
              disabled={directorMembership || change.isPending || !rolesChanged || !roleQuery.isSuccess || roles.length === 0}
              onClick={() => change.mutate("roles")}>
              {ar ? "حفظ الأدوار" : "Save roles"}
            </button>
          )}
          {(kind === "students" ? canChangeStudentStatus : canChangeStaffStatus) && (
            <button type="button" disabled={directorMembership || change.isPending || !status || status === selected.status}
              onClick={() => change.mutate("status")}>
              {ar ? "حفظ الحالة" : "Save status"}
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              setSelected(null);
              setError("");
            }}
          >
            {ar ? "إلغاء" : "Cancel"}
          </button>
          {kind === "staff" &&
            can("institution.scopes.supervisor.assign") &&
            (roles.includes("ADMINISTRATIVE_STAFF") || roles.some((code) => code === "SUPERVISOR" || code.startsWith("CUSTOM_"))) && (
              <div>
                <h3>{ar ? "نطاق إشراف الموجّه" : "Supervisor scopes"}</h3>
                {currentScope.data && !scopeLoaded && (
                  <button
                    type="button"
                    onClick={() =>
                      (setSupervisorScopes((currentScope.data?.supervisorScopes ?? []).map((scope) => ({
                        ...(scope.gradeId ? { gradeId: scope.gradeId } : {}),
                        ...(scope.sectionId ? { sectionId: scope.sectionId } : {}),
                      }))), setScopeLoaded(true))
                    }
                  >
                    {ar ? "تحميل النطاقات الحالية" : "Load existing scopes"}
                  </button>
                )}
                <label>
                  {ar ? "الصف" : "Grade"}
                  <select
                    value={gradeId}
                    onChange={(e) => {
                      setGradeId(e.target.value);
                      setSectionId("");
                    }}
                  >
                    <option value="">—</option>
                    {grades.data?.map((g) => (
                      <option key={g.id} value={g.id}>
                        {g.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  {ar ? "الشعبة" : "Section"}
                  <select
                    value={sectionId}
                    onChange={(e) => setSectionId(e.target.value)}
                  >
                    <option value="">—</option>
                    {sections.data
                      ?.filter((x) => !gradeId || x.gradeId === gradeId)
                      .map((x) => (
                        <option key={x.id} value={x.id}>
                          {x.name}
                        </option>
                      ))}
                  </select>
                </label>
                <button
                  type="button"
                  disabled={!scopeLoaded || (!gradeId && !sectionId)}
                  onClick={() =>
                    setSupervisorScopes((old) => [
                      ...old,
                      {
                        ...(gradeId ? { gradeId } : {}),
                        ...(sectionId ? { sectionId } : {}),
                      },
                    ])
                  }
                >
                  {ar ? "إضافة نطاق" : "Add scope"}
                </button>
                {supervisorScopes.map((scope, index) => (
                  <div key={index}>
                    {grades.data?.find((x) => x.id === scope.gradeId)?.name ??
                      "—"}{" "}
                    /{" "}
                    {sections.data?.find((x) => x.id === scope.sectionId)
                      ?.name ?? "—"}{" "}
                    <button
                      type="button"
                      onClick={() =>
                        setSupervisorScopes((old) =>
                          old.filter((_, i) => i !== index),
                        )
                      }
                    >
                      {ar ? "إزالة" : "Remove"}
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  disabled={saveSupervisor.isPending || !scopeLoaded || currentScope.isError}
                  onClick={() => saveSupervisor.mutate()}
                >
                  {ar ? "حفظ نطاق الإشراف" : "Save scopes"}
                </button>
              </div>
            )}
          {kind === "staff" &&
            can("institution.scopes.teacher.assign") &&
            roles.includes("TEACHER") && (
              <div>
                <h3>
                  {ar ? "تكليف المدرّس بالمواد" : "Teacher subject assignments"}
                </h3>
                {currentScope.data && !scopeLoaded && (
                  <button
                    onClick={() =>
                      (setAssignments((currentScope.data?.teacherAssignments ?? []).map((item) => ({
                        subjectId: item.subjectId,
                        ...(item.gradeId ? { gradeId: item.gradeId } : {}),
                        ...(item.sectionId ? { sectionId: item.sectionId } : {}),
                      }))), setScopeLoaded(true))
                    }
                  >
                    {ar
                      ? "تحميل التكليفات الحالية"
                      : "Load current assignments"}
                  </button>
                )}
                <label>
                  {ar ? "المادة" : "Subject"}
                  <select
                    value={subjectId}
                    onChange={(e) => setSubjectId(e.target.value)}
                  >
                    <option value="">—</option>
                    {subjects.data?.map((x) => (
                      <option key={x.id} value={x.id}>
                        {x.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  {ar ? "الصف" : "Grade"}
                  <select
                    value={gradeId}
                    onChange={(e) => {
                      setGradeId(e.target.value);
                      setSectionId("");
                    }}
                  >
                    <option value="">—</option>
                    {grades.data?.map((x) => (
                      <option key={x.id} value={x.id}>
                        {x.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  {ar ? "الشعبة" : "Section"}
                  <select
                    value={sectionId}
                    onChange={(e) => setSectionId(e.target.value)}
                  >
                    <option value="">—</option>
                    {sections.data
                      ?.filter((s) => !gradeId || s.gradeId === gradeId)
                      .map((x) => (
                        <option key={x.id} value={x.id}>
                          {x.name}
                        </option>
                      ))}
                  </select>
                </label>
                <button
                  disabled={!scopeLoaded || !subjectId}
                  onClick={() => {
                    setAssignments((old) => [
                      ...old,
                      {
                        subjectId,
                        ...(gradeId ? { gradeId } : {}),
                        ...(sectionId ? { sectionId } : {}),
                      },
                    ]);
                    setSubjectId("");
                  }}
                >
                  {ar ? "إضافة تكليف" : "Add assignment"}
                </button>
                {assignments.map((a, index) => (
                  <div key={index}>
                    {subjects.data?.find((s) => s.id === a.subjectId)?.name ??
                      "—"}{" "}
                    <button
                      onClick={() =>
                        setAssignments((old) =>
                          old.filter((_, i) => i !== index),
                        )
                      }
                    >
                      {ar ? "إزالة" : "Remove"}
                    </button>
                  </div>
                ))}
                <button
                  disabled={saveAssignments.isPending || !scopeLoaded || currentScope.isError}
                  onClick={() => saveAssignments.mutate()}
                >
                  {ar ? "حفظ التكليفات" : "Save assignments"}
                </button>
              </div>
            )}
        </div>
      )}
    </Card>
  );
}