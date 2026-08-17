"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Section from "./Section";
import Container from "./Container";

export default function AboutHomepage() {
  return (
    <Section id="about">
      <hr className="border-brown/30" />
      <Container className="-mt-3 flex flex-col items-center justify-center gap-10 md:gap-16">
        {/* TEXT – kompaktní */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-4 text-center"
        >
          <p className="text-sm tracking-[0.3em] text-brown uppercase bg-background w-fit mx-auto px-4">
            Lokality
          </p>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Kde fotím?
          </h2>

          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mx-auto ">
            <Image
              src="/assets/portret.jpeg"
              alt="Michaela Čížková — portrét"
              width={400}
              height={400}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>

        <p className="text-base text-text-light leading-relaxed max-w-lg">
          Nejčastěji fotím venku v Českém ráji, v okolí Jičína, Turnova, Sobotky
          a Mladé Boleslavi. Světlo, místo a přirozený pohyb jsou pro mě
          důležité, aby výsledné snímky působily autenticky a nadčasově.
        </p>

        <Link href="/o-mne" className="mt-8 btn-base btn-primary mx-auto w-fit">
          Více o mně
        </Link>
      </Container>
    </Section>
  );
}
