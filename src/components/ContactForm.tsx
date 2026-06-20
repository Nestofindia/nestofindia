"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const fieldClass =
  "mt-2 w-full border border-line bg-paper px-4 py-3 text-ink placeholder:text-ink-faint focus:border-indigo focus:outline-none";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject || "Enquiry — Nest of India",
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.66rem] uppercase tracking-label text-ink-soft">
            Your name
          </span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
            placeholder="Full name"
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="font-mono text-[0.66rem] uppercase tracking-label text-ink-soft">
            Email
          </span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={fieldClass}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>
      </div>
      <label className="block">
        <span className="font-mono text-[0.66rem] uppercase tracking-label text-ink-soft">
          Subject
        </span>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={fieldClass}
          placeholder="What is this about?"
        />
      </label>
      <label className="block">
        <span className="font-mono text-[0.66rem] uppercase tracking-label text-ink-soft">
          Message
        </span>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className={`${fieldClass} resize-y`}
          placeholder="Tell us how we can help."
        />
      </label>
      <button type="submit" className="btn-primary">
        Send message
      </button>
      <p className="text-xs text-ink-faint">
        This opens your email app with the message ready to send. Prefer to write directly? Email{" "}
        <a href={`mailto:${site.email}`} className="link-underline text-ink-soft">
          {site.email}
        </a>
        .
      </p>
    </form>
  );
}
