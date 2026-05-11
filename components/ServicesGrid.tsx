import Link from "next/link";

const services = [
  {
    title: "Emergency Lockouts",
    anchor: "emergency-lockout",
    eyebrow: "Locked out now",
    description:
      "Apartment, office, building, or car lockouts handled with calm, professional help when the situation is already stressful.",
  },
  {
    title: "Rekeying & Key Control",
    anchor: "lock-rekeying",
    eyebrow: "Old keys stop working",
    description:
      "A smart move after a move, roommate change, breakup, staff turnover, or any moment where you do not know who still has a key.",
  },
  {
    title: "Lock Changes & Repairs",
    anchor: "lock-changes",
    eyebrow: "Secure the door",
    description:
      "Replace damaged hardware, repair problem locks, or upgrade weak entry points with practical recommendations for NYC doors.",
  },
  {
    title: "Smart Lock Installation",
    anchor: "smart-locks",
    eyebrow: "Modern access",
    description:
      "Install keyless entry, temporary guest codes, and phone-based access without guessing which hardware belongs on your door.",
  },
  {
    title: "Commercial Locksmith",
    anchor: "commercial",
    eyebrow: "Business security",
    description:
      "Support for offices, retail spaces, multi-unit properties, and commercial doors that need reliable access control.",
  },
  {
    title: "Master Key Systems",
    anchor: "master-key",
    eyebrow: "Simpler building access",
    description:
      "Set up controlled access so owners and managers can move quickly while tenants keep individual keys private.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-offwhite py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-gold">Locksmith services</p>
            <h2 className="mt-3 font-heading text-4xl font-bold leading-tight text-navy md:text-5xl">
              Full-service help for NYC doors, keys, and locks.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-nearblack/70 lg:ml-auto">
            From emergency lockouts to planned upgrades, the site now puts the core services forward like an established locksmith shop while keeping the personal trust advantage clear.
          </p>
        </div>

        <div className="mt-12 grid gap-0 border border-navy/10 bg-white shadow-xl shadow-navy/5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.anchor}
              href={`/services#${service.anchor}`}
              className="group min-h-64 border-b border-r border-navy/10 p-7 transition hover:bg-navy hover:text-white"
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-gold">{service.eyebrow}</p>
              <h3 className="mt-4 font-heading text-2xl font-bold text-navy transition group-hover:text-white">
                {service.title}
              </h3>
              <p className="mt-4 leading-relaxed text-nearblack/68 transition group-hover:text-white/74">
                {service.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-bold text-gold">
                View service <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
