import FAQ from "@/components/FAQ";

export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Locksmith Girl of NYC. Is she actually a woman? How fast can she get there? How much does a lockout cost? Get answers here.",
};

const PHONE_HREF = "tel:+16468600520";

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Things women ask before they call.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <FAQ showHeading={false} />

      {/* CTA */}
      <section className="bg-offwhite py-12 text-center">
        <h2 className="font-heading text-2xl font-bold text-navy">
          Still have questions?
        </h2>
        <p className="mt-2 text-nearblack/60">
          Call or text — she&apos;ll give you a straight answer.
        </p>
        <a
          href={PHONE_HREF}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-lg font-bold text-navy transition-colors hover:bg-gold-hover"
        >
          Call Now — 24/7
        </a>
      </section>
    </>
  );
}
