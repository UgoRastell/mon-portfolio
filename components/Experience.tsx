import { DATA } from "@/data/portfolio";

export default function Experience() {
    return (
        <section id="experience" className="py-20">
            <h2 className="text-2xl font-semibold mb-8 text-zinc-100">Expérience</h2>
            <div className="space-y-8">
                {DATA.experience.map((exp, index) => (
                    <div key={index} className="relative pl-8 border-l border-white/10 last:border-0">
                        <span className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-zinc-500 ring-4 ring-[#09090b]" />
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-medium text-zinc-100">{exp.company}</h3>
                            <span className="text-sm text-zinc-500 font-mono">{exp.period}</span>
                        </div>
                        <p className="text-zinc-300 mb-2">{exp.role}</p>
                        <p className="text-zinc-400 text-sm max-w-2xl">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
