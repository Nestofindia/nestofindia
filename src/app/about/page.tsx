import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader, Eyebrow, SectionDivider, HairlineGrid } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { whoWeAre, whoWeAreVideo, storyBehindNest, whyNestExists, whyNestExistsVideo, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — Who We Are",
  description:
    "Nest of India is a national council protecting tattoo heritage and dignifying artists. Learn our mission, vision, and the values guiding a more sustainable Indian tattoo and art community.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the Council"
        title="A national movement for the Indian tattoo & art community."
        intro="Nest of India is dedicated to protecting heritage, dignifying artists, and building a stronger future for India&#39;s tattoo and art community through historic culture, education, research, collaboration, and spiritual evolution."
      />

      {/* Who we are — video left, text right */}
      <section className="border-b border-line">
        <div className="container-page py-16 lg:py-24">
          <Reveal className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/5] overflow-hidden border border-line">
              <video
                src={whoWeAreVideo}
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Demonstration of the tattoo designing process"
              />
            </div>

            <div>
              <Eyebrow>Who we are</Eyebrow>
              <div className="prose-body mt-6 max-w-prose">
                {whoWeAre.map((p) => (
                  <p key={p} className="text-lg">
                    {p}
                  </p>
                ))}
                <p className="text-lg">
                  We believe artists are custodians of culture and creators of legacy — and we are
                  building an inclusive national ecosystem where they are respected, protected, and
                  certified.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The story behind Nest of India — image left, content right */}
      <section className="border-b border-line">
        <div className="container-page py-16 lg:py-24">
          <Reveal className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[5/4] overflow-hidden border border-line">
              <Image
                src={storyBehindNest.image}
                alt={storyBehindNest.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <Eyebrow>{storyBehindNest.eyebrow}</Eyebrow>
              <div className="prose-body mt-6 max-w-prose">
                <p className="text-lg">{storyBehindNest.intro}</p>
                <p className="mt-5 text-lg">{storyBehindNest.lead}</p>
                <ul className="mt-5 space-y-2">
                  {storyBehindNest.challenges.map((item) => (
                    <li key={item} className="flex gap-3 text-lg text-ink-soft">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ochre-deep" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-lg">{storyBehindNest.context}</p>
                <p className="mt-5 text-lg">{storyBehindNest.closing}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Nest of India exists — content left, image right */}
      <section className="border-b border-line bg-paper-deep">
        <div className="container-page py-16 lg:py-24">
          <Reveal className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="lg:order-2">
              <div className="relative aspect-[4/5] overflow-hidden border border-line">
                <video
                  src={whyNestExistsVideo}
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={whyNestExists.imageAlt}
                />
              </div>
            </div>

            <div className="lg:order-1">
              <Eyebrow>{whyNestExists.eyebrow}</Eyebrow>
              <div className="prose-body mt-6 max-w-prose">
                {whyNestExists.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-5 text-lg first:mt-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* Values */}
      <section className="border-y border-line">
        <div className="container-page py-16 lg:py-24">
          <Reveal className="max-w-3xl">
            <Eyebrow>Our values</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              An ecosystem built on respect.
            </h2>
          </Reveal>
          <HairlineGrid cols={2} className="mt-12">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60} className="h-full bg-paper p-8">
                <span className="font-mono text-xs text-ochre-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-2xl text-ink">{v.title}</h3>
                <p className="mt-3 max-w-prose leading-relaxed text-ink-soft">{v.body}</p>
              </Reveal>
            ))}
          </HairlineGrid>
        </div>
      </section>

      <CTABand />
    </>
  );
}
