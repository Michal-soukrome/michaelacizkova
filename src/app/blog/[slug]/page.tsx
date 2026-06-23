import { getPost } from "@/lib/sanity/posts";
import BlogDetail from "@/components/BlogDetail";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  return <BlogDetail post={post} />;
}