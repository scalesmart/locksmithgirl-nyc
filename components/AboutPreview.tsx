import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-offwhite py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
          Why I became NYC&apos;s female locksmith.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-nearblack/70">
          I&apos;m the owner of Locksmith Girl NYC, providing 24/7 emergency locksmith services across New York City. I specialize in residential and commercial lockouts, lock repair, lock replacement, and smart lock installation.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-nearblack/70">
          With over 4 years of hands-on experience, I&apos;ve helped hundreds of NYC residents and businesses get back inside safely and upgrade their security. I focus on fast response times, reliable work, and straightforward service—especially in stressful situations like late-night lockouts.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-nearblack/70">
          As a women-owned business, my goal is to provide a service people feel comfortable calling, knowing the job will be handled professionally and efficiently.
        </p>
        <Link
          href="/about"
          className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-navy px-6 py-3 font-bold text-navy transition-colors hover:bg-navy hover:text-white"
        >
          {/* Use "The Locksmith Girl" as placeholder name */}
          Meet The Locksmith Girl →
        </Link>
      </div>
    </section>
  );
}
