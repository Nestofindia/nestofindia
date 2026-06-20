import Link from "next/link";
import { Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <Eyebrow>404 · Page not found</Eyebrow>
      <h1 className="mt-5 max-w-xl text-4xl leading-tight sm:text-5xl">
        This thread of the story isn&apos;t here.
      </h1>
      <p className="mt-5 max-w-prose text-lg text-ink-soft">
        The page you were looking for may have moved. Let&apos;s get you back to the Nest.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/programmes" className="btn-ghost">
          Explore programmes
        </Link>
      </div>
    </section>
  );
}
