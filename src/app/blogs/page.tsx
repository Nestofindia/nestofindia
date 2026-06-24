import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Stories, insights, and perspectives on tattoo heritage, artists, and culture from Nest of India — coming soon.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blogs"
        title="Stories from the heart of the movement."
        intro="Insights, interviews, and perspectives on tattoo heritage, artists, culture, and the work shaping the future of the craft."
      />

      <section className="border-b border-line">
        <div className="container-narrow py-24 lg:py-32">
          <Reveal className="mx-auto flex max-w-xl flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-ochre bg-paper-deep text-indigo shadow-sm">
              <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
                <g stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h11l3 3v13H5z" />
                  <path d="M16 4v3h3M8 11h8M8 14h8M8 17h5" />
                </g>
              </svg>
            </div>

            <p className="mt-8 font-mono text-[0.7rem] font-bold uppercase tracking-label text-ochre-deep">
              Coming Soon
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl">
              We are writing the first stories.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Our team is preparing articles, artist features, and cultural deep-dives to share here.
              Check back soon, or reach out if you would like to contribute.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/our-work"
                className="border border-indigo bg-indigo px-6 py-3 font-mono text-[0.78rem] uppercase tracking-label text-paper transition-colors hover:bg-indigo-deep"
              >
                Explore our work
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
