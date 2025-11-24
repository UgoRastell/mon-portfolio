import { DATA } from "@/data/portfolio";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 mt-20">
            <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <span className="text-zinc-500 text-sm">
                    © {new Date().getFullYear()} {DATA.name}. Tous droits réservés.
                </span>

                <div className="flex gap-6">
                    <Link href={DATA.socials.github} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                        <Github size={20} />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href={DATA.socials.linkedin} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                        <Linkedin size={20} />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href={DATA.socials.twitter} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                        <Twitter size={20} />
                        <span className="sr-only">Twitter</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
