import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Michaela Čížková | Profesionální fotografka",
    template: "%s | Michaela Čížková",
  },
  description:
    "Ve fotografii miluji emoce, přirozenost a jednoduchost. Pokud máte rádi to samé, tak jste tu správně. Zachytím pro vás obyčejné chvíle a proměním je v neobyčejný zážitek a vzpomínku, která vám zůstane navždy.",
  keywords: [
    "fotografka",
    "fotografické portfolio",
    "portrétní fotografie",
    "umělecká fotografie",
    "profesionální fotografka",
    "Michaela Čížková",
    "Praha",
    "Česká republika",
  ],
  authors: [{ name: "Michaela Čížková" }],
  creator: "Michaela Čížková",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://michaelacizkova.cz",
    siteName: "Michaela Čížková Fotografie",
    title: "Michaela Čížková | Profesionální fotografka",
    description:
      "Ve fotografii miluji emoce, přirozenost a jednoduchost. Pokud máte rádi to samé, tak jste tu správně. Zachytím pro vás obyčejné chvíle a proměním je v neobyčejný zážitek a vzpomínku, která vám zůstane navždy.",
    images: [
      {
        url: "https://michaelacizkova.cz/assets/1.jpg",
        width: 1200,
        height: 630,
        alt: "Michaela Čížková Fotografie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michaela Čížková | Profesionální fotografka",
    description:
      "Ve fotografii miluji emoce, přirozenost a jednoduchost. Pokud máte rádi to samé, tak jste tu správně. Zachytím pro vás obyčejné chvíle a proměním je v neobyčejný zážitek a vzpomínku, která vám zůstane navždy.",
    images: ["https://michaelacizkova.cz/assets/1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://michaelacizkova.cz"),
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TT5XXCX5');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${lora.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TT5XXCX5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header />
        <main className="-mt-16" id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
