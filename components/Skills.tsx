import { DATA } from "@/data/portfolio";

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <h2 className="text-2xl font-semibold mb-8 text-zinc-900">Compétences</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {DATA.skills.map((skill) => (
                    <div
                        key={skill}
                        className="p-4 rounded-lg border border-black/5 bg-zinc-50 hover:bg-zinc-100 hover:border-black/10 transition-all duration-300 text-center"
                    >
                        <span className="text-zinc-700 font-medium">{skill}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
