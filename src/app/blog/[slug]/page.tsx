import type { Metadata } from "next";
import { getPost } from "@/lib/sanity/posts";
import BlogDetail from "@/components/BlogDetail";
import { generateBlogPostSchema } from "@/seo/schemas/blogPost";
import Script from "next/script";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  return {
    title: post?.title
      ? `${post.title} | Blog - tipy na focení v Českém ráji`
      : "Blog - tipy na focení v Českém ráji",
    description:
      post?.excerpt ??
      "Blog o focení a focení v Českém ráji od Michaely Čížkové.",
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  const schema = generateBlogPostSchema(post, slug);
  const serializedSchema = JSON.stringify(schema).replace(
    /[<>&\u2028\u2029]/g,
    (character) =>
      ({
        "<": "\\u003c",
        ">": "\\u003e",
        "&": "\\u0026",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029",
      })[character] ?? character,
  );

  return (
    <>
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializedSchema,
        }}
      />

      <BlogDetail post={post} />
    </>
  );
}
