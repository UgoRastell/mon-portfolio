import { DATA } from "@/data/portfolio";

export default function Education() {
    return (
        <section id="education" className="py-20">
            <h2 className="text-2xl font-semibold mb-8 text-zinc-900">Formation</h2>
            <div className="space-y-8">
                {DATA.education.map((edu, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-zinc-200 pb-6 last:border-0 last:pb-0">
                        <div>
                            <h3 className="text-xl font-medium text-zinc-900">{edu.school}</h3>
                            <p className="text-zinc-600 mt-1">{edu.degree}</p>
                        </div>
                        <span className="text-sm text-zinc-500 font-mono mt-2 sm:mt-0">{edu.period}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
