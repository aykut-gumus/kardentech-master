import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const LOCALES = ["tr", "en", "ru"] as const;
const SECTION_SLUGS = [
  "anasayfa",
  "kurumsal",
  "hizmetlerimiz",
  "projeler",
  "insan-kaynaklari",
  "iletisim",
] as const;

function hasLocalePrefix(pathname: string) {
  const seg = pathname.split("/")[1];
  return LOCALES.includes(seg as (typeof LOCALES)[number]);
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap")
  ) {
    return NextResponse.next();
  }

  if (hasLocalePrefix(pathname)) {
    const [, locale, maybeSection, ...rest] = pathname.split("/");
    const isSectionPath =
      Boolean(maybeSection) &&
      rest.length === 0 &&
      SECTION_SLUGS.includes(maybeSection as (typeof SECTION_SLUGS)[number]);

    if (isSectionPath) {
      const url = req.nextUrl.clone();
      url.pathname = `/${locale}`;
      url.hash = `#${maybeSection}`;
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = `/tr${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!.*\\..*).*)"],
};

