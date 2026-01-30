"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

const testimonials = [
  {
    name: "Kateřina Nováková",
    role: "Art Director, CreativeCo",
    content:
      "Michaelina černobílá fotografie zachycuje emoce způsobem, který barva nikdy nedokáže. Její práce je skutečně nadčasová a pozvedla vizuální identitu naší značky.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
    rating: 5,
  },
  {
    name: "David Horák",
    role: "Kreativní ředitel",
    content:
      "Spolupráce s Michaelou byla čirý požitek. Její smysl pro detail a umělecká vize přinesly našemu projektu život způsobem, který překonává všechna očekávání.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    rating: 5,
  },
  {
    name: "Eva Svobodová",
    role: "Módní návrhářka",
    content:
      "Portréty, které Michaela vytvořila pro naši kampaně, dokonale zachytily atmosféru, o kterou nám šlo. Její schopnost pracovat s přirozeným světlem je mimořádná.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    rating: 5,
  },
  {
    name: "Martin Procházka",
    role: "CEO, Tech Startup",
    content:
      "Profesionální, kreativní a nebyvále talentovaná. Michaela dodala úžasné portréty pro celý náš tým, které skutečně reprezentují naši firemní kulturu.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    rating: 5,
  },
];

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
      dragFree: false,
    },
    [
      Autoplay({
        delay: 6000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <section className="py-24 md:py-40 bg-linear-to-b from-black via-zinc-950 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Artistic header with offset */}
        <div className="relative mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:ml-8"
          >
            <p className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4">Říkají o mně</p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Reference</h2>
            
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-24 h-px bg-white mt-6 origin-left"
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-8 max-w-lg md:ml-8"
          >
            Slova těch, kteří zažili mou fotografii na vlastní kůži
          </motion.p>
        </div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_calc(33.333%-1rem)]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-8 h-full flex flex-col backdrop-blur-md border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
                >
                  {/* Quote Icon */}
                  <div className="mb-6 text-gray-600 group-hover:text-gray-500 transition-colors">
                    <Quote className="w-10 h-10" />
                  </div>

                  {/* Stars Rating */}
                  <div className="flex mb-4 gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-white text-white"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-300 mb-6 grow leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center pt-4 border-t border-gray-800">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 ring-2 ring-gray-700 group-hover:ring-gray-600 transition-all">
                      <OptimizedImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover grayscale"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators - Artistic offset layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
        >
          {[
            { value: "500+", label: "Spokojených klientů" },
            { value: "1000+", label: "Dokončených projektů" },
            { value: "15+", label: "Let zkušeností" },
            { value: "25+", label: "Získaných ocenění" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center md:text-left"
              style={{ transform: `translateY(${index % 2 === 1 ? '1rem' : '0'})` }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
          </div>
        </div>

        {/* Removed pagination dots for seamless infinite scrolling */}
      </div>
    </section>
  );
}
