import { DATA } from "@/data/portfolio";
import { Card } from "./ui/Card";

export default function Experience() {
    return (
        <section id="experience" aria-labelledby="experience-title" className="py-20">
            <h2 id="experience-title" className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">Expérience</h2>
            <div className="space-y-8">
                {DATA.experience.map((exp, index) => (
                    <Card key={index} className="flex flex-col md:flex-row gap-6 md:items-start justify-between group hover:border-l-[12px] transition-all duration-200">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-black">{exp.company}</h3>
                            <p className="text-xl font-semibold text-zinc-700 mt-1">{exp.role}</p>
                            <p className="text-base text-zinc-800 mt-4 leading-relaxed max-w-prose">
                                {exp.description}
                            </p>
                        </div>
                        <div className="shrink-0">
                            <span className="inline-block bg-black text-white font-bold px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                                {exp.period}
                            </span>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
