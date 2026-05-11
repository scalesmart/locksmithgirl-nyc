import Link from "next/link";

const SMS_HREF = "sms:+18559147068&body=Hi, I need a locksmith in my area";

const boroughs = [
  {
    name: "Manhattan",
    slug: "manhattan",
    tagline: "Upper East Side (home base), Midtown, Lower East Side, Harlem, and more",
  },
  {
    name: "Brooklyn",
    slug: "brooklyn",
    tagline: "Park Slope, Williamsburg, DUMBO, Flatbush, Bay Ridge, and more",
  },
  {
    name: "Queens",
    slug: "queens",
    tagline: "Astoria, Jackson Heights, Flushing, Forest Hills, and more",
  },
  {
    name: "The Bronx",
    slug: "bronx",
    tagline: "South Bronx, Riverdale, Fordham, and more",
  },
];

export default function ServiceAreas() {
  return (
    <section className="bg-offwhite py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center font-heading text-3xl font-bold text-navy md:text-4xl">
          Serving all of NYC — within 35 minutes of you.
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {boroughs.map((borough) => (
            <Link
              key={borough.slug}
              href={`/areas/${borough.slug}`}
              className="group rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-navy group-hover:text-gold transition-colors">
                {borough.name}
              </h3>
              <p className="mt-1 text-sm text-nearblack/60">{borough.tagline}</p>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-nearblack/60">
          Not sure if you&apos;re in range? Text your neighborhood — she&apos;ll tell you straight.
        </p>
        <div className="mt-4 text-center">
          <a
            href={SMS_HREF}
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-6 py-3 font-bold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            Check Your Area — Text Now
          </a>
        </div>
      </div>
    </section>
  );
}
