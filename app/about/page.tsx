import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the Locksmith Girl — NYC's female-owned, female-operated locksmith. Learn her story, from TikTok community to trusted locksmith serving Manhattan, Brooklyn, Queens & the Bronx 24/7.",
};

const PHONE_HREF = "tel:+16468600520";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
            About The Locksmith Girl
          </h1>
          <p className="mt-4 text-lg text-white/70">
            The locksmith women actually want.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16">
        {/* Photo placeholder */}
        <div className="mx-auto mb-12 aspect-[3/2] max-w-lg rounded-2xl bg-gradient-to-br from-navy via-navy-light to-navy flex items-center justify-center">
          <div className="text-center text-white/50">
            <svg className="mx-auto h-16 w-16 text-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="mt-2 text-sm">Owner photo — authentic, on the job</p>
          </div>
        </div>

        {/* Story */}
        <div className="prose prose-lg mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-navy md:text-3xl">
            Why I became NYC&apos;s female locksmith.
          </h2>

          <div className="mt-6 space-y-4 text-nearblack/80 leading-relaxed">
            <p>
              I&apos;m the owner of Locksmith Girl NYC, providing 24/7 emergency locksmith services across New York City. I specialize in residential and commercial lockouts, lock repair, lock replacement, and smart lock installation.
            </p>
            <p>
              With over 4 years of hands-on experience, I&apos;ve helped hundreds of NYC residents and businesses get back inside safely and upgrade their security. I focus on fast response times, reliable work, and straightforward service—especially in stressful situations like late-night lockouts.
            </p>
            <p>
              As a women-owned business, my goal is to provide a service people feel comfortable calling, knowing the job will be handled professionally and efficiently.
            </p>
          </div>
        </div>

        {/* Credentials */}
        <div className="mt-12 rounded-xl bg-offwhite p-8">
          <h3 className="font-heading text-xl font-bold text-navy">Credentials</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-nearblack/80">Licensed locksmith — NYS License #2123553-DCWP</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-nearblack/80">Fully insured</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-nearblack/80">Female-owned &amp; female-operated</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-nearblack/80">Serving Manhattan, Brooklyn, Queens &amp; The Bronx</span>
            </li>
          </ul>
        </div>

        {/* TikTok Community */}
        <div className="mt-12 rounded-xl border-2 border-gold/20 bg-gold/5 p-8">
          <h3 className="font-heading text-xl font-bold text-navy">The TikTok Community</h3>
          <p className="mt-4 text-nearblack/70 leading-relaxed">
            What started as a few videos about home security tips turned into a community of tens of thousands of women who follow along for real advice — scam alerts, DIY security tips, and behind-the-scenes of what it&apos;s actually like being a female locksmith in NYC. It&apos;s not marketing. It&apos;s just showing up and being real.
          </p>
          {/* TODO: Replace with real TikTok link */}
          <a
            href="https://www.tiktok.com/@locksmithgirl"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-bold text-navy hover:text-gold"
          >
            Follow @locksmithgirl on TikTok →
          </a>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="font-heading text-2xl font-bold text-navy">
            Ready to trust your locks to someone you actually trust?
          </h3>
          <a
            href={PHONE_HREF}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-lg font-bold text-navy transition-colors hover:bg-gold-hover"
          >
            Save Her Number Now
          </a>
        </div>
      </div>
    </>
  );
}
