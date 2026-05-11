const badges = [
  { label: "Licensed", detail: "Professional locksmith service" },
  { label: "24/7", detail: "Emergency response" },
  { label: "NYC", detail: "Manhattan, Brooklyn, Queens, Bronx" },
  { label: "Woman-Owned", detail: "A safer late-night call" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-gold/25 bg-nearblack py-5 text-white">
      <div className="mx-auto grid max-w-7xl divide-y divide-white/10 px-4 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {badges.map((badge) => (
          <div key={badge.label} className="py-4 sm:px-6">
            <p className="font-heading text-3xl font-bold text-gold">{badge.label}</p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-white/68">{badge.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
