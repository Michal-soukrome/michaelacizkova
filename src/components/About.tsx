"use client";

import { motion } from "framer-motion";

const bioParagraphs = [
  "Fotografii jsem obdivovala už od dětství. Svou první zrcadlovku jsem dostala před několika lety od rodičů, ale skutečný zlom přišel v roce 2022, kdy se mi narodil syn. Tehdy jsem si řekla, že se focení chci opravdu naučit abych zachytila naše krásné rodinné momenty — a úplně mě to pohltilo.",
  "Absolvovala jsem několik kurzů a mentoringů a díky neustálému vzdělávání si dnes postupně plním sen a dělám to, co mě opravdu baví.",
  "Jsem máma na plný úvazek, miluju přírodu, cestování a obyčejné momenty, které mají největší hodnotu. Právě ty se snažím zachytit i ve svých fotografiích — přirozeně, jemně a s důrazem na emoce.",
  "Chci, abyste se při focení cítili dobře a sami sebou. Pomůžu vám, navedu vás, ale zároveň nechávám prostor pro skutečné chvíle, které dělají fotky opravdovými.",
  "Fotím převážně venku nebo u vás doma, ale ráda se s vámi potkám i v ateliéru. Nejčastěji působím v oblasti Českého ráje, ale ráda za vámi dorazím i dál.",
  "Mým cílem není jen hezká fotka, ale vzpomínka, ke které se budete rádi vracet 🤍",
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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
            <p className="text-sm tracking-[0.3em] text-brown uppercase mb-4">
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
              className="w-24 h-px bg-brown mt-6 origin-left"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brown mt-8 max-w-lg md:ml-12"
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
            {bioParagraphs.map((text, i) => (
              <p key={i} className="text-lg text-text-light leading-relaxed">
                {text}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Decorative shape */}
        <motion.div
          initial={{ opacity: 0, rotate: 45, scale: 0.5 }}
          whileInView={{ opacity: 0.1, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-0 w-64 h-64 border border-brown/30 rounded-full -translate-x-1/4"
        />
      </div>
    </section>
  );
}
