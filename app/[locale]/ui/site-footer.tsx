import type { Dictionary, Locale } from "@/lib/i18n";

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

function IconPhone(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.9 19.9 0 0 1-8.7-3.1 19.6 19.6 0 0 1-6-6A19.9 19.9 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.6a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6.1 6.1l1.5-1.2a2 2 0 0 1 2.1-.5c.9.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9Z" />
    </svg>
  );
}

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v2a4 4 0 0 1 2-3Z" />
      <path d="M2 9h4v12H2z" />
      <path d="M4 4a2 2 0 1 0 0 .01" />
    </svg>
  );
}

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z" />
      <path d="M12 11a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

export function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const quickLinks = [
    { label: dict.header.nav.home, href: "#anasayfa" },
    { label: dict.header.nav.corporate, href: "#kurumsal" },
    { label: dict.header.nav.services, href: "#hizmetlerimiz" },
    { label: dict.header.nav.projects, href: "#projeler" },
    { label: dict.header.nav.humanResources, href: "#insan-kaynaklari" },
    { label: dict.header.nav.contact, href: "#iletisim" }
  ] as const;

  return (
    <footer className="mt-10 bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div
                className="h-10 w-10 rounded-xl bg-[#82C2E0] shadow-sm ring-1 ring-white/10"
                aria-hidden="true"
              />
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-wide">
                  {dict.header.brandName}
                </div>
                <div className="text-xs text-white/65">Mühendislik</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              {dict.footer.about}
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold tracking-wide text-white">
              {dict.footer.quickLinks}
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/70 transition-colors hover:text-[#82C2E0]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold tracking-wide text-white">
              {dict.footer.contact}
            </div>

            <div className="mt-5 space-y-4 text-sm text-white/70">
              <div className="flex gap-3">
                <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-white/70" />
                <div className="leading-6">{dict.footer.address}</div>
              </div>
              <div className="flex items-center gap-3">
                <IconMail className="h-5 w-5 shrink-0 text-white/70" />
                <a
                  href={`mailto:${dict.footer.email}`}
                  className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-[#82C2E0] hover:decoration-[#82C2E0]/60"
                >
                  {dict.footer.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <IconPhone className="h-5 w-5 shrink-0 text-white/70" />
                <div>{dict.footer.phone}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-white/60">{dict.footer.copyright}</div>

            <div className="flex items-center gap-3 sm:justify-end">
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition-colors hover:border-[#82C2E0]/40 hover:text-[#82C2E0]"
              >
                <IconLinkedIn className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition-colors hover:border-[#82C2E0]/40 hover:text-[#82C2E0]"
              >
                <IconInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

