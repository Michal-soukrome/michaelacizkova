"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Art Director",
    content:
      "Michael's black and white photography captures the essence of emotion in ways that color never could. His work is truly timeless.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
  },
  {
    name: "David Chen",
    role: "Creative Director",
    content:
      "Working with Michael was an absolute pleasure. His attention to detail and artistic vision brought our project to life in stunning ways.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
  },
  {
    name: "Emma Rodriguez",
    role: "Fashion Designer",
    content:
      "The portraits Michael created for our campaign perfectly captured the mood we were going for. Clients loved the results.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
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
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">What Clients Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from the people who&apos;ve experienced my photography
            firsthand.
          </p>
        </motion.div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex gap-6 pb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 h-full"
                >
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Removed pagination dots for seamless infinite scrolling */}
      </div>
    </section>
  );
}
