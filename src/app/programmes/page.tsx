import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { FutureMindMap } from "@/components/FutureMindMap";
import { programmes, futureVision, successLooksLike } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Lok Kala, Kala Charcha, Study Tour, and the upcoming Kala Siksha — the programmes through which Nest of India documents, revives, and teaches India's living tattoo heritage.",
  alternates: { canonical: "/programmes" },
};

export default function ProgrammesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programmes"
        title="Heritage, documented and kept alive."
        intro="Each programme reconnects modern practice with India's own visual traditions — and creates sustainable opportunity for the communities who carry them."
      />

      <section>
        <div className="container-page pt-12 pb-2 lg:pt-16 lg:pb-4">
          <Reveal>
            <p className="text-lg leading-relaxed text-ink-soft sm:text-xl">
              Our programming transforms abstract mission goals into public-facing interactive
              platforms. Every initiative rests on three strict rules: communities must be central
              actors, context must accompany every motif, and programmes must generate direct material
              or economic value for the tradition-bearers involved.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container-page py-8 lg:py-12">
          {programmes.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal
                key={p.slug}
                id={p.slug}
                className="grid scroll-mt-24 items-center gap-10 border-b border-line py-14 lg:grid-cols-2 lg:gap-16 lg:py-20"
              >
                <div className={flip ? "lg:order-2" : ""}>
                  <div className="relative aspect-[5/4] overflow-hidden border border-line">
                    <Image
                      src={p.image}
                      alt={`${p.name} — ${p.meaning}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    {p.status ? (
                      <span className="absolute left-4 top-4 bg-ochre px-3 py-1 font-mono text-[0.62rem] uppercase tracking-label text-ink">
                        {p.status}
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className={flip ? "lg:order-1" : ""}>
                  <Eyebrow>{p.meaning}</Eyebrow>
                  <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
                    {p.name}
                  </h2>
                  <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-soft">{p.lead}</p>

                  <ul className="mt-8 space-y-5 border-t border-line pt-7">
                    {p.highlights.map((h) => (
                      <li key={h.title}>
                        <h3 className="font-display text-lg text-ink">{h.title}</h3>
                        <p className="mt-1.5 max-w-prose text-[0.95rem] leading-relaxed text-ink-soft">
                          {h.body}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-8 border-l-2 border-ochre pl-5 font-display text-lg italic leading-relaxed text-ink">
                    {p.impact}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep">
        <div className="container-page py-16 lg:py-24">
          <Reveal>
            <FutureMindMap {...futureVision} />
          </Reveal>

          <Reveal delay={120} className="mt-14 lg:mt-16">
            <div className="relative overflow-hidden border border-line bg-paper shadow-sm">
              <span className="pointer-events-none absolute left-0 top-0 z-10 h-8 w-8 border-l-2 border-t-2 border-ochre/50" aria-hidden="true" />
              <span className="pointer-events-none absolute right-0 top-0 z-10 h-8 w-8 border-r-2 border-t-2 border-ochre/50" aria-hidden="true" />
              <span className="pointer-events-none absolute bottom-0 left-0 z-10 h-8 w-8 border-b-2 border-l-2 border-ochre/50" aria-hidden="true" />
              <span className="pointer-events-none absolute bottom-0 right-0 z-10 h-8 w-8 border-b-2 border-r-2 border-ochre/50" aria-hidden="true" />

              <div className="border-b border-line bg-paper-deep/60 px-6 py-8 text-center sm:px-10 sm:py-10">
                <h3 className="font-display text-2xl leading-tight text-ink sm:text-3xl">
                  {successLooksLike.title}
                </h3>
              </div>

              <div className="grid grid-cols-[minmax(7rem,0.4fr)_1fr]">
                <div className="border-b border-r border-line bg-indigo px-5 py-5 sm:px-6">
                  <p className="font-mono text-base font-bold uppercase tracking-label text-paper sm:text-lg">
                    {successLooksLike.columns.area}
                  </p>
                </div>
                <div className="border-b border-line bg-indigo-bright px-5 py-5 sm:px-6">
                  <p className="font-mono text-base font-bold uppercase tracking-label text-paper sm:text-lg">
                    {successLooksLike.columns.vision}
                  </p>
                </div>

                {successLooksLike.rows.map((row, i) => {
                  const last = i === successLooksLike.rows.length - 1;
                  const tint = i % 2 === 0 ? "bg-paper" : "bg-paper-deep/50";
                  return (
                    <div key={row.area} className="contents">
                      <div
                        className={`flex items-center border-r border-line px-5 py-5 sm:px-6 ${tint} ${last ? "" : "border-b"}`}
                      >
                        <p className="font-display text-lg leading-tight text-ink">{row.area}</p>
                      </div>
                      <div
                        className={`flex items-center px-5 py-5 sm:px-6 ${tint} ${last ? "" : "border-b border-line"}`}
                      >
                        <p className="text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
                          {row.vision}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Bring a programme to your region"
        body="Lok Kala, Kala Charcha, and Study Tours travel. Host an exhibition, a dialogue, or a field study with the council."
        primary={{ label: "Get involved", href: "/membership" }}
        secondary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
