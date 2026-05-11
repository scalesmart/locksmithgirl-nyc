"use client";

import { useState } from "react";
import Link from "next/link";

const PHONE_HREF = "tel:+16468600520";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-heading text-xl font-bold tracking-tight md:text-2xl">
          Locksmith Girl<span className="text-gold"> of NYC</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
          <Link href="/about" className="hover:text-gold transition-colors">About</Link>
          <Link href="/areas" className="hover:text-gold transition-colors">Areas Served</Link>
          <Link href="/faq" className="hover:text-gold transition-colors">FAQ</Link>
          <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
          {/* // TODO: Track call CTA click in GA4 */}
          <a
            href={PHONE_HREF}
            className="rounded-full bg-gold px-5 py-2.5 font-bold text-navy transition-colors hover:bg-gold-hover"
          >
            Call Now
          </a>
        </nav>

        {/* Mobile: call button + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={PHONE_HREF}
            className="rounded-full bg-gold px-4 py-2 text-sm font-bold text-navy"
          >
            Call Now
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1 text-white"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="border-t border-white/10 bg-navy px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-3 pt-3 text-sm font-medium">
            <Link href="/services" onClick={() => setMenuOpen(false)} className="py-2 hover:text-gold">Services</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="py-2 hover:text-gold">About</Link>
            <Link href="/areas" onClick={() => setMenuOpen(false)} className="py-2 hover:text-gold">Areas Served</Link>
            <Link href="/faq" onClick={() => setMenuOpen(false)} className="py-2 hover:text-gold">FAQ</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="py-2 hover:text-gold">Contact</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
