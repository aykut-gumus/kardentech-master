"use client";

import { useState } from "react";

import type { Dictionary, Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "./language-switcher";

function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

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
          className="hidden flex-1 items-center gap-1 overflow-x-auto whitespace-nowrap px-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex"
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

        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-900 shadow-sm backdrop-blur transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82C2E0] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-slate-950/40 dark:text-white dark:hover:bg-white/10 dark:focus-visible:ring-offset-slate-950 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <IconX className="h-8 w-8" />
            ) : (
              <IconMenu className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="md:hidden">
          <div className="border-t border-slate-200/70 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-slate-950/85">
            <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
              <div className="grid gap-2">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:border-[#82C2E0]/50 hover:bg-[#82C2E0]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82C2E0] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-[#82C2E0]/10 dark:focus-visible:ring-offset-slate-950"
                  >
                    <span>{item.label}</span>
                    <span
                      className="h-1 w-8 rounded-full bg-[#82C2E0]/70"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

