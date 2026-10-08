import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: {
    absolute: "Zásady ochrany osobních údajů | Michaela Čížková",
  },
  description:
    "Jak na webu michaelacizkova.cz zpracovávám osobní údaje: kontaktní formulář, cookies, analytika a vaše práva.",
};

const processingPurposes = [
  {
    purpose: "Vyřízení dotazu nebo poptávky z kontaktního formuláře",
    basis:
      "Opatření před uzavřením smlouvy, čl. 6 odst. 1 písm. b) GDPR",
  },
  {
    purpose:
      "Ochrana kontaktního formuláře před spamem a zneužitím (Google reCAPTCHA)",
    basis: "Oprávněný zájem správce, čl. 6 odst. 1 písm. f) GDPR",
  },
  {
    purpose:
      "Komunikace se zájemcem nebo klientem a domluva fotografických služeb",
    basis:
      "Opatření před uzavřením smlouvy nebo plnění smlouvy, čl. 6 odst. 1 písm. b) GDPR",
  },
  {
    purpose: "Poskytování objednaných fotografických služeb",
    basis: "Plnění smlouvy, čl. 6 odst. 1 písm. b) GDPR",
  },
  {
    purpose:
      "Vystavení účetních a daňových dokladů a plnění souvisejících zákonných povinností",
    basis: "Plnění právní povinnosti, čl. 6 odst. 1 písm. c) GDPR",
  },
  {
    purpose: "Analýza návštěvnosti prostřednictvím analytických cookies",
    basis: "Souhlas, čl. 6 odst. 1 písm. a) GDPR",
  },
  {
    purpose:
      "Použití fotografií pro portfolio nebo marketing, pokud je pro dané použití vyžadován souhlas",
    basis: "Souhlas, čl. 6 odst. 1 písm. a) GDPR",
  },
];

const contactFormData = [
  "jméno,",
  "e-mailovou adresu,",
  "typ požadované služby,",
  "předmět a obsah zprávy,",
  "případně další údaje, které mi v rámci poptávky sami poskytnete.",
];

const photographyServiceData = [
  "jméno a kontaktní údaje,",
  "údaje potřebné k domluvě termínu a místa focení,",
  "fakturační údaje,",
  "případně IČO, pokud jde o podnikatele,",
  "fotografie pořízené v rámci objednané služby.",
];

const retentionPeriods = [
  "Údaje z kontaktního formuláře uchovávám po dobu nezbytnou k vyřízení dotazu a případné navazující komunikaci, nejdéle však 2 roky od poslední komunikace.",
  "Kopie zpráv z formuláře mohou být po omezenou dobu uchovávány také ve službě Resend, přes kterou se zprávy odesílají. Dobu stanovuje nastavení této služby.",
  "Údaje související s uzavřenou smlouvou uchovávám po dobu nezbytnou k plnění smlouvy a následnému řešení případných nároků.",
  "Účetní a daňové doklady uchovávám po dobu stanovenou příslušnými právními předpisy.",
  "Fotografie uchovávám po dobu nezbytnou k poskytnutí služby a předání výsledků, případně po dobu sjednanou s klientem.",
  "Pokud byly fotografie použity pro portfolio nebo marketing na základě souhlasu, uchovávám je po dobu trvání tohoto souhlasu.",
  "Údaje zpracovávané prostřednictvím analytických cookies jsou uchovávány po dobu stanovenou příslušným nástrojem a nastavením cookies.",
  "Údaje zpracovávané službou Google reCAPTCHA jsou uchovávány po dobu stanovenou poskytovatelem této služby.",
];

const serviceProviders = [
  "Vercel Inc. – hosting webových stránek",
  "Sanity – redakční systém a správa obsahu webu",
  "Resend – služba pro odesílání e-mailů (doručení zpráv z kontaktního formuláře). Údaje o odeslaných zprávách jsou podle poskytovatele uloženy v USA",
  "Google – Google Analytics (analýza návštěvnosti) a Google reCAPTCHA (ochrana formuláře před spamem)",
  "Microsoft – Microsoft Clarity (analýza používání webu)",
  "Meta Platforms – Instagram a Facebook (komunikace s klienty prostřednictvím zpráv)",
  "Seznam.cz, a.s. – poskytovatel e-mailové schránky (e-mailová komunikace)",
];

const dataRights = [
  "na přístup ke svým osobním údajům,",
  "na opravu nepřesných nebo neúplných údajů,",
  "na výmaz („právo být zapomenut“),",
  "na omezení zpracování,",
  "na přenositelnost údajů,",
  "vznést námitku proti zpracování,",
  "kdykoliv odvolat souhlas se zpracováním, aniž by tím byla dotčena zákonnost zpracování založená na souhlasu uděleném před jeho odvoláním,",
];

const listClassName = "list-disc space-y-2 pl-6";
const paragraphClassName = "mt-4 leading-relaxed";
const headingClassName = "mt-10 text-2xl font-semibold text-foreground";
const subheadingClassName =
  "mt-6 text-lg font-semibold text-foreground";
const linkClassName = "text-brown underline underline-offset-2";

export default function PrivacyPolicyPage() {
  return (
    <Container as="main" className="py-12 sm:py-16">
      <article className="mx-auto max-w-5xl text-text-light">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Zásady ochrany osobních údajů
        </h1>
        <p className="mt-4">Poslední aktualizace: 6.10.2026</p>
        <p className={paragraphClassName}>
          Tyto zásady ochrany osobních údajů vysvětlují, jak jsou na webových
          stránkách michaelacizkova.cz zpracovávány osobní údaje návštěvníků,
          zájemců o fotografické služby a klientů.
        </p>

        <h2 className={headingClassName}>1. Správce osobních údajů</h2>
        <p className={paragraphClassName}>Správcem osobních údajů je:</p>
        <p className="mt-2 leading-relaxed">
          Michaela Čížková
          <br />
          IČO: 23019468
          <br />
          Sídlo: Mladějov 95, 507 45
          <br />
          E-mail:{" "}
          <a className={linkClassName} href="mailto:foto.michaelacizkova@seznam.cz">
            foto.michaelacizkova@seznam.cz
          </a>
          <br />
          Telefon: +420 604 410 116
        </p>
        <p className={paragraphClassName}>(dále jen „správce“).</p>
        <p className={paragraphClassName}>
          V případě dotazů týkajících se zpracování osobních údajů mě můžete
          kontaktovat na výše uvedeném e-mailu.
        </p>

        <h2 className={headingClassName}>2. Jaké osobní údaje zpracovávám</h2>
        <h3 className={subheadingClassName}>2.1 Kontaktní formulář</h3>
        <p className={paragraphClassName}>
          Pokud mě kontaktujete prostřednictvím kontaktního formuláře,
          zpracovávám v souvislosti s vyřízením vašeho dotazu nebo poptávky
          zejména:
        </p>
        <ul className={`${listClassName} mt-3`}>
          {contactFormData.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className={paragraphClassName}>
          Odesláním formuláře berete na vědomí zpracování osobních údajů za
          účelem vyřízení poptávky. Tyto údaje používám k vyřízení vašeho dotazu
          nebo poptávky a případně k přípravě uzavření smlouvy.
        </p>
        <p className={paragraphClassName}>
          Zpráva z formuláře je do mé e-mailové schránky doručena prostřednictvím
          služby Resend určené k odesílání e-mailů.
        </p>
        <p className={paragraphClassName}>
          Formulář je chráněn službou Google reCAPTCHA, která slouží k ochraně
          před spamem a automatizovanými odesláními. Při tom může Google
          vyhodnocovat údaje o zařízení, prohlížeči a chování návštěvníka na
          stránce s formulářem.
        </p>

        <h3 className={subheadingClassName}>
          2.2 Komunikace e-mailem, telefonem a na sociálních sítích
        </h3>
        <p className={paragraphClassName}>
          Pokud mě kontaktujete e-mailem, telefonicky nebo prostřednictvím zpráv
          na Instagramu či Facebooku, zpracovávám údaje, které mi v rámci
          komunikace sami poskytnete, například jméno, kontaktní údaje,
          informace o požadované službě, termínu, místě focení a další informace
          potřebné k domluvě.
        </p>
        <p className={paragraphClassName}>
          Při komunikaci přes sociální sítě zpracovává údaje také provozovatel
          dané sítě podle vlastních podmínek a zásad ochrany osobních údajů.
        </p>

        <h3 className={subheadingClassName}>
          2.3 Poskytování fotografických služeb
        </h3>
        <p className={paragraphClassName}>
          Pokud si objednáte fotografické služby, mohu zpracovávat zejména:
        </p>
        <ul className={`${listClassName} mt-3`}>
          {photographyServiceData.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className={paragraphClassName}>
          Fotografie uchovávám po dobu nezbytnou k poskytnutí služby a předání
          výsledných fotografií, případně po dobu sjednanou s klientem.
        </p>
        <p className={paragraphClassName}>
          Pokud chci fotografie použít pro své portfolio, prezentaci nebo
          marketing, činím tak pouze na základě příslušného právního titulu.
          Pokud je pro dané použití vyžadován souhlas, získávám jej samostatně.
        </p>

        <h3 className={subheadingClassName}>
          2.4 Údaje z návštěvy webu a analytických nástrojů
        </h3>
        <p className={paragraphClassName}>
          Web využívá analytické nástroje Google Analytics 4 a Microsoft Clarity
          k analýze návštěvnosti a používání webu.
        </p>
        <p className={paragraphClassName}>
          Tyto nástroje jsou aktivovány pouze na základě vašeho souhlasu
          uděleného prostřednictvím cookie lišty. Mohou zpracovávat technické
          údaje o zařízení, údaje o návštěvě webu a informace o interakcích s
          webovou stránkou.
        </p>

        <h2 className={headingClassName}>
          3. Účely a právní základy zpracování
        </h2>
        <div className="sm:hidden">
          <div className="space-y-3">
            {processingPurposes.map(({ purpose, basis }) => (
              <div
                key={purpose}
                className="rounded-lg border border-brown/30 bg-cream/30 p-4"
              >
                <h3 className="font-semibold text-foreground">
                  Účel zpracování
                </h3>
                <p className="mt-1 leading-relaxed">{purpose}</p>
                <h3 className="mt-3 font-semibold text-foreground">
                  Právní základ
                </h3>
                <p className="mt-1 leading-relaxed">{basis}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden overflow-x-auto sm:block">
          <table className="mt-4 w-full table-fixed border-collapse text-left">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="w-1/2 border border-brown/30 bg-cream/50 p-3 font-semibold text-foreground"
                >
                  Účel zpracování
                </th>
                <th
                  scope="col"
                  className="w-1/2 border border-brown/30 bg-cream/50 p-3 font-semibold text-foreground"
                >
                  Právní základ
                </th>
              </tr>
            </thead>
            <tbody>
              {processingPurposes.map(({ purpose, basis }) => (
                <tr key={purpose}>
                  <td className="break-words border border-brown/30 p-3 align-top">
                    {purpose}
                  </td>
                  <td className="break-words border border-brown/30 p-3 align-top">
                    {basis}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className={headingClassName}>
          4. Jak dlouho osobní údaje uchovávám
        </h2>
        <ul className={`${listClassName} mt-4`}>
          {retentionPeriods.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className={headingClassName}>
          5. Kdo může mít k osobním údajům přístup
        </h2>
        <p className={paragraphClassName}>
          Osobní údaje mohou být v nezbytném rozsahu zpřístupněny poskytovatelům
          služeb, kteří zajišťují provoz a správu webu, ochranu formuláře,
          používané analytické nástroje nebo komunikaci s klienty:
        </p>
        <ul className={`${listClassName} mt-3`}>
          {serviceProviders.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className={paragraphClassName}>
          Rozsah předávaných údajů závisí na konkrétní službě a jejím technickém
          nastavení. Někteří poskytovatelé mohou zpracovávat osobní údaje také
          mimo Evropský hospodářský prostor — v takových případech jsou
          používány příslušné mechanismy pro mezinárodní předávání podle GDPR
          (např. standardní smluvní doložky).
        </p>
        <p className={paragraphClassName}>
          U služby Resend (Plus Five Five, Inc., USA) je předání údajů do USA
          zajištěno standardními smluvními doložkami, které jsou součástí
          smlouvy o zpracování údajů s poskytovatelem, a dále účastí
          poskytovatele v rámci EU-U.S. Data Privacy Framework.
        </p>
        <p className={paragraphClassName}>
          Osobní údaje neprodávám ani je nepředávám třetím stranám za účelem
          jejich vlastního marketingu.
        </p>

        <h2 className={headingClassName}>6. Vaše práva</h2>
        <p className={paragraphClassName}>
          V souvislosti se zpracováním vašich osobních údajů máte podle GDPR
          právo:
        </p>
        <ul className={`${listClassName} mt-3`}>
          {dataRights.map((item) => (
            <li key={item}>{item}</li>
          ))}
          <li>
            podat stížnost u Úřadu pro ochranu osobních údajů (
            <a
              className={linkClassName}
              href="https://www.uoou.cz"
              rel="noopener noreferrer"
              target="_blank"
            >
              www.uoou.cz
            </a>
            ), pokud se domníváte, že zpracování vašich osobních údajů porušuje
            předpisy o ochraně osobních údajů.
          </li>
        </ul>
        <p className={paragraphClassName}>
          Pro uplatnění kteréhokoliv z těchto práv mě kontaktujte na e-mailu{" "}
          <a className={linkClassName} href="mailto:foto.michaelacizkova@seznam.cz">
            foto.michaelacizkova@seznam.cz
          </a>
          .
        </p>

        <h2 className={headingClassName}>7. Zabezpečení údajů</h2>
        <p className={paragraphClassName}>
          Přijala jsem vhodná technická a organizační opatření k zabezpečení
          vašich osobních údajů proti neoprávněnému přístupu, ztrátě nebo
          zneužití.
        </p>

        <h2 className={headingClassName}>8. Automatizované rozhodování</h2>
        <p className={paragraphClassName}>
          Při zpracování osobních údajů nedochází k automatizovanému
          individuálnímu rozhodování ani profilování ve smyslu čl. 22 GDPR.
        </p>

        <h2 className={headingClassName}>9. Změny těchto zásad</h2>
        <p className={paragraphClassName}>
          Tyto zásady mohu čas od času aktualizovat, například v souvislosti se
          změnou legislativy nebo změnou používaných nástrojů. Aktuální verze
          je vždy dostupná na této stránce.
        </p>
      </article>
    </Container>
  );
}
