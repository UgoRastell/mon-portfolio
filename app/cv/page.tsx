"use client";

import { DATA } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-zinc-100 p-4 md:p-8 flex flex-col items-center gap-8 print:p-0 print:bg-white print:block">
      {/* Print Button */}
      <div className="print-hidden fixed bottom-8 right-8 z-50">
        <Button onClick={handlePrint} className="gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
          Télécharger PDF
        </Button>
      </div>

      {/* CV Container (A4) */}
      <div 
        className="bg-white w-full max-w-[210mm] min-h-[297mm] mx-auto shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-black relative print:shadow-none print:border-0 print:w-full print:h-full print:m-0 print:overflow-hidden p-6 md:p-[15mm]"
      >
        
        {/* Header / Hero Style */}
        <header className="border-b-4 border-black pb-4 mb-4 flex justify-between items-start gap-6">
          <div className="flex-1 flex flex-col justify-between h-full">
            <div>
              <h1 className="text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-1">
                {DATA.name}
              </h1>
              <p className="text-lg font-bold bg-black text-white inline-block px-2 py-1 mb-3 transform -rotate-1">
                {DATA.title}
              </p>
              <p className="text-xs text-zinc-600 max-w-md text-justify font-medium leading-relaxed border-l-4 border-zinc-200 pl-3">
                {DATA.about}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-3 text-xs font-bold">
               {/* Contact info placeholder if you had them in DATA */}
               <div className="flex items-center gap-1 border border-black px-2 py-1 bg-zinc-50">
                  <Mail className="w-3 h-3" /> ugo.rastell@example.com
               </div>
               {/* 
               <div className="flex items-center gap-1 border border-black px-2 py-1 bg-zinc-50">
                  <Phone className="w-3 h-3" /> +33 6 00 00 00 00
               </div>
               */}
              {DATA.socials.github && (
                <Link href={DATA.socials.github} className="flex items-center gap-1 border border-black px-2 py-1 bg-zinc-50 hover:bg-black hover:text-white transition-colors">
                  <Github className="w-3 h-3" />
                  GitHub
                </Link>
              )}
              {DATA.socials.linkedin && (
                <Link href={DATA.socials.linkedin} className="flex items-center gap-1 border border-black px-2 py-1 bg-zinc-50 hover:bg-black hover:text-white transition-colors">
                  <Linkedin className="w-3 h-3" />
                  LinkedIn
                </Link>
              )}
            </div>
          </div>

          {/* Avatar with heavy shadow */}
          <div className="relative w-40 h-40 shrink-0 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-zinc-200">
            <Image
              src={DATA.avatarUrl}
              alt={DATA.name}
              fill
              className="object-cover grayscale"
            />
          </div>
        </header>

        <div className="grid grid-cols-12 gap-5 h-full">
          
          {/* Left Column (Main) */}
          <div className="col-span-7 flex flex-col gap-5">
            
            {/* Experience */}
            <section>
              <div className="flex items-center gap-2 mb-2">
                 <div className="w-3 h-3 bg-black" />
                 <h2 className="text-xl font-black uppercase tracking-tight">Expérience</h2>
              </div>
              
              <div className="space-y-3">
                {DATA.experience.slice(0, 4).map((role, index) => (
                  <div key={index} className="relative pl-4 border-l-2 border-zinc-300">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-sm uppercase">{role.company}</h3>
                      <span className="text-[10px] font-bold border border-black px-1.5 bg-zinc-50">{role.period}</span>
                    </div>
                    <p className="text-xs font-bold text-zinc-800 mb-1">{role.role}</p>
                    <p className="text-[10px] text-zinc-600 text-justify leading-snug">{role.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects (Condensed) */}
            <section>
              <div className="flex items-center gap-2 mb-2">
                 <div className="w-3 h-3 bg-black" />
                 <h2 className="text-xl font-black uppercase tracking-tight">Projets</h2>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {DATA.projects.slice(0, 2).map((project) => (
                  <div key={project.id} className="border-2 border-black p-2.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-white">
                    <div className="flex justify-between items-start mb-1">
                        <div>
                            <h3 className="font-bold text-sm">{project.title}</h3>
                            <p className="text-[10px] text-zinc-600 mb-1.5 line-clamp-2">{project.desc}</p>
                            <div className="flex flex-wrap gap-1 mb-1">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-[9px] font-bold border border-black px-1 bg-zinc-100">{t}</span>
                                ))}
                            </div>
                        </div>
                        
                        {/* QR Code */}
                        {project.link && project.link !== "#" && (
                            <div className="ml-2 flex flex-col items-center gap-0.5 shrink-0">
                                <div className="bg-white p-1 border border-black">
                                    <QRCode value={project.link} size={40} />
                                </div>
                            </div>
                        )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="col-span-5 flex flex-col gap-5 border-l-2 border-dashed border-zinc-300 pl-5">
            
            {/* Skills */}
            <section>
              <h2 className="text-lg font-black uppercase border-b-2 border-black mb-2 inline-block">Compétences</h2>
              <div className="flex flex-wrap gap-1.5">
                {DATA.skills.map((skill, index) => (
                  <span key={index} className="text-[10px] font-bold border-2 border-black px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Technical Stack */}
            <section>
              <h2 className="text-lg font-black uppercase border-b-2 border-black mb-2 inline-block">Stack Technique</h2>
              <div className="space-y-2">
                <div className="bg-zinc-50 p-1.5 border border-black">
                  <h3 className="text-xs font-black mb-0.5 uppercase">Frontend</h3>
                  <p className="text-[10px] text-zinc-600 leading-tight">{DATA.technicalSkills.frontend.join(" • ")}</p>
                </div>
                <div className="bg-zinc-50 p-1.5 border border-black">
                  <h3 className="text-xs font-black mb-0.5 uppercase">Backend</h3>
                  <p className="text-[10px] text-zinc-600 leading-tight">{DATA.technicalSkills.backend.join(" • ")}</p>
                </div>
                <div className="bg-zinc-50 p-1.5 border border-black">
                  <h3 className="text-xs font-black mb-0.5 uppercase">Outils</h3>
                  <p className="text-[10px] text-zinc-600 leading-tight">{DATA.technicalSkills.tools.join(" • ")}</p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-lg font-black uppercase border-b-2 border-black mb-2 inline-block">Formation</h2>
              <div className="space-y-2">
                {DATA.education.map((edu, index) => (
                  <div key={index} className="group">
                    <h3 className="font-bold text-xs">{edu.school}</h3>
                    <p className="text-[10px] text-zinc-600 italic">{edu.degree}</p>
                    <p className="text-[10px] font-bold bg-black text-white inline-block px-1 mt-0.5">{edu.period}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Footer decoration */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-black pattern-diagonal-lines text-white flex items-center justify-center text-[8px] uppercase tracking-widest">
           Portfolio {new Date().getFullYear()} • {DATA.name}
        </div>
      </div>
    </div>
  );
}
