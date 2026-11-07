import type { MetadataRoute } from "next";
import { projectsData } from "@/data/projects";
import { experiencesData } from "@/data/experiences";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aurell-portfolio.vercel.app";

  const staticRoutes = [
    "",
    "/about",
    "/projects",
    "/experience",
    "/creative-works",
    "/creative-works/photography",
    "/creative-works/social-media",
    "/education",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projectsData.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  const experienceRoutes = experiencesData.map((e) => ({
    url: `${baseUrl}/experience/${e.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes, ...experienceRoutes];
}