import { getPosts } from "@/lib/sanity/posts";
import BlogList from "@/components/BlogList";

export default async function BlogPage() {
  const posts = await getPosts();
  return <BlogList posts={posts} />;
}
