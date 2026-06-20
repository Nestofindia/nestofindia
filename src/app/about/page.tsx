import type { Metadata } from "next";
import { PageHeader, Eyebrow, SectionDivider, HairlineGrid } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { whoWeAre, mission, visionIntro, values } from "@/lib/content";

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
        intro="We view tattooing as more than an art form. It is a way of life — rooted in historic culture, identity, and spiritual evolution."
      />

      {/* Who we are */}
      <section className="border-b border-line">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-[0.4fr_1fr] lg:py-24">
          <Eyebrow className="lg:pt-2">Who we are</Eyebrow>
          <Reveal className="prose-body max-w-prose">
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
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="border-b border-line bg-indigo text-paper">
        <div className="container-page py-16 lg:py-24">
          <Reveal className="grid gap-8 lg:grid-cols-[0.4fr_1fr]">
            <p className="eyebrow text-ochre-soft lg:pt-3">Mission</p>
            <p className="max-w-4xl font-display text-2xl leading-snug sm:text-3xl lg:text-[2.5rem] lg:leading-[1.25]">
              {mission}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Vision / the gap */}
      <section className="border-b border-line">
        <div className="container-page py-16 lg:py-24">
          <Reveal className="max-w-3xl">
            <Eyebrow>Vision</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              From the underground to the recognised.
            </h2>
            <p className="mt-5 max-w-prose text-lg text-ink-soft">{visionIntro}</p>
            <p className="mt-4 max-w-prose text-lg text-ink-soft">
              Our vision is an India where traditional knowledge and modern artistry thrive together
              — supported by formal education, government recognition, health and safety standards,
              artist welfare, and the active preservation of heritage and tribal art.
            </p>
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
