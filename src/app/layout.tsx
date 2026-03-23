import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <main className="-mt-16" id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
