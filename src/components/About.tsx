"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-16 md:py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Offset header design */}
        <div className="relative mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:ml-12"
          >
            <p className="text-sm tracking-[0.3em] text-mauve-600 uppercase mb-4">
              Moje cesta
            </p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              O mně
            </h2>
            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-24 h-px bg-mauve-500 mt-6 origin-left"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-mauve-600 mt-8 max-w-lg md:ml-12"
          >
            Zjistěte více o mé fotografické cestě a přístupu k focení
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start md:ml-12">
          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-4/12 order-2 md:order-1 rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="/assets/portret.jpg"
              alt="Michaela Čížková - portrét fotografky"
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-8/12 order-1 md:order-2 space-y-6"
          >
            <p className="text-lg text-text-light leading-relaxed">
              Jsem máma na plný úvazek, milovnice cestování, přírody a procházek
              s mým psím parťákem. Fotografie se pro mě stala nejen vášní, ale i
              splněným snem. Začalo to zachycováním momentů mé rodiny a krás
              Českého ráje – a postupně se z koníčku stává má vysněná práce.
              Díky vám, mým klientům, mám možnost se neustále zdokonalovat a
              dělat to, co mě baví.
            </p>

            <p className="text-lg text-text-light leading-relaxed">
              Během prvních dvou let na mateřské dovolené jsem absolvovala
              několik intenzivních fotografických kurzů, které mi pomohly
              posunout se a najít svůj osobitý styl. Ráda si hraji s detaily,
              barvami a světlem. Snažím se, aby mé fotografie byly plné emocí,
              působily přirozeně a autenticky. Emoce totiž dávají fotkám život a
              umožňují vám vrátit se zpět k těm jedinečným okamžikům.
            </p>

            <p className="text-lg text-text-light leading-relaxed">
              Chci, abyste se při focení cítili uvolněně a přirozeně. Proto
              volím lokality, které jsou vám blízké a kde se budete cítit dobře.
              Působím především v oblasti Českého ráje (Sobotka, Jičín, Mladá
              Boleslav), ale ráda za vámi dorazím i dál. Ať už si vyberete
              jakýkoliv typ focení, postarám se, abyste si ho užili a odnesli si
              nejen krásné fotografie, ale i příjemný zážitek.
            </p>
          </motion.div>
        </div>

        {/* Decorative shape */}
        <motion.div
          initial={{ opacity: 0, rotate: 45, scale: 0.5 }}
          whileInView={{ opacity: 0.1, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-0 w-64 h-64 border border-mauve-500/30 rounded-full -translate-x-1/4"
        />
      </div>
    </section>
  );
}
