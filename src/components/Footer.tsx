import Link from "next/link";
import { footerNav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-indigo text-paper">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
                <circle cx="17" cy="17" r="16" fill="none" stroke="currentColor" strokeWidth="1.25" opacity="0.7" />
                <path d="M17 5 L9 25 L25 25 Z" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" opacity="0.7" />
                <circle cx="17" cy="17" r="2.6" fill="#E7C77C" />
              </svg>
              <span className="font-display text-xl">Nest of India</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/70">
              A national movement protecting heritage and dignifying artists across the Indian
              tattoo and art community.
            </p>
            <div className="mt-7 space-y-1.5 text-sm text-paper/75">
              <p>
                <a className="link-underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
              <p>
                <a className="link-underline" href={`tel:${site.phoneHref}`}>
                  {site.phone}
                </a>
              </p>
              <p className="pt-2 text-paper/55">
                {site.address.line1}, {site.address.line2} — {site.address.postalCode}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((group) => (
              <div key={group.title}>
                <p className="font-mono text-[0.68rem] uppercase tracking-label text-paper/50">
                  {group.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="link-underline text-sm text-paper/80"
                        {...(item.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-paper/15 pt-6 text-xs text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Nest of India. Custodians of culture, creators of legacy.
          </p>
          <p className="font-mono uppercase tracking-label">
            Pernem · Goa · India
          </p>
        </div>
      </div>
    </footer>
  );
}
