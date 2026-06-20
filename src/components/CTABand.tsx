import Link from "next/link";
import { Reveal } from "./Reveal";

export function CTABand({
  title = "Join the movement",
  body = "Whether you are an artist, a tribal-art custodian, a studio, or a partner — there is a place for you in the Nest.",
  primary = { label: "Become a member", href: "/membership" },
  secondary = { label: "Contact the council", href: "/contact" },
}: {
  title?: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="border-t border-line bg-paper-deep">
      <div className="container-page py-16 lg:py-24">
        <Reveal className="grid items-end gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="max-w-2xl text-3xl leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
            <p className="mt-5 max-w-prose text-lg text-ink-soft">{body}</p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link href={primary.href} className="btn-primary">
              {primary.label}
            </Link>
            <Link href={secondary.href} className="btn-ghost">
              {secondary.label}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
