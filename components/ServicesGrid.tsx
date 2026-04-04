import Link from "next/link";

const services = [
  {
    title: "Emergency Lockout",
    anchor: "emergency-lockout",
    description:
      "Locked out of your apartment, office, or car? She'll be there fast — typically within 35 minutes anywhere in NYC. No judgment, no hidden fees, no scary strangers.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: "Lock Rekeying",
    anchor: "lock-rekeying",
    description:
      "Moving into a new place, ending a lease, or not sure who has your old keys? Rekeying changes your lock's internal pins so old keys stop working — no full lock replacement needed.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    title: "Lock Changes & Upgrades",
    anchor: "lock-changes",
    description:
      "If your lock is old, damaged, or just not cutting it, a full replacement is the move. She'll help you pick the right lock for your door and your lifestyle.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Smart Lock Installation",
    anchor: "smart-locks",
    description:
      "Ready to go keyless? Smart locks let you unlock your door from your phone, set temporary codes for guests, and know exactly who came and went.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Commercial Security",
    anchor: "commercial",
    description:
      "Offices, retail spaces, and multi-unit buildings have different needs. She handles commercial lock systems, access control, and master key setups for NYC businesses.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Master Key Systems",
    anchor: "master-key",
    description:
      "Managing a building with multiple units? A master key system lets you open every door with one key while tenants keep their individual keys private.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-offwhite py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-heading text-3xl font-bold text-navy md:text-4xl">
          What She Does
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-nearblack/70">
          Professional locksmith services for every situation — from midnight emergencies to planned upgrades.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.anchor}
              href={`/services#${service.anchor}`}
              className="group rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-nearblack/70">
                {service.description}
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-gold group-hover:underline">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
