"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2015",
    title: "Started Photography",
    description:
      "Began my journey with a simple camera, capturing everyday moments.",
    icon: "📷",
  },
  {
    year: "2018",
    title: "First Exhibition",
    description:
      "Held my first solo exhibition showcasing black and white portraits.",
    icon: "🎨",
  },
  {
    year: "2020",
    title: "Digital Transition",
    description: "Embraced digital photography and post-processing techniques.",
    icon: "💻",
  },
  {
    year: "2023",
    title: "Published Work",
    description:
      "Published my first photography book featuring urban landscapes.",
    icon: "📖",
  },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-8">About</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Passionate photographer specializing in black and white imagery. My
          work explores the beauty in simplicity, capturing emotions and stories
          through timeless compositions.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-600"></div>

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex items-center mb-12 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`w-1/2 ${
                index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
              }`}
            >
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
                <div className="text-sm text-gray-500 mt-2">{item.year}</div>
              </div>
            </div>
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-black"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
