"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { locales, type Locale } from "@/lib/i18n";

function stripLocalePrefix(pathname: string) {
  const parts = pathname.split("/");
  const seg = parts[1];
  if (locales.includes(seg as Locale)) {
    const rest = "/" + parts.slice(2).join("/");
    return rest === "/" ? "" : rest;
  }
  return pathname === "/" ? "" : pathname;
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname() ?? "/";
  const searchParams = useSearchParams();

  const rest = stripLocalePrefix(pathname);
  const query = searchParams?.toString();

  function go(target: Locale) {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const url = `/${target}${rest}${query ? `?${query}` : ""}${hash}`;
    router.push(url);
  }

  return (
    <div className="flex items-center rounded-full border border-slate-200 bg-white/70 p-1 text-xs font-semibold tracking-wide text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-950/40 dark:text-slate-300">
      {(["tr", "en", "ru"] as const).map((l, idx) => (
        <span key={l} className="flex items-center">
          <button
            type="button"
            onClick={() => go(l)}
            className={[
              "rounded-full px-2 py-1 transition-colors",
              l === locale
                ? "text-slate-900 dark:text-white"
                : "hover:bg-[#82C2E0]/30 hover:text-slate-950 dark:hover:text-white",
              l === locale ? "bg-[#82C2E0]/25" : "",
            ].join(" ")}
            aria-current={l === locale ? "true" : undefined}
          >
            {l.toUpperCase()}
          </button>
          {idx < 2 ? (
            <span className="px-1 text-slate-300 dark:text-white/20">|</span>
          ) : null}
        </span>
      ))}
    </div>
  );
}

