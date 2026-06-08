"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "Jak probíhá rezervace focení?",
    answer:
      "Stačí mi napsat přes kontaktní formulář, e-mail nebo sociální sítě. Domluvíme termín, místo focení a představu o výsledných fotografiích.",
  },
  {
    question: "Fotíte pouze rodiny?",
    answer:
      "Ne. Fotím rodiny, portréty, párové focení, těhotenské focení, svatby, reportáže i brandové a produktové fotografie.",
  },
  {
    question: "Kde focení probíhá?",
    answer:
      "Nejraději fotím venku v přirozeném světle, ale možné je i focení u vás doma nebo na domluveném místě. Nejčastěji fotím v Českém ráji, v okolí Jičína (Pod Zebínem, u Valdštejnské lodžie a podobně). Také často fotím v Turnově, v Mladé Boleslavi a v Sobotce a okolí. Pokud bydlíte dál nebo plánujete svatbu v jiných koutech republiky, velmi ráda přijedu kamkoliv :)",
  },
  {
    question: "Co si máme vzít na sebe?",
    answer:
      "Po rezervaci vám ráda poradím s výběrem oblečení tak, aby fotografie působily přirozeně, nadčasově a barevně ladily. Zasílám brožurku s tipy na outfity a veškeré dotazy se mnou můžete konzultovat :)",
  },
  {
    question: "Jak dlouho focení trvá?",
    answer:
      "Záleží na typu focení. Rodinné a portrétní focení většinou trvá 45–90 minut. U svateb a reportáží je délka individuální.",
  },
  {
    question: "Co když nejsme zvyklí stát před foťákem?",
    answer:
      "To vůbec nevadí. Většina lidí se před objektivem necítí jistě. Během focení vás přirozeně povedu tak, aby výsledné fotografie působily autenticky a uvolněně.",
  },
  {
    question: "Kdy dostaneme hotové fotografie?",
    answer:
      "Hotové fotografie odevzdávám obvykle do 2–3 týdnů podle typu focení a sezóny.",
  },
  {
    question: "Dostaneme upravené fotografie?",
    answer:
      "Ano. Každá odevzdaná fotografie prochází pečlivou úpravou v mém stylu – jemně, přirozeně a nadčasově.",
  },
  {
    question: "Posíláte i neupravené fotografie?",
    answer:
      "Neupravené fotografie neposkytuji. Výsledná úprava je součástí mé práce a celkového stylu.",
  },
  {
    question: "Jak fotografie předáváte?",
    answer:
      "Fotografie odevzdávám v online galerii ve vysokém rozlišení, připravené ke stažení i tisku.",
  },
  {
    question: "Fotíte svatby?",
    answer:
      "Ano, moc ráda. Zachycuji především emoce, atmosféru a přirozené momenty vašeho dne.",
  },
  {
    question: "Je možné zakoupit dárkový poukaz?",
    answer: "Ano, dárkové poukazy jsou k dispozici na všechny typy focení.",
  },
  {
    question: "Co když bude špatné počasí?",
    answer:
      "Pokud počasí nebude vhodné pro venkovní focení, společně najdeme náhradní termín. Případně můžeme domluvit ateliérové focení.",
  },
  {
    question: "Jaká je cena focení?",
    answer:
      "Ceník najdete na webu nebo vám ráda připravím individuální nabídku podle vašich představ a rozsahu focení.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="relative mb-20 md:ml-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[0.3em] text-brown uppercase mb-4">
              Moje cesta
            </p>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Časté dotazy
            </h3>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-24 h-px bg-brown mt-6 origin-left"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brown mt-8 max-w-lg"
          >
            Zjistěte více o mém přístupu a fotografické cestě
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl md:ml-12 space-y-6">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="border-b border-brown/20 pb-4 group"
              onClick={() => toggle(i)}
            >
              <button className="w-full flex justify-between items-center text-left">
                <span className="text-xl font-medium text-foreground group-hover:underline">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-brown text-3xl leading-none"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-text-light mt-4 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
