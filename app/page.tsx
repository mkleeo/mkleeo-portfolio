
"use client";

import { useState } from "react";
import Projects from "./components/projects";
import About from "./components/about";
import Terminal from "./components/terminal";
import Contact from "./components/contact";
import Reveal from "./components/reveal";

type ViewMode = "recruiter" | "freelance" | "complete";

const views = {
  recruiter: {
    label: "Recrutador",
    badge: "DESENVOLVEDOR FRONT-END",
    title: "Transformando código em",
    highlight: "experiências digitais.",
    description:
      "Sou Marcos Leonardo, formado em Análise e Desenvolvimento de Sistemas. Desenvolvo interfaces modernas e responsivas com React, Next.js e TypeScript, com foco em qualidade, usabilidade e boas práticas.",
    action: "Ver projetos",
  },
  freelance: {
    label: "Freelancer",
    badge: "DESENVOLVIMENTO WEB",
    title: "Sua ideia merece uma",
    highlight: "presença digital incrível.",
    description:
      "Crio sites, landing pages e aplicações web modernas para transformar ideias em soluções digitais funcionais, responsivas e fáceis de utilizar.",
    action: "Solicitar orçamento",
  },
  complete: {
    label: "Visão completa",
    badge: "DESENVOLVIMENTO & TECNOLOGIA",
    title: "Tecnologia, criatividade e",
    highlight: "soluções que fazem sentido.",
    description:
      "Sou Marcos Leonardo, desenvolvedor Front-end formado em Análise e Desenvolvimento de Sistemas. Trabalho com interfaces web, projetos digitais e soluções voltadas à experiência do usuário.",
    action: "Conhecer meu trabalho",
  },
};

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
];

export default function Home() {
  const [view, setView] = useState<ViewMode>("recruiter");
  const content = views[view];

  return (
    <main className="min-h-screen overflow-x-clip text-foreground">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <header className="border-b border-border/80">
          <div className="flex flex-wrap items-center justify-between gap-4 py-5">
            <a
              href="#inicio"
              className="shrink-0 text-xl font-extrabold tracking-tight"
            >
              MK<span className="text-neon-pink">.</span>LEEO
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 text-sm text-gray-400 md:flex"
            >
              <a
                href="#inicio"
                className="transition-colors hover:text-neon-cyan"
              >
                Início
              </a>
              <a
                href="#projetos"
                className="transition-colors hover:text-neon-cyan"
              >
                Projetos
              </a>
              <a
                href="#sobre"
                className="transition-colors hover:text-neon-cyan"
              >
                Sobre
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <span className="hidden items-center gap-2 text-xs text-neon-green lg:flex">
                <span className="h-2 w-2 rounded-full bg-neon-green" />
                Aberto a oportunidades
              </span>

              <a
                href="mailto:markosspfc2@gmail.com"
                className="rounded-lg bg-neon-pink px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(255,0,127,0.2)] transition hover:bg-pink-600"
              >
                Contato
              </a>
            </div>
          </div>

          <nav
            aria-label="Navegação mobile"
            className="flex justify-center gap-8 border-t border-border/60 py-4 text-sm text-gray-400 md:hidden"
          >
            <a href="#inicio" className="hover:text-neon-cyan">
              Início
            </a>
            <a href="#projetos" className="hover:text-neon-cyan">
              Projetos
            </a>
            <a href="#sobre" className="hover:text-neon-cyan">
              Sobre
            </a>
          </nav>
        </header>

        <div className="flex justify-center py-7">
          <div
            role="group"
            aria-label="Modo de visualização do portfólio"
            className="flex w-full max-w-xl flex-wrap justify-center gap-1 rounded-xl border border-border bg-surface/90 p-1.5 sm:w-auto"
          >
            {(Object.keys(views) as ViewMode[]).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setView(mode)}
                aria-pressed={view === mode}
                className={`rounded-lg px-3 py-2.5 text-xs font-semibold transition-colors sm:px-5 sm:text-sm ${
                  view === mode
                    ? "bg-neon-pink text-white shadow-[0_0_18px_rgba(255,0,127,0.25)]"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {views[mode].label}
              </button>
            ))}
          </div>
        </div>

        <section
          id="inicio"
          className="grid min-h-[70vh] grid-cols-1 items-center gap-12 py-12 lg:gap-10 lg:py-20 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
        >
          <div className="min-w-0">
            <span className="inline-flex max-w-full rounded-full border border-neon-pink/40 bg-neon-pink/5 px-4 py-2 text-xs font-medium tracking-wide text-neon-pink">
              {content.badge}
            </span>

            <p className="mt-8 text-sm font-medium tracking-wide text-gray-400">
              OLÁ, SOU MARCOS LEONARDO
            </p>

            <h1 className="mt-4 text-4xl leading-[1.12] font-extrabold tracking-tight sm:text-5xl lg:text-[3.4rem] 2xl:text-6xl">
              {content.title}{" "}
              
<span className="hero-glow block bg-gradient-to-r from-neon-pink via-purple-500 to-neon-cyan bg-clip-text text-transparent">
  {content.highlight}
</span>

            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              {content.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={
                  view === "freelance"
                    ? "mailto:markosspfc2@gmail.com?subject=Orcamento%20de%20projeto"
                    : "#projetos"
                }
                className="neon-button inline-flex min-h-12 items-center justify-center rounded-lg bg-neon-pink px-6 py-3 text-sm font-semibold text-white transition hover:bg-pink-600"
              >
                {content.action}
              </a>

              <a
                href="https://github.com/mkleeo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border bg-surface/70 px-5 py-3 text-sm font-semibold transition hover:border-neon-cyan"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/mkleeo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border bg-surface/70 px-5 py-3 text-sm font-semibold transition hover:border-neon-cyan"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-border bg-surface/80 px-3 py-2 text-xs text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="min-w-0 overflow-hidden rounded-xl border border-neon-pink/40 bg-surface shadow-[0_0_45px_rgba(255,0,127,0.1)]">
            <div className="flex items-center gap-2 border-b border-border px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-500" />

              <span className="ml-4 text-xs text-gray-500">
                developer.ts
              </span>
            </div>

            <div className="overflow-x-auto p-5 font-mono text-xs leading-7 sm:p-6 sm:text-sm">
              <div className="min-w-max">
                <p className="text-purple-400">
                  const <span className="text-white">developer</span> = {"{"}
                </p>

                <p className="pl-4">
                  <span className="text-neon-cyan">name:</span>{" "}
                  <span className="text-green-400">
                    &quot;Marcos Leonardo&quot;
                  </span>,
                </p>

                <p className="pl-4">
                  <span className="text-neon-cyan">role:</span>{" "}
                  <span className="text-green-400">
                    &quot;Front-end Developer&quot;
                  </span>,
                </p>

                <p className="pl-4">
                  <span className="text-neon-cyan">stack:</span>{" "}
                  <span className="text-yellow-300">
                    [&quot;React&quot;, &quot;Next.js&quot;, &quot;TypeScript&quot;]
                  </span>,
                </p>

                <p className="pl-4">
                  <span className="text-neon-cyan">focus:</span>{" "}
                  <span className="text-green-400">
                    &quot;Clean Code & UX&quot;
                  </span>
                </p>

                <p className="text-purple-400">{"};"}</p>

                <div className="mt-6 border-t border-border pt-5">
                  <p className="text-neon-green">$ npm run build</p>
                  <p className="mt-2 text-gray-400">
                    &gt; Building better digital experiences...
                  </p>
                  <p className="mt-2 text-neon-green">
                    ✓ Ready to create
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        
<Reveal>
  <Projects view={view} />
</Reveal>

<Reveal delay={100}>
  <About />
</Reveal>

<Reveal delay={150}>
  <Terminal />
</Reveal>

<Reveal delay={100}>
  <Contact />
</Reveal>

      </div>
    </main>
  );
}
