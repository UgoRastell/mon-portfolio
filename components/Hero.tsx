'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { DATA } from "@/data/portfolio";
import { Button } from "./ui/Button";
import Link from "next/link";

export default function Hero() {
    // Animation variants for text reveal
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
            },
        },
    };

    return (
        <section className="min-h-screen flex flex-col justify-center pt-20 md:pt-32 pb-12">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-8 md:gap-12"
            >
                {/* Name Badge */}
                <motion.div variants={itemVariants} className="flex">
                    <span className="bg-black text-white px-4 py-2 text-sm md:text-base font-bold uppercase tracking-widest">
                        {DATA.name}
                    </span>
                </motion.div>

                {/* Main Content: Title + Avatar side-by-side */}
                <div className="grid md:grid-cols-12 gap-6 items-center">
                    {/* Massive Title */}
                    <div className="md:col-span-8 space-y-0">
                        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                            Développeur
                        </motion.h1>
                        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-black">
                            Web &
                        </motion.h1>
                        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                            Chef de Projet
                        </motion.h1>
                    </div>

                    {/* Avatar - Placed next to title on desktop */}
                    <motion.div variants={itemVariants} className="md:col-span-4 flex md:justify-end mt-8 md:mt-0">
                        <div className="relative w-48 h-48 md:w-72 md:h-72 aspect-square">
                            <div className="absolute inset-0 bg-black translate-x-2 translate-y-2"></div>
                            <Image
                                src={DATA.avatarUrl || "/placeholder-user.jpg"}
                                alt={DATA.name}
                                fill
                                className="object-cover border-2 border-black bg-zinc-100 grayscale"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section: Description & Buttons */}
                <div className="grid md:grid-cols-12 gap-8 items-start mt-4 border-t-2 border-zinc-100 pt-8">
                    <motion.div variants={itemVariants} className="md:col-span-8 space-y-8">
                        <p className="text-xl md:text-2xl font-medium text-zinc-600 max-w-3xl leading-relaxed">
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
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
