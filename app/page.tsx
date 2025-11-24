import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      <Header />
      <div className="max-w-4xl mx-auto px-6">
        <Hero />
        <Projects />
        {/* Tu peux ajouter <About /> et <Footer /> ici plus tard */}
        <div className="h-20"></div> {/* Espace vide en bas */}
      </div>
    </main>
  );
}
