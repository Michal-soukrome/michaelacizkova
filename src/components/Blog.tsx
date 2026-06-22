"use client";

import { getPosts } from "@/lib/sanity/posts";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/sanity/postTypes";
import { motion } from "framer-motion";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <section className="container mx-auto py-24 px-4">
      {/* Nadpis */}
      <div className="mb-16 text-center">
        <p className="text-sm tracking-[0.3em] text-brown uppercase mb-3">
          Novinky & příběhy
        </p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
          Blog
        </h1>
        <div className="w-20 h-px bg-brown mx-auto mt-6" />
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map((post: Post, i: number) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Link href={`/blog/${post.slug.current}`}>
              <div className="group cursor-pointer rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-all duration-300">
                {/* Obrázek */}
                {post.coverImage && (
                  <div className="overflow-hidden">
                    <Image
                      src={post.coverImage.asset.url}
                      alt={post.title}
                      width={800}
                      height={500}
                      className="rounded-t-xl object-cover h-56 w-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Text */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-brown transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-text-light mt-3 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <span className="inline-block mt-5 text-brown font-medium group-hover:underline">
                    Číst více →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
