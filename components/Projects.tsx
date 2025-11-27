import { DATA } from "@/data/portfolio";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">Projets Sélectionnés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {DATA.projects.map((project) => (
                    <Link key={project.id} href={project.link} className="block h-full">
                        <Card className="h-full group hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-black group-hover:underline decoration-2 underline-offset-4">
                                    {project.title}
                                </h3>
                                <ArrowUpRight className="w-6 h-6 border-2 border-black rounded-full p-0.5 bg-black text-white group-hover:bg-white group-hover:text-black transition-colors" />
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
                    </Link>
                ))}
            </div>
        </section>
    );
}
