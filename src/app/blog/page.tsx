import { getPosts } from "@/lib/sanity/posts";
import BlogList from "@/components/BlogList";
import { blogPageMetadata } from "@/lib/pageMetadata";

export const metadata = blogPageMetadata;

export default async function BlogPage() {
  const posts = await getPosts();
  return <BlogList posts={posts} />;
}
