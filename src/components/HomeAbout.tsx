"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutHomepage() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-5/12 rounded-xl overflow-hidden shadow-xl"
        >
          <img
            src="/assets/portret.jpg"
            alt="Michaela Čížková — portrét"
            className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-7/12 space-y-6"
        >
          <p className="text-sm tracking-[0.3em] text-brown uppercase">
            Moje cesta
          </p>

          <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            O mně
          </h3>

          <p className="text-lg text-text-light leading-relaxed max-w-xl">
            Jsem fotografka z Českého ráje, máma a milovnice přirozených
            momentů. Fotím jemně, autenticky a s důrazem na emoce — tak, aby
            vaše vzpomínky zůstaly živé i po letech.
          </p>

          <p className="text-lg text-text-light leading-relaxed max-w-xl">
            Miluju přírodu, světlo a obyčejné chvíle, které mají největší
            hodnotu. Při focení vás povedu, ale nechám prostor pro přirozenost a
            skutečné emoce.
          </p>

          <Link href="/o-mne" className="btn-base btn-primary w-fit">
            Více o mně
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
