import Image from "next/image";
import { DATA } from "@/data/portfolio";
import { Button } from "./ui/Button";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center pt-20 md:pt-32 pb-12">
            <div className="flex flex-col gap-8 md:gap-12">
                {/* Main Content: Title + Avatar side-by-side */}
                <div className="grid md:grid-cols-12 gap-6 items-center">
                    {/* Massive Title */}
                    <div className="md:col-span-8 space-y-0">
                        <h1 className="animate-fade-in-up text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85]" style={{ animationDelay: "0.3s" }}>
                            Développeur
                        </h1>
                        <h1 className="animate-fade-in-up text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85]" style={{ animationDelay: "0.4s" }}>
                            Web &
                        </h1>
                        <h1 className="animate-fade-in-up text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85]" style={{ animationDelay: "0.5s" }}>
                            Chef de Projet
                        </h1>
                    </div>

                    {/* Avatar - Placed next to title on desktop */}
                    <div className="animate-fade-in-up md:col-span-4 flex md:justify-end mt-8 md:mt-0" style={{ animationDelay: "0.6s" }}>
                        <div className="relative w-48 h-48 md:w-72 md:h-72 aspect-square">
                            <div className="absolute inset-0 bg-black translate-x-2 translate-y-2"></div>
                            <Image
                                src={DATA.avatarUrl}
                                alt={`Photo de profil de ${DATA.name}`}
                                fill
                                className="object-cover border-2 border-black bg-zinc-100 grayscale"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Description & Buttons */}
                <div className="grid md:grid-cols-12 gap-8 items-start mt-4 border-t-2 border-zinc-100 pt-8">
                    <div className="animate-fade-in-up md:col-span-8 space-y-8" style={{ animationDelay: "0.7s" }}>
                        <p className="text-xl md:text-2xl font-medium text-zinc-700 max-w-3xl leading-relaxed">
                            {DATA.description}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href="#projects">
                                <Button className="text-lg px-8 py-6">
                                    Voir mes projets
                                </Button>
                            </Link>
                            <Link href="#about">
                                <Button variant="outline" className="text-lg px-8 py-6">
                                    En savoir plus
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
