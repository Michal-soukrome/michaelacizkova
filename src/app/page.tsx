import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import FAQ from "@/components/FAQ";
import HomeServices from "@/components/HomeServices";
import HomeAbout from "@/components/HomeAbout";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <HomeServices />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="about">
        <HomeAbout />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
