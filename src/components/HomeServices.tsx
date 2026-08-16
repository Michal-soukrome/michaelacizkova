"use client";

import { motion } from "framer-motion";
import OptimizedImage from "./OptimizedImage";
import Section from "./Section";
import Link from "next/link";
import Container from "./Container";
import { services } from "@/lib/services";

export default function HomeServices() {
  return (
    <Section id="services">
      <hr className="border-brown/30" />
      <Container className="-mt-3">
        <div className="mb-16 text-center">
          <p className="text-sm tracking-[0.3em] text-brown uppercase mb-4 bg-background w-fit mx-auto px-4">
            Co nabízím
          </p>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Jaké fotografické služby nabízím?
          </h2>

          <p className="max-w-2xl mx-auto text-text-light">
            Každé focení je jiné. Ať už plánujete svatbu, rodinné focení nebo
            chcete zachytit výjimečné období svého života, společně vytvoříme
            fotografie, které budou mít smysl i za mnoho let.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // whileHover={{ y: -6 }}
              className="group"
            >
              <div className="overflow-hidden rounded-xl bg-cream/20 border border-brown/10">
                <div className="aspect-4/5 relative">
                  <OptimizedImage
                    photo={{
                      src: service.image,
                      alt: service.title,
                      width: 1200,
                      height: 1600,
                    }}
                    fill
                    className="group-hover:grayscale transition-all duration-300 object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-text-light text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-text-light mb-6">
            Nejste si jistí, jaký typ focení bude pro vás nejlepší?
          </p>

          <Link href="/sluzby" className="btn-base btn-primary mx-auto w-fit">
            Více o službách
          </Link>
        </div>
      </Container>
    </Section>
  );
}
