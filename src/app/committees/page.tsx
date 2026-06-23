import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { committees } from "@/lib/content";

export const metadata: Metadata = {
  title: "Committees",
  description:
    "Nine standing committees of Nest of India — from Legal & Policy and Health, Hygiene & Safety to Tribal & Cultural Preservation, Research, Ethics, and more.",
  alternates: { canonical: "/committees" },
};

export default function CommitteesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Committees"
        title="Nine committees, one ecosystem."
        intro="Nest of India translates its overarching long-term vision into tangible daily milestones through nine specialised, volunteer-led working groups. These committees combine domain-specific expertise to execute key priorities, draft objective guidance, and reinforce industry credibility."
      />

      <section>
        <div className="container-page py-8 lg:py-12">
          {committees.map((c, i) => (
            <Reveal
              key={c.slug}
              id={c.slug}
              className="grid gap-6 border-b border-line py-10 lg:grid-cols-[auto_1fr_1fr] lg:gap-10 lg:py-12"
            >
              <span className="font-mono text-sm text-ochre-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-display text-2xl leading-tight text-ink sm:text-3xl">
                  {c.name}
                </h2>
                <p className="mt-3 font-mono text-[0.66rem] uppercase tracking-label text-ink-faint">
                  Key members
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {c.members.map((m) => (
                    <li
                      key={m}
                      className="border border-line px-3 py-1 font-mono text-[0.72rem] text-ink-soft"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="space-y-3 lg:pt-1">
                {c.purpose.map((p) => (
                  <li key={p} className="flex gap-3 text-ink-soft">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-ochre" />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand
        title="Serve on a committee"
        body="Committees draw on advocates, dermatologists, professors, anthropologists, organisers, and industry veterans. Tell us where your expertise fits."
        primary={{ label: "Apply to join", href: "/membership" }}
        secondary={{ label: "Contact the council", href: "/contact" }}
      />
    </>
  );
}
