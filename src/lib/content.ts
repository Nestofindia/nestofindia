/* All editorial content for Nest of India, extracted from source material.
   Centralised here so pages stay thin and copy is easy to update. */

export const mission =
  "Our mission is to protect heritage and dignify artists by building a sustainable ecosystem where traditional knowledge and modern artistry thrive and grow together.";

export const visionIntro =
  "Tattoos have been a sacred part of Indian tradition for centuries — from Adivasi tribes to ancient temple symbolism. Yet the modern industry has remained largely underground and unsupported.";

export const whoWeAre = [
  "Nest of India is a national movement and council dedicated to unifying, uplifting, and streamlining the Indian tattoo and art community, with support systems built for the generations ahead.",
  "We view tattooing as more than an art form. It is a way of life rooted in historic culture, identity, and spiritual evolution.",
];

export const industryGaps = [
  {
    title: "Formal education",
    body: "No research-based, formal education systems for practising or aspiring artists.",
  },
  {
    title: "Recognition",
    body: "An absence of government recognition, affiliations, and professional standing.",
  },
  {
    title: "Health & safety",
    body: "Limited health and safety regulation across studios and practitioners.",
  },
  {
    title: "Artist welfare",
    body: "No welfare frameworks to support artists through crisis, career, and craft.",
  },
  {
    title: "Heritage at risk",
    body: "Traditional and tribal art forms — and the families who carry them — remain unpreserved and unsupported.",
  },
];

export const values = [
  {
    title: "Artists are protected",
    body: "Artists are respected, protected, and certified as the custodians of culture they are.",
  },
  {
    title: "Studios uphold standards",
    body: "Studios operate to high ethical and hygiene standards that the public can trust.",
  },
  {
    title: "Tradition is revived",
    body: "Traditional art is revived, preserved, and taught ethically, with communities at the centre.",
  },
  {
    title: "The public is safe",
    body: "The public is educated, inspired, and kept safe in every interaction with the craft.",
  },
];

export const priorityAreas = [
  {
    label: "Standards",
    title: "Establish guidelines",
    body: "Collaborate with the Government of India to implement uniform industry standards across the profession.",
  },
  {
    label: "Education",
    title: "Formal education",
    body: "Launch the world's first formal, research-based tattoo curriculum and ethical certification system, in association with the Ministry of Education.",
  },
  {
    label: "Research",
    title: "Facilitate research",
    body: "Establish the National Tattology Research Centre (NTRC) — the world's first dedicated tattology research initiative — with IIT Bombay and the Design Innovation Centre.",
  },
  {
    label: "Heritage",
    title: "Cultural preservation",
    body: "Conduct tribal-art gatherings, study tours, and healing workshops that keep indigenous knowledge alive.",
  },
  {
    label: "Livelihoods",
    title: "Artist empowerment",
    body: "Create income-generating platforms for traditional artists, tribal communities, and working professionals.",
  },
];

/* ── People ─────────────────────────────────────────────────────── */

export type Person = { name: string; role?: string };

export const boardOfDirectors: Person[] = [
  { name: "Mo Naga", role: "Community Building & Culture Preservation" },
  { name: "Mangala Bai", role: "Baiga Tribe — Representative" },
  { name: "Prof. Kums", role: "Education Systems Specialist" },
  { name: "Prof. Ravi Pooviah", role: "Education Systems Specialist" },
  { name: "Dr. Shanmugapriya", role: "Health" },
  { name: "Sameer Uttekar", role: "Auditing & Operations" },
  { name: "Martin McIver", role: "Promoter & International Event Organiser" },
  {
    name: "Vijay Mashe",
    role: "Custodian of Warli Heritage (grandson of the godfather of Warli art)",
  },
];

export const boardNote =
  "The governing council also holds advisory seats for Sociology, Archaeology (Archaeological Survey of India), and allied tattooing disciplines, alongside partners such as World Tattoo Events.";

export const coreTeam: Person[] = [
  { name: "Sachin Aarote", role: "CSR Alliances & Ministry" },
  { name: "Deep Kundu", role: "AI, Tech & Regulatory Guidelines" },
  { name: "Navya Pulagala", role: "Marketing & Communication" },
  { name: "Abhinaya ES", role: "Operations & Finance" },
  { name: "Amit Rajwadkar", role: "Spokesperson" },
  { name: "Karishma Nikam", role: "Operations" },
  { name: "Ritesh Nikam", role: "Media" },
];

export const contributors: string[] = [
  "Dipak Vishe",
  "Eric Jason",
  "Jack Uikey",
  "Shashi Prajapati",
  "Manish Kadam",
  "Omkar Nikarge",
  "Satish Dorwekar",
  "Susweta Dorwekar",
  "Sameer Patange",
  "Ketan Vaidya",
  "Chirag Jhala",
  "Amey Acharya",
  "Jason D'Souza",
  "Pramod Deshmukh",
  "Sanket Varadi",
  "Rahul Gaikwad",
  "Sunil Vashiwale",
  "Vikrant Koli",
  "Aadesh G",
  "Jayesh Jambhale",
  "Umesh Gangul",
  "Praful Rathod",
  "Lucky Solankey",
  "Sanket Gurav",
  "Vajit Shek",
  "Amritraj",
];

/* ── Committees ─────────────────────────────────────────────────── */

export type Committee = {
  slug: string;
  name: string;
  purpose: string[];
  members: string[];
};

export const committees: Committee[] = [
  {
    slug: "legal-policy",
    name: "Legal & Policy",
    purpose: [
      "Draft tattoo guidelines and ethical frameworks",
      "Work on bylaws and government communication",
      "Protect artist rights and define studio compliance standards",
    ],
    members: ["Advocates", "Legal researchers", "Industry seniors"],
  },
  {
    slug: "health-hygiene-safety",
    name: "Health, Hygiene & Safety",
    purpose: [
      "Establish tattoo safety protocols and SOPs",
      "Drive infection-prevention awareness and hygiene certifications",
      "Collaborate with dermatology and medical professionals",
    ],
    members: ["Dermatologists", "Medical professionals", "Experienced artists"],
  },
  {
    slug: "education-certification",
    name: "Education & Certification",
    purpose: [
      "Build training curricula, workshops, and certification standards",
      "Develop skills through ethical, research-based learning",
    ],
    members: ["Professors", "Senior artists", "Trainers", "Researchers"],
  },
  {
    slug: "tribal-cultural-preservation",
    name: "Tribal & Cultural Preservation",
    purpose: [
      "Preserve indigenous tattoo traditions",
      "Document tribal tattoo history and run revival programmes",
      "Ensure ethical representation of communities",
    ],
    members: ["Tribal artists", "Historians", "Anthropologists", "Cultural researchers"],
  },
  {
    slug: "artist-welfare-support",
    name: "Artist Welfare & Community Support",
    purpose: [
      "Build artist support systems and crisis response",
      "Raise mental-health awareness and mediate conflict",
      "Lead industry-unity initiatives",
    ],
    members: ["Senior artists", "Social workers", "Community leaders"],
  },
  {
    slug: "research-documentation",
    name: "Research & Documentation",
    purpose: [
      "Lead national tattoo research and global tattoo studies",
      "Create archives, surveys, and reports",
      "Collect and steward industry data",
    ],
    members: ["Researchers", "Writers", "Documentation team", "Historians"],
  },
  {
    slug: "events-convention-outreach",
    name: "Events, Convention & Outreach",
    purpose: [
      "Run tattoo conventions and awareness campaigns",
      "Drive public engagement and collaborations",
      "Coordinate government and community events",
    ],
    members: ["Event organisers", "Marketing professionals", "Public coordinators"],
  },
  {
    slug: "finance-csr-partnership",
    name: "Finance, CSR & Partnership",
    purpose: [
      "Shape funding strategy, sponsorships, and CSR partnerships",
      "Manage grants and financial planning",
      "Maintain transparency systems",
    ],
    members: ["Financial advisors", "CSR experts", "Business professionals"],
  },
  {
    slug: "ethics-disciplinary",
    name: "Ethics & Disciplinary",
    purpose: [
      "Handle complaints and review ethical violations",
      "Review misconduct and manage internal disputes",
      "Uphold fair industry practices",
    ],
    members: ["Senior artists", "Legal experts", "Industry veterans", "Ethics professionals"],
  },
];

/* ── Programmes ─────────────────────────────────────────────────── */

export type Programme = {
  slug: string;
  name: string;
  meaning: string;
  status?: string;
  lead: string;
  highlights: { title: string; body: string }[];
  impact: string;
  image: string;
};

export const programmes: Programme[] = [
  {
    slug: "lok-kala",
    name: "Lok Kala",
    meaning: "Folk Art · Living Gallery",
    lead: "Lok Kala documents, preserves, and revives the traditional tattoo practices, motifs, and cultural narratives passed down through generations of tribal and indigenous communities — creating visibility for traditions at risk of disappearing.",
    highlights: [
      {
        title: "A stronger cultural foundation",
        body: "Reconnects practitioners with India's own visual traditions, encouraging authentic, culturally rooted styles instead of borrowed global trends.",
      },
      {
        title: "Research & documentation",
        body: "Through exhibitions, field studies, and archives, Lok Kala builds an academic and historical foundation for tattooing in India.",
      },
      {
        title: "A stronger creative economy",
        body: "Exhibitions, commissions, merchandise, and cultural tourism create sustainable opportunities for artists and communities.",
      },
    ],
    impact:
      "Lok Kala is more than an exhibition platform — it is a movement to preserve India's living artistic heritage, empower traditional artists, and create sustainable pathways for cultural knowledge to thrive for generations.",
    image:
      "https://placehold.co/1200x800/202A57/F7F4EE/png?text=Lok+Kala+%E2%80%94+Living+Gallery",
  },
  {
    slug: "kala-charcha",
    name: "Kala Charcha",
    meaning: "Art Dialogue",
    lead: "Kala Charcha creates a collaborative space where tattoo artists, tribal artists, researchers, and industry professionals connect, exchange ideas, and learn from one another — reducing isolation and building a united community.",
    highlights: [
      {
        title: "Preserving knowledge through storytelling",
        body: "A platform for tribal communities to share the stories, meanings, and symbolism behind their art so the knowledge is documented and passed on.",
      },
      {
        title: "A collective voice",
        body: "Brings artists together to address recognition, education, healthcare, intellectual property, and professional standards.",
      },
      {
        title: "Ethical collaboration",
        body: "Encourages mutual respect, proper attribution, and equitable opportunity for the communities whose knowledge inspires modern practice.",
      },
    ],
    impact:
      "Kala Charcha transforms conversations into collaboration — preserving cultural wisdom, strengthening professional networks, and building a more connected, sustainable future for India's tattoo industry.",
    image:
      "https://placehold.co/1200x800/9C3B22/F7F4EE/png?text=Kala+Charcha+%E2%80%94+Art+Dialogue",
  },
  {
    slug: "study-tour",
    name: "Study Tour",
    meaning: "Immersive Field Learning",
    lead: "Study Tours give artists, researchers, and students direct access to the historical, archaeological, and cultural foundations of indigenous tattoo traditions — through heritage sites, tribal communities, and living practice.",
    highlights: [
      {
        title: "Back to the origins",
        body: "Participants gain a deeper understanding of the origins and significance of tattooing, beyond contemporary trends.",
      },
      {
        title: "Sustainable opportunity",
        body: "Workshops, demonstrations, commissions, and art sales turn traditional knowledge into sustainable livelihoods for tribal artists.",
      },
      {
        title: "Responsible engagement",
        body: "Community-led interactions promote ethical appreciation and proper acknowledgement of indigenous art forms.",
      },
    ],
    impact:
      "Study Tours turn cultural exploration into meaningful learning — connecting artists with the roots of tattoo heritage while creating sustainable opportunities for tribal communities.",
    image:
      "https://placehold.co/1200x800/C18A2B/191510/png?text=Study+Tour+%E2%80%94+Field+Learning",
  },
  {
    slug: "kala-siksha",
    name: "Kala Siksha",
    meaning: "Education Framework",
    status: "Upcoming",
    lead: "Kala Siksha is our forthcoming education framework — a structured programme of workshops, mentorship, and certification that will formalise how the craft is taught in India.",
    highlights: [
      {
        title: "Research-based curriculum",
        body: "A formal curriculum grounded in research, ethics, and craft, developed with educators and senior artists.",
      },
      {
        title: "Ethical certification",
        body: "Recognised certification that gives artists professional standing and the public a mark of trust.",
      },
    ],
    impact:
      "Kala Siksha will become the backbone of formal tattoo education in India — opening soon for its first cohort.",
    image:
      "https://placehold.co/1200x800/141A38/E7C77C/png?text=Kala+Siksha+%E2%80%94+Coming+Soon",
  },
];

/* ── Social services ────────────────────────────────────────────── */

export const socialIntro =
  "At our core, we believe growth begins with service. Nest of India organises diverse community activities that keep artists grounded and connected to the people around them.";

export const socialServices = [
  {
    title: "Environmental preservation",
    body: "Beach clean-ups, waste-management drives, and plantation programmes.",
  },
  {
    title: "Social welfare",
    body: "Women's empowerment, disaster relief, and support for street artists.",
  },
  {
    title: "Health & awareness",
    body: "Campaigns for cancer, autism, and AIDS awareness.",
  },
  {
    title: "Community art",
    body: "Art campaigns for orphanages and underprivileged communities.",
  },
  {
    title: "Fundraising",
    body: "Fundraising events for all people and communities in need.",
  },
];

/* ── Honours ────────────────────────────────────────────────────── */

export const honoursIntro =
  "In deep respect and memory of the members we have lost in the pursuit of this movement.";

export const honours = [
  {
    name: "Padma Shri Jivya Soma Mashe",
    note: "Father of Warli Art",
  },
  {
    name: "Rahul Ghare",
    note: "Tattoo Artist",
  },
  {
    name: "Jitesh Gaikwad",
    note: "Tattoo Artist & Event Promoter",
  },
  {
    name: "Vishal Aarote",
    note: "Tattoo Artist & Piercer",
    years: "1988 – 2015",
  },
];
