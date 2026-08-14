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

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusTitle, setStatusTitle] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [recaptchaReady, setRecaptchaReady] = useState(false);
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

    if (!recaptchaSiteKey) {
      return () => {
        window.removeEventListener("serviceSelected", handleServiceSelected);
      };
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    const checkRecaptcha = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          setRecaptchaReady(true);
        });
      }
    };

    script.addEventListener("load", checkRecaptcha);

    return () => {
      window.removeEventListener("serviceSelected", handleServiceSelected);
      script.remove();
    };
  }, []);

  const getCaptchaToken = async () => {
    if (!recaptchaSiteKey) {
      throw new Error("Recaptcha není připravené.");
    }

    const recaptcha = window.grecaptcha;
    if (!recaptcha) {
      throw new Error("Recaptcha není připravené.");
    }

    await new Promise<void>((resolve) => {
      recaptcha.ready(() => resolve());
    });

    return recaptcha.execute(recaptchaSiteKey, { action: "contact_form" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaSiteKey) {
      setStatus("error");
      setStatusTitle("Bezpečnostní nastavení chybí");
      setStatusMessage(
        "V produkční konfiguraci chybí klíč pro ověření formuláře. Obraťte se na správce webu.",
      );
      return;
    }

    setStatus("loading");
    setStatusTitle("Odesílám zprávu");
    setStatusMessage("Momentálně ověřuji formulář a posílám vaši zprávu.");

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const captchaToken = await getCaptchaToken();
      const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        service: selectedService || (formData.get("service") as string),
        subject: formData.get("subject") as string,
        message: formData.get("message") as string,
        captchaToken,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (res.ok) {
        setStatus("success");
        setStatusTitle("Zpráva byla úspěšně odeslána");
        setStatusMessage("Vaši zprávu jsem přijala a ozvu se vám co nejdříve.");
        formRef.current?.reset();
        setFormValues({ name: "", email: "", subject: "", message: "" });
        setSelectedService("");
      } else {
        setStatus("error");
        setStatusTitle("Něco se nepodařilo");
        setStatusMessage(
          result.error ||
            "Zprávu se nepodařilo odeslat. Zkuste to prosím znovu.",
        );
      }
    } catch {
      setStatus("error");
      setStatusTitle("Odeslání selhalo");
      setStatusMessage(
        "Došlo k technické chybě. Zkuste to prosím znovu za chvíli.",
      );
    }
  };

  return (
    <div className="relative">
      {status === "success" ? (
        <motion.div
          data-role="success-state"
          role="status"
          aria-live="polite"
          tabIndex={-1}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative flex flex-col items-center justify-center gap-5 py-12 text-center"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700 shadow-sm">
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-green-700">
              Zpráva odeslána
            </p>
            <h3 className="text-2xl font-medium text-foreground">
              Děkuji za zprávu
            </h3>
            <p className="mx-auto max-w-md text-sm leading-relaxed text-text-light">
              {statusMessage}
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setStatusTitle("");
              setStatusMessage("");
            }}
            className="btn-base btn-primary"
          >
            Odeslat další zprávu
          </button>
        </motion.div>
      ) : (
        <>
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
                disabled={
                  status === "loading" || !isFormValid || !recaptchaReady
                }
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
                {status === "loading" && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 flex items-center gap-2 text-brown"
                  >
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <div>
                      <p className="text-sm font-medium">{statusTitle}</p>
                      <p className="text-xs text-text-light">{statusMessage}</p>
                    </div>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700"
                  >
                    <AlertCircle className="mt-0.5 w-5 h-5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold">{statusTitle}</p>
                      <p className="text-sm leading-relaxed">{statusMessage}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
