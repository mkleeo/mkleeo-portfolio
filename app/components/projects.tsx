"use client";

import { useState } from "react";
import { projects, type Project } from "../data/projects";

type View = "recruiter" | "freelance" | "complete";

function ProjectVisual({ project }: { project: Project }) {
  if (project.kind !== "finance") {
    return (
      <div className="relative flex h-full min-h-40 items-center justify-center overflow-hidden bg-[#151a1b]">
        <div className="absolute -right-14 -top-16 h-56 w-56 rounded-full border border-[#a2e8db]/15" />
        <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full border border-white/10" />
        <span className="font-mono text-[clamp(4rem,12vw,9rem)] font-semibold tracking-tighter text-white/[0.055]">{String(project.id).padStart(2, "0")}</span>
        <span className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Espaço reservado</span>
      </div>
    );
  }

  return (
    <div className="relative flex h-full min-h-52 items-center justify-center overflow-hidden bg-[#11191a] px-5 py-8 sm:px-8" aria-label="Representação ilustrativa de um dashboard financeiro">
      <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#a2e8db]/[0.07] blur-3xl" />
      <div className="relative w-full max-w-lg overflow-hidden rounded-xl border border-white/10 bg-[#0d1113] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <span className="text-[10px] font-semibold tracking-[0.12em] text-zinc-300">FINANCE / OVERVIEW</span>
          <span className="rounded bg-[#a2e8db]/10 px-2 py-1 text-[9px] text-[#a2e8db]">Prévia ilustrativa</span>
        </div>
        <div className="grid grid-cols-3 gap-2 p-3 sm:gap-3 sm:p-4">
          {[
            { label: "Entradas", value: "R$ 8.450", color: "text-[#a2e8db]" },
            { label: "Saídas", value: "R$ 3.120", color: "text-zinc-200" },
            { label: "Saldo", value: "R$ 5.330", color: "text-zinc-200" },
          ].map((item) => (
            <div key={item.label} className="min-w-0 rounded-md border border-white/10 bg-white/[0.025] p-2 sm:p-3">
              <p className="text-[9px] text-zinc-500">{item.label}</p>
              <p className={`mt-2 truncate text-xs font-semibold sm:text-base ${item.color}`}>{item.value}</p>
            </div>
          ))}
          <div className="col-span-3 rounded-md border border-white/10 bg-white/[0.025] p-3">
            <div className="mb-4 flex items-center justify-between text-[10px] text-zinc-400"><span>Evolução financeira</span><span>6 meses</span></div>
            <div className="flex h-20 items-end justify-between gap-2">
              {[36, 53, 45, 70, 59, 88, 65, 95, 77, 100, 84, 94].map((height, index) => (
                <div key={index} className="flex-1 rounded-t-sm bg-[#a2e8db]/[0.55]" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="absolute bottom-2 right-4 text-[9px] text-zinc-500">Dados fictícios para composição visual</p>
    </div>
  );
}

export default function Projects({ view }: { view: View }) {
  const [activeId, setActiveId] = useState<number | null>(null);
  const visibleProjects = projects
    .filter((project) => view === "complete" || project.category === "both" || project.category === view)
    .sort((a, b) => Number(b.featured) - Number(a.featured));
  const selectedId = visibleProjects.some((project) => project.id === activeId)
    ? activeId
    : visibleProjects[0]?.id;

  return (
    <section id="projetos" className="scroll-mt-24 border-t border-white/10 py-20 sm:py-28">
      <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a2e8db]">01 / Trabalhos</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] text-zinc-100 sm:text-5xl">Projetos <span className="text-zinc-500">selecionados.</span></h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-zinc-400">Projetos reais e espaços para trabalhos futuros. Clique em um cartão para explorar.</p>
      </div>

      <div className="flex flex-col gap-3 lg:h-[580px] lg:flex-row">
        {visibleProjects.map((project, index) => {
          const active = project.id === selectedId;
          return (
            <article
              key={project.id}
              className={`flex min-w-0 flex-col overflow-hidden rounded-xl border bg-[#141819] transition-[flex,border-color] duration-500 motion-reduce:transition-none ${active ? "border-[#a2e8db]/50 lg:flex-[4]" : "border-white/15 lg:flex-[1]"}`}
            >
              <button
                type="button"
                onClick={() => setActiveId(project.id)}
                aria-expanded={active}
                aria-controls={`project-detail-${project.id}`}
                className="flex min-h-16 w-full items-center justify-between gap-3 px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#a2e8db]"
              >
                <span className="font-mono text-xs text-[#a2e8db]">{String(index + 1).padStart(2, "0")}</span>
                <span className={`min-w-0 flex-1 truncate text-sm font-medium text-zinc-200 ${active ? "lg:opacity-0" : ""}`}>{project.title}</span>
                <span className="text-lg text-zinc-400" aria-hidden="true">{active ? "−" : "+"}</span>
              </button>
              {active ? (
                <div id={`project-detail-${project.id}`} className="flex min-h-0 flex-1 flex-col">
                  <div className="min-h-0 flex-1"><ProjectVisual project={project} /></div>
                  <div className="p-5 sm:p-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a2e8db]">{project.kind === "placeholder" ? "Espaço de demonstração" : "Projeto real · Em evolução"}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{project.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">{project.description}</p>
                    {project.highlights.length > 0 && <div className="mt-4 flex flex-wrap gap-2">{project.highlights.map((highlight) => <span key={highlight} className="rounded-full border border-[#a2e8db]/25 px-3 py-1 text-[11px] text-[#a2e8db]">{highlight}</span>)}</div>}
                    {project.technologies.length > 0 && <div className="mt-4 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded border border-white/15 px-2 py-1 text-[11px] text-zinc-300">{tech}</span>)}</div>}
                    {(project.github || project.demo) && <div className="mt-5 flex flex-wrap gap-3">
                      {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md bg-zinc-100 px-4 py-2.5 text-xs font-semibold text-zinc-950 transition hover:bg-white">Abrir demonstração ↗</a>}
                      {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md border border-white/25 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10">Ver código ↗</a>}
                    </div>}
                  </div>
                </div>
              ) : (
                <div id={`project-detail-${project.id}`} className="relative hidden min-h-0 flex-1 items-center justify-center lg:flex">
                  <span className="absolute inset-y-0 left-1/2 flex -translate-x-1/2 items-center whitespace-nowrap text-sm font-medium tracking-wide text-zinc-500 [writing-mode:vertical-rl]">{project.title}</span>
                </div>
              )}
            </article>
          );
        })}
      </div>
      <p className="mt-5 text-xs leading-5 text-zinc-500">A prévia da Finance Platform é ilustrativa e utiliza valores fictícios. A demonstração pública é acessível pelo botão acima.</p>
    </section>
  );
}
