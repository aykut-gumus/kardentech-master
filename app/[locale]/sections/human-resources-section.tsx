"use client";

import { useMemo, useState } from "react";

type ApiState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function HumanResourcesSection({
  title,
  lead,
  copy,
}: {
  title: string;
  lead: string;
  copy: {
    infoTitle: string;
    infoText: string;
    supportedFormatsTitle: string;
    supportedFormatsValue: string;
    formTitle: string;
    labels: {
      fullName: string;
      email: string;
      phone: string;
      cv: string;
      coverLetter: string;
    };
    placeholders: {
      fullName: string;
      email: string;
      phone: string;
      coverLetter: string;
    };
    file: {
      choose: string;
      none: string;
    };
    buttons: {
      submit: string;
      submitting: string;
    };
  };
}) {
  const [apiState, setApiState] = useState<ApiState>({ status: "idle" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);

  const canSubmit = useMemo(() => {
    if (!form.name.trim()) return false;
    if (!form.email.trim()) return false;
    if (!form.phone.trim()) return false;
    if (!cvFile) return false;
    return apiState.status !== "submitting";
  }, [apiState.status, cvFile, form.email, form.name, form.phone]);

  return (
    <section
      id="insan-kaynaklari"
      className="border-y border-slate-200/70 bg-slate-50 dark:border-white/10 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-3">
            <span
              className="h-2 w-2 rounded-full bg-[#82C2E0]"
              aria-hidden="true"
            />
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {title}
            </h2>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {lead}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <section className="lg:col-span-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h3 className="text-sm font-semibold text-slate-950 dark:text-white">
                {copy.infoTitle}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {copy.infoText}
              </p>
              <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-xs leading-6 text-slate-600 ring-1 ring-slate-200 dark:bg-white/5 dark:text-slate-300 dark:ring-white/10">
                <div className="font-semibold text-slate-900 dark:text-white">
                  {copy.supportedFormatsTitle}
                </div>
                <div className="mt-1">{copy.supportedFormatsValue}</div>
              </div>
            </div>
          </section>

          <section className="lg:col-span-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <h3 className="text-sm font-semibold text-slate-950 dark:text-white">
                {copy.formTitle}
              </h3>

              <form
                className="mt-6 space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!canSubmit) return;
                  if (!cvFile) return;

                  setApiState({ status: "submitting" });
                  try {
                    const fd = new FormData();
                    fd.append("name", form.name);
                    fd.append("email", form.email);
                    fd.append("phone", form.phone);
                    fd.append("coverLetter", form.coverLetter);
                    fd.append("cv", cvFile);

                    const res = await fetch("/api/upload-cv", {
                      method: "POST",
                      body: fd,
                    });

                    const data = (await res.json()) as
                      | { ok: true; message: string }
                      | { ok: false; error: string };

                    if (!res.ok || !data.ok) {
                      setApiState({
                        status: "error",
                        message: !data.ok
                          ? data.error
                          : "Başvurunuz gönderilemedi.",
                      });
                      return;
                    }

                    setApiState({ status: "success", message: data.message });
                    setForm({ name: "", email: "", phone: "", coverLetter: "" });
                    setCvFile(null);
                  } catch {
                    setApiState({
                      status: "error",
                      message: "Beklenmeyen bir hata oluştu.",
                    });
                  }
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="hr_name"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {copy.labels.fullName}
                    </label>
                    <input
                      id="hr_name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, name: e.target.value }))
                      }
                      className="mt-2 h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#82C2E0] focus:ring-2 focus:ring-[#82C2E0]/35 dark:border-white/10 dark:bg-slate-950/40 dark:text-white"
                      placeholder={copy.placeholders.fullName}
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="hr_email"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {copy.labels.email}
                    </label>
                    <input
                      id="hr_email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, email: e.target.value }))
                      }
                      className="mt-2 h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#82C2E0] focus:ring-2 focus:ring-[#82C2E0]/35 dark:border-white/10 dark:bg-slate-950/40 dark:text-white"
                      placeholder={copy.placeholders.email}
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="hr_phone"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {copy.labels.phone}
                    </label>
                    <input
                      id="hr_phone"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, phone: e.target.value }))
                      }
                      className="mt-2 h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#82C2E0] focus:ring-2 focus:ring-[#82C2E0]/35 dark:border-white/10 dark:bg-slate-950/40 dark:text-white"
                      placeholder={copy.placeholders.phone}
                      autoComplete="tel"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hr_cv"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {copy.labels.cv}
                    </label>
                    <div className="mt-2 flex items-center gap-3">
                      <input
                        id="hr_cv"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) =>
                          setCvFile(e.target.files?.[0] ?? null)
                        }
                        className="sr-only"
                        required
                      />
                      <label
                        htmlFor="hr_cv"
                        className="inline-flex h-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#82C2E0] px-5 text-sm font-semibold text-slate-950 shadow-sm ring-1 ring-black/10 transition-colors hover:bg-[#6bb6d8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82C2E0] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
                      >
                        {copy.file.choose}
                      </label>
                      <div className="min-w-0 text-sm text-slate-600 dark:text-slate-300">
                        {cvFile ? (
                          <span className="font-semibold text-slate-900 dark:text-white">
                            {cvFile.name}
                          </span>
                        ) : (
                          copy.file.none
                        )}
                      </div>
                    </div>
                    {cvFile ? (
                      <div className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                        Seçilen dosya:{" "}
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {cvFile.name}
                        </span>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="hr_coverLetter"
                    className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    {copy.labels.coverLetter}
                  </label>
                  <textarea
                    id="hr_coverLetter"
                    value={form.coverLetter}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, coverLetter: e.target.value }))
                    }
                    className="mt-2 min-h-36 w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#82C2E0] focus:ring-2 focus:ring-[#82C2E0]/35 dark:border-white/10 dark:bg-slate-950/40 dark:text-white"
                    placeholder={copy.placeholders.coverLetter}
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#82C2E0] px-6 text-sm font-semibold text-slate-950 shadow-sm ring-1 ring-black/10 transition-colors hover:bg-[#6bb6d8] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82C2E0] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
                  >
                    {apiState.status === "submitting"
                      ? copy.buttons.submitting
                      : copy.buttons.submit}
                  </button>

                  {apiState.status === "success" ? (
                    <div className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                      {apiState.message}
                    </div>
                  ) : null}
                  {apiState.status === "error" ? (
                    <div className="text-sm font-semibold text-rose-700 dark:text-rose-300">
                      {apiState.message}
                    </div>
                  ) : null}
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

