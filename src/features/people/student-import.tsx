import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card } from "@nebra/ui";
import { useAuth } from "../auth/auth-context";
import { useLocale } from "../../app/locale-context";
import { useInstitution } from "../institution/institution-context";
import { apiClient } from "../../lib/api/client";
import { institutionPath } from "../institution/institution.api";
import { getApiErrorMessage } from "../../lib/api/error-message";
type Preview = {
  digest?: string;
  expectedDigest?: string;
  summary?: {
    totalRows: number;
    validRows: number;
    invalidRows: number;
    errorCount: number;
  };
  errors?: unknown[];
  canConfirm?: boolean;
};
export function StudentImport() {
  const { institutionId } = useAuth(),
    { locale } = useLocale(),
    { can } = useInstitution();
  const ar = locale === "ar";
  const [file, setFile] = useState<File | null>(null),
    [preview, setPreview] = useState<Preview | null>(null),
    [error, setError] = useState(""),
    [success, setSuccess] = useState(false);
  const send = async (path: string, digest?: string) => {
    if (!file) throw Error("File required");
    const data = new FormData();
    data.append("file", file);
    if (digest) data.append("expectedDigest", digest);
    return (
      await apiClient.post(
        institutionPath(institutionId!, "imports/students/" + path),
        data,
      )
    ).data as Preview;
  };
  const inspect = useMutation({
    mutationFn: () => send("preview"),
    onSuccess: (res) => {
      setPreview(res);
      setSuccess(false);
      setError("");
    },
    onError: (e) =>
      setError(
        getApiErrorMessage(e, ar, ar ? "فشلت معاينة الملف" : "Preview failed"),
      ),
  });
  const confirm = useMutation({
    mutationFn: () =>
      send("confirm", preview?.digest ?? preview?.expectedDigest),
    onSuccess: () => {
      setSuccess(true);
      setPreview(null);
      setFile(null);
      setError("");
    },
    onError: (e) =>
      setError(
        getApiErrorMessage(
          e,
          ar,
          ar ? "تعذر تأكيد الاستيراد" : "Import confirmation failed",
        ),
      ),
  });
  if (!can("institution.imports.manage")) return null;
  return (
    <Card className="people-form-card">
      <h2>{ar ? "استيراد الطلاب من Excel" : "Import students from Excel"}</h2>
      <p>
        {ar
          ? "ارفع ملف XLSX، راجع المعاينة أولاً، ثم أكّد الاستيراد."
          : "Upload an XLSX file, review the preview, and confirm."}
      </p>
      <label>
        {ar ? "ملف الطلاب" : "Student file"}
        <input
          type="file"
          accept=".xlsx"
          onChange={(e) => {
            setFile(e.target.files?.[0] ?? null);
            setPreview(null);
            setSuccess(false);
          }}
        />
      </label>
      <button
        type="button"
        disabled={!file || inspect.isPending}
        onClick={() => inspect.mutate()}
      >
        {ar ? "معاينة الملف" : "Preview file"}
      </button>
      {preview && (
        <div>
          <p>{ar ? "معاينة الاستيراد جاهزة" : "Import preview ready"}</p>
          <p>
            {JSON.stringify({
              totalRows: preview.summary?.totalRows,
              validRows: preview.summary?.validRows,
              invalidRows: preview.summary?.invalidRows,
              errors: preview.errors,
            }).slice(0, 1500)}
          </p>
          <button
            type="button"
            disabled={
              confirm.isPending ||
              !preview.digest ||
              !preview.canConfirm
            }
            onClick={() => confirm.mutate()}
          >
            {ar ? "تأكيد الاستيراد" : "Confirm import"}
          </button>
        </div>
      )}
      {error && <p role="alert">{error}</p>}
      {success && (
        <p role="status">
          {ar ? "تم إرسال الاستيراد بنجاح" : "Import submitted successfully"}
        </p>
      )}
    </Card>
  );
}
