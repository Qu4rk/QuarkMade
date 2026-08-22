import "./globals.css";
import "./ditto.css";
import "./motion.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Base31 | A New Community for Culture, Living, and Discovery",
  "description": "Explore Base31, a growing community in Prince Edward County shaped by culture, creativity, and connection. Discover events, stories, and new ways to live.",
  "openGraph": {
    "title": "Base31 | A New Community for Culture, Living, and Discovery",
    "description": "Explore Base31, a growing community in Prince Edward County shaped by culture, creativity, and connection. Discover events, stories, and new ways to live.",
    "type": "website",
    "siteName": "Base31",
    "images": [
      "/assets/cloned/images/og-image.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Base31 | A New Community for Culture, Living, and Discovery",
    "description": "Explore Base31, a growing community in Prince Edward County shaped by culture, creativity, and connection. Discover events, stories, and new ways to live.",
    "site": "@base31",
    "images": [
      "/assets/cloned/images/og-image.png"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/svg/a70531c00c8c.svg"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <body className="min-h-screen block text-foreground [font-family:ui-sans-serif,_system-ui,_sans-serif,_'Apple_Color_Emoji',_'Segoe_UI_Emoji',_'Segoe_UI_Symbol',_'Noto_Color_Emoji'] text-base font-normal not-italic leading-6 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background">
        {children}
      </body>
    </html>
  );
}
