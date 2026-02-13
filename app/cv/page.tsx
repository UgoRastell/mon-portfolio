import type { Metadata } from "next";
import CVContent from "@/components/CVContent";

export const metadata: Metadata = {
  title: "CV - Ugo Rastell",
  description: "CV de Ugo Rastell, développeur web Full Stack & Chef de Projet Digital.",
  openGraph: {
    title: "CV - Ugo Rastell",
    description: "CV de Ugo Rastell, développeur web Full Stack & Chef de Projet Digital.",
  },
};

export default function CVPage() {
  return <CVContent />;
}
