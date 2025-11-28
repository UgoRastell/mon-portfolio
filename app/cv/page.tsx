'use client';

import { DATA } from "@/data/portfolio";
import { Github, Linkedin, Mail, Globe, MapPin, Printer, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function CV() {
  return (
    <div className="min-h-screen bg-zinc-100 p-4 md:p-8 print:p-0 print:bg-white">
      {/* Navigation & Print Button - Hidden in print */}
      <div className="max-w-[210mm] mx-auto mb-8 flex justify-between items-center print:hidden">
        <Link href="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Retour au site
          </Button>
        </Link>
        <Button onClick={() => window.print()} className="gap-2">
          <Printer className="w-4 h-4" />
          Imprimer le CV
        </Button>
      </div>

      {/* A4 Page Container */}
      <div className="w-[210mm] h-[297mm] mx-auto bg-white shadow-2xl print:shadow-none print:w-[210mm] print:h-[297mm] overflow-hidden relative">
        <div className="p-6 md:p-8 flex flex-col gap-5 h-full">

          {/* Header */}
          <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b-4 border-black pb-5 shrink-0">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">{DATA.name}</h1>
              <p className="text-lg md:text-xl font-bold text-zinc-800">{DATA.title}</p>

              <div className="flex flex-wrap gap-4 mt-4 text-sm font-bold text-zinc-800">
                {/* Note: You might want to add email/phone to DATA if you want them displayed */}
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Rouen, France</span>
                </div>
                {DATA.socials.linkedin && (
                  <a href={DATA.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-black transition-colors">
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                )}
                {DATA.socials.github && (
                  <a href={DATA.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-black transition-colors">
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                )}
                <a href="https://ugorastell.fr" className="flex items-center gap-1 hover:text-black transition-colors">
                  <Globe className="w-4 h-4" />
                  <span>ugorastell.fr</span>
                </a>
              </div>
            </div>

            <div className="relative w-32 h-32 shrink-0 hidden md:block">
              <Image
                src={DATA.avatarUrl || "/placeholder-user.jpg"}
                alt={DATA.name}
                fill
                className="object-cover rounded-full border-2 border-black grayscale"
              />
            </div>
          </header>

          <div className="flex flex-col gap-10">
            {/* Profile */}
            <section>
              <h2 className="text-lg font-black uppercase border-b-2 border-black pb-1 mb-3 flex items-center gap-2">
                <span className="bg-black text-white px-2 py-0.5 text-sm">01</span>
                Profil
              </h2>
              <p className="text-zinc-700 text-sm leading-relaxed text-justify font-medium">
                {DATA.about}
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Main Column (Left) */}
              <div className="md:col-span-2 flex flex-col gap-10">
                {/* Experience */}
                <section>
                  <h2 className="text-lg font-black uppercase border-b-2 border-black pb-1 mb-4 flex items-center gap-2">
                    <span className="bg-black text-white px-2 py-0.5 text-sm">02</span>
                    Expérience
                  </h2>
                  <div className="space-y-8">
                    {DATA.experience.map((exp, i) => (
                      <div key={i} className="relative pl-4 border-l-4 border-zinc-200 hover:border-black transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                          <h3 className="font-black text-sm uppercase">{exp.role}</h3>
                          <span className="text-[10px] font-bold text-black bg-zinc-100 border border-black px-2 py-0.5 rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">{exp.period}</span>
                        </div>
                        <div className="text-xs font-bold text-zinc-700 mb-2">{exp.company}</div>
                        <p className="text-xs text-zinc-600 font-medium leading-relaxed">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar Column (Right) */}
              <div className="flex flex-col gap-10">
                {/* Education */}
                <section>
                  <h2 className="text-lg font-black uppercase border-b-2 border-black pb-1 mb-4">Formation</h2>
                  <div className="space-y-6">
                    {DATA.education.map((edu, i) => (
                      <div key={i} className="border-l-2 border-black pl-3">
                        <h3 className="font-bold text-sm leading-tight mb-0.5">{edu.degree}</h3>
                        <div className="text-xs font-medium text-zinc-700 mb-0.5">{edu.school}</div>
                        <span className="text-[10px] text-zinc-500 font-mono">{edu.period}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Skills */}
                <section>
                  <h2 className="text-lg font-black uppercase border-b-2 border-black pb-1 mb-3">Compétences</h2>
                  <div className="flex flex-col gap-6">

                    {/* Frontend */}
                    <div>
                      <h3 className="text-xs font-black uppercase mb-2 text-zinc-500">Front-end</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {DATA.technicalSkills.frontend.map((skill) => (
                          <span key={skill} className="text-xs font-bold border-2 border-black px-2 py-0.5 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Backend */}
                    <div>
                      <h3 className="text-xs font-black uppercase mb-2 text-zinc-500">Back-end</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {DATA.technicalSkills.backend.map((skill) => (
                          <span key={skill} className="text-xs font-bold border-2 border-black px-2 py-0.5 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div>
                      <h3 className="text-xs font-black uppercase mb-2 text-zinc-500">Outils & Autres</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {[...DATA.technicalSkills.tools, ...DATA.technicalSkills.other].map((skill) => (
                          <span key={skill} className="text-xs font-bold border-2 border-black px-2 py-0.5 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </section>

                {/* Languages */}
                <section>
                  <h2 className="text-lg font-black uppercase border-b-2 border-black pb-1 mb-3">Langues</h2>
                  <ul className="space-y-2 text-xs font-medium text-zinc-800">
                    <li className="flex justify-between items-center border-b border-dashed border-zinc-300 pb-1">
                      <span>Français</span>
                      <span className="font-bold bg-black text-white px-1.5 py-0.5 text-[10px]">Natif</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-dashed border-zinc-300 pb-1">
                      <span>Anglais</span>
                      <span className="font-bold bg-black text-white px-1.5 py-0.5 text-[10px]">Pro</span>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles Override */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          html, body {
            width: 210mm;
            height: 297mm;
            overflow: hidden;
            background: white;
          }
          /* Force content to fit on one page if possible */
          .print\\:p-0 {
             padding: 0 !important;
          }
          
          /* Ensure background colors and borders print correctly */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
}

