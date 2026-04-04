import Link from "next/link";

// TODO: Replace with real phone number
const PHONE = "(212) 555-0000";
const PHONE_HREF = "tel:+12125550000";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold">
              Locksmith Girl<span className="text-gold"> of NYC</span>
            </h3>
            <p className="mt-2 text-sm text-white/70">
              The locksmith women actually want.
            </p>
            <a href={PHONE_HREF} className="mt-3 inline-block text-lg font-bold text-gold">
              {PHONE}
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-3 font-bold uppercase tracking-wide text-gold text-sm">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/services#emergency-lockout" className="hover:text-gold">Emergency Lockout</Link></li>
              <li><Link href="/services#lock-rekeying" className="hover:text-gold">Lock Rekeying</Link></li>
              <li><Link href="/services#lock-changes" className="hover:text-gold">Lock Changes</Link></li>
              <li><Link href="/services#smart-locks" className="hover:text-gold">Smart Locks</Link></li>
              <li><Link href="/services#commercial" className="hover:text-gold">Commercial Security</Link></li>
              <li><Link href="/services#master-key" className="hover:text-gold">Master Key Systems</Link></li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="mb-3 font-bold uppercase tracking-wide text-gold text-sm">Service Areas</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/areas/manhattan" className="hover:text-gold">Manhattan</Link></li>
              <li><Link href="/areas/brooklyn" className="hover:text-gold">Brooklyn</Link></li>
              <li><Link href="/areas/queens" className="hover:text-gold">Queens</Link></li>
              <li><Link href="/areas/bronx" className="hover:text-gold">The Bronx</Link></li>
              <li><Link href="/areas/staten-island" className="hover:text-gold">Staten Island</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="mb-3 font-bold uppercase tracking-wide text-gold text-sm">Info</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Available 24/7 — nights, weekends, holidays</li>
              <li>Licensed &amp; Insured in New York State</li>
              <li>Based on the Upper East Side</li>
              <li className="pt-2">
                {/* TODO: Replace with real TikTok link */}
                <a
                  href="https://www.tiktok.com/@locksmithgirl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gold hover:underline"
                >
                  Follow on TikTok →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} Locksmith Girl of NYC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
