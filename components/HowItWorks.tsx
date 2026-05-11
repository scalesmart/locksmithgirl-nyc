const steps = [
  {
    number: "01",
    title: "Call or text your location",
    description: "Share where you are, what happened, and whether you are somewhere safe right now.",
  },
  {
    number: "02",
    title: "Get a clear next step",
    description: "She confirms the service area, urgency, and what to expect before anyone heads out.",
  },
  {
    number: "03",
    title: "Get back inside safely",
    description: "Fast, professional locksmith work with practical advice for preventing the next emergency.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-gold">How it works</p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-navy md:text-5xl">
            Simple when the situation is not.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative border border-navy/10 bg-offwhite p-8 shadow-sm">
              <span className="font-heading text-6xl font-bold text-gold/35">{step.number}</span>
              <h3 className="mt-6 text-2xl font-bold text-navy">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-nearblack/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
