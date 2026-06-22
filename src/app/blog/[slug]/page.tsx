import { getPost } from "@/lib/sanity/posts";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ← TADY JE TEN FIX

  const post = await getPost(slug);

  if (!post) {
    return <div>Článek nenalezen.</div>;
  }

  return (
    <div className="container mx-auto py-20">
      <h3 className="text-5xl font-bold mb-6">{post.title}</h3>

      {post.coverImage && (
        <Image
          src={post.coverImage.asset.url}
          alt={post.title}
          width={1200}
          height={700}
          className="rounded-lg mb-10"
        />
      )}

      <PortableText value={post.content} />
    </div>
  );
}
