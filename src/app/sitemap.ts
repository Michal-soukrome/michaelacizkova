import { MetadataRoute } from "next";
import { getPosts } from "@/lib/sanity/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://michaelacizkova.cz";

  // 1) Statické stránky
  const staticPages = [
    "",
    "/sluzby",
    "/blog",
    "/galerie",
    "/o-mne",
    "/kontakt",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  // 2) Blog články ze Sanity
  const posts = await getPosts();

  const blogPages =
    posts?.map((post) => ({
      url: `${baseUrl}/blog/${post.slug.current}`,
      lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    })) ?? [];

  return [...staticPages, ...blogPages];
}
