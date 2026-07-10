"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/sanity/postTypes";
import BlogCard from "./BlogCard";

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <section className="container mx-auto py-24 px-4">
      {/* Nadpis */}
      <div className="mb-16 text-center">
        <p className="text-sm tracking-[0.3em] text-brown uppercase mb-3">
          Novinky & příběhy
        </p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
          Blog fotografky z Českého ráje
        </h1>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground mt-6">
          Nejnovější články
        </h2>
        <div className="w-20 h-px bg-brown mx-auto mt-6" />
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map((post, i) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Link href={`/blog/${post.slug.current}`}>
              <BlogCard post={post} />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
