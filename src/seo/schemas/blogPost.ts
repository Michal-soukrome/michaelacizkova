import { urlFor } from "@/lib/sanity/image";

export function generateBlogPostSchema(post: any, slug: string) {
  const url = `https://michaelacizkova.cz/blog/${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt,
    url,
    image: post.image ? urlFor(post.image).width(1200).url() : undefined,
    author: {
      "@type": "Person",
      "@id": "https://michaelacizkova.cz/#person",
      name: "Michaela Čížková",
    },
    publisher: {
      "@type": "LocalBusiness",
      "@id": "https://michaelacizkova.cz/#business",
      name: "Michaela Čížková – fotografka",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}
