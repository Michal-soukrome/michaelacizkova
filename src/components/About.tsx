"use client";

import { motion } from "framer-motion";
import { Camera, Award, BookOpen, Lightbulb } from "lucide-react";

const timelineData = [
  {
    year: "2010",
    title: "Začátek cesty",
    description:
      "První kroky se záklavním fotoaparátem. Objevování krásy v každodenních momentech a zrození vášně pro vizuální vyprávění.",
    icon: Camera,
  },
  {
    year: "2015",
    title: "První výstava",
    description:
      "Samá výstava černobílých portrétů. Ohlas překonal všechna očekávání a otevřel nové možnosti.",
    icon: Award,
  },
  {
    year: "2018",
    title: "Digitální transformace",
    description:
      "Přechod k digitální fotografii a pokročilé post-produkci. Rozšíření kreativních možností.",
    icon: Lightbulb,
  },
  {
    year: "2023",
    title: "Publikační úspěch",
    description:
      "Vydání první fotografické knihy s městskými krajinami. Mezinárodní uznání a nové projekty.",
    icon: BookOpen,
  },
];

export default function About() {
  return (
    <section className="py-24 md:py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Artistic offset header */}
        <div className="relative mb-24">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:ml-auto md:mr-12 md:text-right max-w-2xl"
          >
            <p className="text-sm tracking-[0.3em] text-mauve-600 uppercase mb-4">
              Moje cesta
            </p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
              O mně
            </h2>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-24 h-px bg-mauve-500 mb-8 md:ml-auto origin-right"
            />

            <p className="text-lg text-text-light leading-relaxed">
              Fotografka se vášní pro černobílou estetiku. Má práce zkoumá krásu
              v jednoduchosti a zachycuje emoce skrze nadčasové kompozice, které
              přesahují obyčejnost.
            </p>
          </motion.div>

          {/* Decorative shape */}
          <motion.div
            initial={{ opacity: 0, rotate: 45, scale: 0.5 }}
            whileInView={{ opacity: 0.1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute top-0 right-0 w-64 h-64 border border-mauve-500/30 rounded-full -translate-y-1/2 translate-x-1/4"
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-linear-to-b from-mauve-500/40 via-mauve-500/20 to-mauve-500/40 hidden md:block"></div>

          {timelineData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`flex items-center mb-8 md:mb-20 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12 md:text-left"
                  }`}
                >
                  <div className="glass rounded-2xl p-8 hover:scale-[101%] transition-transform duration-300 bg-mauve-100/30 border border-mauve-500/40">
                    {/* icons hidden for now */}
                    <div className="hidden items-center justify-center md:justify-start mb-4">
                      <div className="bg-mauve-500/20 p-4 rounded-full">
                        <Icon className="w-8 h-8 text-mauve-500" />
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-mauve-600 mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-text-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-mauve-500 rounded-full border-4 border-background shadow-lg hidden md:block"></div>
              </motion.div>
            );
          })}
          {/* TODO: on mobile keep timeline block border and keep it on the left side - do not hide it completely as it is now */}
        </div>
      </div>
    </section>
  );
}
