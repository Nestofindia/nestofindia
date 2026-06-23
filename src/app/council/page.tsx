import type { Metadata } from "next";
import { PageHeader, Eyebrow, SectionDivider, HairlineGrid } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import {
  boardOfDirectors,
  boardNote,
  boardOfDirectorsSubhead,
  governingCouncilIntro,
  coreTeam,
  coreTeamSubhead,
  inMemoriam,
  inMemoriamIntro,
  contributors,
} from "@/lib/content";
import type { Person } from "@/lib/content";

function PersonCard({ person }: { person: Person }) {
  const initials = person.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="flex h-full gap-4 bg-paper p-6">
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-paper-deep font-mono text-xs text-indigo"
        aria-hidden="true"
      >
        {initials}
      </div>
      <div>
        <p className="font-display text-lg leading-tight text-ink">{person.name}</p>
        {person.role ? (
          <p className="mt-1.5 text-sm leading-snug text-ink-soft">{person.role}</p>
        ) : null}
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Governing Council",
  description:
    "The board of directors, core team, and contributors of Nest of India — artists, educators, tribal-art custodians, and professionals leading the movement.",
  alternates: { canonical: "/council" },
};

export default function CouncilPage() {
  return (
    <>
      <PageHeader
        eyebrow="Governing Council"
        title="The people carrying the movement forward."
        intro="Artists, educators, tribal-art custodians, health and legal experts, and organisers — united around a single purpose."
      />

      {/* Governing Council intro */}
      <section className="border-b border-line">
        <div className="container-page py-16 lg:py-24">
          <Reveal className="max-w-3xl">
            <Eyebrow>{governingCouncilIntro.eyebrow}</Eyebrow>
            <div className="mt-6 space-y-4">
              {governingCouncilIntro.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed text-ink-soft">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Board */}
      <section className="border-b border-line">
        <div className="container-page py-16 lg:py-24">
          <Reveal className="max-w-3xl">
            <Eyebrow>Board of Directors</Eyebrow>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">Governance &amp; direction</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{boardOfDirectorsSubhead}</p>
          </Reveal>
          <HairlineGrid className="mt-10">
            {boardOfDirectors.map((p, i) => (
              <Reveal key={p.name} delay={i * 30} className="h-full">
                <PersonCard person={p} />
              </Reveal>
            ))}
          </HairlineGrid>
          <p className="mt-8 flex items-start gap-2 border-l-2 border-ochre/50 bg-paper-deep/50 px-4 py-3 text-sm leading-relaxed text-ink-soft">
            <span className="font-mono text-[0.7rem] font-bold uppercase tracking-label text-ochre-deep">
              Note
            </span>
            <span>{boardNote}</span>
          </p>
        </div>
      </section>

      {/* Core team */}
      <section className="border-b border-line bg-paper-deep">
        <div className="container-page py-16 lg:py-24">
          <Reveal className="max-w-3xl">
            <Eyebrow>Founding and Core Team</Eyebrow>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">Founding members</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{coreTeamSubhead}</p>
          </Reveal>
          <HairlineGrid className="mt-10">
            {coreTeam.map((p, i) => (
              <Reveal key={p.name} delay={i * 30} className="h-full">
                <PersonCard person={p} />
              </Reveal>
            ))}
          </HairlineGrid>
        </div>
      </section>

      {/* In memoriam */}
      <section className="border-b border-line">
        <div className="container-page py-16 lg:py-24">
          <Reveal className="max-w-3xl">
            <Eyebrow>In Honour and Remembrance</Eyebrow>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">{inMemoriamIntro}</p>
          </Reveal>
          <HairlineGrid className="mt-10">
            {inMemoriam.map((p, i) => (
              <Reveal key={p.name} delay={i * 30} className="h-full">
                <PersonCard person={p} />
              </Reveal>
            ))}
          </HairlineGrid>
        </div>
      </section>

      <SectionDivider />

      {/* Contributors */}
      <section className="border-y border-line">
        <div className="container-page py-16 lg:py-24">
          <Reveal className="max-w-2xl">
            <Eyebrow>Contributors</Eyebrow>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
              The wider circle of the Nest.
            </h2>
            <p className="mt-4 text-ink-soft">
              Artists and supporters whose time and craft sustain the movement.
            </p>
          </Reveal>
          <ul className="mt-10 flex flex-wrap gap-x-3 gap-y-3">
            {contributors.map((name) => (
              <li
                key={name}
                className="border border-line px-4 py-2 font-mono text-[0.78rem] text-ink-soft transition-colors hover:border-indigo hover:text-indigo"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        title="Lend your craft"
        body="Senior artists, researchers, and specialists join our committees and contributor network every season."
        primary={{ label: "Become a member", href: "/membership" }}
        secondary={{ label: "See the committees", href: "/committees" }}
      />
    </>
  );
}
