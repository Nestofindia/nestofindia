import type { FutureBranch } from "@/lib/content";

type FutureMindMapProps = {
  title: string;
  centerLabel: string;
  branches: FutureBranch[];
};

const BRANCH_ICONS = [
  /* Artists — palette */
  <g key="artists" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4a8 8 0 1 0 0 16c1.1 0 2-.9 2-2 0-.6-.3-1-.3-1.5 0-.6.4-1 1-1H16a4 4 0 0 0 4-4c0-4-3.6-7.5-8-7.5Z" />
    <circle cx="8.5" cy="10" r="1" fill="currentColor" />
    <circle cx="12" cy="8" r="1" fill="currentColor" />
    <circle cx="15.5" cy="10" r="1" fill="currentColor" />
  </g>,
  /* Communities — people */
  <g key="communities" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="9" r="2.2" /><circle cx="16" cy="9" r="2.2" />
    <path d="M4.5 18c0-2.2 1.6-3.8 3.5-3.8s3.5 1.6 3.5 3.8M12.5 18c0-2.2 1.6-3.8 3.5-3.8s3.5 1.6 3.5 3.8" />
  </g>,
  /* Industry — structure */
  <g key="industry" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20V8l5-3 5 3v12M14 20v-8l4-2 2 1.2V20" />
    <path d="M7 12h2M7 15h2M16 14h1.5" />
  </g>,
  /* Society — globe */
  <g key="society" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="8" />
    <path d="M4 12h16M12 4c2.5 2.2 2.5 13.8 0 16M12 4c-2.5 2.2-2.5 13.8 0 16" />
  </g>,
];

function BranchCard({ branch, index }: { branch: FutureBranch; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <article className="group relative flex h-full flex-col border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo/25 hover:shadow-[0_12px_28px_-16px_rgba(32,42,87,0.28)] sm:p-7">
      <span
        className="absolute right-4 top-4 font-display text-3xl leading-none text-indigo/[0.07] transition-colors group-hover:text-indigo/[0.12]"
        aria-hidden="true"
      >
        {num}
      </span>

      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-ochre/30 bg-gradient-to-br from-paper-deep to-paper transition-colors duration-300 group-hover:border-indigo/25 group-hover:bg-indigo/5">
        <svg width="28" height="28" viewBox="0 0 24 24" className="text-indigo" aria-hidden="true">
          {BRANCH_ICONS[index % BRANCH_ICONS.length]}
        </svg>
      </div>

      <h4 className="font-display text-xl leading-tight text-ink">{branch.audience}</h4>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{branch.lead}</p>

      <ul className="mt-4 space-y-2.5 border-t border-line pt-4">
        {branch.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[0.95rem] leading-relaxed text-ink-soft">
            <span className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full bg-ochre" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function BranchConnectors() {
  return (
    <div className="relative hidden h-12 lg:block" aria-hidden="true">
      <svg
        className="absolute inset-x-8 top-0 h-full w-[calc(100%-4rem)] text-indigo/25"
        viewBox="0 0 1000 48"
        preserveAspectRatio="none"
      >
        <path
          d="M500 0 V18 H125 V48 M500 18 H375 V48 M500 18 H625 V48 M500 18 H875 V48"
          stroke="currentColor"
          strokeWidth="1.25"
          fill="none"
        />
        <circle cx="125" cy="48" r="3" fill="#C18A2B" />
        <circle cx="375" cy="48" r="3" fill="#C18A2B" />
        <circle cx="625" cy="48" r="3" fill="#C18A2B" />
        <circle cx="875" cy="48" r="3" fill="#C18A2B" />
      </svg>
    </div>
  );
}

export function FutureMindMap({ title, centerLabel, branches }: FutureMindMapProps) {
  return (
    <div className="relative overflow-hidden border border-line bg-paper shadow-sm">
      <span className="pointer-events-none absolute left-0 top-0 z-10 h-8 w-8 border-l-2 border-t-2 border-ochre/50" aria-hidden="true" />
      <span className="pointer-events-none absolute right-0 top-0 z-10 h-8 w-8 border-r-2 border-t-2 border-ochre/50" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-0 left-0 z-10 h-8 w-8 border-b-2 border-l-2 border-ochre/50" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-0 right-0 z-10 h-8 w-8 border-b-2 border-r-2 border-ochre/50" aria-hidden="true" />

      {/* Root node */}
      <div className="relative overflow-hidden border-b border-indigo-deep bg-indigo px-6 py-10 text-center text-paper sm:px-10 sm:py-12">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full text-paper/[0.06]"
          viewBox="0 0 800 200"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <circle cx="120" cy="60" r="60" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="690" cy="150" r="80" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 6" />
        </svg>
        <div className="relative mx-auto flex max-w-2xl flex-col items-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-ochre bg-indigo-deep text-paper shadow-md">
            <svg width="26" height="26" viewBox="0 0 24 24" className="text-ochre-soft" aria-hidden="true">
              <path d="M12 3v6M12 9 7 14M12 9l5 5M7 14v3M17 14v3" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="3" r="1.6" fill="currentColor" />
              <circle cx="7" cy="18" r="1.6" fill="currentColor" />
              <circle cx="17" cy="18" r="1.6" fill="currentColor" />
            </svg>
          </div>
          <p className="font-mono text-[0.68rem] uppercase tracking-label text-ochre-soft">{centerLabel}</p>
          <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">{title}</h2>
        </div>
      </div>

      <BranchConnectors />

      <div
        className="grid gap-5 bg-gradient-to-b from-paper-deep/40 to-paper p-6 sm:grid-cols-2 sm:gap-6 sm:p-8 lg:grid-cols-4 lg:p-10"
        role="list"
        aria-label={`${centerLabel} branches`}
      >
        {branches.map((branch, index) => (
          <div key={branch.audience} role="listitem">
            <BranchCard branch={branch} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
