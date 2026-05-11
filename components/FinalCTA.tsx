const PHONE = "(646) 860-0520";
const PHONE_HREF = "tel:+16468600520";
const SMS_HREF = "sms:+16468600520&body=Hi, I need a locksmith";

export default function FinalCTA() {
  return (
    <section className="bg-nearblack py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 border border-gold/25 bg-navy p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-gold">Need help now?</p>
            <h2 className="mt-3 font-heading text-4xl font-bold leading-tight md:text-5xl">
              Locked out, changing locks, or worried about who has a key?
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-white/72">
              Call or text Locksmith Girl of NYC. Save the number before you need it.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={PHONE_HREF}
              className="inline-flex justify-center rounded-sm bg-gold px-8 py-4 text-lg font-extrabold text-navy transition hover:bg-gold-hover"
            >
              Call {PHONE}
            </a>
            <a
              href={SMS_HREF}
              className="inline-flex justify-center rounded-sm border-2 border-white/25 px-8 py-4 text-lg font-bold text-white transition hover:border-gold hover:bg-white/10"
            >
              Text instead
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
