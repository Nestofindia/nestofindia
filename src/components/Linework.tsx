/* Linework — the signature motif of the site.
   An abstract fine-line composition drawing on the shared visual grammar of
   Warli folk art and tattoo dotwork: triangle-pair figures, a tarpa sun,
   connecting lines, and ink "points". Strokes use currentColor; the ochre
   nodes are the single accent. Purely decorative, so hidden from assistive tech. */

export function HeroLinework({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 560"
      fill="none"
      role="presentation"
      aria-hidden="true"
      className={className}
    >
      <g
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        {/* central spine */}
        <line x1="210" y1="40" x2="210" y2="520" opacity="0.35" />

        {/* tarpa sun, top */}
        <circle cx="210" cy="86" r="30" />
        <circle cx="210" cy="86" r="18" opacity="0.6" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const x1 = 210 + Math.cos(a) * 34;
          const y1 = 86 + Math.sin(a) * 34;
          const x2 = 210 + Math.cos(a) * 46;
          const y2 = 86 + Math.sin(a) * 46;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} opacity="0.7" />;
        })}

        {/* Warli figure — left */}
        <g transform="translate(120 200)">
          <circle cx="0" cy="0" r="11" />
          <path d="M0 11 L-16 56 L16 56 Z" />
          <path d="M0 11 L0 34" />
          <path d="M-22 26 L0 20 L22 26" />
          <path d="M-16 56 L-26 92 M16 56 L26 92" />
        </g>

        {/* Warli figure — right (mirrored, dancing) */}
        <g transform="translate(300 250)">
          <circle cx="0" cy="0" r="11" />
          <path d="M0 11 L-16 56 L16 56 Z" />
          <path d="M-20 22 L0 18 L24 12" />
          <path d="M-16 56 L-28 86 M16 56 L24 94" />
        </g>

        {/* connecting line between figures */}
        <path d="M131 232 C 180 300, 240 250, 289 282" opacity="0.5" />

        {/* tree, lower left */}
        <g transform="translate(118 360)">
          <line x1="0" y1="0" x2="0" y2="90" />
          <path d="M0 18 L-26 4 M0 30 L-26 18 M0 18 L26 4 M0 30 L26 18" opacity="0.7" />
          <path d="M0 44 L-22 32 M0 44 L22 32" opacity="0.7" />
        </g>

        {/* concentric motif, lower right */}
        <circle cx="300" cy="400" r="34" opacity="0.8" />
        <circle cx="300" cy="400" r="22" opacity="0.55" />
        <circle cx="300" cy="400" r="10" opacity="0.4" />

        {/* dot row, base */}
        {Array.from({ length: 7 }).map((_, i) => (
          <line
            key={i}
            x1={150 + i * 20}
            y1="500"
            x2={150 + i * 20}
            y2="500.5"
            opacity="0.6"
          />
        ))}
      </g>

      {/* ochre ink points along the spine */}
      <g fill="#C18A2B">
        <circle cx="210" cy="160" r="3.5" />
        <circle cx="210" cy="300" r="3.5" />
        <circle cx="210" cy="440" r="3.5" />
      </g>
      {/* small dot nodes */}
      <g fill="currentColor" opacity="0.8">
        {Array.from({ length: 7 }).map((_, i) => (
          <circle key={i} cx={150 + i * 20} cy="500" r="2.4" />
        ))}
      </g>
    </svg>
  );
}

export function DividerMark({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-16 bg-[var(--hairline)]" />
      <svg width="58" height="14" viewBox="0 0 58 14" fill="none" role="presentation">
        <circle cx="6" cy="7" r="2.4" fill="#C18A2B" />
        <path
          d="M29 1 L23 12 L35 12 Z"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinejoin="round"
          className="text-ink"
        />
        <circle cx="52" cy="7" r="2.4" fill="#C18A2B" />
      </svg>
      <span className="h-px w-16 bg-[var(--hairline)]" />
    </div>
  );
}
