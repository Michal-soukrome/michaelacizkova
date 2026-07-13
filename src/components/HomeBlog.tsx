"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/sanity/postTypes";
import BlogCard from "./BlogCard";
import Section from "./Section";

export default function HomeBlog({ posts }: { posts: Post[] }) {
  const latest = posts.slice(0, 3); // ← zobrazí jen 3 články

  return (
    <Section id="blog">
      <hr className="border-brown/30" />
      <div className="container mx-auto px-4 -mt-3">
        <div className="mb-16 text-center">
          <p className="text-sm tracking-[0.3em] text-brown uppercase mb-3 bg-background w-fit mx-auto px-4">
            Novinky & příběhy
          </p>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Blog
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {latest.map((post, i) => (
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

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/blog" className="btn-base btn-primary mx-auto w-fit">
            Všechny články
          </Link>
        </div>
      </div>
    </Section>
  );
}
