"use client";

import { useMemo, useState } from "react";

function IconPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" />
      <path d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    </svg>
  );
}

function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

const WHATSAPP_NUMBER = "905550000000";

export function ContactSection({
  title,
  lead,
  copy,
}: {
  title: string;
  lead: string;
  copy: {
    infoTitle: string;
    labels: { address: string; email: string };
    whatsapp: {
      title: string;
      instruction: string;
      fields: { name: string; surname: string; subject: string; message: string };
      placeholders: {
        name: string;
        surname: string;
        subject: string;
        message: string;
      };
      button: string;
      messageTemplate: {
        greeting: string;
        name: string;
        surname: string;
        subject: string;
        message: string;
      };
    };
  };
}) {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    subject: "",
    message: "",
  });

  const whatsappText = useMemo(() => {
    const lines = [
      copy.whatsapp.messageTemplate.greeting,
      "",
      `${copy.whatsapp.messageTemplate.name}: ${form.name || "-"}`,
      `${copy.whatsapp.messageTemplate.surname}: ${form.surname || "-"}`,
      `${copy.whatsapp.messageTemplate.subject}: ${form.subject || "-"}`,
      "",
      `${copy.whatsapp.messageTemplate.message}:`,
      form.message || "-",
    ];
    return lines.join("\n");
  }, [copy.whatsapp.messageTemplate, form]);

  return (
    <section id="iletisim" className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#82C2E0]" aria-hidden="true" />
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {title}
            </h2>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {lead}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h3 className="text-sm font-semibold text-slate-950 dark:text-white">
              {copy.infoTitle}
            </h3>

            <div className="mt-5 space-y-4 text-sm">
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#82C2E0]/15 ring-1 ring-[#82C2E0]/25">
                  <IconPin className="h-5 w-5 text-slate-900 dark:text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {copy.labels.address}
                  </div>
                  <div className="mt-1 leading-6 text-slate-600 dark:text-slate-300">
                    Dirmil Mah. 6698 Sk. Küçük Sanayi Sitesi No:12/13 Yalıkavak
                    Bodrum/MUĞLA
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#82C2E0]/15 ring-1 ring-[#82C2E0]/25">
                  <IconMail className="h-5 w-5 text-slate-900 dark:text-white" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {copy.labels.email}
                  </div>
                  <a
                    className="mt-1 inline-flex items-center gap-2 leading-6 text-slate-600 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-slate-950 hover:decoration-[#82C2E0] dark:text-slate-300 dark:decoration-white/20 dark:hover:text-white"
                    href="mailto:info@kardentech.com"
                  >
                    info@kardentech.com
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <h3 className="text-sm font-semibold text-slate-950 dark:text-white">
              {copy.whatsapp.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {copy.whatsapp.instruction}
            </p>

            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  whatsappText,
                )}`;
                window.open(url, "_blank", "noopener,noreferrer");
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    {copy.whatsapp.fields.name}
                  </label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    className="mt-2 h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#82C2E0] focus:ring-2 focus:ring-[#82C2E0]/35 dark:border-white/10 dark:bg-slate-950/40 dark:text-white"
                    placeholder={copy.whatsapp.placeholders.name}
                    autoComplete="given-name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="surname"
                    className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                  >
                    {copy.whatsapp.fields.surname}
                  </label>
                  <input
                    id="surname"
                    value={form.surname}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, surname: e.target.value }))
                    }
                    className="mt-2 h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#82C2E0] focus:ring-2 focus:ring-[#82C2E0]/35 dark:border-white/10 dark:bg-slate-950/40 dark:text-white"
                    placeholder={copy.whatsapp.placeholders.surname}
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                >
                  {copy.whatsapp.fields.subject}
                </label>
                <input
                  id="subject"
                  value={form.subject}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, subject: e.target.value }))
                  }
                  className="mt-2 h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#82C2E0] focus:ring-2 focus:ring-[#82C2E0]/35 dark:border-white/10 dark:bg-slate-950/40 dark:text-white"
                  placeholder={copy.whatsapp.placeholders.subject}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-xs font-semibold text-slate-700 dark:text-slate-300"
                >
                  {copy.whatsapp.fields.message}
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, message: e.target.value }))
                  }
                  className="mt-2 min-h-32 w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#82C2E0] focus:ring-2 focus:ring-[#82C2E0]/35 dark:border-white/10 dark:bg-slate-950/40 dark:text-white"
                  placeholder={copy.whatsapp.placeholders.message}
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#82C2E0] px-6 text-sm font-semibold text-slate-950 shadow-sm ring-1 ring-black/10 transition-colors hover:bg-[#6bb6d8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82C2E0] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 sm:w-auto"
              >
                {copy.whatsapp.button}
              </button>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
}

