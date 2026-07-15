export type AppPageMetadata = {
  title: string;
  description?: string;
};

export const homePageMetadata: AppPageMetadata = {
  title: "Rodinná a svatební fotografka Český ráj | Michaela Čížková",
  description:
    "Rodinná a svatební fotografka z Českého ráje. Fotím rodiny, svatby, novorozence a těhotné v okolí Jičína, Turnova a Mladé Boleslavi.",
};

export const faqPageMetadata: AppPageMetadata = {
  title: "Časté dotazy – focení v Českém ráji",
  description:
    "Odpovědi na dotazy o focení v Českém ráji. Zjistěte, jak se připravit, kdy rezervovat termín newborn a jak dlouho trvá dodání fotografií.",
};

export const contactPageMetadata: AppPageMetadata = {
  title: "Kontakt – rezervace focení | Michaela Čížková fotografka",
  description:
    "Rezervujte si termín focení. Fotím v Jičíně, Turnově, Sobotce a Mladé Boleslavi. Doprava zdarma do 10 km od Mladějova. Napište mi.",
};

export const aboutPageMetadata: AppPageMetadata = {
  title: "O mně – fotografka z Českého ráje | Michaela Čížková",
  description:
    "Jsem Michaela Čížková, fotografka z Mladějova v Českém ráji. Poznejte můj přístup k fotografii a práci s rodinami.",
};

export const portfolioPageMetadata: AppPageMetadata = {
  title:
    "Portfolio – rodinné, svatební a newborn focení | Michaela Čížková fotografka",
  description:
    "Ukázky rodinného, těhotenského, newborn i svatebního focení z Českého ráje, Jičína, Turnova a okolí.",
};

export const servicesPageMetadata: AppPageMetadata = {
  title: "Fotografické služby – rodinné, svatební a newborn focení",
  description:
    "Profesionální rodinné focení, newborn, těhotenské, reportážní a svatební fotografie. Podívejte se na nabídku balíčků a ceník služeb.",
};

export const blogPageMetadata: AppPageMetadata = {
  title: "Blog – tipy na focení v Českém ráji",
  description:
    "Přečtěte si tipy na focení, doporučené lokality v Českém ráji, rady k přípravě na rodinné, těhotenské i svatební focení.",
};

export const notFoundPageMetadata: AppPageMetadata = {
  title: "Stránka nenalezena",
};

export const appPageMetadata = {
  "/": homePageMetadata,
  "/faq": faqPageMetadata,
  "/kontakt": contactPageMetadata,
  "/o-mne": aboutPageMetadata,
  "/portfolio": portfolioPageMetadata,
  "/sluzby": servicesPageMetadata,
  "/blog": blogPageMetadata,
  "/404": notFoundPageMetadata,
} as const;
