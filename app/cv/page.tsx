"use client";

import { DATA } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { Github, Linkedin, Mail, MapPin, Download, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center gap-8 print:p-0 print:bg-white">
      {/* Print Button */}
      <div className="print-hidden fixed bottom-8 right-8 z-50">
        <Button onClick={handlePrint} className="gap-2">
          <Download className="w-4 h-4" />
          Télécharger PDF
        </Button>
      </div>

      {/* CV Container (A4) */}
      <div className="bg-white w-full max-w-[210mm] min-h-[297mm] p-[10mm] shadow-bold border-2 border-black relative print:shadow-none print:border-none print:w-full print:h-full print:p-0 print:max-w-none">
        
        {/* Header */}
        <header className="border-b-2 border-black pb-6 mb-6 flex justify-between items-start gap-6">
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-4xl font-black uppercase tracking-tight">{DATA.name}</h1>
              <p className="text-xl font-bold text-gray-600 mt-1">{DATA.title}</p>
            </div>
            
            <p className="text-sm text-gray-600 max-w-md leading-relaxed">
              {DATA.about}
            </p>

            <div className="flex flex-wrap gap-3 text-sm font-bold">
              {DATA.socials.github && (
                <Link href={DATA.socials.github} className="flex items-center gap-1 hover:underline">
                  <Github className="w-4 h-4" />
                  GitHub
                </Link>
              )}
              {DATA.socials.linkedin && (
                <Link href={DATA.socials.linkedin} className="flex items-center gap-1 hover:underline">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Link>
              )}
              {/* Assuming location isn't in DATA explicitly but often nice to have, skipping if not present */}
            </div>
          </div>

          <div className="relative w-32 h-32 border-2 border-black shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Image
              src={DATA.avatarUrl}
              alt={DATA.name}
              fill
              className="object-cover"
            />
          </div>
        </header>

        <div className="grid grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="col-span-2 space-y-6">
            {/* Experience */}
            <section>
              <h2 className="text-2xl font-black uppercase border-b-2 border-black mb-4 inline-block">Expérience</h2>
              <div className="space-y-6">
                {DATA.experience.map((role, index) => (
                  <div key={index} className="relative pl-4 border-l-2 border-gray-200">
                    <div className="absolute -left-[5px] top-2 w-2 h-2 bg-black rounded-full" />
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-lg">{role.company}</h3>
                      <span className="text-xs font-bold bg-black text-white px-2 py-0.5">{role.period}</span>
                    </div>
                    <p className="text-sm font-bold text-gray-600 mb-2">{role.role}</p>
                    <p className="text-sm text-gray-600 text-justify">{role.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-black uppercase border-b-2 border-black mb-4 inline-block">Projets</h2>
              <div className="space-y-4">
                {DATA.projects.slice(0, 3).map((project) => (
                  <div key={project.id} className="border-2 border-black p-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold">{project.title}</h3>
                      {project.link && (
                        <Link href={project.link} className="text-xs hover:underline flex items-center gap-1">
                          <Globe className="w-3 h-3" />
                          Voir
                        </Link>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{project.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-[10px] border border-black px-1 bg-gray-50">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            {/* Skills */}
            <section>
              <h2 className="text-xl font-black uppercase border-b-2 border-black mb-4 inline-block">Compétences</h2>
              <div className="flex flex-wrap gap-2">
                {DATA.skills.map((skill, index) => (
                  <span key={index} className="text-xs font-bold border-2 border-black px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] bg-white block w-full text-center">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Technical Skills Detailed */}
            <section>
              <h2 className="text-xl font-black uppercase border-b-2 border-black mb-4 inline-block">Technique</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-bold mb-1">Frontend</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{DATA.technicalSkills.frontend.join(", ")}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1">Backend</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{DATA.technicalSkills.backend.join(", ")}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1">Outils</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{DATA.technicalSkills.tools.join(", ")}</p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl font-black uppercase border-b-2 border-black mb-4 inline-block">Formation</h2>
              <div className="space-y-4">
                {DATA.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-black pl-3">
                    <h3 className="font-bold text-sm">{edu.school}</h3>
                    <p className="text-xs text-gray-600">{edu.degree}</p>
                    <p className="text-xs font-bold mt-1">{edu.period}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
        
        {/* Footer for Print */}
        <div className="hidden print:block fixed bottom-0 left-0 w-full text-center text-xs text-gray-400 py-2">
          CV généré depuis le portfolio de {DATA.name}
        </div>
      </div>
    </div>
  );
}

