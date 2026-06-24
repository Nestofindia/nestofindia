import type { Metadata } from "next";
import { PageHeader, HairlineGrid, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { testimonialsIntro, testimonials, testimonialVideo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Voices from across the Indian tattoo and art community — artists, partners, and members who have walked alongside Nest of India.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="Voices from the community."
        intro={testimonialsIntro}
      />

      <section className="border-b border-line bg-paper-deep">
        <div className="container-page py-16 lg:py-24">
          <Reveal className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Video feedback</Eyebrow>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Hear it in their own words.
              </h2>
              <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-soft">
                A glimpse into what being part of the Nest of India movement means to the artists and
                communities at the heart of it.
              </p>
            </div>

            <div className="relative aspect-[9/16] overflow-hidden border border-line lg:mx-auto lg:max-w-[360px]">
              <video
                src={testimonialVideo}
                className="absolute inset-0 h-full w-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="Community video feedback — Nest of India"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="container-page py-16 lg:py-24">
          <HairlineGrid cols={2}>
            {testimonials.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 50}
                className="flex h-full flex-col bg-paper p-8 lg:p-10"
              >
                <span className="font-display text-5xl leading-none text-ochre" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ink-soft">
                  {t.quote}
                </blockquote>
                <footer className="mt-6 border-t border-line pt-5">
                  <p className="font-display text-lg text-ink">{t.name}</p>
                  <p className="mt-1 font-mono text-[0.66rem] uppercase tracking-label text-ink-faint">
                    {t.role}
                  </p>
                </footer>
              </Reveal>
            ))}
          </HairlineGrid>
        </div>
      </section>

      <CTABand
        title="Become part of the story"
        body="Join a national movement protecting heritage, dignifying artists, and building a sustainable ecosystem for the Indian tattoo and art community."
        primary={{ label: "Become a member", href: "/membership" }}
        secondary={{ label: "Contact the council", href: "/contact" }}
      />
    </>
  );
}
