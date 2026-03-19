"use client";

import { motion } from "framer-motion";
import {
  User,
  Camera,
  Building2,
  Palette,
  Check,
  Send,
  MessageCircle,
  MessageCircleMore,
} from "lucide-react";

const services = [
  {
    title: "Portrétní fotografie",
    description:
      "Profesionální portréty, rodinné focení a osobní branding, který zachytí vaši jedinečnou podstatu.",
    icon: User,
    features: [
      "Ateliérové focení",
      "Exteriérové focení",
      "Post-produkce",
      "Vysoké rozlišení",
    ],
  },
  {
    title: "Eventová fotografie",
    description:
      "Zachycení vašich výjimečných okamžiků – svatby, firemní akce a oslavy s uměleckým nádychem.",
    icon: Camera,
    features: [
      "Kompletní pokrytí",
      "Náhledy ve stejný den",
      "Online galerie",
      "Tiskové licence",
    ],
  },
  {
    title: "Komerční fotografie",
    description:
      "Produktová fotografie, firemní focení a tvorba komerčního obsahu pro firmy.",
    icon: Building2,
    features: [
      "Produktové focení",
      "Firemní fotografie",
      "E-shop fotky",
      "Marketingový obsah",
    ],
  },
  {
    title: "Umělecká fotografie",
    description:
      "Kreativní a umělecká fotografie pro výstavy, galerie a osobní projekty.",
    icon: Palette,
    features: [
      "Koncepční focení",
      "Umělecké tisky",
      "Galerní výstavy",
      "Umělecká režie",
    ],
  },
];

export default function Services() {
  return (
    <section className="py-24 md:py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Artistic offset header */}
        <div className="relative mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:ml-8"
          >
            <p className="text-sm tracking-[0.3em] text-mauve-600 uppercase mb-4">
              Co nabízím
            </p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Služby
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
            className="text-text-light mt-8 max-w-lg md:ml-8"
          >
            Profesionální fotografické služby na míru vašim potřebám. Od
            intimních portrétů po velké akce.
          </motion.p>

          {/* Decorative shape */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute -top-20 -right-20 w-80 h-80 border border-mauve-500/40 rounded-full"
          />
        </div>

        {/* Offset grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ marginTop: index % 2 === 1 ? "3rem" : "0" }}
                className="group relative"
              >
                {/* Card with offset border */}
                <div className="absolute inset-0 border-2 border-mauve-500/20 translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300 rounded-xl" />

                <div className="relative bg-mauve-100/40 p-8 md:p-10 border-2 border-mauve-500/40 hover:border-mauve-500 transition-all duration-300 rounded-xl">
                  <div className="flex items-start gap-6">
                    <div className="bg-mauve-500/20 w-16 h-16 flex items-center justify-center group-hover:bg-mauve-500/30 transition-colors rounded-full">
                      <Icon className="w-8 h-8 text-mauve-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-text-light mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm text-text-light"
                          >
                            <span className="w-1.5 h-1.5 bg-mauve-500 mr-3 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-8 text-lg">
            Připraveni zachytit váš příběh? Pojďme si promluvit o vašem
            projektu.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="w-fit mx-auto mt-6 bg-mauve-500 text-white px-10 py-4 font-medium text-sm uppercase tracking-wider hover:bg-mauve-600 transition-all flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-mauve-500 focus:ring-offset-2 focus:ring-offset-background rounded-full shadow-lg hover:shadow-xl"
            onClick={(e) => {
              e.preventDefault();
              setTimeout(() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 200);
            }}
          >
            kontaktujte mně
            <MessageCircleMore
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
