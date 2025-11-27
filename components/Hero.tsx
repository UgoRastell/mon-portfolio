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
                ease: [0.2, 0.65, 0.3, 0.9],
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

                {/* Massive Title */}
                <div className="space-y-0">
                    <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
                        Développeur
                    </motion.h1>
                    <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-black">
                        Web &
                    </motion.h1>
                    <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
                        Chef de Projet
                    </motion.h1>
                </div>

                {/* Bottom Section: Description, Avatar, Buttons */}
                <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start mt-8 border-t-2 border-zinc-100 pt-8">
                    
                    {/* Description & Buttons */}
                    <motion.div variants={itemVariants} className="md:col-span-7 space-y-8">
                        <p className="text-xl md:text-2xl font-medium text-zinc-600 max-w-2xl leading-relaxed">
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

                    {/* Avatar - Smaller and stylized */}
                    <motion.div variants={itemVariants} className="md:col-span-5 flex md:justify-end">
                        <div className="relative w-48 h-48 md:w-64 md:h-64">
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
            </motion.div>
        </section>
    );
}
