import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      <Header />
      <div className="max-w-4xl mx-auto px-6">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Footer />
        <div className="h-10"></div>
      </div>
    </main>
  );
}
