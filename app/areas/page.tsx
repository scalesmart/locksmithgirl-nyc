import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Areas Served",
  description:
    "Locksmith Girl of NYC serves Manhattan, Brooklyn, Queens, and the Bronx. Female locksmith within 35 minutes of your location, 24/7.",
};

const SMS_HREF = "sms:+16468600520&body=Hi, I need a locksmith in my area";
const PHONE_HREF = "tel:+16468600520";

const boroughs = [
  {
    name: "Manhattan",
    slug: "manhattan",
    neighborhoods: "Upper East Side (home base), Midtown, Lower East Side, Upper West Side, Harlem, East Village, West Village, SoHo, Tribeca, Financial District",
    description: "Home base is the Upper East Side — she can reach most of Manhattan in under 20 minutes.",
  },
  {
    name: "Brooklyn",
    slug: "brooklyn",
    neighborhoods: "Park Slope, Williamsburg, DUMBO, Flatbush, Bay Ridge, Bushwick, Bedford-Stuyvesant, Crown Heights, Brooklyn Heights, Prospect Heights",
    description: "Brooklyn is one of her busiest boroughs. From Williamsburg to Bay Ridge, she's got you covered.",
  },
  {
    name: "Queens",
    slug: "queens",
    neighborhoods: "Astoria, Jackson Heights, Flushing, Forest Hills, Long Island City, Sunnyside, Woodside, Ridgewood, Bayside",
    description: "Queens coverage is strong, especially in western Queens and along the subway corridors.",
  },
  {
    name: "The Bronx",
    slug: "bronx",
    neighborhoods: "South Bronx, Riverdale, Fordham, Kingsbridge, Mott Haven, Pelham Bay, Throgs Neck",
    description: "From Riverdale to the South Bronx, she covers the Bronx quickly from the Upper East Side.",
  },
];

export default function AreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
            Areas Served
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Serving all of NYC — within 35 minutes of you.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-16">
        <p className="text-center text-nearblack/70 leading-relaxed">
          Locksmith Girl of NYC is based on the Upper East Side and serves Manhattan, Brooklyn, Queens, and the Bronx. Whether you&apos;re locked out in Astoria at midnight or need a rekey in Park Slope on a Saturday, she&apos;ll be there — typically within 35 minutes.
        </p>

        <div className="mt-12 space-y-8">
          {boroughs.map((borough) => (
            <Link
              key={borough.slug}
              href={`/areas/${borough.slug}`}
              className="block rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h2 className="font-heading text-2xl font-bold text-navy">{borough.name}</h2>
              <p className="mt-2 text-nearblack/80">{borough.description}</p>
              <p className="mt-2 text-sm text-nearblack/60">
                <strong>Neighborhoods:</strong> {borough.neighborhoods}
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-gold">
                View {borough.name} details →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-nearblack/60">
            Not sure if you&apos;re in range? Text your neighborhood — she&apos;ll tell you straight.
          </p>
          <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={SMS_HREF}
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-6 py-3 font-bold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Check Your Area — Text Now
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-navy transition-colors hover:bg-gold-hover"
            >
              Or Call Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
