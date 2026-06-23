export const site = {
  name: "Nest of India",
  shortName: "NOI",
  url: "https://nestofindia.org",
  email: "nestofindia@gmail.com",
  phone: "+91 98923 98949",
  phoneHref: "+919892398949",
  tagline: "National Council for the Indian Tattoo & Art Community",
  description:
    "Nest of India is a national movement and council dedicated to unifying, uplifting, and streamlining the Indian tattoo and art community — protecting heritage, dignifying artists, and building a sustainable ecosystem where traditional knowledge and modern artistry grow together.",
  address: {
    line1: "House No. 71, Bhandarwada, Paliem",
    line2: "Pernem, Bardez, North Goa",
    postalCode: "403512",
    region: "Goa",
    locality: "Pernem",
    country: "India",
    countryCode: "IN",
  },
} as const;

export type NavItem = { label: string; href: string; newTab?: boolean };

export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Council", href: "/council" },
  { label: "Committees", href: "/committees" },
  { label: "Programmes", href: "/programmes" },
  { label: "Downloads", href: "/guidelines" },
  { label: "Join Us", href: "/membership"}
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "The Council",
    items: [
      { label: "About", href: "/about" },
      { label: "Our Work", href: "/our-work" },
      { label: "Governing Council", href: "/council" },
      { label: "Committees", href: "/committees" },
    ],
  },
  {
    title: "Initiatives",
    items: [
      { label: "Programmes", href: "/programmes" },
      { label: "Social Services", href: "/social-services" },
      { label: "Honours", href: "/honours" },
      { label: "Downloads", href: "/guidelines", newTab: true },
    ],
  },
  {
    title: "Get Involved",
    items: [
      { label: "Membership", href: "/membership" },
      { label: "Partnerships", href: "/membership#partnerships" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
