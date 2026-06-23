/* All editorial content for Nest of India, extracted from source material.
   Centralised here so pages stay thin and copy is easy to update. */

export const mission =
  "Our mission is to protect heritage and dignify artists by building a sustainable ecosystem where traditional knowledge and modern artistry thrive and grow together.";

export const visionIntro =
  "Tattoos have been a sacred part of Indian tradition for centuries — from Adivasi tribes to ancient temple symbolism. Yet the modern industry has remained largely underground and unsupported.";

export const whoWeAre = [
  "Nest of India is a national movement and council dedicated to unifying, uplifting, and strengthening the Indian tattoo and art community through heritage preservation, education, research, professional development, and community building.",
  "We view tattooing as more than an art form.",
  "It is a living cultural language that has existed across generations as a medium of identity, belonging, spirituality, memory, protection, and self-expression.",
  "Across India, tattoo traditions have survived through indigenous communities, regional practices, sacred symbolism, and contemporary artistic evolution. Yet despite this rich legacy, much of the knowledge surrounding tattooing remains undocumented, fragmented, or disconnected from the modern industry.",
  "Nest of India was established to help bridge these worlds.",
  "We bring together artists, traditional knowledge holders, educators, researchers, institutions, cultural practitioners, health professionals, and supporters who believe the future of tattooing should be built upon respect, responsibility, and cultural understanding.",
];

export const storyBehindNest = {
  eyebrow: "The story behind Nest of India",
  image:
    "https://placehold.co/800x640/202A57/F7F4EE/png?text=The+Story+Behind+Nest+of+India",
  imageAlt: "The story behind Nest of India — placeholder",
  intro:
    "Every industry grows stronger when the people within it have access to support, education, community, and opportunities for collaboration.",
  lead:
    "For many years, India's tattoo community has continued to grow through the passion, dedication, and resilience of individual artists. Yet much of this growth has happened without the support structures that exist in more established professions.",
  challenges: [
    "Artists often work in isolation.",
    "Traditional practitioners struggle to gain visibility.",
    "Knowledge remains scattered.",
    "Opportunities for research, education, and documentation are limited.",
  ],
  context:
    "At the same time, many of India's traditional tattoo practices and artistic traditions face the risk of being forgotten as communities evolve and generations change.",
  closing:
    "Nest of India was born from the belief that these challenges are interconnected. By creating a space where artists, communities, educators, researchers, institutions, and supporters can come together, we hope to strengthen both the cultural foundations and future possibilities of tattooing in India.",
};

export const whyNestExists = {
  eyebrow: "Why Nest of India exists",
  image:
    "https://placehold.co/800x640/EDE6D8/191510/png?text=Why+Nest+of+India+Exists",
  imageAlt: "Why Nest of India exists — placeholder",
  paragraphs: [
    "Tattooing has long been a part of India's cultural memory. Across communities, regions, and generations, marks on the skin have carried stories of identity, belonging, spirituality, protection, ancestry, achievement, and personal transformation. For many communities, tattooing was not simply decorative. It was a way of preserving history, expressing cultural values, and maintaining connections to people, places, and traditions.",
    "Yet despite this rich legacy, much of India's tattoo heritage remains undocumented, underrepresented, or disconnected from public understanding.",
    "At the same time, the contemporary tattoo industry has experienced remarkable growth. New artists, studios, conventions, and creative opportunities continue to emerge across the country. While this growth is encouraging, it has also highlighted the need for stronger support systems, educational pathways, professional standards, research initiatives, and opportunities for cultural preservation.",
    "Nest of India exists to help address these challenges.",
    "We believe that the future of tattooing becomes stronger when it remains connected to its roots. By bringing together artists, educators, researchers, cultural practitioners, institutions, communities, and supporters, we seek to create an environment where both heritage and innovation can thrive.",
    "Our work is guided by the belief that preserving cultural knowledge and supporting contemporary artists are not separate goals. They are part of the same journey.",
  ],
};

/* ── Home: challenges, response & the case for tattooing ────────── */

export type ChallengeRow = { challenge: string; why: string };

export const challengesWeAddress = {
  title: "The Challenges We Seek To Address",
  columns: { challenge: "Challenge", why: "Why It Matters" },
  rows: [
    {
      challenge: "Limited formal education pathways",
      why: "Artists often learn through fragmented systems with limited access to structured learning.",
    },
    {
      challenge: "Lack of unified standards",
      why: "Consistency helps build trust, professionalism, and public confidence.",
    },
    {
      challenge: "Limited documentation of tattoo heritage",
      why: "Valuable cultural knowledge is at risk of being lost over time.",
    },
    {
      challenge: "Low public awareness",
      why: "Many people remain unaware of India's rich tattoo history and artistic traditions.",
    },
    {
      challenge: "Limited artist support systems",
      why: "Artists often lack access to mentorship, welfare resources, and professional networks.",
    },
    {
      challenge: "Weak connections between traditional and contemporary practice",
      why: "Opportunities for collaboration and mutual learning remain limited.",
    },
  ] satisfies ChallengeRow[],
};

export const ourResponse = {
  title: "Our Response",
  lead: "Nest of India works to create long-term solutions through:",
  solutions: [
    "Heritage preservation and cultural documentation",
    "Education and skill development",
    "Research and knowledge creation",
    "Artist welfare and community support",
    "Public awareness initiatives",
    "Professional standards and ethical practice",
    "Collaboration across disciplines and communities",
  ],
  ecosystemNote:
    "Rather than addressing individual challenges in isolation, we focus on strengthening the ecosystem as a whole.",
  outcomes: [
    "Because when artists thrive, communities benefit.",
    "When knowledge is preserved, culture survives.",
    "And when culture and creativity work together, future generations inherit something meaningful.",
  ],
};

export const whyTattooingMatters = {
  title: "Why Tattooing Matters",
  paragraphs: [
    "Tattooing is one of humanity's oldest artistic practices.",
    "Across civilisations and cultures, tattoos have been used to communicate identity, commemorate important life events, signify belonging, mark achievements, provide spiritual protection, and preserve stories.",
    "In India, tattoo traditions have existed for centuries through indigenous communities, folk practices, sacred customs, and regional artistic expressions. These traditions reflect diverse ways of understanding the body, community, memory, and cultural identity.",
    "Today, tattooing continues to evolve.",
    "For some, it is a form of artistic expression. For others, it is a profession, a personal journey, a cultural connection, or a means of storytelling.",
    "What connects all of these experiences is the human desire to create meaning.",
    "Nest of India recognises tattooing as both a creative profession and a cultural practice deserving of respect, education, research, and responsible development.",
  ],
};

export type TattooingMeaningRow = { as: string; meaning: string };

export const tattooingCanBe = {
  title: "Tattooing Can Be Many Things",
  columns: { as: "Tattooing As…", meaning: "Meaning" },
  rows: [
    { as: "Art", meaning: "A medium for creative expression" },
    { as: "Culture", meaning: "A carrier of traditions and identity" },
    { as: "Memory", meaning: "A way of marking important moments" },
    { as: "Profession", meaning: "A skilled and evolving career path" },
    { as: "Storytelling", meaning: "A visual language for personal narratives" },
    { as: "Community", meaning: "A means of belonging and connection" },
    { as: "Heritage", meaning: "A reflection of cultural continuity" },
  ] satisfies TattooingMeaningRow[],
};

export const whyThisMatters = {
  title: "Why This Matters To Nest of India",
  paragraphs: [
    "When tattooing is understood only as a service or trend, much of its deeper significance is overlooked.",
    "By encouraging education, research, cultural understanding, and ethical practice, we hope to create greater appreciation for the many ways tattooing contributes to art, culture, community, and identity.",
    "Our goal is not only to preserve the past.",
    "It is to help shape a future where tattooing continues to evolve while remaining connected to the stories, traditions, and people that have given it meaning.",
  ],
};

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
    body: "We want to support a clearer, more trusted professional environment for artists, studios, and the public. That means contributing to conversations around ethical practice, hygiene expectations, artist rights, studio standards, and public-facing guidance that can help professionalise the field without flattening its diversity. Where policy engagement becomes possible, we want that engagement to be informed, collaborative, and grounded in lived practice.",
  },
  {
    label: "Knowledge",
    title: "Education and certification",
    body: "The industry needs stronger pathways for learning. We are developing a long-term education vision that includes workshops, mentorship, research-led curriculum thinking, and ethical certification frameworks. The goal is not to replace informal learning traditions, but to complement them with better structure, higher standards, and broader public trust. If formal institutional collaborations are pursued, they should be presented transparently as active, proposed, or pending.",
  },
  {
    label: "Research",
    title: "Facilitate research and documentation",
    body: "Tattooing in India deserves serious documentation. We are interested in building research capacity around the history of tattooing, regional practices, tattoo communities, public health, design languages, and contemporary professional conditions. Where the term “NTRC” is used, the page should explain it plainly for general audiences and describe whether it is a concept, initiative, or formal centre in progress.",
  },
  {
    label: "Heritage",
    title: "Cultural preservation",
    body: "Traditional motifs, oral histories, techniques, and community-specific meanings cannot be treated as floating inspiration detached from their context. Our preservation work is therefore rooted in listening, documentation, field engagement, artist dialogue, and respectful representation. This priority area connects directly with programmes such as Lok Kala, Kala Charcha, and Study Tours.",
  },
  {
    label: "Livelihoods",
    title: "Artist welfare and empowerment",
    body: "A stronger tattoo ecosystem must also improve the day-to-day conditions of the people working within it. That includes visibility, opportunities for collaboration, welfare support, mental-health awareness, conflict mediation, exhibitions, travel opportunities, and new income channels for traditional artists, tribal communities, and contemporary practitioners.",
  },
];

export type FoundationPracticeItem = {
  title: string;
  text: string;
};

export type FoundationPillar = {
  intro: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  practiceTitle: string;
  centerLabel: string;
  iconSet: "protect" | "dignify" | "build";
  items: FoundationPracticeItem[];
};

/** @deprecated use FoundationPracticeItem */
export type DignifyPracticeItem = FoundationPracticeItem;

export const foundationOfWork = {
  title: "The Foundation of Our Work",
  paragraphs: [
    "Nest of India is guided by three interconnected principles that shape every programme, initiative, partnership, and decision we undertake.",
    "These principles reflect our belief that preserving cultural heritage, supporting artists, and strengthening the future of the profession must happen together.",
  ],
  pillars: [
    {
      intro: {
        eyebrow: "Protect",
        title: "Protecting Heritage, Knowledge, and Cultural Memory",
        paragraphs: [
          "Culture survives when it is remembered, practised, documented, and shared responsibly.",
          "Across India, generations of artists, communities, and knowledge holders have contributed to rich traditions of tattooing, visual storytelling, symbolism, and artistic expression. Many of these traditions continue to exist today, yet much of their knowledge remains vulnerable to loss due to changing social conditions, migration, urbanisation, and limited documentation.",
          "Nest of India is committed to supporting efforts that help preserve these traditions for future generations.",
          "This includes encouraging documentation, research, storytelling, community engagement, exhibitions, archives, and educational initiatives that help protect cultural memory while respecting the communities from which that knowledge originates.",
        ],
      },
      practiceTitle: "What Protect Means In Practice",
      centerLabel: "Protect",
      iconSet: "protect" as const,
      items: [
        { title: "Traditional knowledge", text: "Preserving traditional tattoo knowledge" },
        { title: "Documentation", text: "Documenting artistic traditions and oral histories" },
        { title: "Research & archives", text: "Supporting cultural research and archives" },
        { title: "Representation", text: "Encouraging responsible representation of communities" },
        { title: "Education", text: "Creating educational resources" },
        { title: "Heritage awareness", text: "Raising awareness about India's tattoo heritage" },
      ],
    },
    {
      intro: {
        eyebrow: "Dignify",
        title: "Dignifying Artists and Cultural Practitioners",
        paragraphs: [
          "Artists contribute far more than creative output.",
          "They preserve stories, transmit knowledge, build communities, challenge perspectives, and shape cultural identity.",
          "Yet many artists continue to work without adequate recognition, support systems, educational opportunities, or professional representation.",
          "Nest of India believes that artists deserve to be respected not only for their artistic abilities but also for their contributions to culture, education, and society.",
          "Dignifying artists means creating opportunities for learning, visibility, collaboration, professional development, and meaningful participation in shaping the future of the industry.",
        ],
      },
      practiceTitle: "What Dignify Means In Practice",
      centerLabel: "Dignify",
      iconSet: "dignify" as const,
      items: [
        { title: "Artist welfare", text: "Supporting artist welfare and wellbeing" },
        { title: "Professional growth", text: "Creating opportunities for professional development" },
        { title: "Ethical practice", text: "Promoting ethical working environments" },
        { title: "Knowledge sharing", text: "Encouraging knowledge sharing and mentorship" },
        { title: "Greater visibility", text: "Improving visibility for artists and communities" },
        { title: "Recognition", text: "Strengthening professional recognition" },
      ],
    },
    {
      intro: {
        eyebrow: "Build",
        title: "Building Stronger Foundations For The Future",
        paragraphs: [
          "A thriving creative ecosystem requires more than talent. It requires infrastructure.",
          "Education systems, research initiatives, professional standards, community support networks, partnerships, public awareness, and opportunities for collaboration all contribute to long-term sustainability.",
          "Nest of India seeks to help build these foundations so that artists, communities, institutions, and future generations can benefit from a stronger and more connected ecosystem.",
          "Building is about creating pathways that allow culture and creativity to continue evolving while remaining rooted in knowledge, responsibility, and respect.",
        ],
      },
      practiceTitle: "What Build Means In Practice",
      centerLabel: "Build",
      iconSet: "build" as const,
      items: [
        { title: "Education", text: "Supporting educational development" },
        { title: "Research", text: "Encouraging research and documentation" },
        { title: "Collaboration", text: "Creating opportunities for collaboration" },
        { title: "Community networks", text: "Strengthening community networks" },
        { title: "Public engagement", text: "Promoting public engagement" },
        { title: "Partnerships", text: "Building partnerships across sectors" },
      ],
    },
  ] satisfies FoundationPillar[],
};

export type PrinciplesTogetherRow = {
  protect: string;
  dignify: string;
  build: string;
};

export type PrinciplesTogether = {
  title: string;
  columns: {
    protect: string;
    dignify: string;
    build: string;
  };
  rows: PrinciplesTogetherRow[];
};

export const principlesTogether: PrinciplesTogether = {
  title: "How These Principles Work Together",
  columns: {
    protect: "Protect",
    dignify: "Dignify",
    build: "Build",
  },
  rows: [
    {
      protect: "Preserve heritage and cultural memory",
      dignify: "Support artists and communities",
      build: "Create systems that support future growth",
    },
    {
      protect: "Document knowledge and traditions",
      dignify: "Promote visibility and recognition",
      build: "Strengthen education and research",
    },
    {
      protect: "Safeguard cultural continuity",
      dignify: "Encourage wellbeing and development",
      build: "Build professional infrastructure",
    },
    {
      protect: "Raise awareness and appreciation",
      dignify: "Foster collaboration and mentorship",
      build: "Create long-term opportunities",
    },
  ],
};

/** @deprecated use foundationOfWork.pillars[1] */
export const dignifyInPractice = foundationOfWork.pillars[1];

/* ── People ─────────────────────────────────────────────────────── */

export type Person = { name: string; role?: string };

export const governingCouncilIntro = {
  eyebrow: "Governing Council",
  paragraphs: [
    "Nest of India is guided by a multidisciplinary council of practitioners, educators, health experts, and community leaders who volunteer their skills to ensure our work remains strictly aligned with our core values of cultural care, structural integrity, and public trust.",
    "Nest of India is guided by a council made up of artists, educators, community representatives, researchers, organisers, and professionals from allied fields. Together, they help shape direction, protect the integrity of the movement, and support the long-term systems this sector needs.",
  ],
};

export const boardOfDirectorsSubhead =
  "Our board coordinates organisational strategy, ensures transparency, and maintains operational direction: (in alphabetical order)";

export const boardOfDirectors: Person[] = [
  { name: "Prof. Kums P Kumresan", role: "Education Systems Specialist" },
  { name: "Mangala Bai", role: "Baiga Tribe Representative &amp; Living Tradition Custodian" },
  { name: "Martin McIver", role: "Promoter &amp; International Event Organiser" },
  { name: "Mo Naga", role: "Community Building &amp; Culture Preservation Advocate" },
  { name: "Prof. Ravi Pooviah", role: "Education Systems Specialist" },
  { name: "Sameer Uttekar", role: "Auditing, Finance &amp; Operations" },
  { name: "Dr. Shanmugapriya", role: "Public Health and Safety Advisor" },
  {
    name: "Vijay Mashe",
    role: "Custodian of Warli Heritage (Grandson of Late Padma Shri Jivya Soma Mashe)",
  },
];

export const boardNote =
  "The governing council also holds advisory seats for Sociology, Archaeology (Archaeological Survey of India), and allied tattooing disciplines, alongside partners such as World Tattoo Events.";

export const coreTeamSubhead =
  "The administrative and technological engine driving our day-to-day initiatives and regional campaigns:";

export const coreTeam: Person[] = [
  { name: "Abhinaya ES", role: "Operations, Financial Controls & Planning" },
  { name: "Amit Rajwadkar", role: "Official Spokesperson" },
  { name: "Karishma Nikam", role: "Logistical Operations Support" },
  { name: "Navya Pulagala", role: "Marketing & Public Communications Coordination" },
  { name: "Ritesh Nikam", role: "Media and Public Relations" },
  { name: "Sachin Aarote", role: "CSR Alliances, Institutional Liaison & Communications" },
  { name: "Snehasis Kundu", role: "Technology Integration, Regulatory Guidelines & Compliance" },
];

export const inMemoriamIntro =
  "We remember and refuse to forget the pioneering figures, lineage-bearers, and close colleagues who shaped our paths and left behind profound creative legacies:";

export const inMemoriam: Person[] = [
  { name: "Dr. Kohiyar", role: "Revered as a foundational pillar of modern tattooing in India." },
  { name: "Padma Shri Jivya Soma Mashe Ji", role: "Renowned Master and Father of Warli Art." },
  { name: "Rahul Ghare", role: "Cherished Tattoo Artist and Community Member." },
  { name: "Jitesh Gaikwad", role: "Tattoo Artist, Collaborative Event Promoter and Organiser." },
  { name: "Vishal Aarote", role: "Talented Tattoo Artist, Piercer, and Dedicated Peer." },
];

export const contributors: string[] = [
  "Aadesh G",
  "Amey Acharya",
  "Amritraj",
  "Chirag Jhala",
  "Dipak Vishe",
  "Eric Jason",
  "Jack Uikey",
  "Jason D'Souza",
  "Jayesh Jambhale",
  "Ketan Vaidya",
  "Lucky Solankey",
  "Manish Kadam",
  "Omkar Nikarge",
  "Praful Rathod",
  "Pramod Deshmukh",
  "Rahul Gaikwad",
  "Sameer Patange",
  "Sanket Gurav",
  "Sanket Varadi",
  "Satish Dorwekar",
  "Shashi Prajapati",
  "Sunil Vashiwale",
  "Susweta Dorwekar",
  "Umesh Gangul",
  "Vajit Shek",
  "Vikrant Koli",
];

/* ── The future we are working towards ──────────────────────────── */

export type FutureBranch = {
  audience: string;
  lead: string;
  items: string[];
};

export const futureVision = {
  title: "The Future We Are Working Towards",
  centerLabel: "The Future",
  branches: [
    {
      audience: "For Artists",
      lead: "A future where artists have access to:",
      items: [
        "Professional development opportunities",
        "Educational pathways",
        "Mentorship and peer networks",
        "Industry support systems",
        "Greater public recognition",
        "Safer and healthier working environments",
      ],
    },
    {
      audience: "For Communities",
      lead: "A future where communities:",
      items: [
        "Retain ownership of their stories and traditions",
        "Receive recognition for their cultural contributions",
        "Participate in documentation and preservation efforts",
        "Benefit from opportunities created through cultural engagement",
        "Continue passing knowledge to future generations",
      ],
    },
    {
      audience: "For The Industry",
      lead: "A future where the tattoo industry is supported by:",
      items: [
        "Strong ethical standards",
        "Responsible professional practices",
        "Research and documentation",
        "Education and training",
        "Collaborative leadership",
        "Public trust and understanding",
      ],
    },
    {
      audience: "For Society",
      lead: "A future where society recognises tattooing as:",
      items: [
        "A meaningful form of artistic expression",
        "A cultural practice with historical significance",
        "A valuable contributor to creative industries",
        "A medium for storytelling and identity",
        "An important part of India's artistic landscape",
      ],
    },
  ] satisfies FutureBranch[],
};

export type SuccessRow = {
  area: string;
  vision: string;
};

export const successLooksLike = {
  title: "What Success Looks Like",
  columns: { area: "Area", vision: "Our Vision" },
  rows: [
    { area: "Heritage", vision: "Traditional knowledge is documented, respected, and accessible" },
    { area: "Artists", vision: "Artists are supported, recognised, and connected" },
    { area: "Education", vision: "Learning opportunities are widely available" },
    { area: "Research", vision: "Tattoo culture is better understood and documented" },
    { area: "Public Awareness", vision: "Greater appreciation for tattoo history and practice" },
    { area: "Community", vision: "Stronger collaboration across regions and disciplines" },
    { area: "Industry", vision: "Higher standards, credibility, and trust" },
  ] satisfies SuccessRow[],
};

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
    members: [
      "Tribal artists",
      "Historians",
      "Anthropologists",
      "Cultural researchers",
    ],
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
    members: [
      "Event organisers",
      "Marketing professionals",
      "Public coordinators",
    ],
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
    members: [
      "Senior artists",
      "Legal experts",
      "Industry veterans",
      "Ethics professionals",
    ],
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
