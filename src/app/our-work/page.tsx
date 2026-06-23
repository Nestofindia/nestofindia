import type { Metadata } from "next";
import { PageHeader, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { FoundationInfographic } from "@/components/DignifyMindMap";
import { PrinciplesTogetherTable } from "@/components/PrinciplesTogetherTable";
import { priorityAreas, foundationOfWork, principlesTogether } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Work — Priority Areas",
  description:
    "From government guidelines and formal education to the National Tattology Research Centre, cultural preservation, and artist empowerment — the priority areas driving Nest of India.",
  alternates: { canonical: "/our-work" },
};

export default function OurWorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Building the foundations of a recognised profession."
        intro="Nest of India serves as a bridge between traditional roots and global tattoo culture. These are the areas where we are actively at work."
      />

      <section>
        <div className="container-page py-8 lg:py-12">
          {priorityAreas.map((area, i) => (
            <Reveal
              key={area.title}
              className="grid items-start gap-6 border-b border-line py-12 lg:grid-cols-[auto_0.5fr_1fr] lg:gap-12 lg:py-16"
            >
              <span className="font-mono text-sm text-ochre-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <Eyebrow>{area.label}</Eyebrow>
                <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
                  {area.title}
                </h2>
              </div>
              <p className="max-w-prose text-lg leading-relaxed text-ink-soft lg:pt-2">
                {area.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep">
        <div className="container-page py-16 lg:py-24">
          <Reveal className="max-w-3xl">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm font-bold uppercase tracking-label text-indigo sm:text-base">
              <span>Protect</span>
              <span className="text-ochre" aria-hidden="true">•</span>
              <span>Dignify</span>
              <span className="text-ochre" aria-hidden="true">•</span>
              <span>Build</span>
            </p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {foundationOfWork.title}
            </h2>
            <div className="prose-body mt-6 max-w-prose">
              {foundationOfWork.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg text-ink-soft">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="mt-14 space-y-14 lg:mt-16 lg:space-y-16">
            {foundationOfWork.pillars.map((pillar, i) => (
              <Reveal key={pillar.centerLabel} delay={i * 60}>
                <FoundationInfographic {...pillar} />
              </Reveal>
            ))}

            <Reveal delay={180}>
              <PrinciplesTogetherTable {...principlesTogether} />
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        title="Partner with the work"
        body="If you are part of an institution, university, public body, cultural organisation, or CSR programme, this is the page where you should immediately understand where you fit in."
        primary={{ label: "Explore partnerships", href: "/membership#partnerships" }}
        secondary={{ label: "Contact the council", href: "/contact" }}
      />
    </>
  );
}
