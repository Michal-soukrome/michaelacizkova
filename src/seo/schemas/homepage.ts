const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://michaelacizkova.cz/#person",
      name: "Michaela Čížková",
      jobTitle: "Fotografka",
      description:
        "Fotografka z Českého ráje se sídlem v Mladějově. Specializuje se na rodinné focení, newborn, těhotenské, párové, svatební a reportážní focení.",
      image: "https://michaelacizkova.cz/assets/img/portret.jpg",
      url: "https://michaelacizkova.cz",
      telephone: "+420604410116",
      email: "foto.michaelacizkova@seznam.cz",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://michaelacizkova.cz",
      },
      knowsAbout: [
        "Rodinné focení v exteriéru",
        "Newborn fotografie v přirozeném prostředí",
        "Reportážní focení oslav a rodinných akcí",
        "Těhotenské focení v přírodě",
        "Práce s přirozeným světlem v členitém terénu",
        "Výběr vhodných lokalit v Českém ráji",
        "Focení rodin na Radouči a na Štěpánce v Mladé Boleslavi",
        "Práce s dětmi při rodinném focení",
      ],
      sameAs: [
        "https://www.facebook.com/profile.php?id=61553976984513",
        "https://www.instagram.com/michaelacizkova_foto/",
        "https://www.firmy.cz/detail/13796702-fotografka-michaela-cizkova-mladejov.html",
      ],
      worksFor: {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://michaelacizkova.cz/#business",
      },
    },
    {
      "@type": ["ProfessionalService", "Photographer"],
      "@id": "https://michaelacizkova.cz/#business",
      name: "Michaela Čížková – fotografka",
      description:
        "Fotografické služby v oblasti Českého ráje. Rodinná, newborn, svatební a reportážní fotografie se sídlem v Mladějově.",
      image: "https://michaelacizkova.cz/assets/img/portret.jpg",
      url: "https://michaelacizkova.cz",
      telephone: "+420604410116",
      email: "foto.michaelacizkova@seznam.cz",
      founder: {
        "@id": "https://michaelacizkova.cz/#person",
      },
      identifier: {
        "@type": "PropertyValue",
        propertyID: "IČO",
        value: "23019468",
      },
      areaServed: [
        {
          "@type": "Place",
          name: "Český ráj",
          sameAs: "https://www.wikidata.org/wiki/Q8465664",
        },
        {
          "@type": "City",
          name: "Mladějov",
          sameAs: "https://www.wikidata.org/wiki/Q176874",
        },
        {
          "@type": "City",
          name: "Jičín",
          sameAs: "https://www.wikidata.org/wiki/Q656603",
        },
        {
          "@type": "City",
          name: "Turnov",
          sameAs: "https://www.wikidata.org/wiki/Q851419",
        },
        {
          "@type": "City",
          name: "Sobotka",
          sameAs: "https://www.wikidata.org/wiki/Q1756917",
        },
        {
          "@type": "City",
          name: "Mladá Boleslav",
          sameAs: "https://www.wikidata.org/wiki/Q191805",
        },
      ],
      serviceArea: [
        {
          "@type": "Place",
          name: "Český ráj",
          sameAs: "https://www.wikidata.org/wiki/Q8465664",
        },
        {
          "@type": "City",
          name: "Jičín",
          sameAs: "https://www.wikidata.org/wiki/Q656603",
        },
        {
          "@type": "City",
          name: "Turnov",
          sameAs: "https://www.wikidata.org/wiki/Q851419",
        },
        {
          "@type": "City",
          name: "Mladá Boleslav",
          sameAs: "https://www.wikidata.org/wiki/Q191805",
        },
        {
          "@type": "City",
          name: "Sobotka",
          sameAs: "https://www.wikidata.org/wiki/Q1756917",
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mladějov",
        postalCode: "50745",
        addressCountry: "CZ",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "50.4821",
        longitude: "15.2326",
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61553976984513",
        "https://www.instagram.com/michaelacizkova_foto/",
        "https://www.firmy.cz/detail/13796702-fotografka-michaela-cizkova-mladejov.html",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Fotografické služby",
        itemListElement: [
          {
            "@type": "Offer",
            url: "https://michaelacizkova.cz/sluzby",
            itemOffered: {
              "@type": "Service",
              name: "Rodinné, párové a těhotenské focení",
              description:
                "Fotografování v přírodě nebo u vás doma. Balíčky dle rozsahu.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: "2800",
              maxPrice: "7500",
              priceCurrency: "CZK",
            },
          },
          {
            "@type": "Offer",
            url: "https://michaelacizkova.cz/sluzby",
            itemOffered: {
              "@type": "Service",
              name: "Newborn focení novorozenců",
              description:
                "Přirozené newborn focení miminek doma nebo v ateliéru.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "3200",
              priceCurrency: "CZK",
            },
          },
          {
            "@type": "Offer",
            url: "https://michaelacizkova.cz/sluzby",
            itemOffered: {
              "@type": "Service",
              name: "Ateliérové focení",
              description:
                "Portrétní, párové nebo rodinné snímky v ateliéru v Mladějově.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "3200",
              priceCurrency: "CZK",
            },
          },
          {
            "@type": "Offer",
            url: "https://michaelacizkova.cz/sluzby",
            itemOffered: {
              "@type": "Service",
              name: "Svatební focení",
              description:
                "Reportážní svatební fotografie, od příprav po večerní zábavu.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "CZK",
              description: "Cena na míru dle rozsahu.",
            },
          },
          {
            "@type": "Offer",
            url: "https://michaelacizkova.cz/sluzby",
            itemOffered: {
              "@type": "Service",
              name: "Reportážní focení akcí a oslav",
              description:
                "Focení rodinných oslav, narozenin, křtin a společenských událostí.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "8000",
              priceCurrency: "CZK",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://michaelacizkova.cz/#website",
      url: "https://michaelacizkova.cz",
      name: "Michaela Čížková",
      publisher: {
        "@id": "https://michaelacizkova.cz/#business",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://michaelacizkova.cz/#homepage",
      url: "https://michaelacizkova.cz",
      isPartOf: {
        "@id": "https://michaelacizkova.cz/#website",
      },
      about: {
        "@id": "https://michaelacizkova.cz/#business",
      },
    },
    {
      "@type": "ImageObject",
      "@id": "https://michaelacizkova.cz/#portrait",
      contentUrl: "https://michaelacizkova.cz/assets/img/portret.jpg",
      creator: {
        "@id": "https://michaelacizkova.cz/#person",
      },
    },
  ],
};

export default homepageSchema;
