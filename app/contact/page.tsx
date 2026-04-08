"use client";

import { useState, type FormEvent } from "react";

const PHONE = "(646) 860-0520";
const PHONE_HREF = "tel:+16468600520";
const SMS_HREF = "sms:+16468600520&body=Hi, I need a locksmith";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Connect form to backend / email service
    // mailto: fallback — mailto:contact@locksmithgirl.com
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
            Contact
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Locked out? Need a quote? Reach her directly — she&apos;ll respond fast.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16">
        {/* Big call button */}
        <div className="text-center">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 rounded-full bg-gold px-10 py-5 text-xl font-bold text-navy transition-colors hover:bg-gold-hover"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {PHONE}
          </a>
          <p className="mt-3 text-nearblack/60">or</p>
          <a
            href={SMS_HREF}
            className="mt-2 inline-flex items-center gap-2 rounded-full border-2 border-navy px-6 py-3 font-bold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            Text Us Instead
          </a>
        </div>

        {/* Contact form */}
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">Send a Message</h2>
            <p className="mt-2 text-nearblack/60">
              She&apos;ll call you back within minutes.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-xl bg-green-50 border border-green-200 p-8 text-center">
                <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="mt-4 text-lg font-bold text-green-800">Message Sent!</h3>
                <p className="mt-2 text-green-700">
                  She&apos;ll get back to you as soon as possible. If it&apos;s urgent, call directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 w-full rounded-lg border border-nearblack/20 px-4 py-3 text-base focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="mt-1 w-full rounded-lg border border-nearblack/20 px-4 py-3 text-base focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                    placeholder="(555) 555-5555"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy">
                    Email <span className="font-normal text-nearblack/40">(optional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 w-full rounded-lg border border-nearblack/20 px-4 py-3 text-base focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy">
                    Describe your issue *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="mt-1 w-full rounded-lg border border-nearblack/20 px-4 py-3 text-base focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 resize-none"
                    placeholder="Locked out, need a rekey, want smart locks installed..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-gold px-6 py-3 font-bold text-navy transition-colors hover:bg-gold-hover"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">Quick Info</h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-gold">Hours</h3>
                <p className="mt-1 text-nearblack/80">24/7 — nights, weekends, and holidays</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-gold">Phone</h3>
                <a href={PHONE_HREF} className="mt-1 block text-lg font-bold text-navy hover:text-gold">
                  {PHONE}
                </a>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-gold">Service Area</h3>
                <p className="mt-1 text-nearblack/80">Manhattan, Brooklyn, Queens &amp; The Bronx — within 35 minutes of the Upper East Side</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-gold">Response Time</h3>
                <p className="mt-1 text-nearblack/80">She&apos;ll call you back within minutes.</p>
              </div>

              {/* Map placeholder */}
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-navy/10 to-navy/5 flex items-center justify-center">
                <div className="text-center text-nearblack/40">
                  <svg className="mx-auto h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {/* TODO: Embed Google Map centered on Upper East Side */}
                  <p className="mt-2 text-sm">Map placeholder — Upper East Side, NYC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
