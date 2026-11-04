"use client";

import { useState } from "react";
import { projects } from "../data/projects";

type View = "recruiter" | "freelance" | "complete";

export default function Projects({ view }: { view: View }) {
  const [activeId, setActiveId] = useState<number | null>(null);
  const visibleProjects = projects.filter(
    (project) => view === "complete" || project.category === "both" || project.category === view
  ).sort((a, b) => Number(b.featured) - Number(a.featured));
  const selectedId = visibleProjects.some((project) => project.id === activeId)
    ? activeId
    : visibleProjects[0]?.id;

  return (
    <section id="projetos" className="scroll-mt-24 border-t border-white/10 py-24 sm:py-28">
      <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a2e8db]">01 / Trabalhos</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] text-zinc-100 sm:text-5xl">Projetos <span className="text-zinc-500">selecionados.</span></h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-zinc-400">Aplicações e estudos práticos. Selecione um cartão para conhecer cada projeto.</p>
      </div>

      {visibleProjects.length === 0 ? (
        <p className="rounded-xl border border-white/15 p-10 text-zinc-400">Novos projetos serão adicionados em breve.</p>
      ) : (
        <div className="flex min-h-[540px] flex-col gap-3 md:h-[520px] md:min-h-0 md:flex-row">
          {visibleProjects.map((project, index) => {
            const active = selectedId === project.id;
            return (
              <article
                key={project.id}
                className={`relative isolate flex min-h-[108px] flex-col overflow-hidden rounded-xl border bg-[#141719] transition-[flex,min-height,border-color] duration-500 motion-reduce:transition-none md:min-h-0 ${active ? "min-h-[390px] border-[#a2e8db]/55 md:flex-[4]" : "border-white/15 md:flex-[1]"}`}
                onMouseEnter={() => setActiveId(project.id)}
              >
                <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                  {project.image ? (
                    <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: `url(${JSON.stringify(project.image)})` }} />
                  ) : (
                    <>
                      <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#a2e8db]/20" />
                      <div className="absolute -right-4 -top-16 h-64 w-64 rounded-full border border-[#a2e8db]/15" />
                      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_20%,rgba(162,232,219,0.045)_55%,transparent_80%)]" />
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101315] via-[#101315]/70 to-transparent" />
                </div>
                <button
                  type="button"
                  onClick={() => setActiveId(project.id)}
                  onFocus={() => setActiveId(project.id)}
                  aria-expanded={active}
                  aria-controls={`project-detail-${project.id}`}
                  aria-label={`${active ? "Projeto selecionado" : "Expandir projeto"}: ${project.title}`}
                  className="relative z-10 flex w-full items-center justify-between gap-3 p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#a2e8db] md:min-h-[72px]"
                >
                  <span className="font-mono text-xs text-[#a2e8db]">{String(index + 1).padStart(2, "0")}</span>
                  <span className={`min-w-0 flex-1 truncate text-sm font-medium text-zinc-200 md:hidden ${active ? "opacity-100" : "opacity-90"}`}>{project.title}</span>
                  <span className="text-lg text-zinc-400" aria-hidden="true">{active ? "−" : "+"}</span>
                </button>
                {!active && <div className="pointer-events-none absolute inset-x-4 bottom-6 hidden origin-bottom-left -rotate-90 whitespace-nowrap text-base font-semibold text-zinc-400 md:block">{project.title}</div>}
                <div
                  id={`project-detail-${project.id}`}
                  aria-hidden={!active}
                  className={`relative z-10 mt-auto p-5 pt-10 transition-opacity duration-300 sm:p-8 ${active ? "opacity-100" : "pointer-events-none hidden opacity-0"}`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a2e8db]">{project.status === "completed" ? "Projeto concluído" : "Em desenvolvimento"}</p>
                  <h3 className="mt-4 max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-4xl">{project.title}</h3>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-300">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-zinc-300">{tech}</span>)}</div>
                  {(project.github || project.demo) && <div className="mt-7 flex flex-wrap gap-3">
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="rounded border border-white/30 px-4 py-2 text-sm text-white hover:bg-white/10">Ver código ↗</a>}
                    {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="rounded bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-white">Abrir demonstração ↗</a>}
                  </div>}
                </div>
              </article>
            );
          })}
        </div>
      )}
      <p className="mt-5 text-xs text-zinc-500">Projetos de demonstração são identificados como tal. Imagens e links serão adicionados conforme as entregas.</p>
    </section>
  );
}
