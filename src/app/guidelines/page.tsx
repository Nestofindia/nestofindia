import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Guidelines",
  description:
    "Tattoo guidelines, ethical frameworks, and professional standards from Nest of India — coming soon.",
  alternates: { canonical: "/guidelines" },
};

export default function GuidelinesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Guidelines"
        title="Standards for a safer, stronger profession."
        intro="Tattoo guidelines, ethical frameworks, and professional standards developed with the council and allied experts."
      />

      <section className="border-b border-line">
        <div className="container-narrow py-24 lg:py-32">
          <Reveal className="mx-auto flex max-w-xl flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-ochre bg-paper-deep text-indigo shadow-sm">
              <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
                <g stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 4h9l3 3v13H6z" />
                  <path d="M15 4v3h3M9 12h6M9 15h6M9 9h2" />
                </g>
              </svg>
            </div>

            <p className="mt-8 font-mono text-[0.7rem] font-bold uppercase tracking-label text-ochre-deep">
              Coming Soon
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
              We are putting this together.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Our Legal &amp; Policy committee is drafting the guidelines, ethical frameworks, and
              professional standards that will be published here. Check back soon.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/committees"
                className="border border-indigo bg-indigo px-6 py-3 font-mono text-[0.78rem] uppercase tracking-label text-paper transition-colors hover:bg-indigo-deep"
              >
                See the committees
              </Link>
              <Link
                href="/contact"
                className="font-mono text-[0.78rem] uppercase tracking-label text-indigo link-underline"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
