import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import ServicesGrid from "@/components/ServicesGrid";
import WhyFemale from "@/components/WhyFemale";
import ServiceAreas from "@/components/ServiceAreas";
import SocialProof from "@/components/SocialProof";
import AboutPreview from "@/components/AboutPreview";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Locksmith",
            name: "Locksmith Girl of NYC",
            description:
              "Female-owned, female-operated locksmith serving NYC 24/7. Emergency lockouts, rekeying, smart lock installation, and more.",
            url: "https://locksmithgirl.com",
            telephone: "+18559147068",
            openingHours: "Mo-Su 00:00-23:59",
            areaServed: [
              "Manhattan",
              "Brooklyn",
              "Queens",
              "Bronx",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "New York",
              addressRegion: "NY",
              postalCode: "10021",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 40.7736,
              longitude: -73.9566,
            },
            priceRange: "$$",
            sameAs: ["https://www.tiktok.com/@locksmithgirl", "https://www.instagram.com/locksmithgirl"],
          }),
        }}
      />

      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Trust Bar */}
      <TrustBar />

      {/* Section 3: How It Works */}
      <HowItWorks />

      {/* Section 4: Services Grid */}
      <ServicesGrid />

      {/* Section 5: Why a Female Locksmith */}
      <WhyFemale />

      {/* Section 6: Service Areas */}
      <ServiceAreas />

      {/* Section 7: Social Proof / TikTok */}
      <SocialProof />

      {/* Section 8: About Preview */}
      <AboutPreview />

      {/* Section 9: FAQ Accordion */}
      <FAQ />

      {/* Section 10: Final CTA */}
      <FinalCTA />
    </>
  );
}
