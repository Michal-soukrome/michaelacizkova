import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import HomeServices from "@/components/HomeServices";
import HomeAbout from "@/components/HomeAbout";
import HomeGallery from "@/components/HomeGallery";
import { getPosts } from "@/lib/sanity/posts";
import { getHomepagePhotos } from "@/lib/sanity/photos";
import { getTestimonials } from "@/lib/sanity/testimonials";
import HomeContact from "@/components/HomeContact";
import { homepageSchema } from "@/seo";
import Script from "next/script";
import { homePageMetadata } from "@/lib/pageMetadata";

export const metadata = homePageMetadata;

export default async function Home() {
  const posts = await getPosts();
  const photos = await getHomepagePhotos();
  const testimonials = await getTestimonials();

  return (
    <div>
      <section id="homepage-home">
        <Hero />
      </section>
      <section id="homepage-services">
        <HomeServices />
      </section>
      <section id="homepage-gallery">
        <HomeGallery photos={photos} />
      </section>
      <section id="homepage-about">
        <HomeAbout />
      </section>
      {/* 
      <section id="homepage-blog">
        <HomeBlog posts={posts} />
      </section>
      */}
      <section id="homepage-testimonials">
        <Testimonials testimonials={testimonials} />
      </section>
      <section id="homepage-contact">
        <HomeContact />
      </section>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema),
        }}
      />
    </div>
  );
}
