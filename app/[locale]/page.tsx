import { getDictionary, type Locale } from "@/lib/i18n";
import { HumanResourcesSection } from "./sections/human-resources-section";
import { ContactSection } from "./sections/contact-section";

function ServiceIcon(props: React.SVGProps<SVGSVGElement>) {
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
    />
  );
}

function IconHammer(props: React.SVGProps<SVGSVGElement>) {
  return (
    <ServiceIcon {...props}>
      <path d="M11 7 8 10l6 6 3-3-6-6Z" />
      <path d="M14 4 11 7l6 6 3-3-6-6Z" />
      <path d="M7 11 4 14l6 6 3-3-6-6Z" />
    </ServiceIcon>
  );
}

function IconSparkles(props: React.SVGProps<SVGSVGElement>) {
  return (
    <ServiceIcon {...props}>
      <path d="M12 2l1.2 4.1L17 7.3l-3.8 1.2L12 12l-1.2-3.5L7 7.3l3.8-1.2L12 2Z" />
      <path d="M19 12l.8 2.7 2.2.7-2.2.7L19 19l-.8-2.9-2.2-.7 2.2-.7L19 12Z" />
      <path d="M5 13l.7 2.4 2 .6-2 .6L5 19l-.7-2.4-2-.6 2-.6L5 13Z" />
    </ServiceIcon>
  );
}

function IconKey(props: React.SVGProps<SVGSVGElement>) {
  return (
    <ServiceIcon {...props}>
      <path d="M21 9a4 4 0 1 1-7.6-1.7A4 4 0 0 1 21 9Z" />
      <path d="M10.5 10.5 3 18v3h3l1.5-1.5H10l1.5-1.5H14l1.5-1.5" />
    </ServiceIcon>
  );
}

function IconRulerPen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <ServiceIcon {...props}>
      <path d="M4 7h10" />
      <path d="M4 11h8" />
      <path d="M4 15h6" />
      <path d="M16 3l5 5-7 7H9V10l7-7Z" />
    </ServiceIcon>
  );
}

function IconBolt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <ServiceIcon {...props}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </ServiceIcon>
  );
}

function IconWrench(props: React.SVGProps<SVGSVGElement>) {
  return (
    <ServiceIcon {...props}>
      <path d="M20 7a5 5 0 0 1-7 4L7 17l-3 1 1-3 6-6a5 5 0 0 1 4-7l-2 3 3 3 4-1Z" />
      <path d="M6 20h3" />
    </ServiceIcon>
  );
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const featuredProjects = [
    {
      name: "Yalıkavak Quadro Villaları",
      investor: "(Placeholder)",
      subcontractor: "Kardentech Mühendislik",
    },
    {
      name: "Mercedes Benz Hasmer Antalya",
      investor: "(Placeholder)",
      subcontractor: "Kardentech Mühendislik",
    },
    {
      name: "Baia Bodrum Otel",
      investor: "(Placeholder)",
      subcontractor: "Kardentech Mühendislik",
    },
  ] as const;

  const otherProjects = [
    { name: "Jumeirah Village 856 Villas", location: "Dubai/BAE" },
    { name: "SLS Dubai Hotel & Residences", location: "Dubai/BAE" },
    { name: "Sheraton Ankara Convention Center", location: "Ankara/TÜRKİYE" },
    { name: "Aquapark Moscow", location: "Moskova/RUSYA" },
  ] as const;

  return (
    <div>
      <section id="anasayfa" className="relative isolate overflow-hidden bg-slate-950">
        <img
          src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=2400&q=60"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true" />
        <div
          className="absolute inset-0 -z-10 opacity-25"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div
          className="absolute inset-0 -z-10"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(900px circle at 20% 10%, rgba(130,194,224,0.35), transparent 55%), radial-gradient(700px circle at 90% 30%, rgba(130,194,224,0.18), transparent 60%)",
          }}
        />

        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-white/80">
              <span className="h-2 w-2 rounded-full bg-[#82C2E0]" aria-hidden="true" />
              {dict.home.hero.badge}
            </p>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              {dict.home.hero.headline}
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-white/75 sm:text-lg">
              {dict.home.hero.subtext}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#projeler"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#82C2E0] px-6 text-sm font-semibold text-slate-950 shadow-sm ring-1 ring-black/10 transition-colors hover:bg-[#6bb6d8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82C2E0] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {dict.home.hero.primaryCta}
              </a>
              <a
                href="#iletisim"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82C2E0] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {dict.home.hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="kurumsal" className="bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm dark:border-white/10 dark:bg-white/10">
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=2400&q=70"
                alt={dict.home.corporate.imageAlt}
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(2,6,23,0.05) 0%, rgba(2,6,23,0.35) 100%)",
                }}
              />
            </div>

            <div className="max-w-xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                <span className="h-2 w-2 rounded-full bg-[#82C2E0]" aria-hidden="true" />
                {dict.home.corporate.badge}
              </p>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                {dict.home.corporate.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {dict.home.corporate.text}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#kurumsal"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:border-transparent hover:bg-[#82C2E0]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82C2E0] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-[#82C2E0]/20 dark:focus-visible:ring-offset-slate-950"
                >
                  {dict.home.corporate.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="hizmetlerimiz"
        className="border-y border-slate-200/70 bg-slate-50 dark:border-white/10 dark:bg-slate-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <span className="h-2 w-2 rounded-full bg-[#82C2E0]" aria-hidden="true" />
              {dict.home.services.badge}
            </p>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {dict.home.services.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {dict.home.services.subtitle}
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: dict.home.services.items.contracting, Icon: IconHammer },
              { title: dict.home.services.items.renovation, Icon: IconSparkles },
              { title: dict.home.services.items.turnkey, Icon: IconKey },
              { title: dict.home.services.items.designConsulting, Icon: IconRulerPen },
              { title: dict.home.services.items.electrical, Icon: IconBolt },
              { title: dict.home.services.items.mechanical, Icon: IconWrench },
            ].map(({ title, Icon }) => (
              <div
                key={title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#82C2E0]/60 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 ring-1 ring-slate-200 transition-all group-hover:bg-[#82C2E0]/15 group-hover:text-slate-950 group-hover:ring-[#82C2E0]/35 dark:bg-white/10 dark:text-white dark:ring-white/10 dark:group-hover:bg-[#82C2E0]/15">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-slate-950 dark:text-white">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {dict.home.services.cardText}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projeler" className="bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3">
              <span
                className="h-2 w-2 rounded-full bg-[#82C2E0]"
                aria-hidden="true"
              />
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                {dict.header.nav.projects}
              </h2>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {dict.home.sections.projects.subtitle}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p, idx) => {
              const bg = [
                "radial-gradient(900px circle at 10% 10%, rgba(130,194,224,0.30), transparent 55%), linear-gradient(135deg, rgba(2,6,23,0.88), rgba(15,23,42,0.70))",
                "radial-gradient(900px circle at 90% 10%, rgba(130,194,224,0.28), transparent 55%), linear-gradient(135deg, rgba(2,6,23,0.88), rgba(15,23,42,0.70))",
                "radial-gradient(900px circle at 50% 0%, rgba(130,194,224,0.26), transparent 55%), linear-gradient(135deg, rgba(2,6,23,0.88), rgba(15,23,42,0.70))",
              ][idx % 3];

              return (
                <div
                  key={p.name}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div
                      className="absolute inset-0 scale-100 bg-slate-900 transition-transform duration-500 group-hover:scale-[1.04]"
                      style={{ backgroundImage: bg }}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(130,194,224,0.00) 0%, rgba(130,194,224,0.22) 55%, rgba(130,194,224,0.14) 100%)",
                      }}
                    />
                    <div
                      className="absolute inset-0 ring-0 transition-all duration-300 group-hover:ring-2 group-hover:ring-[#82C2E0]/60"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-base font-semibold tracking-tight text-slate-950 dark:text-white">
                      {p.name}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {dict.home.sections.projects.investorLabel} {p.investor}
                    </div>
                    <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                      <span
                        className="h-2 w-2 rounded-full bg-[#82C2E0]/70"
                        aria-hidden="true"
                      />
                      {dict.home.sections.projects.subcontractorLabel}{" "}
                      {p.subcontractor}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-slate-50 dark:border-white/10 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3">
              <span
                className="h-2 w-2 rounded-full bg-[#82C2E0]"
                aria-hidden="true"
              />
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                Renovasyon Öncesi ve Sonrası
              </h2>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Side-by-side veya slider karşılaştırma kurgusu için placeholder.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <div className="text-sm font-semibold text-slate-950 dark:text-white">
                Yalıkavak Suyalı
              </div>
              <div className="mt-4 aspect-[16/9] rounded-2xl bg-slate-100 dark:bg-white/10" />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <div className="text-sm font-semibold text-slate-950 dark:text-white">
                Y. Uzun Home&apos;s
              </div>
              <div className="mt-4 aspect-[16/9] rounded-2xl bg-slate-100 dark:bg-white/10" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3">
              <span
                className="h-2 w-2 rounded-full bg-[#82C2E0]"
                aria-hidden="true"
              />
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                Uluslararası ve Yurt İçi Diğer Projelerimiz
              </h2>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Görev alınan projeler kataloğundan seçili örnekler.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="grid grid-cols-1 divide-y divide-slate-200/80 dark:divide-white/10">
              {otherProjects.map((p) => (
                <div
                  key={p.name}
                  className="flex flex-col gap-1 px-6 py-5 transition-colors hover:bg-slate-50 dark:hover:bg-white/5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="text-sm font-semibold text-slate-950 dark:text-white">
                    {p.name}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    {p.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HumanResourcesSection
        title={dict.header.nav.humanResources}
        lead={dict.home.sections.humanResources.lead}
        copy={dict.home.sections.humanResources}
      />
      <ContactSection
        title={dict.header.nav.contact}
        lead={dict.home.sections.contact.lead}
        copy={dict.home.sections.contact}
      />
    </div>
  );
}

