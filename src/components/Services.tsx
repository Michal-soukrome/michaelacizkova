"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Portrait Photography",
    description:
      "Professional headshots, family portraits, and personal branding photography.",
    icon: "👤",
    features: [
      "Studio Sessions",
      "Outdoor Shoots",
      "Post-Production",
      "High-Resolution Files",
    ],
  },
  {
    title: "Event Photography",
    description:
      "Capture your special moments - weddings, corporate events, and celebrations.",
    icon: "📸",
    features: [
      "Full Event Coverage",
      "Same-Day Previews",
      "Online Gallery",
      "Print Releases",
    ],
  },
  {
    title: "Commercial Photography",
    description:
      "Product photography, brand shoots, and commercial content creation.",
    icon: "🏢",
    features: [
      "Product Shoots",
      "Brand Photography",
      "E-commerce Images",
      "Marketing Content",
    ],
  },
  {
    title: "Fine Art Photography",
    description:
      "Creative and artistic photography for exhibitions and personal projects.",
    icon: "🎨",
    features: [
      "Conceptual Shoots",
      "Fine Art Prints",
      "Gallery Exhibitions",
      "Art Direction",
    ],
  },
];

export default function Services() {
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
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Professional photography services tailored to your needs. From
            intimate portraits to large-scale events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="text-sm text-gray-400 space-y-1">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6">
            Ready to capture your story? Let&apos;s discuss your project.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
            onClick={() =>
              setTimeout(() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 200)
            }
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
