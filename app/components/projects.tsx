
"use client";

import { useState } from "react";
import { projects } from "../data/projects";

type View = "recruiter" | "freelance" | "complete";

type ProjectsProps = {
  view: View;
};

export default function Projects({ view }: ProjectsProps) {
  const [activeId, setActiveId] = useState<number | null>(null);

  const visibleProjects = projects
    .filter((project) => {
      if (view === "complete") return true;

      return (
        project.category === "both" ||
        project.category === view
      );
    })
    .sort((a, b) => Number(b.featured) - Number(a.featured));

  const selectedId = visibleProjects.some(
    (project) => project.id === activeId
  )
    ? activeId
    : visibleProjects[0]?.id;

  return (
    <section id="projetos" className="scroll-mt-24 py-20">
      <div className="mb-10">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-neon-pink">
          Portfólio / Projetos
        </span>

        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Projetos{" "}
          <span className="bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">
            selecionados.
          </span>
        </h2>

        <p className="mt-4 max-w-2xl text-gray-400">
          Uma seleção de aplicações desenvolvidas com foco
          em experiência do usuário, interfaces modernas
          e boas práticas.
        </p>
      </div>

      {visibleProjects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-neon-cyan/30 bg-surface px-6 py-16 text-center sm:px-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-neon-cyan/30 bg-neon-cyan/10 text-2xl font-bold text-neon-cyan">
            {"</>"}
          </div>

          <span className="mt-7 inline-flex rounded-full border border-neon-pink/30 bg-neon-pink/10 px-4 py-2 text-xs font-semibold text-neon-pink">
            EM CONSTRUÇÃO
          </span>

          <h3 className="mt-5 text-2xl font-bold">
            Novos projetos em breve.
          </h3>

          <p className="mx-auto mt-4 max-w-lg leading-7 text-gray-400">
            Estou preparando novas aplicações para compartilhar
            aqui. Enquanto isso, acompanhe meu trabalho no GitHub.
          </p>

          <a
            href="https://github.com/mkleeo"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-lg border border-neon-cyan/40 px-6 py-3 text-sm font-semibold text-neon-cyan transition hover:bg-neon-cyan/10"
          >
            Acompanhar no GitHub ↗
          </a>
        </div>
      ) : (
        <div className="flex flex-col gap-3 md:h-[440px] md:flex-row">
          {visibleProjects.map((project, index) => {
            const isActive = project.id === selectedId;

            return (
              <article
                key={project.id}
                className={`relative isolate min-h-[100px] overflow-hidden rounded-2xl border transition-[flex,border-color] duration-500 ease-in-out motion-reduce:transition-none md:min-h-0 ${
                  isActive
                    ? "border-neon-pink/60 md:flex-[5]"
                    : "border-border md:flex-[1]"
                }`}
                onMouseEnter={() => setActiveId(project.id)}
              >
                <button
                  type="button"
                  aria-expanded={isActive}
                  aria-controls={`project-content-${project.id}`}
                  onClick={() => setActiveId(project.id)}
                  onFocus={() => setActiveId(project.id)}
                  className={`absolute inset-0 cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-neon-cyan ${
  isActive ? "z-0" : "z-10"
}`}
                  aria-label={`Expandir projeto ${project.title}`}
                />

                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: project.image
                      ? `url("${project.image}")`
                      : "none",
                    backgroundColor: "#11131c",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/20" />

                <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-sm font-semibold text-white backdrop-blur">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {isActive && project.featured && (
                    <span className="rounded-full bg-neon-pink px-3 py-1 text-xs font-semibold text-white">
                      DESTAQUE
                    </span>
                  )}
                </div>

                <div
                  id={`project-content-${project.id}`}
                  className={`absolute inset-x-0 bottom-0 z-20 p-5 transition-opacity duration-300 motion-reduce:transition-none sm:p-7 ${
                    isActive
                      ? "opacity-100"
                      : "pointer-events-none opacity-0"
                  }`}
                  aria-hidden={!isActive}
                >
                  <div className={isActive ? "" : "invisible"}>
                    <span className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">
                      {project.status === "completed"
                        ? "Projeto concluído"
                        : "Em desenvolvimento"}
                    </span>

                    <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-gray-300">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-white/20 bg-black/50 px-3 py-1 text-xs text-white"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pointer-events-auto relative z-30 rounded-lg border border-white/30 bg-black/60 px-4 py-2 text-sm font-semibold text-white transition hover:border-neon-cyan hover:text-neon-cyan"
                        >
                          Código ↗
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pointer-events-auto relative z-30 rounded-lg bg-neon-pink px-4 py-2 text-sm font-semibold text-white transition hover:bg-pink-600"
                        >
                          Ver projeto ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
