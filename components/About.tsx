import { DATA } from "@/data/portfolio";

export default function About() {
    return (
        <section id="about" className="py-20">
            <h2 className="text-2xl font-semibold mb-8 text-zinc-100">À propos</h2>
            <div className="prose prose-zinc prose-invert max-w-none">
                <p className="text-zinc-400 text-lg leading-relaxed">
                    {DATA.about}
                </p>
            </div>
        </section>
    );
}
