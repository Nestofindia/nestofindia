"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Eyebrow } from "@/components/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <Eyebrow>Something went wrong</Eyebrow>
      <h1 className="mt-5 max-w-xl text-4xl leading-tight sm:text-5xl">
        We hit an unexpected snag.
      </h1>
      <p className="mt-5 max-w-prose text-lg text-ink-soft">
        Please try again. If the problem persists, return to the home page.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <button type="button" onClick={reset} className="btn-primary">
          Try again
        </button>
        <Link href="/" className="btn-ghost">
          Back to home
        </Link>
      </div>
    </section>
  );
}
