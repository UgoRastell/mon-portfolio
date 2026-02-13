import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ugorastell.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ugo Rastell - Développeur Web & Créatif",
  description: "Portfolio de Ugo Rastell, développeur web spécialisé en React, Next.js et design d'interface.",
  openGraph: {
    title: "Ugo Rastell - Développeur Web & Créatif",
    description: "Portfolio de Ugo Rastell, développeur web spécialisé en React, Next.js et design d'interface.",
    url: siteUrl,
    siteName: "Ugo Rastell Portfolio",
    images: [
      {
        url: "/me.jpg",
        width: 800,
        height: 600,
        alt: "Ugo Rastell",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ugo Rastell - Développeur Web & Créatif",
    description: "Portfolio de Ugo Rastell, développeur web spécialisé en React, Next.js et design d'interface.",
    images: ["/me.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ugo Rastell",
    url: siteUrl,
    jobTitle: "Développeur Web Full Stack & Chef de Projet Digital",
    sameAs: [
      "https://github.com/UgoRastell",
      "https://www.linkedin.com/in/ugo-rastell",
    ],
  };

  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
