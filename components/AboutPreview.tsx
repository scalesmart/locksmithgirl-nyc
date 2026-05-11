import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-offwhite py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-sm bg-navy p-8 text-white shadow-2xl shadow-navy/20 md:p-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-gold">Our guarantee</p>
          <h2 className="mt-4 font-heading text-4xl font-bold leading-tight md:text-5xl">
            Professional work without the late-night intimidation factor.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/74">
            You get clear communication, practical options, and someone who understands that a lock emergency is also a safety moment.
          </p>
          <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
            <div>
              <p className="font-heading text-3xl font-bold text-gold">4+ yrs</p>
              <p className="text-sm text-white/62">Hands-on locksmith experience</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-gold">24/7</p>
              <p className="text-sm text-white/62">Emergency availability</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-gold">NYC</p>
              <p className="text-sm text-white/62">Borough-focused service</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-gold">About Locksmith Girl</p>
          <h3 className="mt-3 font-heading text-3xl font-bold text-navy md:text-4xl">
            Built around trust, not just tools.
          </h3>
          <p className="mt-6 text-lg leading-relaxed text-nearblack/72">
            Locksmith Girl NYC provides 24/7 emergency locksmith services across New York City, including residential and commercial lockouts, lock repair, lock replacement, rekeying, and smart lock installation.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-nearblack/72">
            The differentiator is simple: when someone is stuck outside, especially late at night, the person who shows up matters. This brand makes that trust visible before the call is even placed.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-sm border-2 border-navy px-6 py-3 font-extrabold text-navy transition hover:bg-navy hover:text-white"
          >
            Meet The Locksmith Girl →
          </Link>
        </div>
      </div>
    </section>
  );
}
