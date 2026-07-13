"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/sanity/postTypes";
import BlogCard from "./BlogCard";
import Container from "./Container";
import SectionHero from "./SectionHero";

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <section
      className="py-12 bg-background overflow-hidden"
      id="page-wrap-blog"
    >
      <Container>
        <SectionHero
          eyebrow="Novinky & příběhy"
          title="Fotoblog z Ráje"
          subtitle="Nejnovější články"
          description="Píšu o focení tak, jak ho žiju - přirozeně a bez zbytečných komplikací. Nahlédněte do zákulisí práce rodinné a svatební fotografky z Českého ráje a načerpejte inspiraci pro vaše vlastní příběhy."
        />

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
      </Container>
    </section>
  );
}
