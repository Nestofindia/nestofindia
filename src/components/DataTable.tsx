import type { ReactNode } from "react";

type DataTableRow = {
  left: ReactNode;
  right: ReactNode;
  key: string;
};

type DataTableProps = {
  title: string;
  leftHeader: string;
  rightHeader: string;
  rows: DataTableRow[];
  /** Tailwind bg/text classes for the two header cells */
  leftHeaderClass?: string;
  rightHeaderClass?: string;
  /** Width of the left column on sm+ screens */
  leftColWidth?: string;
};

export function DataTable({
  title,
  leftHeader,
  rightHeader,
  rows,
  leftHeaderClass = "bg-indigo text-paper",
  rightHeaderClass = "bg-indigo-bright text-paper",
  leftColWidth = "minmax(9rem,0.5fr)",
}: DataTableProps) {
  const gridCols = { gridTemplateColumns: `${leftColWidth} 1fr` };

  return (
    <div className="relative overflow-hidden border border-line bg-paper shadow-sm">
      <span className="pointer-events-none absolute left-0 top-0 z-10 h-8 w-8 border-l-2 border-t-2 border-ochre/50" aria-hidden="true" />
      <span className="pointer-events-none absolute right-0 top-0 z-10 h-8 w-8 border-r-2 border-t-2 border-ochre/50" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-0 left-0 z-10 h-8 w-8 border-b-2 border-l-2 border-ochre/50" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-0 right-0 z-10 h-8 w-8 border-b-2 border-r-2 border-ochre/50" aria-hidden="true" />

      <div className="border-b border-line bg-paper-deep/60 px-6 py-8 text-center sm:px-10 sm:py-10">
        <h3 className="font-display text-2xl leading-tight text-ink sm:text-3xl">{title}</h3>
      </div>

      <div className="grid" style={gridCols}>
        <div className={`border-b border-r border-line px-5 py-5 sm:px-6 ${leftHeaderClass}`}>
          <p className="font-mono text-base font-bold uppercase tracking-label sm:text-lg">{leftHeader}</p>
        </div>
        <div className={`border-b border-line px-5 py-5 sm:px-6 ${rightHeaderClass}`}>
          <p className="font-mono text-base font-bold uppercase tracking-label sm:text-lg">{rightHeader}</p>
        </div>

        {rows.map((row, i) => {
          const last = i === rows.length - 1;
          const tint = i % 2 === 0 ? "bg-paper" : "bg-paper-deep/50";
          return (
            <div key={row.key} className="contents">
              <div className={`flex items-center border-r border-line px-5 py-5 sm:px-6 ${tint} ${last ? "" : "border-b"}`}>
                <p className="font-display text-lg leading-tight text-ink">{row.left}</p>
              </div>
              <div className={`flex items-center px-5 py-5 sm:px-6 ${tint} ${last ? "" : "border-b border-line"}`}>
                <p className="text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">{row.right}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
