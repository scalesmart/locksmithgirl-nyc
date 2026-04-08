const PHONE_HREF = "tel:+16468600520";
const SMS_HREF = "sms:+16468600520&body=Hi, I need a locksmith";

export default function FinalCTA() {
  return (
    <section className="bg-navy py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-heading text-4xl font-bold text-white md:text-5xl">
          Locked Out Right Now?
        </h2>
        <p className="mt-4 text-lg text-white/70">
          Don&apos;t wait outside alone. Call or text — she&apos;ll pick up.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {/* // TODO: Track call CTA click in GA4 */}
          <a
            href={PHONE_HREF}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-lg font-bold text-navy transition-colors hover:bg-gold-hover sm:w-auto"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now — 24/7
          </a>
          <a
            href={SMS_HREF}
            className="flex w-full items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition-colors hover:border-white hover:bg-white/10 sm:w-auto"
          >
            Prefer to text?
          </a>
        </div>
      </div>
    </section>
  );
}
