"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Container from "./Container";
import SectionHero from "./SectionHero";

export default function Contact() {
  return (
    <section className="py-12 bg-background overflow-hidden" id="contact">
      <Container>
        <SectionHero
          eyebrow="Napište mi"
          title="Rezervujte si termín focení v Českém ráji"
          description="Chcete nafotit chvíle, na které nezapomenete? Ozvěte se – ráda se s vámi potkám."
        />
        <motion.div
          initial={{ opacity: 0, rotate: -12 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          animate={{ y: [0, -10, 0], opacity: 1 }}
          className="absolute top-1/2 left-0 w-52 h-52 border border-brown/30 rounded-full -translate-y-1/2 -translate-x-1/2"
        />
      </Container>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              opacity: { duration: 0.8, ease: "easeOut" },
              x: { duration: 0.8, ease: "easeOut" },
              y: {
                delay: 1.2,
                duration: 6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
            }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="relative">
              <div className="absolute inset-0 border-2 border-brown/20 translate-x-2 translate-y-2 rounded-xl" />
              <div className="relative bg-cream/30 border-2 border-brown/40 p-8 md:p-10 rounded-xl">
                <h2 className="text-2xl font-bold mb-8 text-foreground">
                  Kontaktní údaje
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-brown/20 p-3 rounded-full">
                      <Mail className="w-5 h-5 text-brown" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-foreground">
                        Email
                      </h4>
                      <a
                        href="mailto:foto.michaelacizkova@seznam.cz"
                        className="text-text-light hover:text-text-dark underline break-all"
                      >
                        foto.michaelacizkova@seznam.cz
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brown/20 p-3 rounded-full">
                      <Phone className="w-5 h-5 text-brown" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-foreground">
                        Telefon
                      </h4>
                      <a
                        href="tel:+420604410116"
                        className="text-text-light hover:text-text-dark underline"
                      >
                        +420 604 410 116
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brown/20 p-3 rounded-full">
                      <MapPin className="w-5 h-5 text-brown" />
                    </div>
                    <div>
                      <h2 className="font-semibold mb-1 text-foreground text-xl">
                        Kde fotím?
                      </h2>
                      <p className="text-text-light">
                        Nejčastěji fotím v Českém ráji, v okolí Sobotky, Jičína,
                        Turnova a Mladé Boleslavi. Ráda za vámi přijedu i do
                        dalších oblastí.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 lg:mt-12"
          >
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
