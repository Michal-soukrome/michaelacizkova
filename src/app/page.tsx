import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
