import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_ORIGIN + "/",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: SITE_ORIGIN + "/privacy/",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: SITE_ORIGIN + "/terms/",
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
