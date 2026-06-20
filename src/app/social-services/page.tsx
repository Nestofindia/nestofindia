import type { Metadata } from "next";
import { PageHeader, Eyebrow, HairlineGrid } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { socialIntro, socialServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Social Services",
  description:
    "Growth begins with service. Nest of India runs environmental, social-welfare, health-awareness, and community-art initiatives that keep artists grounded and connected.",
  alternates: { canonical: "/social-services" },
};

export default function SocialServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Social Services"
        title="Growth begins with service."
        intro={socialIntro}
      />

      <section className="border-b border-line">
        <div className="container-page py-16 lg:py-24">
          <HairlineGrid>
            {socialServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 50} className="h-full bg-paper p-8">
                <span className="font-mono text-xs text-ochre-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 font-display text-xl text-ink">{s.title}</h2>
                <p className="mt-2.5 leading-relaxed text-ink-soft">{s.body}</p>
              </Reveal>
            ))}
            <Reveal delay={socialServices.length * 50} className="h-full bg-indigo p-8 text-paper">
              <Eyebrow className="text-ochre-soft">Join us</Eyebrow>
              <p className="mt-4 font-display text-xl">
                Every drive is open to members and the wider community.
              </p>
            </Reveal>
          </HairlineGrid>
        </div>
      </section>

      <CTABand
        title="Volunteer for a drive"
        body="Beach clean-ups, plantation drives, awareness campaigns, and fundraising events run throughout the year."
        primary={{ label: "Become a member", href: "/membership" }}
        secondary={{ label: "Contact the council", href: "/contact" }}
      />
    </>
  );
}
