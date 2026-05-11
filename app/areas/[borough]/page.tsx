import type { Metadata } from "next";
import Link from "next/link";

const PHONE = "(855) 914-7068";
const PHONE_HREF = "tel:+18559147068";
const SMS_HREF = "sms:+18559147068&body=Hi, I need a locksmith";

type BoroughData = {
  name: string;
  displayName: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  neighborhoods: string[];
  response: string;
};

const boroughData: Record<string, BoroughData> = {
  manhattan: {
    name: "manhattan",
    displayName: "Manhattan",
    metaTitle: "Manhattan Locksmith | Female Locksmith Manhattan NYC | 24/7",
    metaDescription:
      "Female locksmith serving Manhattan 24/7. Emergency lockouts, lock rekeying, smart locks. Based on the Upper East Side — she'll be there in under 20 minutes.",
    intro:
      "Manhattan is home base. Based on the Upper East Side, she can reach most Manhattan neighborhoods in under 20 minutes. Whether you're locked out of your East Village walkup at midnight or need your Midtown office rekeyed, she's the locksmith women in Manhattan trust.",
    neighborhoods: [
      "Upper East Side",
      "Upper West Side",
      "Midtown",
      "Lower East Side",
      "East Village",
      "West Village",
      "SoHo",
      "Tribeca",
      "Harlem",
      "Financial District",
      "Chelsea",
      "Gramercy",
      "Murray Hill",
      "Hell's Kitchen",
      "Washington Heights",
      "Inwood",
    ],
    response: "Under 20 minutes for most of Manhattan",
  },
  brooklyn: {
    name: "brooklyn",
    displayName: "Brooklyn",
    metaTitle: "Brooklyn Locksmith | Female Locksmith Brooklyn NYC | 24/7",
    metaDescription:
      "Female locksmith serving Brooklyn 24/7. Emergency lockouts, rekeying, smart locks. Typically 25-35 minutes to your door across Brooklyn neighborhoods.",
    intro:
      "Brooklyn is one of her busiest boroughs — and for good reason. From late-night lockouts in Williamsburg to Saturday rekeys in Park Slope, Brooklyn women know they can call a female locksmith who actually shows up fast and doesn't overcharge.",
    neighborhoods: [
      "Williamsburg",
      "Park Slope",
      "DUMBO",
      "Brooklyn Heights",
      "Prospect Heights",
      "Flatbush",
      "Bay Ridge",
      "Bushwick",
      "Bedford-Stuyvesant",
      "Crown Heights",
      "Cobble Hill",
      "Carroll Gardens",
      "Greenpoint",
      "Sunset Park",
      "Boerum Hill",
    ],
    response: "Typically 25-35 minutes across Brooklyn",
  },
  queens: {
    name: "queens",
    displayName: "Queens",
    metaTitle: "Queens Locksmith | Female Locksmith Queens NYC | 24/7",
    metaDescription:
      "Female locksmith serving Queens 24/7. Emergency lockouts, lock rekeying, smart locks. Fast response to Astoria, Jackson Heights, Flushing, and more.",
    intro:
      "Queens coverage is strong — especially in western Queens and along the subway corridors. From Astoria to Forest Hills, she serves Queens women who want a locksmith they can actually trust at their door, day or night.",
    neighborhoods: [
      "Astoria",
      "Long Island City",
      "Jackson Heights",
      "Flushing",
      "Forest Hills",
      "Sunnyside",
      "Woodside",
      "Ridgewood",
      "Bayside",
      "Rego Park",
      "Elmhurst",
      "Jamaica",
    ],
    response: "Typically 25-35 minutes to western Queens",
  },
  bronx: {
    name: "bronx",
    displayName: "The Bronx",
    metaTitle: "Bronx Locksmith | Female Locksmith Bronx NYC | 24/7",
    metaDescription:
      "Female locksmith serving the Bronx 24/7. Emergency lockouts, lock rekeying, smart locks. Fast response from the Upper East Side to all Bronx neighborhoods.",
    intro:
      "From the Upper East Side, the Bronx is a quick trip — especially the southern neighborhoods. She serves Bronx residents who want reliable, trustworthy locksmith service without the anxiety of calling a stranger, no matter the time of night.",
    neighborhoods: [
      "South Bronx",
      "Riverdale",
      "Fordham",
      "Kingsbridge",
      "Mott Haven",
      "Pelham Bay",
      "Throgs Neck",
      "Morris Park",
      "Hunts Point",
      "Concourse",
    ],
    response: "Typically 20-35 minutes from the Upper East Side",
  },
};

export function generateStaticParams() {
  return Object.keys(boroughData).map((borough) => ({ borough }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ borough: string }>;
}): Promise<Metadata> {
  // For static export, we need to handle this synchronously via generateStaticParams
  // But the API requires async, so we use a workaround
  return params.then(({ borough }) => {
    const data = boroughData[borough];
    if (!data) {
      return { title: "Area Not Found" };
    }
    return {
      title: data.metaTitle,
      description: data.metaDescription,
    };
  });
}

export default async function BoroughPage({
  params,
}: {
  params: Promise<{ borough: string }>;
}) {
  const { borough } = await params;
  const data = boroughData[borough];

  if (!data) {
    return (
      <div className="py-20 text-center">
        <h1 className="font-heading text-3xl font-bold text-navy">Area Not Found</h1>
        <Link href="/areas" className="mt-4 inline-block text-gold hover:underline">
          View all service areas →
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
            {data.displayName} Locksmith
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Female locksmith serving {data.displayName} — 24/7, all neighborhoods.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16">
        {/* Intro */}
        <p className="text-lg leading-relaxed text-nearblack/80">{data.intro}</p>

        {/* Response time */}
        <div className="mt-8 rounded-xl bg-gold/10 border-2 border-gold/20 p-6">
          <p className="font-bold text-navy">
            Response time: <span className="text-gold">{data.response}</span>
          </p>
        </div>

        {/* Neighborhoods */}
        <h2 className="mt-12 font-heading text-2xl font-bold text-navy">
          Neighborhoods in {data.displayName}
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {data.neighborhoods.map((n) => (
            <span
              key={n}
              className="rounded-full bg-offwhite px-4 py-2 text-sm font-medium text-navy"
            >
              {n}
            </span>
          ))}
        </div>

        {/* Services available */}
        <h2 className="mt-12 font-heading text-2xl font-bold text-navy">
          Services Available in {data.displayName}
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            "Emergency Lockout Response",
            "Lock Rekeying",
            "Lock Changes & Upgrades",
            "Smart Lock Installation",
            "Commercial Security",
            "Master Key Systems",
          ].map((service) => (
            <li key={service} className="flex items-center gap-2">
              <svg className="h-5 w-5 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-nearblack/80">{service}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-12 rounded-xl bg-navy p-8 text-center text-white">
          <h2 className="font-heading text-2xl font-bold">
            Need a locksmith in {data.displayName}?
          </h2>
          <p className="mt-2 text-white/70">
            Female-owned. Licensed &amp; insured. Available right now.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-navy"
            >
              Call {PHONE}
            </a>
            <a
              href={SMS_HREF}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 font-bold text-white hover:bg-white/10"
            >
              Text Instead
            </a>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Link href="/areas" className="text-sm font-medium text-gold hover:underline">
            ← View all service areas
          </Link>
        </div>
      </div>
    </>
  );
}
