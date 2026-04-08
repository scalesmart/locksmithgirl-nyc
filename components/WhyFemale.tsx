const PHONE_HREF = "tel:+16468600520";

export default function WhyFemale() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Text */}
          <div className="border-l-4 border-gold pl-6 md:pl-8">
            <h2 className="font-heading text-3xl font-bold text-navy md:text-4xl">
              At 2am, who shows up matters.
            </h2>

            <div className="mt-6 space-y-4 text-nearblack/80 leading-relaxed">
              <p>
                When you&apos;re standing outside your apartment at midnight, you&apos;re already stressed. The last thing you should have to worry about is who&apos;s on the other side of that door.
              </p>
              <p>
                Most women don&apos;t realize they can specifically search for a female locksmith — and when they find out, they never go back. With Locksmith Girl of NYC, the woman you call is the woman who shows up. Always.
              </p>
              <p>
                That&apos;s not a gimmick. It&apos;s why thousands of women in NYC have her number saved in their phone.
              </p>
            </div>

            {/* // TODO: Track call CTA click in GA4 */}
            <a
              href={PHONE_HREF}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-navy transition-colors hover:bg-gold-hover"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now — She&apos;s Available 24/7
            </a>
          </div>

          {/* Image placeholder */}
          <div className="flex items-center justify-center">
            <div className="aspect-[4/5] w-full max-w-sm rounded-2xl bg-gradient-to-br from-navy via-navy-light to-navy p-8 text-center text-white/60 flex flex-col items-center justify-center">
              <svg className="h-16 w-16 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
              <p className="mt-4 text-sm">Photo placeholder — authentic owner photo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
