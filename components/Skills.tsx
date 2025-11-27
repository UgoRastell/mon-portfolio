'use client';
import { DATA } from "@/data/portfolio";
import { motion, Variants } from "framer-motion";

export default function Skills() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 50, rotate: 10 },
        show: {
            opacity: 1,
            y: 0,
            rotate: 0,
            transition: { type: "spring", stiffness: 260, damping: 20 }
        }
    };

    return (
        <section id="skills" className="py-24 overflow-hidden">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-center md:text-left">
                Compétences
            </h2>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
                {DATA.skills.map((skill, index) => (
                    <motion.div
                        key={skill}
                        variants={item}
                        whileHover={{
                            scale: 1.1,
                            rotate: index % 2 === 0 ? -3 : 3,
                            transition: { duration: 0.2 }
                        }}
                        className="cursor-pointer relative group"
                    >
                        <div className="relative z-10 border-4 border-black bg-white px-8 py-4 text-xl md:text-2xl font-bold uppercase tracking-tight shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]">
                            {skill}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
