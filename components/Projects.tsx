import { DATA } from "@/data/portfolio";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Github, Globe } from "lucide-react";
import Link from "next/link";

export default function Projects() {
    return (
        <section id="projects" aria-labelledby="projects-title" className="py-20">
            <h2 id="projects-title" className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">Projets Sélectionnés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {DATA.projects.map((project) => (
                    <Card key={project.id} className="h-full group hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-bold text-black decoration-2 underline-offset-4">
                                {project.title}
                            </h3>
                            <div className="flex gap-2">
                                {project.link && project.link !== "#" && (
                                    <Link href={project.link} target="_blank" className="z-10">
                                        <Globe className="w-8 h-8 border-2 border-black p-1.5 bg-white text-black hover:bg-black hover:text-white transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
                                    </Link>
                                )}
                                {project.sourceUrl && (
                                    <Link href={project.sourceUrl} target="_blank" className="z-10">
                                        <Github className="w-8 h-8 border-2 border-black p-1.5 bg-white text-black hover:bg-black hover:text-white transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
                                    </Link>
                                )}
                            </div>
                        </div>
                        <p className="text-zinc-700 text-base mb-6 flex-grow font-medium leading-relaxed">
                            {project.desc}
                        </p>
                        <div className="flex gap-2 flex-wrap mt-auto">
                            {project.tech.map((t) => (
                                <Badge key={t} className="text-xs">
                                    {t}
                                </Badge>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
