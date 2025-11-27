'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { DATA } from "@/data/portfolio";
import { Button } from "./ui/Button";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center pt-20">
            <div className="grid md:grid-cols-2 gap-6 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
                            {DATA.title.split(" ").map((word, i) => (
                                <span key={i} className="block">{word}</span>
                            ))}
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-zinc-800 max-w-lg border-l-4 border-black pl-6 py-2">
                            {DATA.description}
                        </p>
                    </div>

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
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                    className="relative justify-self-center md:justify-self-center"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-black translate-x-4 translate-y-4 border-2 border-black"></div>
                        <Image
                            src={DATA.avatarUrl || "/placeholder-user.jpg"}
                            alt={DATA.name}
                            fill
                            className="object-cover border-2 border-black bg-zinc-100 grayscale hover:grayscale-0 transition-all duration-500"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
