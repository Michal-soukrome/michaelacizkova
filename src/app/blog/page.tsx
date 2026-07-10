import { getPosts } from "@/lib/sanity/posts";
import BlogList from "@/components/BlogList";

export const metadata = {
  title: "Blog – tipy na focení v Českém ráji",
  description:
    "Přečtěte si tipy na focení, doporučené lokality v Českém ráji, rady k přípravě na rodinné, těhotenské i svatební focení.",
};

export default async function BlogPage() {
  const posts = await getPosts();
  return <BlogList posts={posts} />;
}
