import Link from "next/link";
import Image from "next/image";
import { HeroLinework } from "@/components/Linework";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { Eyebrow, SectionDivider, HairlineGrid } from "@/components/ui";
import {
  mission,
  industryGaps,
  priorityAreas,
  programmes,
  boardOfDirectors,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="container-page grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.12fr_0.88fr] lg:py-28">
          <div className="animate-rise-in">
            <Eyebrow>National Council · Tattoo &amp; Art Community</Eyebrow>
            <h1 className="mt-6 text-balance text-[2.7rem] leading-[1.02] sm:text-6xl lg:text-[4.4rem]">
              Tattooing is a way of life — rooted in culture, identity, and spirit.
            </h1>
            <p className="mt-7 max-w-prose text-lg leading-relaxed text-ink-soft">
              Nest of India is a national movement unifying and uplifting the Indian tattoo and art
              community — protecting heritage, dignifying artists, and building an ecosystem where
              tradition and modern artistry grow together.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/membership" className="btn-primary">
                Become a member
              </Link>
              <Link href="/our-work" className="btn-ghost">
                Explore our work
              </Link>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-7">
              {[
                ["Protect", "heritage & tradition"],
                ["Dignify", "artists & studios"],
                ["Build", "a national ecosystem"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-display text-xl text-indigo">{k}</dt>
                  <dd className="mt-1 font-mono text-[0.66rem] uppercase leading-snug tracking-label text-ink-faint">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-[380px] text-indigo lg:max-w-none">
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-ochre/10 blur-3xl" />
            <HeroLinework className="h-auto w-full" />
          </div>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────── */}
      <section className="border-b border-line bg-paper-deep">
        <div className="container-page py-16 lg:py-24">
          <Reveal className="grid gap-8 lg:grid-cols-[0.4fr_1fr]">
            <Eyebrow className="lg:pt-3">Our mission</Eyebrow>
            <p className="max-w-4xl font-display text-2xl leading-snug text-ink sm:text-3xl lg:text-[2.4rem] lg:leading-[1.25]">
              {mission}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Why NOI exists ───────────────────────────────── */}
      <section className="border-b border-line">
        <div className="container-page py-16 lg:py-24">
          <Reveal className="max-w-3xl">
            <Eyebrow>Why we exist</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              A sacred tradition, left unsupported.
            </h2>
            <p className="mt-5 max-w-prose text-lg text-ink-soft">
              Tattoos have been part of Indian life for centuries — from Adivasi tribes to temple
              symbolism. Yet the modern industry has remained underground. These are the gaps we are
              closing.
            </p>
          </Reveal>

          <HairlineGrid className="mt-12">
            {industryGaps.map((gap, i) => (
              <Reveal
                key={gap.title}
                delay={i * 60}
                className="h-full bg-paper p-7 transition-colors hover:bg-paper-deep"
              >
                <span className="font-mono text-xs text-ochre-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl text-ink">{gap.title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">{gap.body}</p>
              </Reveal>
            ))}
          </HairlineGrid>
        </div>
      </section>

      {/* ── What we do ───────────────────────────────────── */}
      <section className="border-b border-line bg-indigo text-paper">
        <div className="container-page py-16 lg:py-24">
          <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow text-ochre-soft">What we do</p>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
                A bridge between traditional roots and global tattoo culture.
              </h2>
            </div>
            <Link href="/our-work" className="link-underline shrink-0 font-mono text-sm uppercase tracking-label text-paper/80">
              All our work →
            </Link>
          </Reveal>

          <div className="mt-12 divide-y divide-paper/15 border-t border-paper/15">
            {priorityAreas.map((area, i) => (
              <Reveal
                key={area.title}
                delay={i * 40}
                className="group grid gap-3 py-7 sm:grid-cols-[auto_1fr_2fr] sm:items-baseline sm:gap-8"
              >
                <span className="font-mono text-sm text-ochre-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-paper">{area.title}</h3>
                <p className="max-w-prose leading-relaxed text-paper/70">{area.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programmes ───────────────────────────────────── */}
      <section className="border-b border-line">
        <div className="container-page py-16 lg:py-24">
          <Reveal className="max-w-3xl">
            <Eyebrow>Programmes</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Where heritage is documented, revived, and taught.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {programmes.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <Link href={`/programmes#${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden border border-line">
                    <Image
                      src={p.image}
                      alt={`${p.name} — ${p.meaning}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    {p.status ? (
                      <span className="absolute left-3 top-3 bg-ochre px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-label text-ink">
                        {p.status}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-4 font-display text-xl text-ink group-hover:text-indigo">
                    {p.name}
                  </h3>
                  <p className="mt-1 font-mono text-[0.66rem] uppercase tracking-label text-ink-faint">
                    {p.meaning}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Council preview ──────────────────────────────── */}
      <section className="border-y border-line">
        <div className="container-page py-16 lg:py-24">
          <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <Eyebrow>The council</Eyebrow>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Custodians of culture, creators of legacy.
              </h2>
            </div>
            <Link href="/council" className="link-underline shrink-0 font-mono text-sm uppercase tracking-label text-ink-soft">
              Meet the full council →
            </Link>
          </Reveal>

          <HairlineGrid as="ul" cols={4} className="mt-12">
            {boardOfDirectors.slice(0, 8).map((person, i) => (
              <Reveal as="li" key={person.name} delay={i * 30} className="h-full bg-paper p-6">
                <p className="font-display text-lg text-ink">{person.name}</p>
                {person.role ? (
                  <p className="mt-2 text-sm leading-snug text-ink-soft">{person.role}</p>
                ) : null}
              </Reveal>
            ))}
          </HairlineGrid>
        </div>
      </section>

      <CTABand />
    </>
  );
}
