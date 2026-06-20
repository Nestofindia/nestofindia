import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { honoursIntro, honours } from "@/lib/content";

export const metadata: Metadata = {
  title: "Honours — In Memory",
  description:
    "In deep respect and memory of the members Nest of India has lost in the pursuit of the movement.",
  alternates: { canonical: "/honours" },
};

export default function HonoursPage() {
  return (
    <>
      <PageHeader eyebrow="Honours · In Memory" title="Held in lasting respect." intro={honoursIntro} />

      <section className="border-b border-line">
        <div className="container-narrow py-16 lg:py-24">
          <ul className="divide-y divide-line border-y border-line">
            {honours.map((h, i) => (
              <Reveal as="li" key={h.name} delay={i * 50} className="flex items-baseline justify-between gap-6 py-8">
                <div>
                  <p className="font-display text-2xl leading-tight text-ink sm:text-3xl">{h.name}</p>
                  <p className="mt-2 text-ink-soft">{h.note}</p>
                </div>
                {h.years ? (
                  <span className="shrink-0 font-mono text-sm text-ink-faint">{h.years}</span>
                ) : null}
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-12 flex items-center justify-center gap-3 text-ink-faint" >
            <span className="h-px w-12 bg-[var(--hairline)]" />
            <span className="font-mono text-[0.66rem] uppercase tracking-label">
              Their work continues in ours
            </span>
            <span className="h-px w-12 bg-[var(--hairline)]" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
