import { getPosts } from "@/lib/sanity/posts";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/sanity/postTypes";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-5xl font-bold mb-10">Blog</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {posts.map((post: Post) => (
          <Link key={post._id} href={`/blog/${post.slug.current}`}>
            <div className="group cursor-pointer">
              {post.coverImage && (
                <Image
                  src={post.coverImage.asset.url}
                  alt={post.title}
                  width={800}
                  height={500}
                  className="rounded-lg mb-4 group-hover:opacity-90 transition"
                />
              )}
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
