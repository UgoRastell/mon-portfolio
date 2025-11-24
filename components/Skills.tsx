import { DATA } from "@/data/portfolio";

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <h2 className="text-2xl font-semibold mb-8 text-zinc-100">Compétences</h2>
            <div className="flex flex-wrap gap-3">
                {DATA.skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}
