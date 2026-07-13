"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Container from "./Container";
import {
  PortableText,
  PortableTextTypeComponentProps,
  PortableTextMarkComponentProps,
} from "@portabletext/react";
import { urlFor } from "@/lib/sanity/image";
import {
  MiniGalleryBlock,
  Post,
  SanityImageBlock,
} from "@/lib/sanity/postTypes";
import Link from "next/link";
import Lightbox from "@/components/Lightbox";
import SectionHero from "./SectionHero";

type LinkMark = {
  _type: "link";
  href?: string;
  blank?: boolean;
};

export default function BlogDetail({ post }: { post: Post | null }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Extract all images from PortableText content
  const images = useMemo(() => {
    if (!post?.content) return [];

    const imgs: any[] = [];

    const walk = (blocks: any[]) => {
      blocks.forEach((block) => {
        if (block._type === "image") {
          const src = urlFor(block).width(2000).url();
          imgs.push({
            src,
            alt: block.alt || "Obrázek",
            width: 2000,
            height: 1200,
            title: block.alt || "Obrázek",
            category: "blog",
          });
        }

        if (block._type === "miniGallery") {
          block.images.forEach((img: any) => {
            const src = urlFor(img).width(2000).url();
            imgs.push({
              src,
              alt: img.alt || "Galerie obrázek",
              width: 2000,
              height: 1200,
              title: img.alt || "Galerie obrázek",
              category: "blog",
            });
          });
        }

        if (block.children) walk(block.children);
      });
    };

    walk(post.content);
    return imgs;
  }, [post]);

  const components = {
    types: {
      image: ({ value }: PortableTextTypeComponentProps<SanityImageBlock>) => {
        const imgUrl = urlFor(value).width(2000).url();
        const index = images.findIndex((img) => img.src === imgUrl);

        return (
          <div
            className="my-10 rounded-xl overflow-hidden cursor-pointer group"
            onClick={() => index !== -1 && setSelectedIndex(index)}
          >
            <Image
              src={imgUrl}
              alt={value.alt || "Obrázek"}
              width={1600}
              height={900}
              className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-[1.02]"
            />
          </div>
        );
      },

      miniGallery: ({
        value,
      }: PortableTextTypeComponentProps<MiniGalleryBlock>) => {
        const galleryUrls = value.images.map((img) =>
          urlFor(img).width(2000).url(),
        );

        // najdeme globální index prvního obrázku galerie
        const startIndex = images.findIndex(
          (img) => img.src === galleryUrls[0],
        );

        return (
          <div className="my-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryUrls.map((src, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden cursor-pointer group"
                onClick={() =>
                  startIndex !== -1 && setSelectedIndex(startIndex + i)
                }
              >
                <Image
                  src={src}
                  alt="Galerie obrázek"
                  width={1600}
                  height={1000}
                  className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        );
      },
    },
    marks: {
      link: ({ children, value }: PortableTextMarkComponentProps<LinkMark>) => {
        if (!value?.href) return <>{children}</>;

        return (
          <a
            href={value.href}
            target={value.blank ? "_blank" : undefined}
            rel={value.blank ? "noreferrer" : undefined}
            className="underline decoration-brown/60 hover:text-brown transition-colors"
          >
            {children}
          </a>
        );
      },
    },
  };

  if (!post) {
    return (
      <div className="py-32 text-center text-gray-500">Článek nenalezen.</div>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHero
          title={post.title}
          description={post.excerpt ?? undefined}
        />

        {/* Cover image */}
        {post.coverImage && (
          <div className="rounded-xl overflow-hidden shadow-lg mb-12">
            <Image
              src={urlFor(post.coverImage).width(1600).height(900).url()}
              alt={post.title}
              width={1600}
              height={900}
              className="w-full h-auto object-cover transition-all duration-700 hover:scale-[1.02]"
            />
          </div>
        )}

        {/* Content */}
        <article className="prose prose-lg prose-invert max-w-none text-text-light leading-relaxed">
          <PortableText value={post.content} components={components} />
        </article>

        {/* Lightbox */}
        <Lightbox
          photos={images}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNext={() =>
            setSelectedIndex((prev) =>
              prev === null ? null : (prev + 1) % images.length,
            )
          }
          onPrev={() =>
            setSelectedIndex((prev) =>
              prev === null ? null : prev === 0 ? images.length - 1 : prev - 1,
            )
          }
        />

        <div className="mt-16 space-y-6 text-center">
          <div className="max-w-2xl mx-auto text-lg leading-relaxed text-text-light">
            Líbí se vám focení v Českém ráji? Napište mi a domluvme termín.
          </div>
          <Link href="/kontakt" className="btn-base btn-primary mx-auto w-fit">
            Napište mi
          </Link>
          <div>
            <Link href="/blog" className="btn-base btn-secondary mx-auto w-fit">
              ← Zpět na blog
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
