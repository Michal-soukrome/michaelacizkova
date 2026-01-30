"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section className="py-24 md:py-40 bg-linear-to-b from-black via-zinc-950 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Artistic offset header */}
        <div className="relative mb-20">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:ml-auto md:mr-8 md:text-right max-w-xl"
          >
            <p className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-4">
              Pojďme spolupracovat
            </p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
              Kontakt
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-24 h-px bg-white mt-6 md:ml-auto origin-right"
            />

            <p className="text-gray-400 mt-8">
              Připraveni zachytit váš příběh? Pojďme si promluvit o vašem
              projektu a přivést vaši vizi k životu.
            </p>
          </motion.div>

          {/* Decorative shape */}
          <motion.div
            initial={{ opacity: 0, rotate: -12 }}
            whileInView={{ opacity: 0.05, rotate: 0 }}
            viewport={{ once: true }}
            className="absolute top-1/2 right-0 w-96 h-96 border border-white -translate-y-1/2 translate-x-1/2"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* Contact Info - Offset design */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="relative">
              <div className="absolute inset-0 border border-gray-800 translate-x-2 translate-y-2" />
              <div className="relative bg-zinc-950 border border-gray-800 p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-8">Kontaktní údaje</h3>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/5 p-3">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-gray-400">ahoj@michaelacizkova.cz</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/5 p-3">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Telefon</h4>
                      <p className="text-gray-400">+420 123 456 789</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/5 p-3">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Lokalita</h4>
                      <p className="text-gray-400">Praha, Česká republika</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 border border-gray-800 translate-x-2 translate-y-2" />
              <div className="relative bg-zinc-950 border border-gray-800 p-8">
                <h3 className="text-xl font-bold mb-4">Pracovní doba</h3>
                <div className="space-y-3 text-gray-400">
                  <p className="flex justify-between">
                    <span>Pondělí – Pátek</span>
                    <span>9:00 – 18:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sobota</span>
                    <span>10:00 – 16:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Neděle</span>
                    <span>Po domluvě</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Offset design */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 lg:mt-12"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 border border-gray-800 -translate-x-3 -translate-y-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              />
              <form
                onSubmit={handleSubmit}
                className="relative bg-zinc-950 border border-gray-800 p-8 md:p-12"
              >
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <label
                        htmlFor="name"
                        className="block text-sm uppercase tracking-wider mb-3"
                      >
                        Jméno{" "}
                        <span className="text-red-400" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        aria-required="true"
                        autoComplete="name"
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 focus:outline-none focus:border-white focus:ring-0 transition-all placeholder:text-gray-600"
                        placeholder="Vaše jméno"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <label
                        htmlFor="email"
                        className="block text-sm uppercase tracking-wider mb-3"
                      >
                        Email{" "}
                        <span className="text-red-400" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        aria-required="true"
                        autoComplete="email"
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 focus:outline-none focus:border-white focus:ring-0 transition-all placeholder:text-gray-600"
                        placeholder="vas@email.cz"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="subject"
                      className="block text-sm uppercase tracking-wider mb-3"
                    >
                      Předmět{" "}
                      <span className="text-red-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      aria-required="true"
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 focus:outline-none focus:border-white focus:ring-0 transition-all placeholder:text-gray-600"
                      placeholder="O co se jedná?"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm uppercase tracking-wider mb-3"
                    >
                      Zpráva{" "}
                      <span className="text-red-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      aria-required="true"
                      rows={5}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 focus:outline-none focus:border-white focus:ring-0 transition-all resize-none placeholder:text-gray-600"
                      placeholder="Řekněte mi o vašem projektu..."
                    ></textarea>
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="mt-6 bg-white text-black px-10 py-4 font-medium text-sm uppercase tracking-wider hover:bg-gray-100 transition-all flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                  >
                    Odeslat zprávu
                    <Send
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
