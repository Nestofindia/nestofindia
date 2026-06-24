import Link from "next/link";
import Image from "next/image";
import { footerNav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-indigo text-paper">
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link href="/" aria-label={`${site.name} — home`} className="inline-flex">
              <Image
                src="/noi-logo-footer.png"
                alt={`${site.name} logo`}
                width={110}
                height={45}
                className="h-[45px] w-[110px] object-contain opacity-70"
              />
            </Link>
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
            <div className="mt-7 flex items-center gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.name} on Instagram`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/25 text-paper/80 transition-colors hover:border-ochre hover:text-ochre"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
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
