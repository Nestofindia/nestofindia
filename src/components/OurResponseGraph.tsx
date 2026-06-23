type OurResponseGraphProps = {
  title: string;
  lead: string;
  solutions: string[];
  ecosystemNote: string;
  outcomes: string[];
};

export function OurResponseGraph({
  title,
  lead,
  solutions,
  ecosystemNote,
  outcomes,
}: OurResponseGraphProps) {
  return (
    <div className="relative overflow-hidden border border-line bg-paper shadow-sm">
      <span className="pointer-events-none absolute left-0 top-0 z-10 h-8 w-8 border-l-2 border-t-2 border-ochre/50" aria-hidden="true" />
      <span className="pointer-events-none absolute right-0 top-0 z-10 h-8 w-8 border-r-2 border-t-2 border-ochre/50" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-0 left-0 z-10 h-8 w-8 border-b-2 border-l-2 border-ochre/50" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-0 right-0 z-10 h-8 w-8 border-b-2 border-r-2 border-ochre/50" aria-hidden="true" />

      <div className="border-b border-line bg-paper-deep/60 px-6 py-8 text-center sm:px-10 sm:py-10">
        <h3 className="font-display text-2xl leading-tight text-ink sm:text-3xl">{title}</h3>
        <p className="mt-3 text-base leading-relaxed text-ink-soft sm:text-lg">{lead}</p>
      </div>

      {/* Progress track of solutions */}
      <div className="bg-gradient-to-b from-paper-deep/40 to-paper px-6 py-10 sm:px-10 sm:py-12">
        <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, i) => {
            const num = String(i + 1).padStart(2, "0");
            const progress = Math.round(((i + 1) / solutions.length) * 100);
            return (
              <li
                key={solution}
                className="group relative flex h-full flex-col border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo/25 hover:shadow-[0_12px_28px_-16px_rgba(32,42,87,0.28)]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ochre/40 bg-paper-deep font-mono text-[0.7rem] font-bold text-indigo">
                    {num}
                  </span>
                  <span className="font-mono text-[0.6rem] uppercase tracking-label text-ink-faint">
                    {progress}%
                  </span>
                </div>
                <p className="mt-4 text-[0.95rem] font-medium leading-snug text-ink">{solution}</p>
                <span className="mt-4 block h-1 w-full overflow-hidden rounded-full bg-paper-deep" aria-hidden="true">
                  <span
                    className="block h-full rounded-full bg-gradient-to-r from-ochre to-indigo"
                    style={{ width: `${progress}%` }}
                  />
                </span>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Ecosystem convergence */}
      <div className="relative overflow-hidden border-y border-indigo-deep bg-indigo px-6 py-10 text-center text-paper sm:px-10 sm:py-12">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full text-paper/[0.06]"
          viewBox="0 0 800 200"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <circle cx="120" cy="60" r="60" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="690" cy="150" r="80" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 6" />
        </svg>
        <p className="relative mx-auto max-w-2xl font-display text-xl leading-snug sm:text-2xl">
          {ecosystemNote}
        </p>
      </div>

      {/* Outcomes chain */}
      <div className="grid gap-px bg-line sm:grid-cols-3">
        {outcomes.map((outcome, i) => (
          <div key={outcome} className="flex items-start gap-3 bg-paper p-6 sm:p-7">
            <span className="mt-0.5 font-display text-2xl leading-none text-ochre" aria-hidden="true">
              {i + 1}
            </span>
            <p className="text-[0.95rem] leading-relaxed text-ink-soft">{outcome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
