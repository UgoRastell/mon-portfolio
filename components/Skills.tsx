'use client';
import { DATA } from "@/data/portfolio";
import { useRef, useEffect, useState } from "react";

export default function Skills() {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { rootMargin: "-100px" }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" aria-labelledby="skills-title" className="py-24 overflow-hidden">
            <h2 id="skills-title" className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-center md:text-left">
                Compétences
            </h2>

            <div
                ref={ref}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
                {DATA.skills.map((skill, index) => (
                    <div
                        key={skill}
                        className={`cursor-pointer relative group transition-all duration-500 ease-out ${
                            inView
                                ? "opacity-100 translate-y-0 rotate-0"
                                : "opacity-0 translate-y-12 rotate-[10deg]"
                        }`}
                        style={{ transitionDelay: inView ? `${index * 50}ms` : "0ms" }}
                    >
                        <div className={`relative z-10 border-4 border-black bg-white px-8 py-4 text-xl md:text-2xl font-bold uppercase tracking-tight shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform duration-200 ${
                            index % 2 === 0
                                ? "hover:scale-110 hover:-rotate-3"
                                : "hover:scale-110 hover:rotate-3"
                        } group-hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]`}>
                            {skill}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
