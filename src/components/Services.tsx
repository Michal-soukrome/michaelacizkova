"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Users,
  Baby,
  Clapperboard,
  Briefcase,
  MessageCircleMore,
} from "lucide-react";

const services = [
  {
    title: "Rodinné / Párové / Těhotenské focení",
    description:
      "Láska, harmonie, radost a vzájemné pouto. Ať už na focení přijdete s partnerem nebo rovnou s celou rodinkou, tyto krásné emoce budou zářit na každém snímku.",
    icon: Users,
    price: "2000 Kč",
    duration: "Cca 60 min",
    photos: "15 výsledných fotografií + černobílá verze podle mého výběru",
    features: [
      "Výběr z náhledové galerie",
      "Výsledné fotografie elektronicky v soukromé galerii",
      "Focení u vás doma/venku podle domluvy",
      "Každá další fotka navíc 100 Kč",
    ],
  },
  {
    title: "Newborn focení",
    description:
      "Není nic krásnějšího než první dny nově narozeného miminka. Nechte si zvěčnit vzpomínky na toto výjimečné období.",
    icon: Baby,
    price: "2400 Kč",
    duration: "Cca 60 až 90 min",
    photos: "20 výsledných fotografií + černobílá verze podle mého výběru",
    features: [
      "Výběr z náhledové galerie",
      "Výsledné fotografie elektronicky v soukromé galerii",
      "Focení probíhá u vás doma",
      "Každá další fotka navíc 100 Kč",
      "Tip: Realizujte ideálně do 14 dnů od narození",
    ],
  },
  {
    title: "Reportážní focení",
    description:
      "Narozeniny, karnevaly, besedy, vystoupení a další kulturní či společenské akce. Autenticky zdokumentuji atmosféru.",
    icon: Clapperboard,
    price: "2000 Kč (první 2 h)",
    duration: "Délka na domluvě (+700 Kč/h)",
    photos: "100 až 150 výsledných fotografií",
    features: [
      "Černobílá verze podle mého výběru",
      "Fotografie bez rozsáhlejší retuše",
      "Ideální pro všechny druhy akcí",
    ],
  },
  {
    title: "Brandové focení",
    description:
      "Společně vytvoříme vizuální příběh. Autentické a přirozené snímky pro web, sociální sítě a marketing.",
    icon: Briefcase,
    price: "3000 Kč",
    duration: "Na míru",
    photos: "25 výsledných fotografií + černobílá verze",
    features: [
      "Jedinečný styl podle vaší osobnosti/značky",
      "Výběr z náhledové galerie",
      "Výsledné fotografie elektronicky v soukromé galerii",
      "Focení u vás doma/fotostudiu podle domluvy",
      "Každá další fotka navíc 100 Kč",
    ],
  },
];

export default function Services() {
  return (
    <section className="py-16 md:py-40 bg-background overflow-hidden">
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
            Procházejte si moji nabídku fotografických služeb. Každá sesión je
            přizpůsobena vašim specifickým potřebám a představám.
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
                    <div className="hidden md:flex bg-mauve-500/20 w-16 h-16 items-center justify-center group-hover:bg-mauve-500/30 transition-colors rounded-full flex-shrink-0">
                      <Icon className="w-8 h-8 text-mauve-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-text-light mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Pricing section */}
                      <div className="bg-mauve-500/10 rounded-lg p-4 mb-6 border border-mauve-500/20">
                        <div className="grid grid-cols-2 gap-4 mb-3">
                          <div>
                            <p className="text-xs uppercase tracking-wider text-mauve-600 font-semibold mb-1">
                              Cena
                            </p>
                            <p className="text-lg font-bold text-foreground">
                              {service.price}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-wider text-mauve-600 font-semibold mb-1">
                              Trvání
                            </p>
                            <p className="text-lg font-bold text-foreground">
                              {service.duration}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-text-light">
                          {service.photos}
                        </p>
                      </div>

                      {/* Features */}
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start text-sm text-text-light"
                          >
                            <span className="w-1.5 h-1.5 bg-mauve-500 mr-3 rounded-full flex-shrink-0 mt-1" />
                            <span>{feature}</span>
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

        {/* Booking section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-mauve-100/30 border-2 border-mauve-500/40 rounded-xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-mauve-500" />
                <h4 className="font-semibold text-foreground">
                  Lokalita focení
                </h4>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                Nejčastěji fotím v Českém ráji, v okolí Sobotky a Jičína. Ráda
                za vámi přijedu i do dalších oblastí.
              </p>
              <p className="text-sm text-mauve-600 font-semibold mt-3">
                Doprava: Zdarma do 20 km od Sobotky, poté 8,- Kč/km
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-5 h-5 text-mauve-500" />
                <h4 className="font-semibold text-foreground">Před focením</h4>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                Před focením si domluvíme rychlou konzultaci, během které
                probereme vhodný outfit, místo focení a další praktické věci.
                Chceme, abyste se cítili komfortně a přirozeně.
              </p>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-mauve-500/20">
            <p className="text-text-light mb-6">
              Máte zájem o některou z našich služeb? Pojďme si promluvit o vašem
              projektu!
            </p>

            <motion.a
              href="#contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="w-fit mx-auto bg-mauve-500 text-white px-10 py-4 font-medium text-sm uppercase tracking-wider hover:bg-mauve-600 transition-all flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-mauve-500 focus:ring-offset-2 focus:ring-offset-background rounded-full shadow-lg hover:shadow-xl"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event("navigationStart"));
                setTimeout(() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setTimeout(() => {
                    window.dispatchEvent(new Event("navigationEnd"));
                  }, 1000);
                }, 200);
              }}
            >
              Kontaktujte mně
              <MessageCircleMore
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
