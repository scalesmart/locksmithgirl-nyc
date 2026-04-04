import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locksmith Services",
  description:
    "Emergency lockouts, lock rekeying, lock changes, smart lock installation, commercial security, and master key systems. Female locksmith serving all 5 NYC boroughs 24/7.",
};

// TODO: Replace with real phone number
const PHONE = "(212) 555-0000";
const PHONE_HREF = "tel:+12125550000";

const services = [
  {
    id: "emergency-lockout",
    title: "Emergency Lockout Response",
    description:
      "Locked out of your apartment, office, or car? She'll be there fast — typically within 35 minutes anywhere in NYC. No judgment, no hidden fees, no scary strangers. Just a licensed female locksmith who gets you back inside safely.",
    whoNeedsIt: "Anyone locked out of their home, office, or vehicle — especially at night or in an unfamiliar area.",
    whatToExpect:
      "Call or text, get a realistic ETA, and she'll arrive with the tools to get you back in without damaging your lock whenever possible. Price is quoted before any work begins.",
    emergency: true,
  },
  {
    id: "lock-rekeying",
    title: "Lock Rekeying",
    description:
      "Moving into a new place, ending a lease, or just not sure who has your old keys? Rekeying changes your lock's internal pins so old keys stop working — no full lock replacement needed. It's fast, affordable, and gives you real peace of mind.",
    whoNeedsIt: "Anyone moving into a new apartment, ending a relationship, or unsure who might have copies of their keys.",
    whatToExpect:
      "She'll rekey your existing locks on the spot — usually takes 15-30 minutes per lock. You get new keys and the old ones become useless.",
    emergency: false,
  },
  {
    id: "lock-changes",
    title: "Lock Changes & Upgrades",
    description:
      "If your lock is old, damaged, or just not cutting it, a full replacement is the move. She'll help you pick the right lock for your door and your lifestyle — from basic deadbolts to high-security options — and install it on the spot.",
    whoNeedsIt: "Anyone with a broken, outdated, or low-security lock who wants a proper upgrade.",
    whatToExpect:
      "She'll assess your current setup, recommend options that fit your door and budget, and install the new lock the same visit. Old hardware is removed cleanly.",
    emergency: false,
  },
  {
    id: "smart-locks",
    title: "Smart Lock Installation",
    description:
      "Ready to go keyless? Smart locks let you unlock your door from your phone, set temporary codes for guests, and know exactly who came and went. She installs and sets up the most popular brands — no electrician needed, no guesswork.",
    whoNeedsIt: "Anyone who wants keyless entry, remote access, or guest code management for their home or office.",
    whatToExpect:
      "She'll confirm compatibility with your door, install the smart lock, connect it to your phone, and walk you through the setup so you're confident using it.",
    emergency: false,
  },
  {
    id: "commercial",
    title: "Commercial Security",
    description:
      "Offices, retail spaces, and multi-unit buildings have different needs than apartments. She handles commercial lock systems, access control, and master key setups for NYC businesses that need reliability and professionalism.",
    whoNeedsIt: "Business owners, office managers, and property managers who need commercial-grade lock and access solutions.",
    whatToExpect:
      "She'll assess your commercial space, recommend the right systems for your needs, and handle installation with minimal disruption to your business.",
    emergency: false,
  },
  {
    id: "master-key",
    title: "Master Key Systems",
    description:
      "Managing a building or property with multiple units? A master key system lets you open every door with one key while tenants keep their individual keys private. She designs and installs these systems for landlords, property managers, and small businesses across the city.",
    whoNeedsIt: "Landlords, property managers, and small business owners managing multiple doors or units.",
    whatToExpect:
      "She'll design a key hierarchy that works for your building, rekey or replace locks as needed, and deliver a system where every tenant has privacy but you have master access.",
    emergency: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
            Locksmith Services
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Professional locksmith services from NYC&apos;s trusted female locksmith — from midnight emergencies to planned security upgrades.
          </p>
        </div>
      </section>

      {/* Services */}
      <div className="mx-auto max-w-5xl px-4 py-16">
        {services.map((service, i) => (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-20 ${i > 0 ? "mt-16 border-t border-nearblack/10 pt-16" : ""}`}
          >
            <h2 className="font-heading text-2xl font-bold text-navy md:text-3xl">
              {service.title}
            </h2>
            <p className="mt-4 text-nearblack/80 leading-relaxed">{service.description}</p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-offwhite p-5">
                <h3 className="font-bold text-navy">Who it&apos;s for</h3>
                <p className="mt-2 text-sm text-nearblack/70">{service.whoNeedsIt}</p>
              </div>
              <div className="rounded-lg bg-offwhite p-5">
                <h3 className="font-bold text-navy">What to expect</h3>
                <p className="mt-2 text-sm text-nearblack/70">{service.whatToExpect}</p>
              </div>
            </div>

            <a
              href={PHONE_HREF}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-navy transition-colors hover:bg-gold-hover"
            >
              {service.emergency ? "Call Now — 24/7" : "Call to Schedule"}
            </a>
          </section>
        ))}

        {/* Sticky sidebar trust signals — shown below on mobile */}
        <div className="mt-16 rounded-xl bg-navy p-8 text-center text-white">
          <h3 className="font-heading text-xl font-bold">Need help now?</h3>
          <p className="mt-2 text-white/70">Licensed &amp; insured. Female-owned. All 5 boroughs.</p>
          <a
            href={PHONE_HREF}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-navy"
          >
            {PHONE}
          </a>
        </div>
      </div>
    </>
  );
}
