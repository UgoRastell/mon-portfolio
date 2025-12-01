import { DATA } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 border-t-4 border-black mt-20 bg-zinc-50">
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <span className="text-black font-bold text-sm uppercase tracking-widest">
                    © {new Date().getFullYear()} {DATA.name}
                </span>

                <div className="flex gap-8">
                    <Link href={`mailto:${DATA.socials.email}`} className="text-black hover:scale-110 transition-transform bg-white border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                        <Mail size={24} />
                        <span className="sr-only">Email</span>
                    </Link>
                    <Link href={DATA.socials.github} target="_blank" className="text-black hover:scale-110 transition-transform bg-white border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                        <Github size={24} />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href={DATA.socials.linkedin} target="_blank" className="text-black hover:scale-110 transition-transform bg-white border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                        <Linkedin size={24} />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
