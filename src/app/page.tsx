import Gallery from "../components/Gallery";
import About from "../components/About";
import FAQ from "@/components/FAQ";
import HomeBlog from "@/components/HomeBlog";

import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export const metadata = {
  title: "Rodinná a svatební fotografka Český ráj",
  description:
    "Michaela Čížková | Rodinná a svatební fotografka z Českého ráje. Fotím rodiny, svatby, novorozence a těhotné v okolí Jičína, Turnova a Mladé Boleslavi.",
};

import HomeServices from "@/components/HomeServices";
import HomeAbout from "@/components/HomeAbout";
import HomeGallery from "@/components/HomeGallery";

import { getPosts } from "@/lib/sanity/posts";
import { getHomepagePhotos } from "@/lib/sanity/photos";
import HomeContact from "@/components/HomeContact";

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
    </div>
  );
}
