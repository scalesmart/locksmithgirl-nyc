const PHONE = "(646) 860-0520";
const PHONE_HREF = "tel:+16468600520";
const SMS_HREF = "sms:+16468600520&body=Hi, I need a locksmith";

const quickServices = ["Emergency Lockouts", "Rekeying", "Lock Changes", "Smart Locks"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(201,151,58,0.24),transparent_28%),linear-gradient(135deg,rgba(27,43,75,0.98),rgba(13,21,38,0.96))]" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.06)),repeating-linear-gradient(135deg,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_18px)] lg:block" />

      <div className="relative mx-auto grid min-h-[78vh] max-w-7xl items-center gap-10 px-4 py-16 md:py-20 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <p className="inline-flex rounded-full border border-gold/40 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-gold">
            Trusted 24/7 NYC locksmith help
          </p>
          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            A safer call when you need a locksmith now.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/78 md:text-xl">
            Locked out, changing keys, or upgrading your door? Get a licensed female locksmith serving Manhattan, Brooklyn, Queens, and the Bronx, day or night.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-8 py-4 text-lg font-extrabold text-navy shadow-lg shadow-black/20 transition hover:bg-gold-hover"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {PHONE}
            </a>
            <a
              href={SMS_HREF}
              className="inline-flex items-center justify-center rounded-sm border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition hover:border-gold hover:bg-white/10"
            >
              Text Your Situation
            </a>
          </div>

          <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 text-sm font-semibold text-white/86 sm:grid-cols-4">
            {quickServices.map((service) => (
              <span key={service} className="border-l-2 border-gold/70 pl-3">
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-sm border border-white/12 bg-white p-4 text-navy shadow-2xl shadow-black/35">
          <div className="border border-gold/30 bg-offwhite p-6 md:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-gold">Emergency response</p>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight md:text-4xl">
              Locked out late? Don&apos;t wait outside alone.
            </h2>
            <p className="mt-4 leading-relaxed text-nearblack/72">
              Call or text with your location and door issue. She&apos;ll confirm service area, give the next safe step, and head your way when available.
            </p>
            <div className="mt-6 space-y-3 border-y border-navy/10 py-5">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gold" />
                <p><strong>24/7 help</strong> for emergency lockouts and urgent lock changes.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gold" />
                <p><strong>Female-owned and operated</strong> for a calmer late-night experience.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gold" />
                <p><strong>Residential and commercial</strong> locks, rekeys, repairs, and smart locks.</p>
              </div>
            </div>
            <a href={PHONE_HREF} className="mt-6 inline-flex w-full justify-center rounded-sm bg-navy px-6 py-4 font-extrabold text-white transition hover:bg-navy-light">
              Get Help Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
