import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import ChatWidget from "@/components/ChatWidget";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Locksmith Girl NYC | Female Locksmith Available 24/7 | All 5 Boroughs",
    template: "%s | Locksmith Girl of NYC",
  },
  description:
    "NYC's female-owned, female-operated locksmith. Locked out? She's 35 minutes away, 24/7, all five boroughs. Call now — a woman will answer and a woman will show up.",
  keywords: [
    "female locksmith NYC",
    "woman locksmith NYC",
    "24/7 locksmith NYC",
    "emergency locksmith NYC",
    "locksmith near me NYC",
    "locksmith for women NYC",
    "female locksmith New York City",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* TODO: Add GA4 tracking ID */}
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCallBar />
        {/* TODO: Add ScaleSmart chat widget script here */}
        <ChatWidget />
      </body>
    </html>
  );
}
