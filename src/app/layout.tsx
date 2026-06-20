import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/ui";
import { site } from "@/lib/site";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Indian tattoo council",
    "tattoo art India",
    "Warli art",
    "tribal tattoo heritage",
    "tattology",
    "tattoo education India",
    "Adivasi art",
    "Nest of India",
    "tattoo artist welfare",
    "cultural preservation",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "https://placehold.co/1200x630/202A57/F7F4EE/png?text=Nest+of+India",
        width: 1200,
        height: 630,
        alt: "Nest of India — National Council for the Indian Tattoo & Art Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["https://placehold.co/1200x630/202A57/F7F4EE/png?text=Nest+of+India"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Arts & Culture",
};

export const viewport = {
  themeColor: "#202A57",
  colorScheme: "light" as const,
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${site.url}/#organization`,
  name: site.name,
  alternateName: "NOI",
  url: site.url,
  email: site.email,
  telephone: site.phone,
  description: site.description,
  foundingLocation: "Goa, India",
  areaServed: "IN",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.countryCode,
  },
  knowsAbout: [
    "Tattoo art",
    "Warli art",
    "Tribal and indigenous art",
    "Cultural heritage preservation",
    "Tattology research",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  publisher: { "@id": `${site.url}/#organization` },
  inLanguage: "en-IN",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={orgSchema} />
        <JsonLd data={websiteSchema} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-indigo focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
