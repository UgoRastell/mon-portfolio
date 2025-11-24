'use client'; // Nécessaire pour les animations
import { motion } from "framer-motion";
import { DATA } from "@/data/portfolio";

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center pt-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
            >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                    {DATA.title}
                </h1>
                <p className="text-xl text-zinc-400 max-w-lg">
                    {DATA.description}
                </p>
            </motion.div>
        </section>
    );
}
