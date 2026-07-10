"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

const services = [
  "Svatební focení",
  "Rodinné, párové, těhotenské focení",
  "Newborn focení",
  "Reportážní focení",
  "Ateliérové focení",
];

export default function ContactForm() {
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
                <span className="text-red-600" aria-hidden="true">
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
                <span className="text-red-600" aria-hidden="true">
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
                  setFormValues((v) => ({ ...v, email: e.target.value }))
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
              Služba{" "}
              <span className="text-red-600" aria-hidden="true">
                *
              </span>
            </label>
            <select
              id="service"
              name="service"
              value={selectedService}
              required
              aria-required="true"
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-0 py-3 bg-transparent border-0 border-b border-brown/40 focus:outline-none focus:border-brown focus:ring-0 transition-all text-foreground"
            >
              <option value="" className="bg-background text-foreground">
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
              <span className="text-red-600" aria-hidden="true">
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
                setFormValues((v) => ({ ...v, subject: e.target.value }))
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
              <span className="text-red-600" aria-hidden="true">
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
                setFormValues((v) => ({ ...v, message: e.target.value }))
              }
              className="w-full px-0 py-3 bg-transparent border-0 border-b border-brown/40 focus:outline-none focus:border-brown focus:ring-0 transition-all resize-none placeholder:text-text-light text-foreground"
              placeholder="Řekněte mi více informací..."
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileTap={
              status === "loading" || !isFormValid ? {} : { scale: 0.98 }
            }
            type="submit"
            disabled={status === "loading" || !isFormValid}
            className="mt-6 btn-base btn-primary disabled:animate-none disabled:opacity-50 disabled:cursor-not-allowed animate-bounce"
          >
            {status === "loading" ? (
              <>
                Odesílám...
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
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
  );
}
