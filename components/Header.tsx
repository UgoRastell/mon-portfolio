import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10 bg-black/50">
            <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                <span className="font-bold text-lg tracking-tight">TonNom.</span>
                <nav className="flex gap-6 text-sm font-medium text-zinc-400">
                    <Link href="#projects" className="hover:text-white transition-colors">Projets</Link>
                    <Link href="#about" className="hover:text-white transition-colors">À propos</Link>
                    <Link href="mailto:tonemail@gmail.com" className="hover:text-white transition-colors">Contact</Link>
                </nav>
            </div>
        </header>
    );
}
