import "./globals.css";
import "./ditto.css";
import "./motion.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  metadataBase: new URL(SITE_ORIGIN || "http://localhost:3000"),
  title: "QuarkMade | High-Craft Web Design & Digital Architecture",
  description:
    "QuarkMade is a boutique digital craft studio creating bespoke, high-performance web experiences and interactive flagships. Portfolio includes Chronotomi, Lumina Living, and QuieTide.",
  openGraph: {
    title: "QuarkMade | High-Craft Web Design & Digital Architecture",
    description:
      "QuarkMade designs bespoke, high-performance digital flagships where brand prestige, motion craftsmanship, and technical rigor unite.",
    type: "website",
    siteName: "QuarkMade",
    images: ["/assets/branding/hero-sunset.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuarkMade | High-Craft Web Design & Digital Architecture",
    description:
      "Bespoke web design and interactive digital flagships by QuarkMade.",
    site: "@quarkmade",
    images: ["/assets/branding/hero-sunset.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/assets/branding/quark-logo.png",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=chillax@500,600&f[]=satoshi@400,500,700&display=swap"
        />
      </head>
      <body className="min-h-screen block text-foreground [font-family:'Satoshi',_sans-serif] font-normal bg-background antialiased selection:bg-[#4442DB] selection:text-white">
        {children}
      </body>
    </html>
  );
}
