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

export const metadata: Metadata = {
  title: "Ugo Rastell - Développeur Web & Créatif",
  description: "Portfolio de Ugo Rastell, développeur web spécialisé en React, Next.js et design d'interface.",
  openGraph: {
    title: "Ugo Rastell - Développeur Web & Créatif",
    description: "Portfolio de Ugo Rastell, développeur web spécialisé en React, Next.js et design d'interface.",
    url: "https://ugorastell.com",
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
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
