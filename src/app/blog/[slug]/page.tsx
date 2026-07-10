import type { Metadata } from "next";
import { getPost } from "@/lib/sanity/posts";
import BlogDetail from "@/components/BlogDetail";

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

  return <BlogDetail post={post} />;
}
