"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Are you actually a woman? Will a woman show up?",
    answer:
      "Yes — and yes. I'm female-owned and female-operated, which means I'm the one who answers your call and the one who shows up at your door. There's no \"team\" of random guys. You get me.",
  },
  {
    question: "How long will it take you to get here?",
    answer:
      "Typically 20–35 minutes anywhere in NYC, depending on traffic and where I'm coming from. I'll give you a realistic ETA when you call — not a number I make up to make you feel better.",
  },
  {
    question: "How much does a lockout cost?",
    answer:
      "It depends on the lock type, time of night, and what's needed to get you in — but I'll tell you the price before I touch anything. No surprises, no bait-and-switch. Most residential lockouts are straightforward and fairly priced.",
  },
  {
    question: "Do you work at 3am? On weekends? On holidays?",
    answer:
      "Yes. 24/7 means 24/7. I work nights, weekends, and holidays. New York doesn't sleep and neither do lock problems.",
  },
  {
    question: "Is it safe to let a locksmith in? How do I know you're legitimate?",
    answer:
      "Great instinct — always verify. I'm licensed in New York State and insured. When I arrive, I'll show ID. You can also look me up on TikTok (@locksmithgirl) before you call — I've been building this community openly for years. If something feels off about any locksmith (male or female), trust your gut.",
  },
  {
    question: "Do you service all of NYC or just Manhattan?",
    answer:
      "Manhattan, Brooklyn, Queens, and the Bronx — as long as it's within about 35 minutes of the Upper East Side. If you're unsure whether you're in my range, just text me your neighborhood and I'll tell you straight.",
  },
];

export default function FAQ({ showHeading = true }: { showHeading?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4">
        {showHeading && (
          <h2 className="text-center font-heading text-3xl font-bold text-navy md:text-4xl">
            Things women ask before they call.
          </h2>
        )}

        <div className={showHeading ? "mt-10" : ""}>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-nearblack/10">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="pr-4 font-semibold text-navy">{faq.question}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-gold transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="pb-5 text-nearblack/70 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
