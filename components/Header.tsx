import Link from "next/link";
import { DATA } from "@/data/portfolio";

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-white border-b-2 border-black">
            <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="font-black text-2xl tracking-tighter uppercase hover:underline decoration-4 underline-offset-4">
                    {DATA.name}
                </Link>
                <nav className="hidden md:flex gap-8 text-base font-bold uppercase tracking-wide">
                    <Link href="#about" className="hover:underline decoration-2 underline-offset-4">À propos</Link>
                    <Link href="#skills" className="hover:underline decoration-2 underline-offset-4">Skills</Link>
                    <Link href="#projects" className="hover:underline decoration-2 underline-offset-4">Projets</Link>
                    <Link href="#experience" className="hover:underline decoration-2 underline-offset-4">Expérience</Link>
                </nav>
                <Link 
                    href="mailto:urastell@protonmail.com" 
                    className="hidden md:inline-block bg-black text-white px-6 py-2 font-bold border-2 border-black hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                    Contact
                </Link>
            </div>
        </header>
    );
}
