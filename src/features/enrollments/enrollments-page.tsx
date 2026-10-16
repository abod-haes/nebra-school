import { useState, type FormEvent } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Card, PageHeader } from "@nebra/ui";
import { useAuth } from "../auth/auth-context";
import { useInstitution } from "../institution/institution-context";
import { useLocale } from "../../app/locale-context";
import { listAcademic } from "../academics/academics.api";
import { fetchRecords } from "../records/records.api";
import { apiClient } from "../../lib/api/client";
import { institutionPath } from "../institution/institution.api";
import "./enrollments.css";
import { getApiErrorMessage } from "../../lib/api/error-message";
type Enrollment = {
  id: string;
  studentRecordId: string;
  academicYearId: string;
  gradeId: string;
  sectionId: string;
  status: string;
  studentRecord?: { fullName: string; studentCode: string };
  academicYear?: { name: string };
  grade?: { name: string };
  section?: { name: string };
};
type PageData = { items: Enrollment[]; total: number };
export function EnrollmentsPage() {
  const { institutionId } = useAuth();
  const { can } = useInstitution();
  const { locale } = useLocale();
  const ar = locale === "ar";
  const id = institutionId!;
  const qc = useQueryClient();
  const [studentId, setStudentId] = useState(""),
    [yearId, setYearId] = useState(""),
    [gradeId, setGradeId] = useState(""),
    [sectionId, setSectionId] = useState(""),
    [error, setError] = useState(""),
    [search, setSearch] = useState(""),
    [page, setPage] = useState(1),
    [editing, setEditing] = useState<Enrollment | null>(null),
    [editGrade, setEditGrade] = useState(""),
    [editSection, setEditSection] = useState(""),
    [editStatus, setEditStatus] = useState("");
  const years = useQuery({
    queryKey: ["institution", id, "academic", "years"],
    queryFn: () => listAcademic(id, "years"),
  });
  const grades = useQuery({
    queryKey: ["institution", id, "academic", "grades"],
    queryFn: () => listAcademic(id, "grades"),
  });
  const sections = useQuery({
    queryKey: ["institution", id, "academic", "sections", gradeId],
    queryFn: () =>
      apiClient
        .get(institutionPath(id, "academic/sections"), {
          params: gradeId ? { gradeId } : undefined,
        })
        .then((r) => r.data as { id: string; name: string; gradeId: string }[]),
    enabled: !!gradeId,
  });
  const students = useQuery({
    queryKey: ["institution", id, "student-options", search],
    queryFn: () => fetchRecords(id, "students", 1, search),
  });
  const enrollments = useQuery({
    queryKey: ["institution", id, "enrollments", page],
    queryFn: () =>
      apiClient
        .get<PageData>(institutionPath(id, "enrollments/school"), {
          params: { page, limit: 20 },
        })
        .then((r) => r.data),
  });
  const editSections = useQuery({
    queryKey: ["institution", id, "edit-sections", editGrade],
    queryFn: () =>
      apiClient
        .get<Array<{ id: string; name: string; gradeId: string }>>(
          institutionPath(id, "academic/sections"),
          { params: { gradeId: editGrade } },
        )
        .then((x) => x.data),
    enabled: !!editGrade,
  });
  const saveEdit = useMutation({
    mutationFn: () =>
      apiClient.patch(
        institutionPath(id, "enrollments/school/" + editing!.id),
        { gradeId: editGrade, sectionId: editSection, status: editStatus },
      ),
    onSuccess: () => {
      setEditing(null);
      setError("");
      void qc.invalidateQueries({
        queryKey: ["institution", id, "enrollments"],
      });
    },
    onError: (e) =>
      setError(
        getApiErrorMessage(
          e,
          ar,
          ar ? "تعذر تعديل تسجيل الطالب" : "Could not update enrollment",
        ),
      ),
  });
  const statuses: Record<string, string> = {
    ACTIVE: ar ? "نشط" : "Active",
    TRANSFERRED: ar ? "منقول" : "Transferred",
    WITHDRAWN: ar ? "منسحب" : "Withdrawn",
    COMPLETED: ar ? "مكتمل" : "Completed",
  };
  const create = useMutation({
    mutationFn: () =>
      apiClient.post(institutionPath(id, "enrollments/school"), {
        studentRecordId: studentId,
        academicYearId: yearId,
        gradeId,
        sectionId,
      }),
    onSuccess: () => {
      setStudentId("");
      setError("");
      void qc.invalidateQueries({
        queryKey: ["institution", id, "enrollments"],
      });
    },
    onError: () =>
      setError(
        ar
          ? "تعذر تسجيل الطالب. تأكد من عدم وجود تسجيل مكرر وصحة الاختيارات."
          : "Unable to enroll student. Check duplicate enrollment and selections.",
      ),
  });
  function submit(e: FormEvent) {
    e.preventDefault();
    setError("");
    create.mutate();
  }
  const items = Array.isArray(enrollments.data?.items)
    ? enrollments.data.items
    : [];
  return (
    <section className="enrollments-page">
      <PageHeader
        title={ar ? "التسجيلات المدرسية" : "School enrollments"}
        description={
          ar
            ? "ربط الطالب بالسنة الدراسية والصف والشعبة"
            : "Assign students to an academic year, grade and section"
        }
      />
      {can("institution.enrollments.manage") && (
        <Card className="enrollment-panel">
          <h2>{ar ? "تسجيل طالب" : "Enroll a student"}</h2>
          <form onSubmit={submit}>
            <label>
              {ar ? "بحث عن طالب" : "Find student"}
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={ar ? "اسم الطالب أو رمزه" : "Name or code"}
              />
            </label>
            <label>
              {ar ? "الطالب" : "Student"}
              <select
                required
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
              >
                <option value="">
                  {ar ? "اختر طالباً" : "Select student"}
                </option>
                {students.data?.items.map((item) => (
                  <option key={String(item.id)} value={String(item.id)}>
                    {String(item.fullName ?? "")} —{" "}
                    {String(item.studentCode ?? "")}
                  </option>
                ))}
              </select>
            </label>
            <label>
              {ar ? "السنة الدراسية" : "Academic year"}
              <select
                required
                value={yearId}
                onChange={(e) => setYearId(e.target.value)}
              >
                <option value="">{ar ? "اختر السنة" : "Select year"}</option>
                {years.data?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              {ar ? "الصف" : "Grade"}
              <select
                required
                value={gradeId}
                onChange={(e) => {
                  setGradeId(e.target.value);
                  setSectionId("");
                }}
              >
                <option value="">{ar ? "اختر الصف" : "Select grade"}</option>
                {grades.data?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              {ar ? "الشعبة" : "Section"}
              <select
                required
                disabled={!gradeId}
                value={sectionId}
                onChange={(e) => setSectionId(e.target.value)}
              >
                <option value="">
                  {ar ? "اختر الشعبة" : "Select section"}
                </option>
                {sections.data?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>
            {error && <p role="alert">{error}</p>}
            <button disabled={create.isPending}>
              {create.isPending
                ? ar
                  ? "جارٍ الحفظ..."
                  : "Saving..."
                : ar
                  ? "تسجيل الطالب"
                  : "Enroll student"}
            </button>
          </form>
        </Card>
      )}
      <Card className="enrollment-panel">
        <h2>{ar ? "التسجيلات الحالية" : "Current enrollments"}</h2>
        {enrollments.isPending ? (
          <p role="status">{ar ? "جارٍ التحميل..." : "Loading..."}</p>
        ) : enrollments.isError ? (
          <p role="alert">
            {ar ? "تعذر تحميل التسجيلات" : "Unable to load enrollments"}
          </p>
        ) : items.length === 0 ? (
          <p>{ar ? "لا توجد تسجيلات" : "No enrollments"}</p>
        ) : (
          <div className="enrollment-overflow">
            <table>
              <thead>
                <tr>
                  <th>{ar ? "الطالب" : "Student"}</th>
                  <th>{ar ? "السنة" : "Year"}</th>
                  <th>{ar ? "الصف" : "Grade"}</th>
                  <th>{ar ? "الشعبة" : "Section"}</th>
                  <th>{ar ? "الحالة" : "Status"}</th>
                  <th>{ar ? "الإجراءات" : "Actions"}</th>
                </tr>
              </thead>
              <tbody>
                {items.map((row) => (
                  <tr key={row.id}>
                    <td>{row.studentRecord?.fullName ?? "—"}</td>
                    <td>
                      {row.academicYear?.name ??
                        years.data?.find((x) => x.id === row.academicYearId)
                          ?.name ??
                        "—"}
                    </td>
                    <td>
                      {row.grade?.name ??
                        grades.data?.find((x) => x.id === row.gradeId)?.name ??
                        "—"}
                    </td>
                    <td>{row.section?.name ?? "—"}</td>
                    <td>{statuses[row.status] ?? row.status}</td>
                    <td>
                      {can("institution.enrollments.manage") && (
                        <button
                          type="button"
                          onClick={() => {
                            setEditing(row);
                            setEditGrade(row.gradeId);
                            setEditSection(row.sectionId);
                            setEditStatus(row.status);
                            setError("");
                          }}
                        >
                          {ar ? "تعديل" : "Edit"}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {editing && (
          <div className="enrollment-edit">
            <h3>{ar ? "تعديل تسجيل الطالب" : "Update enrollment"}</h3>
            <p>{editing.studentRecord?.fullName ?? "—"}</p>
            <label>
              {ar ? "الصف" : "Grade"}
              <select
                value={editGrade}
                onChange={(e) => {
                  setEditGrade(e.target.value);
                  setEditSection("");
                }}
              >
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
                value={editSection}
                onChange={(e) => setEditSection(e.target.value)}
              >
                {editSections.data?.map((x) => (
                  <option key={x.id} value={x.id}>
                    {x.name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              {ar ? "الحالة" : "Status"}
              <select
                value={editStatus}
                onChange={(e) => setEditStatus(e.target.value)}
              >
                {Object.entries(statuses).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            {error && <p role="alert">{error}</p>}
            <button
              type="button"
              disabled={saveEdit.isPending || !editGrade || !editSection}
              onClick={() => saveEdit.mutate()}
            >
              {ar ? "حفظ التعديلات" : "Save changes"}
            </button>
            <button type="button" onClick={() => setEditing(null)}>
              {ar ? "إلغاء" : "Cancel"}
            </button>
          </div>
        )}
        <div className="enrollment-pages">
          <button disabled={page === 1} onClick={() => setPage((v) => v - 1)}>
            {ar ? "السابق" : "Previous"}
          </button>
          <span>{page}</span>
          <button
            disabled={items.length < 20}
            onClick={() => setPage((v) => v + 1)}
          >
            {ar ? "التالي" : "Next"}
          </button>
        </div>
      </Card>
    </section>
  );
}
