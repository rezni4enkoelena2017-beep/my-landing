import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://my-landing-neon.vercel.app",
      lastModified: new Date("2026-03-26"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
