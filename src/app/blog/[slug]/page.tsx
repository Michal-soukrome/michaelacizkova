import type { Metadata } from "next";
import { getPost } from "@/lib/sanity/posts";
import BlogDetail from "@/components/BlogDetail";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    title: post?.title
      ? `${post.title} | Blog � tipy na focen� v �esk�m r�ji`
      : "Blog � tipy na focen� v �esk�m r�ji",
    description:
      post?.excerpt ??
      "Blog o focen� a focen� v �esk�m r�ji od Michaely ��kov�.",
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  return <BlogDetail post={post} />;
}
