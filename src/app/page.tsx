import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import HomeServices from "@/components/HomeServices";
import HomeAbout from "@/components/HomeAbout";
import HomeGallery from "@/components/HomeGallery";
import { getPosts } from "@/lib/sanity/posts";
import { getHomepagePhotos } from "@/lib/sanity/photos";
import HomeContact from "@/components/HomeContact";
import { homepageSchema } from "@/seo";
import Script from "next/script";

export const metadata = {
  title: "Rodinná a svatební fotografka Český ráj",
  description:
    "Michaela Čížková | Rodinná a svatební fotografka z Českého ráje. Fotím rodiny, svatby, novorozence a těhotné v okolí Jičína, Turnova a Mladé Boleslavi.",
};

export default async function Home() {
  const posts = await getPosts();
  const photos = await getHomepagePhotos();

  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <HomeServices />
      </section>
      <section id="gallery">
        <HomeGallery photos={photos} />
      </section>
      <section id="about">
        <HomeAbout />
      </section>
      {/* 
      <section id="blog">
        <HomeBlog posts={posts} />
      </section>
      */}
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
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
