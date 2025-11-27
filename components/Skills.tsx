'use client';
import { DATA } from "@/data/portfolio";
import { Badge } from "./ui/Badge";
import { motion } from "framer-motion";

export default function Skills() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">Compétences</h2>
            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-wrap gap-4"
            >
                {DATA.skills.map((skill) => (
                    <motion.div key={skill} variants={item}>
                        <Badge className="text-lg px-6 py-3 hover:bg-black hover:text-white transition-colors cursor-default">
                            {skill}
                        </Badge>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
