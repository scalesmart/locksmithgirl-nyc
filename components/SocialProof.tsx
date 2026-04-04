const testimonials = [
  {
    quote:
      "I found her at 1:30am, locked out of my Williamsburg apartment. She was there in 25 minutes and I never felt unsafe for a second. Saved her number immediately.",
    name: "Sarah M.",
    location: "Brooklyn",
  },
  {
    quote:
      "As a woman living alone, knowing there's a female locksmith I can call at any hour is genuinely life-changing. She's the real deal.",
    name: "Priya K.",
    location: "Upper East Side",
  },
  {
    quote:
      "Rekeyed my entire apartment after a breakup. She was fast, professional, and didn't make me explain anything. 10/10.",
    name: "Jessica T.",
    location: "Queens",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Reviews */}
        <h2 className="text-center font-heading text-3xl font-bold text-navy md:text-4xl">
          What Women Are Saying
        </h2>

        {/* Placeholder star rating */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="flex text-gold">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          {/* TODO: Replace with real Google review count */}
          <span className="text-sm text-nearblack/60">5.0 — Google Reviews</span>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl bg-offwhite p-6">
              <p className="text-nearblack/80 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-navy">
                {t.name}, <span className="font-normal text-nearblack/60">{t.location}</span>
              </p>
            </div>
          ))}
        </div>

        {/* TikTok block */}
        <div className="mt-12 rounded-xl border-2 border-gold/20 bg-gold/5 p-8 text-center">
          <h3 className="font-heading text-2xl font-bold text-navy">
            She&apos;s not just a locksmith. She&apos;s the locksmith NYC talks about.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-nearblack/70 leading-relaxed">
            With tens of thousands of followers on TikTok (@locksmithgirl), she&apos;s built one of the most trusted names in NYC home security — not through ads, but through showing up, being real, and actually helping people. Her DMs are full of women who found her at 1am and saved her number forever. That&apos;s not marketing. That&apos;s reputation.
          </p>
          {/* TODO: Replace with real TikTok link */}
          <a
            href="https://www.tiktok.com/@locksmithgirl"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-bold text-white transition-colors hover:bg-navy-light"
          >
            Follow on TikTok →
          </a>
        </div>
      </div>
    </section>
  );
}
