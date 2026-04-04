# Locksmith Girl of NYC

Mobile-first, conversion-optimized website for NYC's female-owned locksmith business. Built with Next.js, TypeScript, and Tailwind CSS as a static export for Vercel deployment.

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Playfair Display (headings) + Inter (body)
- **Deploy:** Vercel (free tier)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build

# The static site will be in the `out/` directory
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## Pages

| Page | Path | Purpose |
|------|------|---------|
| Home | `/` | Full conversion page with all sections |
| Services | `/services` | All 6 service offerings |
| About | `/about` | Owner story, credentials, TikTok community |
| Areas Served | `/areas` | Borough overview |
| Manhattan | `/areas/manhattan` | Manhattan landing page |
| Brooklyn | `/areas/brooklyn` | Brooklyn landing page |
| Queens | `/areas/queens` | Queens landing page |
| The Bronx | `/areas/bronx` | Bronx landing page |
| Staten Island | `/areas/staten-island` | Staten Island landing page |
| Contact | `/contact` | Phone, text, and contact form |
| FAQ | `/faq` | 6 frequently asked questions |

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel will auto-detect Next.js — no config changes needed
4. Deploy

The site is configured for static export (`output: 'export'` in `next.config.ts`), so it works on any static hosting.

## TODOs Before Launch

- [ ] **Phone number** — Replace `(212) 555-0000` placeholder with real phone number (search for `555-0000` across all files)
- [ ] **Google Analytics** — Add GA4 tracking ID in `app/layout.tsx`
- [ ] **Contact form backend** — Connect form to email service (e.g., Formspree, Resend, or custom API)
- [ ] **Chat widget** — Replace placeholder with ScaleSmart chat widget script in `app/layout.tsx`
- [ ] **Photos** — Replace CSS gradient placeholders with real owner photos
- [ ] **Google Map** — Embed Google Map on contact page
- [ ] **TikTok link** — Verify @locksmithgirl TikTok URL is correct
- [ ] **Google Business Profile** — Ensure NAP consistency with site
- [ ] **Domain** — Point locksmithgirl.com DNS to Vercel

## Project Structure

```
app/
  layout.tsx          # Root layout (header, footer, sticky bar, chat widget)
  page.tsx            # Homepage (10 sections + JSON-LD schema)
  sitemap.ts          # Auto-generated sitemap.xml
  services/page.tsx   # Services page
  about/page.tsx      # About page
  areas/
    page.tsx          # Areas overview
    [borough]/page.tsx # Dynamic borough landing pages
  contact/page.tsx    # Contact page with form
  faq/page.tsx        # FAQ page
components/
  Header.tsx          # Sticky header with nav + call button
  Footer.tsx          # Site footer
  Hero.tsx            # Hero section
  TrustBar.tsx        # 4-badge trust bar
  HowItWorks.tsx      # 3-step process
  ServicesGrid.tsx     # 6 service cards
  WhyFemale.tsx       # Key differentiator section
  ServiceAreas.tsx    # Borough grid
  SocialProof.tsx     # Testimonials + TikTok block
  AboutPreview.tsx    # About teaser
  FAQ.tsx             # Accordion FAQ (reusable)
  FinalCTA.tsx        # Emergency CTA section
  StickyCallBar.tsx   # Mobile sticky call bar
  ChatWidget.tsx      # Chat widget placeholder
```
