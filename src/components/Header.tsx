"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav, site } from "@/lib/site";

function Wordmark() {
  return (
    <Link href="/" className="group flex items-center" aria-label={`${site.name} — home`}>
      <Image
        src="/noi-logo.png"
        alt={`${site.name} logo`}
        width={110}
        height={45}
        priority
        className="h-[45px] w-[110px] object-contain"
      />
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
