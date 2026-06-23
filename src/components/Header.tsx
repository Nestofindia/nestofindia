"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav, site } from "@/lib/site";

function Wordmark() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true" className="text-indigo">
        <circle cx="17" cy="17" r="16" fill="none" stroke="currentColor" strokeWidth="1.25" />
        <path d="M17 5 L9 25 L25 25 Z" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
        <circle cx="17" cy="17" r="2.6" fill="#C18A2B" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-medium tracking-tight text-ink">
          Nest of India
        </span>
        <span className="mt-1 font-mono text-[0.58rem] uppercase tracking-label text-ink-faint">
          National Council
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="container-page flex h-[72px] items-center justify-between">
        <Wordmark />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="header-nav-link"
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-primary !px-5 !py-2.5">
            Contact
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-px w-6 bg-ink transition-all duration-300 ${
                open ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-2 block h-px w-6 bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-6 bg-ink transition-all duration-300 ${
                open ? "top-2 -rotate-45" : "top-4"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-line bg-paper lg:hidden ${
          open ? "max-h-[80vh]" : "max-h-0"
        } transition-[max-height] duration-400 ease-out`}
      >
        <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
          {primaryNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="header-nav-link w-full px-4 py-3.5 text-sm"
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-primary mt-3 w-full">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
