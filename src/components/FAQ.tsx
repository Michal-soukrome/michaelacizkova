"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "Jak probíhá rezervace?",
    answer:
      "Stačí mi napsat na e-mail foto.michaelacizkova@seznam.cz nebo zavolat na telefonní číslo +420 604 410 116. Společně domluvíme termín, ujasníme si detaily a pak už se budeme jen těšit na samotné focení.",
  },
  {
    question: "Co si vzít na focení?",
    answer:
      "Vše spolu předem domluvíme během krátké konzultace – probereme outfit, barvy i lokaci. Obecně platí: zvolte oblečení, ve kterém se cítíte příjemně, které k sobě vzájemně ladí a barevně nesoupeří s přírodou.",
  },
  {
    question: "Co když dítě nespolupracuje?",
    answer:
      "To je úplně normální a jsem na to zvyklá. Na focení nespěcháme. Dávám velký prostor na pauzy, hru i spontánní chvíle – ty nejkrásnější snímky často vzniknou přesně tehdy, když se nikdo nedívá.",
  },
  {
    question: "Jak dlouho focení trvá?",
    answer:
      "Délka se odvíjí od konkrétního typu a vybraného balíčku:\n\n- Rodinné, párové a těhotenské focení: minimálně 60 minut dle zvoleného balíčku\n- Newborn focení: 60–90 minut \n- Ateliérové focení: 60–90 minut \n- Svatební focení: individuálně\n- Rodinná reportáž: 2–3 hodiny",
  },
  {
    question: "Jak rychle dostanu hotové fotografie?",
    answer:
      "Hotové fotografie obdržíte elektronicky v soukromé online galerii. Přesný termín dodání závisí na sezóně a typu focení - standardně do 2–3 týdnů, u svatebního focení se termín domlouvá individuálně.",
  },
  {
    question: "Kde probíhá focení?",
    answer:
      "Fotím především v oblasti Českého ráje – Jičín, Turnov, Mladějov, Mladá Boleslav a okolí. Doprava je zdarma do 10 km od Mladějova, poté účtuji 8 Kč/km. Na vyžádání dorazím i dál.",
  },
  {
    question: "Fotíte i v Jičíně nebo Turnově?",
    answer:
      "Ano, Jičín a Turnov jsou místa, kde fotím pravidelně. Mám tam oblíbená místa pro různé typy focení – od historického centra Jičína po nádhernou přírodu v okolí Turnova.",
  },
  {
    question: "Jaká místa v Českém ráji doporučujete?",
    answer:
      "Nejraději fotím v Jičíně u Zebína, ve Valdštejnově aleji nebo u Valdštejnské lodžie. Dále v okolí hradu Trosky, na Branžeži u Komárovského rybníka a na dalších malebných místech v Českém ráji. Každé místo má jiné světlo a atmosféru – ráda vám poradím, co se nejlépe hodí pro váš typ focení.",
  },
  {
    question: "Kdy rezervovat newborn focení?",
    answer:
      "Ideálně ještě v těhotenství. Samotné focení pak probíhá nejpozději do 14 dnů od narození miminka. V této době jsou novorozenci nejspokojenější, hodně spí a můžeme tak v klidu zachytit ty nejjemnější detaily tohoto neopakovatelného období.",
  },
  {
    question: "Jaký je rozdíl mezi rodinným focením a rodinnou reportáží?",
    answer:
      "\n\n- Rodinné focení je kombinací přirozených momentů a jemného vedení. Pomohu vám s pózami, poradím, kam a jak se postavit. Cílem jsou autentické portréty a společné rodinné fotografie.\n- Rodinná reportáž zachycuje váš skutečný život takový, jaký je – zcela bez mého zásahu a stylizace. Jde o zachycení každodenních chvil u vás doma, jako je společné hraní, vaření nebo odpočinek.",
  },
  {
    question: "Jaký styl focení preferujete?",
    answer:
      "Přirozený, autentický a reportážní. Nejraději nechávám situace volně plynout a zachycuji skutečné emoce a okamžiky. Pokud si nejste před objektivem jistí, ráda vás celým procesem jemně provedu, abyste se cítili uvolněně.",
  },
  {
    question: "Dostaneme pomoc s výběrem místa?",
    answer:
      "Samozřejmě. Po rezervaci termínu si promluvíme o vašich přáních a stylu. Doporučím vám konkrétní lokality v Českém ráji, které budou nejlépe odpovídat vybranému ročnímu období a typu focení.",
  },
  {
    question: "Co když bude špatné počasí?",
    answer:
      "Počasí řešíme společně. Pokud hrozí déšť, nabídnu náhradní termín nebo alternativní lokaci. V některých případech mlha nebo oblačnost vytvoří úžasnou náladu na fotkách – záleží na vašich preferencích.",
  },
  {
    question: "Fotíte i pro podnikatele nebo firmy?",
    answer:
      "Ano, focení pro podnikatele a živnostníky dělám velmi ráda. Připravím pro vás fotografie na web, sociální sítě nebo pro další marketingové účely. Focení může probíhat přímo u vás ve firmě, v mém ateliéru nebo na vybrané lokaci. Stačí mi napsat a domluvíme podrobnosti na míru.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-12 bg-background overflow-hidden" id="page-wrap-faq">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="relative mb-20 md:ml-12">
          <motion.div initial={false} animate={{ opacity: 1, x: 0 }}>
            <p className="!hidden text-sm tracking-[0.3em] text-brown uppercase mb-4">
              Moje cesta
            </p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Časté dotazy ohledně focení v Českém ráji
            </h1>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mt-6">
              Nejčastější otázky před focením
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-24 h-px bg-brown mt-6 origin-left"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="!hidden text-brown mt-8 max-w-lg"
          >
            Zjistěte více o mém přístupu a fotografické cestě
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl md:ml-12 space-y-6">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="border-b border-brown/20 pb-4 group cursor-pointer"
              onClick={() => toggle(i)}
            >
              <button className="w-full flex justify-between items-center text-left cursor-pointer">
                <h3 className="text-xl font-medium text-foreground group-hover:underline">
                  {item.question}
                </h3>
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
                    <div className="text-text-light mt-4 leading-relaxed">
                      {(() => {
                        const lines = item.answer.split("\n").filter(Boolean);
                        const elements: ReactNode[] = [];
                        let listItems: string[] = [];

                        const flushList = () => {
                          if (listItems.length) {
                            elements.push(
                              <ul
                                key={`list-${elements.length}`}
                                className="list-disc pl-6 space-y-1"
                              >
                                {listItems.map((li, idx) => (
                                  <li key={idx}>{li}</li>
                                ))}
                              </ul>,
                            );
                            listItems = [];
                          }
                        };

                        lines.forEach((line, idx) => {
                          if (line.trim().startsWith("- ")) {
                            listItems.push(line.replace(/^- /, "").trim());
                          } else {
                            flushList();
                            elements.push(
                              <p key={idx} className="mb-4 last:mb-0">
                                {line}
                              </p>,
                            );
                          }
                        });

                        flushList();

                        return elements;
                      })()}
                    </div>
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
