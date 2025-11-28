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
      <div className="max-w-[210mm] mx-auto bg-white shadow-2xl print:shadow-none print:max-w-none print:w-[210mm] print:h-[297mm] overflow-hidden">
        <div className="p-6 md:p-8 flex flex-col gap-6 h-full min-h-[297mm]">

          {/* Header */}
          <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b-2 border-black pb-6">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">{DATA.name}</h1>
              <p className="text-lg md:text-xl font-medium text-zinc-600">{DATA.title}</p>

              <div className="flex flex-wrap gap-4 mt-4 text-sm font-medium text-zinc-600">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Column (Left) */}
            <div className="md:col-span-2 space-y-8">
              {/* Profile */}
              <section>
                <h2 className="text-lg font-bold uppercase border-b border-zinc-200 pb-1 mb-3">Profil</h2>
                <p className="text-zinc-600 text-sm leading-relaxed text-justify">
                  {DATA.about}
                </p>
              </section>

              {/* Experience */}
              <section>
                <h2 className="text-lg font-bold uppercase border-b border-zinc-200 pb-1 mb-4">Expérience Professionnelle</h2>
                <div className="space-y-5">
                  {DATA.experience.map((exp, i) => (
                    <div key={i} className="relative pl-4 border-l-2 border-zinc-200">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                        <h3 className="font-bold text-sm">{exp.role}</h3>
                        <span className="text-[10px] font-mono text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">{exp.period}</span>
                      </div>
                      <div className="text-xs font-medium text-zinc-700 mb-1.5">{exp.company}</div>
                      <p className="text-xs text-zinc-600">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Projects (Optional selection for CV) */}
              <section>
                <h2 className="text-lg font-bold uppercase border-b border-zinc-200 pb-1 mb-4">Projets Récents</h2>
                <div className="space-y-3">
                  {DATA.projects.slice(0, 3).map((project) => (
                    <div key={project.id}>
                      <div className="flex items-baseline justify-between mb-1">
                        <h3 className="font-bold text-sm">{project.title}</h3>
                      </div>
                      <p className="text-[10px] text-zinc-600 mb-1.5">{project.desc}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((t) => (
                          <span key={t} className="text-[9px] border border-zinc-200 px-1 py-0.5 rounded bg-zinc-50 text-zinc-500">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar Column (Right) */}
            <div className="space-y-8">
              {/* Education */}
              <section>
                <h2 className="text-lg font-bold uppercase border-b border-zinc-200 pb-1 mb-4">Formation</h2>
                <div className="space-y-5">
                  {DATA.education.map((edu, i) => (
                    <div key={i}>
                      <h3 className="font-bold text-sm leading-tight mb-0.5">{edu.degree}</h3>
                      <div className="text-xs text-zinc-700 mb-0.5">{edu.school}</div>
                      <span className="text-[10px] text-zinc-500">{edu.period}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Skills */}
              <section>
                <h2 className="text-lg font-bold uppercase border-b border-zinc-200 pb-1 mb-3">Compétences</h2>
                <div className="flex flex-wrap gap-1.5">
                  {DATA.skills.map((skill) => (
                    <span key={skill} className="text-xs font-medium border border-black px-2 py-0.5 bg-zinc-50">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* Languages / Other (Hardcoded for now as not in schema) */}
              <section>
                <h2 className="text-lg font-bold uppercase border-b border-zinc-200 pb-1 mb-3">Langues</h2>
                <ul className="space-y-1.5 text-xs text-zinc-600">
                  <li className="flex justify-between">
                    <span>Français</span>
                    <span className="font-medium text-black">Natif</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Anglais</span>
                    <span className="font-medium text-black">Professionnel</span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles Override */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 0;
            size: auto;
          }
          body {
            background: white;
          }
          /* Scale content to fit if needed, but maintain layout fidelity */
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

