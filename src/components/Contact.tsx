"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

/** Tracks the current state of the contact form submission. */
type FormStatus = "idle" | "loading" | "success" | "error";

/**
 * Contact section with info cards + working form.
 *
 * Submits to `/api/contact` (Next.js API route) which sends emails
 * via Resend. Displays loading spinner, success, or error feedback
 * inline beneath the submit button.
 */
const services = [
  "Svatební focení",
  "Rodinné / Párové / Těhotenské focení",
  "Rodinná reportáž",
  "Ateliérové focení",
];

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  const isFormValid =
    formValues.name.trim() !== "" &&
    formValues.email.trim() !== "" &&
    formValues.subject.trim() !== "" &&
    formValues.message.trim() !== "";

  useEffect(() => {
    const handleServiceSelected = (event: Event) => {
      const customEvent = event as CustomEvent<{ service: string }>;
      setSelectedService(customEvent.detail.service);
    };

    window.addEventListener("serviceSelected", handleServiceSelected);
    return () => {
      window.removeEventListener("serviceSelected", handleServiceSelected);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      service: selectedService || (formData.get("service") as string),
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("success");
        setStatusMessage(result.message);
        formRef.current?.reset();
        setFormValues({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(result.error);
      }
    } catch {
      setStatus("error");
      setStatusMessage("Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.");
    }
  };

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="relative mb-20">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:ml-auto md:mr-8 md:text-right max-w-xl"
          >
            <p className="text-sm tracking-[0.3em] text-brown uppercase mb-4">
              Pojďme spolupracovat
            </p>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Kontakt
            </h3>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-24 h-px bg-brown mt-6 md:ml-auto origin-right"
            />
            <p className="text-text-light mt-8">
              Připraveni zachytit váš příběh? Pojďme si promluvit o vašem
              projektu a přivést vaši vizi k životu.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: -12 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            animate={{ y: [0, -10, 0], opacity: 1 }}
            className="absolute top-1/2 right-0 w-52 h-52 border border-brown/30 rounded-full -translate-y-1/2 translate-x-1/2"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              opacity: { duration: 0.8, ease: "easeOut" },
              x: { duration: 0.8, ease: "easeOut" },
              y: {
                delay: 1.2,
                duration: 6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
            }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="relative">
              <div className="absolute inset-0 border-2 border-brown/20 translate-x-2 translate-y-2 rounded-xl" />
              <div className="relative bg-cream/30 border-2 border-brown/40 p-8 md:p-10 rounded-xl">
                <h3 className="text-2xl font-bold mb-8 text-foreground">
                  Kontaktní údaje
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-brown/20 p-3 rounded-full">
                      <Mail className="w-5 h-5 text-brown" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-foreground">
                        Email
                      </h4>
                      <a
                        href="mailto:foto.michaelacizkova@seznam.cz"
                        className="text-text-light underline break-all"
                      >
                        foto.michaelacizkova@seznam.cz
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brown/20 p-3 rounded-full">
                      <Phone className="w-5 h-5 text-brown" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-foreground">
                        Telefon
                      </h4>
                      <a
                        href="tel:+420604410116"
                        className="text-text-light underline "
                      >
                        +420 604 410 116
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brown/20 p-3 rounded-full">
                      <MapPin className="w-5 h-5 text-brown" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-foreground">
                        Lokalita
                      </h4>
                      <p className="text-text-light">Praha, Česká republika</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 lg:mt-12"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className="absolute inset-0 border-2 border-brown/20 -translate-x-3 -translate-y-3 rounded-xl"
              />

              <form
                ref={formRef}
                id="contact-form"
                onSubmit={handleSubmit}
                className="relative bg-cream/30 border-2 border-brown/40 p-8 md:p-12 rounded-xl scroll-mt-20"
              >
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label
                        htmlFor="name"
                        className="block text-sm uppercase tracking-wider mb-3 text-foreground"
                      >
                        Jméno{" "}
                        <span className="text-brown" aria-hidden="true">
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
                        value={formValues.name}
                        onChange={(e) =>
                          setFormValues((v) => ({ ...v, name: e.target.value }))
                        }
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-brown/40 focus:outline-none focus:border-brown focus:ring-0 transition-all placeholder:text-text-light text-foreground"
                        placeholder="Vaše jméno"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label
                        htmlFor="email"
                        className="block text-sm uppercase tracking-wider mb-3 text-foreground"
                      >
                        Email{" "}
                        <span className="text-brown" aria-hidden="true">
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
                        value={formValues.email}
                        onChange={(e) =>
                          setFormValues((v) => ({
                            ...v,
                            email: e.target.value,
                          }))
                        }
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-brown/40 focus:outline-none focus:border-brown focus:ring-0 transition-all placeholder:text-text-light text-foreground"
                        placeholder="vas@email.cz"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label
                      htmlFor="service"
                      className="block text-sm uppercase tracking-wider mb-3 text-foreground"
                    >
                      Služba
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-brown/40 focus:outline-none focus:border-brown focus:ring-0 transition-all text-foreground"
                    >
                      <option
                        value=""
                        className="bg-background text-foreground"
                      >
                        — Vyberte službu —
                      </option>
                      {services.map((service) => (
                        <option
                          key={service}
                          value={service}
                          className="bg-background text-foreground"
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                  >
                    <label
                      htmlFor="subject"
                      className="block text-sm uppercase tracking-wider mb-3 text-foreground"
                    >
                      Předmět{" "}
                      <span className="text-brown" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      aria-required="true"
                      value={formValues.subject}
                      onChange={(e) =>
                        setFormValues((v) => ({
                          ...v,
                          subject: e.target.value,
                        }))
                      }
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-brown/40 focus:outline-none focus:border-brown focus:ring-0 transition-all placeholder:text-text-light text-foreground"
                      placeholder="O co se jedná?"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm uppercase tracking-wider mb-3 text-foreground"
                    >
                      Zpráva{" "}
                      <span className="text-brown" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      aria-required="true"
                      rows={5}
                      value={formValues.message}
                      onChange={(e) =>
                        setFormValues((v) => ({
                          ...v,
                          message: e.target.value,
                        }))
                      }
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-brown/40 focus:outline-none focus:border-brown focus:ring-0 transition-all resize-none placeholder:text-text-light text-foreground"
                      placeholder="Řekněte mi o vašem projektu..."
                    />
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    whileTap={
                      status === "loading" || !isFormValid
                        ? {}
                        : { scale: 0.98 }
                    }
                    type="submit"
                    disabled={status === "loading" || !isFormValid}
                    className="mt-6 btn-base btn-primary disabled:animate-none disabled:opacity-50 disabled:cursor-not-allowed animate-bounce"
                  >
                    {status === "loading" ? (
                      <>
                        Odesílám...
                        <Loader2
                          className="w-4 h-4 animate-spin"
                          aria-hidden="true"
                        />
                      </>
                    ) : (
                      <>
                        Odeslat zprávu
                        <Send
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </motion.button>

                  <AnimatePresence mode="wait">
                    {status === "success" && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-4 flex items-center gap-2 text-green-600"
                      >
                        <CheckCircle className="w-5 h-5" />
                        <p className="text-sm">{statusMessage}</p>
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div
                        key="error"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-4 flex items-center gap-2 text-red-500"
                      >
                        <AlertCircle className="w-5 h-5" />
                        <p className="text-sm">{statusMessage}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
