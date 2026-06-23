import type { ReactNode } from "react";
import type { PrinciplesTogether } from "@/lib/content";

const COLUMN_STYLES = {
  protect: {
    header: "bg-[#8B5E3C] text-paper",
    shades: ["bg-[#EFE3D4] text-ink", "bg-[#E6D4BE] text-ink"],
  },
  dignify: {
    header: "bg-[#5E8C4F] text-paper",
    shades: ["bg-[#E5EFD8] text-ink", "bg-[#D6E7C3] text-ink"],
  },
  build: {
    header: "bg-[#3E7CB1] text-paper",
    shades: ["bg-[#DFEDF8] text-ink", "bg-[#CCE2F2] text-ink"],
  },
} as const;

type ColumnKey = keyof typeof COLUMN_STYLES;

const COLUMNS: ColumnKey[] = ["protect", "dignify", "build"];

function Cell({
  column,
  rowIndex,
  children,
  className = "",
  isLastRow = false,
}: {
  column: ColumnKey;
  rowIndex: number;
  children: ReactNode;
  className?: string;
  isLastRow?: boolean;
}) {
  const shade = COLUMN_STYLES[column].shades[rowIndex % 2];
  return (
    <div
      className={`flex min-h-[5.5rem] items-center px-5 py-5 sm:min-h-[6rem] sm:px-6 sm:py-6 ${shade} ${
        isLastRow ? "" : "border-b border-line/60"
      } ${className}`}
    >
      <p className="text-[0.95rem] leading-relaxed sm:text-base">{children}</p>
    </div>
  );
}

function ColumnHeader({ label, column }: { label: string; column: ColumnKey }) {
  return (
    <div
      className={`border-b border-line px-5 py-5 text-center sm:px-6 sm:py-6 ${COLUMN_STYLES[column].header}`}
    >
      <p className="font-mono text-base font-bold uppercase tracking-label text-paper sm:text-lg">{label}</p>
    </div>
  );
}

export function PrinciplesTogetherTable({ title, columns, rows }: PrinciplesTogether) {
  return (
    <div className="relative overflow-hidden border border-line bg-paper shadow-sm">
      <span className="pointer-events-none absolute left-0 top-0 z-10 h-8 w-8 border-l-2 border-t-2 border-ochre/50" aria-hidden="true" />
      <span className="pointer-events-none absolute right-0 top-0 z-10 h-8 w-8 border-r-2 border-t-2 border-ochre/50" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-0 left-0 z-10 h-8 w-8 border-b-2 border-l-2 border-ochre/50" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-0 right-0 z-10 h-8 w-8 border-b-2 border-r-2 border-ochre/50" aria-hidden="true" />

      <div className="border-b border-line bg-paper-deep/60 px-6 py-8 text-center sm:px-10 sm:py-10">
        <h3 className="font-display text-2xl leading-tight text-ink sm:text-3xl">{title}</h3>
      </div>

      {/* Desktop / tablet — column grid */}
      <div className="hidden sm:grid sm:grid-cols-3" role="table" aria-label={title}>
        {COLUMNS.map((column) => (
          <div key={column} role="columngroup" className="border-r border-line last:border-r-0">
            <ColumnHeader label={columns[column]} column={column} />
            {rows.map((row, rowIndex) => (
              <Cell
                key={`${column}-${rowIndex}`}
                column={column}
                rowIndex={rowIndex}
                isLastRow={rowIndex === rows.length - 1}
              >
                {row[column]}
              </Cell>
            ))}
          </div>
        ))}
      </div>

      {/* Mobile — row cards */}
      <div className="divide-y divide-line sm:hidden" role="table" aria-label={title}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} role="row" className="grid grid-cols-1">
            {COLUMNS.map((column) => (
              <div key={column} role="cell">
                <div className={`px-4 py-3 ${COLUMN_STYLES[column].header}`}>
                  <p className="font-mono text-sm font-bold uppercase tracking-label">{columns[column]}</p>
                </div>
                <Cell column={column} rowIndex={rowIndex} className="min-h-0 border-b-0">
                  {row[column]}
                </Cell>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
