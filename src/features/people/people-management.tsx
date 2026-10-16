import { useState } from "react";
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
  user?: { displayName: string };
};
const staffRoles = [
  "TEACHER",
  "SUPERVISOR",
  "ADMINISTRATIVE_STAFF",
  "ACCOUNTANT",
  "FINANCE_STAFF",
];
const states: Record<Kind, string[]> = {
  students: ["ACTIVE", "SUSPENDED", "ARCHIVED"],
  staff: ["INVITED", "ACTIVE", "SUSPENDED", "LEFT"],
};
export function PeopleManagement({ kind }: { kind: Kind }) {
  const { institutionId } = useAuth(),
    { locale } = useLocale(),
    { can } = useInstitution();
  const ar = locale === "ar",
    id = institutionId!;
  const qc = useQueryClient(),
    [search, setSearch] = useState(""),
    [selected, setSelected] = useState<Person | null>(null),
    [name, setName] = useState(""),
    [code, setCode] = useState(""),
    [phone, setPhone] = useState(""),
    [status, setStatus] = useState(""),
    [roles, setRoles] = useState<string[]>([]),
    [error, setError] = useState(""),
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
  const permission =
    kind === "students"
      ? "institution.students.update"
      : "institution.memberships.update";
  const change = useMutation({
    mutationFn: async () => {
      if (!selected) throw Error("No selected record");
      if (kind === "students") {
        await apiClient.patch(institutionPath(id, "students/" + selected.id), {
          fullName: name.trim(),
          studentCode: code.trim(),
          phone: phone.trim() || undefined,
        });
      } else {
        await apiClient.patch(
          institutionPath(id, "memberships/" + selected.id + "/roles"),
          { roleCodes: roles },
        );
      }
      if (status && status !== selected.status && can(kind === 'students' ? 'institution.students.status' : 'institution.memberships.update')) {
        await apiClient.patch(
          institutionPath(
            id,
            (kind === "students" ? "students/" : "memberships/") +
              selected.id +
              "/status",
          ),
          { status },
        );
      }
    },
    onSuccess: () => {
      setSelected(null);
      setError("");
      void qc.invalidateQueries({ queryKey: ["institution", id] });
    },
    onError: (e) =>
      setError(
        getApiErrorMessage(
          e,
          ar,
          ar ? "تعذّر حفظ التعديلات" : "Could not save changes",
        ),
      ),
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
    setStatus(p.status ?? "ACTIVE");
    setRoles(p.roles?.map((r) => r.role.code) ?? []);
    setAssignments([]);
    setSupervisorScopes([]);
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
                    <td>{x.status ?? "—"}</td>
                    <td>
                      {(can(permission) || (kind === 'students' && can('institution.students.status'))) && (
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
            </>
          ) : (
            <label>
              {ar ? "الأدوار" : "Roles"}
              {staffRoles.map((role) => (
                <span key={role}>
                  <input
                    type="checkbox"
                    checked={roles.includes(role)}
                    onChange={(e) =>
                      setRoles((old) =>
                        e.target.checked
                          ? [...old, role]
                          : old.filter((v) => v !== role),
                      )
                    }
                  />
                  {role}
                </span>
              ))}
            </label>
          )}
          <label>
            {ar ? "الحالة" : "Status"}
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
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
          <button
            type="button"
            disabled={
              change.isPending || (kind === "staff" && roles.length === 0)
            }
            onClick={() => change.mutate()}
          >
            {ar ? "حفظ التعديلات" : "Save changes"}
          </button>
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
            can("institution.scopes.update") &&
            roles.includes("SUPERVISOR") && (
              <div>
                <h3>{ar ? "نطاق إشراف الموجّه" : "Supervisor scopes"}</h3>
                {currentScope.data && supervisorScopes.length === 0 && (
                  <button
                    type="button"
                    onClick={() =>
                      setSupervisorScopes(
                        currentScope.data?.supervisorScopes ?? [],
                      )
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
                  disabled={!gradeId && !sectionId}
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
                  disabled={saveSupervisor.isPending}
                  onClick={() => saveSupervisor.mutate()}
                >
                  {ar ? "حفظ نطاق الإشراف" : "Save scopes"}
                </button>
              </div>
            )}
          {kind === "staff" &&
            can("institution.scopes.update") &&
            roles.includes("TEACHER") && (
              <div>
                <h3>
                  {ar ? "تكليف المدرّس بالمواد" : "Teacher subject assignments"}
                </h3>
                {currentScope.data && assignments.length === 0 && (
                  <button
                    onClick={() =>
                      setAssignments(
                        currentScope.data?.teacherAssignments ?? [],
                      )
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
                  disabled={!subjectId}
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
                  disabled={saveAssignments.isPending}
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
