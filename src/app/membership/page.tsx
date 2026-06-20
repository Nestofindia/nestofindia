import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Eyebrow, SectionDivider, HairlineGrid } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Membership & Partnerships",
  description:
    "Join Nest of India as an artist, studio, tribal-art custodian, researcher, or partner. Membership benefits, how to join, and CSR & sponsorship partnerships.",
  alternates: { canonical: "/membership" },
};

const reasons = [
  {
    title: "Recognition & certification",
    body: "Be recognised as a certified practitioner within a national framework, with professional standing the public can trust.",
  },
  {
    title: "Education & growth",
    body: "Access workshops, mentorship, and the upcoming Kala Siksha curriculum, plus dialogue through Kala Charcha.",
  },
  {
    title: "Welfare & support",
    body: "Tap into artist welfare systems, crisis support, mental-health awareness, and conflict mediation.",
  },
  {
    title: "A collective voice",
    body: "Help shape guidelines, health standards, and policy through the council's committees.",
  },
  {
    title: "Heritage & belonging",
    body: "Stand with tribal communities and custodians of traditional art in preserving India's living heritage.",
  },
  {
    title: "Opportunity",
    body: "Reach new audiences through exhibitions, study tours, conventions, and collaborations.",
  },
];

const steps = [
  { n: "01", t: "Reach out", b: "Email the council with your name, location, and practice or interest." },
  { n: "02", t: "Share your work", b: "Tell us about your craft, studio, community, or area of expertise." },
  { n: "03", t: "Get matched", b: "We connect you to the right committee, programme, or membership track." },
  { n: "04", t: "Join the Nest", b: "Become part of a national community working for the generations ahead." },
];

export default function MembershipPage() {
  const joinHref = `mailto:${site.email}?subject=${encodeURIComponent(
    "Membership enquiry — Nest of India",
  )}`;

  return (
    <>
      <PageHeader
        eyebrow="Membership"
        title="There is a place for you in the Nest."
        intro="Artists, studios, tribal-art custodians, researchers, and partners — all have a role in protecting heritage and dignifying the craft."
      />

      {/* Why join */}
      <section className="border-b border-line">
        <div className="container-page py-16 lg:py-24">
          <Reveal className="max-w-2xl">
            <Eyebrow>Why join</Eyebrow>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">What membership gives you.</h2>
          </Reveal>
          <HairlineGrid className="mt-12">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 40} className="h-full bg-paper p-8">
                <h3 className="font-display text-xl text-ink">{r.title}</h3>
                <p className="mt-2.5 leading-relaxed text-ink-soft">{r.body}</p>
              </Reveal>
            ))}
          </HairlineGrid>
        </div>
      </section>

      {/* How to join */}
      <section className="border-b border-line bg-paper-deep">
        <div className="container-page py-16 lg:py-24">
          <Reveal className="max-w-2xl">
            <Eyebrow>How to join</Eyebrow>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">Four simple steps.</h2>
          </Reveal>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 60} className="border-t border-ink/20 pt-5">
                <span className="font-mono text-sm text-ochre-deep">{s.n}</span>
                <h3 className="mt-3 font-display text-xl text-ink">{s.t}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{s.b}</p>
              </Reveal>
            ))}
          </ol>
          <div className="mt-12">
            <Link href={joinHref} className="btn-primary">
              Email to apply
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Partnerships */}
      <section id="partnerships" className="scroll-mt-24 border-y border-line">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-[1fr_1fr] lg:py-24">
          <Reveal>
            <Eyebrow>Partnerships</Eyebrow>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Sponsorships, CSR & cultural collaboration.
            </h2>
            <p className="mt-5 max-w-prose text-lg text-ink-soft">
              Institutions, brands, and CSR partners help fund education, research, welfare, and the
              preservation of tribal art. Together we can build infrastructure that lasts for
              generations.
            </p>
          </Reveal>
          <Reveal className="flex flex-col justify-center gap-5 border border-line bg-paper-deep p-8 lg:p-10">
            <p className="font-display text-2xl text-ink">Partner with the council</p>
            <p className="text-ink-soft">
              Discuss sponsorship, donations, CSR alliances, and event collaborations with our
              Finance, CSR &amp; Partnership committee.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href={`mailto:${site.email}?subject=${encodeURIComponent("Partnership enquiry — Nest of India")}`}
                className="btn-primary"
              >
                Start a conversation
              </Link>
              <Link href="/contact" className="btn-ghost">
                Contact details
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
