import Link from "next/link";
import { DATA } from "@/data/portfolio";
import NavLinks from "@/components/NavLinks";

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-white border-b-2 border-black">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:font-bold focus:border-2 focus:border-black"
            >
                Aller au contenu
            </a>
            <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="font-black text-2xl tracking-tighter uppercase hover:underline decoration-4 underline-offset-4">
                    {DATA.name}
                </Link>
                <nav aria-label="Navigation principale" className="hidden md:flex gap-8 text-base font-bold uppercase tracking-wide">
                    <NavLinks />
                </nav>
                <Link 
                    href={`mailto:${DATA.socials.email}`}
                    className="hidden md:inline-block bg-black text-white px-6 py-2 font-bold border-2 border-black hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                    Contact
                </Link>
            </div>
        </header>
    );
}
