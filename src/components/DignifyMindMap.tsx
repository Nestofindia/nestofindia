import Image from "next/image";
import type { FoundationPillar, FoundationPracticeItem } from "@/lib/content";

type FoundationInfographicProps = FoundationPillar & {
  className?: string;
};

const ICON_SETS: Record<FoundationPillar["iconSet"], React.ReactNode[]> = {
  protect: [
    <g key="p0" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 6h14v12H5z" /><path d="M8 6V4h8v2M9 10h6M9 13h4" />
    </g>,
    <g key="p1" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4h12v16H6z" /><path d="M9 8h6M9 11h6M9 14h4" />
    </g>,
    <g key="p2" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="4" /><path d="M17 17l3 3M8 8h6v6H8z" opacity="0.55" />
    </g>,
    <g key="p3" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="9" r="2.5" /><circle cx="16" cy="9" r="2.5" />
      <path d="M5 18c0-2 1.8-3.5 3-3.5M16 18c0-2 1.8-3.5 3-3.5" />
    </g>,
    <g key="p4" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16v10H4z" /><path d="M8 7V5h8v2M12 11v3" />
    </g>,
    <g key="p5" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4 6 20h12L12 4Z" /><path d="M12 9v4" />
    </g>,
  ],
  dignify: [
    <g key="d0" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20c3.2-3.8 6-5.8 6-8.8a3.8 3.8 0 0 0-7.2-1.8A3.8 3.8 0 0 0 6 11.2c0 3 2.8 5 6 8.8Z" />
    </g>,
    <g key="d1" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 18V11l4-2 4 2v7" /><path d="M9 9V5l3-1.5L15 5v4" />
    </g>,
    <g key="d2" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4 5 7v5.2c0 4.2 3 6.6 7 7.8 4-1.2 7-3.6 7-7.8V7l-7-3Z" />
      <path d="M9 12.2 11 14.5 15.5 10" />
    </g>,
    <g key="d3" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="9" r="2.5" /><circle cx="16" cy="9" r="2.5" />
      <path d="M4.5 18c0-2.2 1.8-4 3.5-4M16.5 18c0-2.2 1.8-4 3.5-4" />
    </g>,
    <g key="d4" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12s2.8-5.5 8-5.5 8 5.5 8 5.5-2.8 5.5-8 5.5-8-5.5-8-5.5Z" />
      <circle cx="12" cy="12" r="2.5" />
    </g>,
    <g key="d5" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="10" r="5.5" />
      <path d="M12 4.5 13 8.5 17 9l-3 2.5.8 4L12 14l-2.8 1.5.8-4-3-2.5 4-.5L12 4.5Z" opacity="0.85" />
    </g>,
  ],
  build: [
    <g key="b0" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10 12 4l8 6v8H4v-8Z" /><path d="M9 18v-5h6v5" />
    </g>,
    <g key="b1" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 18h14M7 14h10M9 10h6M11 6h2" />
    </g>,
    <g key="b2" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 12h10M12 7v10" /><circle cx="7" cy="12" r="2" /><circle cx="17" cy="12" r="2" />
    </g>,
    <g key="b3" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="6" r="2" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" />
      <path d="M12 8v4M8.5 16.5 10.5 13M15.5 16.5 13.5 13" />
    </g>,
    <g key="b4" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 14h3l2-4 2 8 2-5h5" />
    </g>,
    <g key="b5" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 16h16M6 16V9l6-4 6 4v7" /><path d="M10 16v-4h4v4" />
    </g>,
  ],
};

function PracticeIcon({ iconSet, index }: { iconSet: FoundationPillar["iconSet"]; index: number }) {
  const icons = ICON_SETS[iconSet];
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" className="text-indigo" aria-hidden="true">
      {icons[index % icons.length]}
    </svg>
  );
}

function InfographicIntro({
  intro,
  practiceTitle,
}: {
  intro: FoundationPillar["intro"];
  practiceTitle: string;
}) {
  return (
    <>
      <div className="relative overflow-hidden border-b border-indigo-deep bg-indigo px-6 py-10 text-paper sm:px-10 sm:py-14">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full text-paper/[0.06]"
          viewBox="0 0 800 320"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <circle cx="100" cy="80" r="70" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="700" cy="240" r="90" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 6" />
          <path d="M400 60 L370 140 L430 140 Z" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>

        <div className="relative mx-auto max-w-3xl">
          <p className="font-mono text-[0.68rem] uppercase tracking-label text-ochre-soft">
            {intro.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
            {intro.title}
          </h2>
          <div className="mt-6 space-y-4">
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-paper/80 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {intro.image ? (
        <div className="border-b border-line bg-transparent px-6 py-8 sm:px-10 sm:py-10">
          <div className="mx-auto max-w-3xl">
            <Image
              src={intro.image}
              alt={intro.title}
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 720px"
              className="h-auto w-full rounded-sm"
            />
          </div>
        </div>
      ) : null}

      <div className="border-b border-line bg-paper-deep/50 px-6 py-8 sm:px-10 sm:py-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-ochre bg-indigo text-paper shadow-md">
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-ochre-soft" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
              <path d="M12 5 L9 17 L15 17 Z" stroke="currentColor" strokeWidth="1" fill="none" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
          </div>
          <h3 className="font-display text-2xl leading-tight text-ink sm:text-3xl">{practiceTitle}</h3>
        </div>
      </div>
    </>
  );
}

function InfographicCard({
  item,
  index,
  iconSet,
}: {
  item: FoundationPracticeItem;
  index: number;
  iconSet: FoundationPillar["iconSet"];
}) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <article className="group relative flex h-full flex-col border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo/25 hover:shadow-[0_12px_28px_-16px_rgba(32,42,87,0.28)] sm:p-7">
      <span
        className="absolute right-4 top-4 font-display text-3xl leading-none text-indigo/[0.07] transition-colors group-hover:text-indigo/[0.12]"
        aria-hidden="true"
      >
        {num}
      </span>

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-ochre/30 bg-gradient-to-br from-paper-deep to-paper transition-colors duration-300 group-hover:border-indigo/25 group-hover:bg-indigo/5">
        <PracticeIcon iconSet={iconSet} index={index} />
      </div>

      <p className="font-mono text-[0.62rem] uppercase tracking-label text-ochre-deep">{num}</p>
      <h4 className="mt-2 font-display text-xl leading-tight text-ink">{item.title}</h4>
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft sm:text-[1rem]">{item.text}</p>

      <span
        className="mt-5 h-px w-full bg-gradient-to-r from-ochre/50 via-indigo/20 to-transparent"
        aria-hidden="true"
      />
    </article>
  );
}

function ConnectorStrip({ columns }: { columns: number }) {
  if (columns === 2) {
    return (
      <div className="relative hidden h-10 lg:block" aria-hidden="true">
        <svg className="absolute inset-x-8 top-0 h-full w-[calc(100%-4rem)] text-indigo/20" viewBox="0 0 1000 40" preserveAspectRatio="none">
          <path d="M500 0 V14 H250 V40 M500 14 H750 V40" stroke="currentColor" strokeWidth="1.25" fill="none" />
          <circle cx="250" cy="40" r="3" fill="#C18A2B" />
          <circle cx="500" cy="40" r="3" fill="#C18A2B" />
          <circle cx="750" cy="40" r="3" fill="#C18A2B" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative hidden h-10 lg:block" aria-hidden="true">
      <svg className="absolute inset-x-8 top-0 h-full w-[calc(100%-4rem)] text-indigo/20" viewBox="0 0 1000 40" preserveAspectRatio="none">
        <path d="M500 0 V14 H167 V40 M500 14 H833 V40" stroke="currentColor" strokeWidth="1.25" fill="none" />
        <circle cx="167" cy="40" r="3" fill="#C18A2B" />
        <circle cx="500" cy="40" r="3" fill="#C18A2B" />
        <circle cx="833" cy="40" r="3" fill="#C18A2B" />
      </svg>
    </div>
  );
}

export function FoundationInfographic({
  intro,
  practiceTitle,
  centerLabel,
  iconSet,
  items,
  className = "",
}: FoundationInfographicProps) {
  const gridCols = items.length <= 4 ? "sm:grid-cols-2 lg:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`relative overflow-hidden border border-line bg-paper shadow-sm ${className}`}>
      <span className="pointer-events-none absolute left-0 top-0 z-10 h-8 w-8 border-l-2 border-t-2 border-ochre/50" aria-hidden="true" />
      <span className="pointer-events-none absolute right-0 top-0 z-10 h-8 w-8 border-r-2 border-t-2 border-ochre/50" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-0 left-0 z-10 h-8 w-8 border-b-2 border-l-2 border-ochre/50" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-0 right-0 z-10 h-8 w-8 border-b-2 border-r-2 border-ochre/50" aria-hidden="true" />

      <InfographicIntro intro={intro} practiceTitle={practiceTitle} />
      <ConnectorStrip columns={items.length <= 4 ? 2 : 3} />

      <div
        className={`grid gap-5 bg-gradient-to-b from-paper-deep/40 to-paper p-6 sm:gap-6 sm:p-8 lg:p-10 ${gridCols}`}
        role="list"
        aria-label={`${centerLabel} practice pillars`}
      >
        {items.map((item, index) => (
          <div key={item.title} role="listitem">
            <InfographicCard item={item} index={index} iconSet={iconSet} />
          </div>
        ))}
      </div>
    </div>
  );
}

export const DignifyInfographic = FoundationInfographic;
export const DignifyMindMap = FoundationInfographic;
