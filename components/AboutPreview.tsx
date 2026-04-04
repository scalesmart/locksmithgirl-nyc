import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-offwhite py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
          Why I became NYC&apos;s female locksmith.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-nearblack/70">
          I became a locksmith because I kept hearing the same story from women: they were locked out late at night, called the first number they found, and ended up with a strange man at their door they didn&apos;t trust. I knew there had to be a better option. So I became it.
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
