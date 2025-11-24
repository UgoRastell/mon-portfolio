import { DATA } from "@/data/portfolio";

export default function Education() {
    return (
        <section id="education" className="py-20">
            <h2 className="text-2xl font-semibold mb-8 text-zinc-100">Formation</h2>
            <div className="grid gap-6">
                {DATA.education.map((edu, index) => (
                    <div key={index} className="p-6 rounded-xl border border-white/5 bg-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h3 className="text-lg font-medium text-zinc-100">{edu.school}</h3>
                            <p className="text-zinc-400">{edu.degree}</p>
                        </div>
                        <span className="text-sm text-zinc-500 font-mono mt-2 sm:mt-0">{edu.period}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
