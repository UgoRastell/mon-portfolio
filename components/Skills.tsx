import { DATA } from "@/data/portfolio";

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <h2 className="text-2xl font-semibold mb-8 text-zinc-100">Compétences</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {DATA.skills.map((skill) => (
                    <div
                        key={skill}
                        className="p-4 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 text-center"
                    >
                        <span className="text-zinc-300 font-medium">{skill}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
