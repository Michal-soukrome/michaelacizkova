"use client";

import { motion } from "framer-motion";
import SectionHero from "./SectionHero";
import Container from "./Container";
import ContactForm from "./ContactForm";
import Contact from "./Contact";
import OptimizedImage from "./OptimizedImage";

const bioParagraphs = [
  "Fotografii jsem obdivovala už od dětství. Svou první zrcadlovku jsem dostala před několika lety od rodičů, ale skutečný zlom přišel v roce 2022, kdy se mi narodil syn. Tehdy jsem si řekla, že se focení chci opravdu naučit abych zachytila naše krásné rodinné momenty — a úplně mě to pohltilo.",
  "Absolvovala jsem několik kurzů a mentoringů a díky neustálému vzdělávání si dnes postupně plním sen a dělám to, co mě opravdu baví.",
  "Jsem máma na plný úvazek, miluju přírodu, cestování a obyčejné momenty, které mají největší hodnotu. Právě ty se snažím zachytit i ve svých fotografiích — přirozeně, jemně a s důrazem na emoce.",
  "Chci, abyste se při focení cítili dobře a sami sebou. Pomůžu vám, navedu vás, ale zároveň nechávám prostor pro skutečné chvíle, které dělají fotky opravdovými.",
  "Fotím převážně venku nebo u vás doma, ale ráda se s vámi potkám i v ateliéru. Nejčastěji působím v oblasti Českého ráje, ale ráda za vámi dorazím i dál. Fotím na Canon EOS R6 Mark II, který mi umožňuje zachytit přirozené emoce i ve složitějším světle",
  "Mým cílem není jen hezká fotka, ale vzpomínka, ke které se budete rádi vracet 🤍",
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section className="py-12 bg-background overflow-hidden">
      <div>
        <Container>
          <SectionHero
            eyebrow="Moje cesta"
            title="Michaela Čížková – fotografka z Mladějova v Českém ráji"
            description="Zjistěte více o mé fotografické cestě a přístupu k focení."
          />

          {/* Content Grid */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start md:ml-12">
            {/* Portrait Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-4/12 order-2 md:order-1 rounded-lg overflow-hidden shadow-xl"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <OptimizedImage
                  photo={{
                    src: "/assets/portret.jpeg",
                    alt: "Michaela Čížková - portrét fotografky",
                    width: 1200,
                    height: 1500,
                  }}
                  fill
                  objectFit="cover"
                  className="transition-all duration-500"
                />
              </div>
            </motion.div>

            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
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
            transition={{ duration: 1 }}
            className="absolute top-20 left-0 w-64 h-64 border border-brown/30 rounded-full -translate-x-1/4"
          />
        </Container>

        <div className="mt-20">
          <Contact />
        </div>
      </div>
    </section>
  );
}
