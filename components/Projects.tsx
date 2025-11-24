import { DATA } from "@/data/portfolio";

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <h2 className="text-2xl font-semibold mb-8 text-zinc-100">Projets Sélectionnés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {DATA.projects.map((project) => (
                    <a
                        key={project.id}
                        href={project.link}
                        className="group block p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-medium text-zinc-100 group-hover:text-white">
                                {project.title}
                            </h3>
                            {/* Petite flèche qui bouge au survol */}
                            <span className="text-zinc-500 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">↗</span>
                        </div>
                        <p className="text-zinc-400 text-sm mb-4">{project.desc}</p>
                        <div className="flex gap-2 flex-wrap">
                            {project.tech.map((t) => (
                                <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 text-zinc-300">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
