'use client'; // Nécessaire pour les animations
import { motion } from "framer-motion";
import Image from "next/image";
import { DATA } from "@/data/portfolio";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center pt-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12"
            >
                <div className="space-y-4 flex-1 text-center md:text-left">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                        {DATA.title}
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-lg mx-auto md:mx-0">
                        {DATA.description}
                    </p>
                </div>

                <div className="relative w-32 h-32 md:w-48 md:h-48 shrink-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-500 blur-lg opacity-50"></div>
                    <Image
                        src={DATA.avatarUrl || "/placeholder-user.jpg"}
                        alt={DATA.name}
                        width={200}
                        height={200}
                        className="rounded-full object-cover border-2 border-white/10 relative z-10"
                        priority
                    />
                </div>
            </motion.div>
        </section>
    );
}
