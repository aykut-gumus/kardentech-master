import type { Dictionary, Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "./language-switcher";

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const nav = [
    { label: dict.header.nav.home, href: "#anasayfa" },
    { label: dict.header.nav.corporate, href: "#kurumsal" },
    { label: dict.header.nav.services, href: "#hizmetlerimiz" },
    { label: dict.header.nav.projects, href: "#projeler" },
    { label: dict.header.nav.humanResources, href: "#insan-kaynaklari" },
    { label: dict.header.nav.contact, href: "#iletisim" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-white/10 dark:bg-slate-950/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <a href="#anasayfa" className="flex items-center gap-3">
          <div
            className="h-9 w-9 rounded-lg bg-[#82C2E0] shadow-sm ring-1 ring-black/5 dark:ring-white/10"
            aria-hidden="true"
          />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide text-slate-950 dark:text-white">
              {dict.header.brandName}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {dict.header.brandTagline}
            </div>
          </div>
        </a>

        <nav
          aria-label="Primary"
          className="flex flex-1 items-center gap-1 overflow-x-auto whitespace-nowrap px-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100/70 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white sm:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  );
}

