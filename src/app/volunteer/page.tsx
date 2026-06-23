import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Lend your time, skills, and craft to Nest of India — volunteer with the council on documentation, events, education, and community work.",
  alternates: { canonical: "/volunteer" },
};

const ways = [
  {
    title: "Documentation & research",
    body: "Help record oral histories, archive artwork, and support field studies with tradition-bearing communities.",
  },
  {
    title: "Events & exhibitions",
    body: "Assist with on-ground coordination, exhibitions, workshops, and regional gatherings.",
  },
  {
    title: "Education & mentorship",
    body: "Share your expertise through learning resources, sessions, and peer mentorship for artists.",
  },
  {
    title: "Communications & outreach",
    body: "Contribute writing, design, translation, photography, or social media to grow public awareness.",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Volunteer"
        title="Give your time to the movement."
        intro="Artists, researchers, students, and specialists power our work. If you believe in protecting heritage and dignifying artists, there is a place for you."
      />

      <section className="border-b border-line">
        <div className="container-page py-16 lg:py-24">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl leading-tight sm:text-4xl">Ways to get involved</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Volunteering can be remote or on-ground, one-time or ongoing. Tell us how you would
              like to help and we will connect you with the right committee.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {ways.map((w, i) => (
              <Reveal key={w.title} delay={i * 60} className="h-full">
                <article className="flex h-full flex-col border border-line bg-paper p-7">
                  <h3 className="font-display text-xl leading-tight text-ink">{w.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{w.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 flex flex-col items-start gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary !px-5 !py-2.5">
              Volunteer with us
            </Link>
            <Link href="/membership" className="btn-ghost !px-5 !py-2.5">
              Become a member
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
