// TODO: Replace with real phone number
const PHONE = "(212) 555-0000";
const PHONE_HREF = "tel:+12125550000";
const SMS_HREF = "sms:+12125550000&body=Hi, I need a locksmith";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center bg-navy md:min-h-[70vh]">
      {/* Background gradient overlay (placeholder for photo) */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,151,58,0.15),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          NYC&apos;s locksmith — owned and operated by a woman.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
          Whether you&apos;re locked out at 2am or upgrading your deadbolt on a Saturday, you get a licensed female locksmith at your door. 24/7, all five boroughs.
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
            Call Now — A Woman Is on the Way
          </a>
          <a
            href={SMS_HREF}
            className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition-colors hover:border-white hover:bg-white/10 sm:w-auto"
          >
            Text Us Instead
          </a>
        </div>

        <p className="mt-6 text-sm text-white/50">
          {PHONE} — Available right now
        </p>
      </div>
    </section>
  );
}
