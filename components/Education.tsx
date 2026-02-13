import { DATA } from "@/data/portfolio";
import { Card } from "./ui/Card";

export default function Education() {
    return (
        <section id="education" aria-labelledby="education-title" className="py-20">
            <h2 id="education-title" className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">Formation</h2>
            <div className="grid gap-8">
                {DATA.education.map((edu, index) => (
                    <Card key={index} className="flex flex-col md:flex-row items-start md:items-center justify-between hover:translate-x-2 transition-transform">
                        <div>
                            <h3 className="text-2xl font-bold text-black">{edu.school}</h3>
                            <p className="text-lg text-zinc-700 font-medium mt-2">{edu.degree}</p>
                        </div>
                        <span className="mt-4 md:mt-0 text-lg font-bold text-black border-b-4 border-black pb-1">
                            {edu.period}
                        </span>
                    </Card>
                ))}
            </div>
        </section>
    );
}
