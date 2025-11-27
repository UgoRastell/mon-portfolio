import { DATA } from "@/data/portfolio";
import { Card } from "./ui/Card";

export default function About() {
    return (
        <section id="about" className="py-20">
            <div className="flex flex-col gap-8">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">À propos</h2>
                <Card className="bg-zinc-50 border-2 border-black transform rotate-1 hover:rotate-0 transition-transform duration-300">
                    <p className="text-xl md:text-2xl font-medium leading-relaxed">
                        {DATA.about}
                    </p>
                </Card>
            </div>
        </section>
    );
}
