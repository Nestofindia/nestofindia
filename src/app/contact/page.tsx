import type { Metadata } from "next";
import { PageHeader, Eyebrow, JsonLd } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nest of India — email nestofindia@gmail.com, call, or write to the council in Pernem, Goa.",
  alternates: { canonical: "/contact" },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact — Nest of India",
  url: `${site.url}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: site.name,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <PageHeader
        eyebrow="Contact"
        title="Talk to the council."
        intro="For membership, partnerships, programmes, media, or anything else — we would love to hear from you."
      />

      <section className="border-b border-line">
        <div className="container-page grid gap-12 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-24">
          {/* Details */}
          <Reveal className="space-y-10">
            <div>
              <Eyebrow>Email</Eyebrow>
              <a
                href={`mailto:${site.email}`}
                className="link-underline mt-2 block font-display text-2xl text-ink"
              >
                {site.email}
              </a>
            </div>
            <div>
              <Eyebrow>Phone</Eyebrow>
              <a
                href={`tel:${site.phoneHref}`}
                className="link-underline mt-2 block font-display text-2xl text-ink"
              >
                {site.phone}
              </a>
            </div>
            <div>
              <Eyebrow>Address</Eyebrow>
              <address className="mt-2 not-italic leading-relaxed text-ink-soft">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.region} — {site.address.postalCode}, {site.address.country}
              </address>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="border border-line bg-paper-deep/60 p-7 sm:p-10">
            <h2 className="font-display text-2xl text-ink">Send a message</h2>
            <div className="mt-7">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
