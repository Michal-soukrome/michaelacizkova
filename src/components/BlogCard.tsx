"use client";

import { Post } from "@/lib/sanity/postTypes";
import Image from "next/image";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <div className="group rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Obrázek */}
      {post.coverImage && (
        <div className="overflow-hidden">
          <Image
            src={post.coverImage.asset.url}
            alt={post.title}
            width={800}
            height={500}
            className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}

      {/* Text */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground leading-snug group-hover:text-brown transition-colors">
          {post.title}
        </h3>

        <p className="text-text-light mt-3 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        <span className="inline-block mt-5 text-brown font-medium underline">
          Přečíst
        </span>
      </div>
    </div>
  );
}
