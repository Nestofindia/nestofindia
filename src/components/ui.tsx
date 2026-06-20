import type { ElementType, ReactNode } from "react";
import { DividerMark } from "./Linework";

const HAIRLINE_GRID_COLS = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

export function HairlineGrid({
  children,
  className = "",
  cols = 3,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  cols?: 2 | 3 | 4;
  as?: ElementType;
}) {
  return (
    <Tag
      className={`hairline-grid hairline-grid--cols-${cols} grid ${HAIRLINE_GRID_COLS[cols]} ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="border-b border-line bg-paper-deep/60">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-soft">{intro}</p>
        ) : null}
      </div>
    </header>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

export function SectionDivider() {
  return (
    <div className="container-page">
      <DividerMark className="py-2" />
    </div>
  );
}

type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };

export function JsonLd({ data }: { data: Record<string, JsonValue> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
