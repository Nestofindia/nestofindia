import type { Metadata } from "next";
import { PageHeader, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { priorityAreas } from "@/lib/content";

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

      <CTABand
        title="Partner with the work"
        body="Government bodies, institutions, studios, and CSR partners help turn these priorities into lasting infrastructure."
        primary={{ label: "Explore partnerships", href: "/membership#partnerships" }}
        secondary={{ label: "Contact the council", href: "/contact" }}
      />
    </>
  );
}
