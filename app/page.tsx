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
    badge: "FRONT-END DEVELOPER / REACT & NEXT.JS",
    title: "Interfaces bem construídas.",
    highlight: "Código que faz sentido.",
    description:
      "Sou Marcos Leonardo, formado em Análise e Desenvolvimento de Sistemas. Desenvolvo aplicações web com React, Next.js e TypeScript, priorizando usabilidade, organização do código e soluções fáceis de manter e evoluir.",
    action: "Explorar projetos",
  },
  freelance: {
    label: "Freelancer",
    badge: "DESENVOLVIMENTO WEB / PROJETOS SOB MEDIDA",
    title: "Seu negócio merece",
    highlight: "uma presença digital à altura.",
    description:
      "Desenvolvo sites, landing pages e aplicações web com atenção à experiência de quem usa e aos objetivos de cada projeto.",
    action: "Conversar sobre um projeto",
  },
  complete: {
    label: "Visão completa",
    badge: "DESENVOLVIMENTO / PRODUTO / EXPERIÊNCIA",
    title: "Da ideia à interface.",
    highlight: "Do detalhe à entrega.",
    description:
      "Sou Marcos Leonardo, desenvolvedor front-end formado em Análise e Desenvolvimento de Sistemas. Uno desenvolvimento web, organização e atenção à experiência do usuário para construir soluções digitais.",
    action: "Conhecer meu trabalho",
  },
} satisfies Record<ViewMode, {
  label: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  action: string;
}>;

const technologies = ["React", "Next.js", "TypeScript", "Tailwind CSS"];

export default function Home() {
  const [view, setView] = useState<ViewMode>("recruiter");
  const content = views[view];

  return (
    <main className="min-h-screen overflow-x-clip bg-[#0c0d0f] text-zinc-100">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <header className="border-b border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-4 py-5">
            <a href="#inicio" className="shrink-0 text-xl font-bold tracking-[-0.06em]">
              MK<span className="text-[#a2e8db]">.</span>LEEO
            </a>

            <nav aria-label="Navegação principal" className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
              <a href="#inicio" className="transition-colors hover:text-white">Início</a>
              <a href="#projetos" className="transition-colors hover:text-white">Projetos</a>
              <a href="#sobre" className="transition-colors hover:text-white">Sobre</a>
            </nav>

            <div className="flex items-center gap-4">
              <span className="hidden items-center gap-2 text-xs text-zinc-400 lg:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-[#a2e8db]" />
                Aberto a oportunidades
              </span>
              <a
                href="mailto:markosspfc2@gmail.com"
                className="rounded-md border border-white/20 px-4 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-white/60 hover:bg-white/5"
              >
                Contato <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <nav aria-label="Navegação mobile" className="flex justify-center gap-8 border-t border-white/10 py-4 text-sm text-zinc-400 md:hidden">
            <a href="#inicio" className="hover:text-white">Início</a>
            <a href="#projetos" className="hover:text-white">Projetos</a>
            <a href="#sobre" className="hover:text-white">Sobre</a>
          </nav>
        </header>

        <div className="flex justify-start py-7 sm:py-9">
          <div role="group" aria-label="Modo de visualização do portfólio" className="flex w-full flex-wrap gap-1 border-b border-white/10 sm:w-auto">
            {(Object.keys(views) as ViewMode[]).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setView(mode)}
                aria-pressed={view === mode}
                className={`border-b-2 px-3 py-3 text-xs font-medium transition-colors sm:px-5 sm:text-sm ${
                  view === mode
                    ? "border-[#a2e8db] text-white"
                    : "border-transparent text-zinc-500 hover:text-zinc-200"
                }`}
              >
                {views[mode].label}
              </button>
            ))}
          </div>
        </div>

        <section id="inicio" className="relative grid min-h-[68vh] grid-cols-1 items-center gap-14 py-10 lg:gap-16 lg:py-20 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="min-w-0">
            <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] text-[#a2e8db] sm:text-xs">
              <span className="h-px w-8 bg-[#a2e8db]" aria-hidden="true" />
              {content.badge}
            </p>

            <p className="mt-10 text-sm text-zinc-400">Marcos Leonardo <span className="mx-2 text-zinc-700">/</span> Desenvolvedor front-end</p>

            <h1 className="mt-5 max-w-3xl text-[clamp(2.8rem,5.4vw,5.4rem)] font-semibold leading-[1.04] tracking-[-0.065em] text-zinc-100">
              {content.title}
              <span className="mt-2 block text-zinc-500">{content.highlight}</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
              {content.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={view === "freelance" ? "mailto:markosspfc2@gmail.com?subject=Orcamento%20de%20projeto" : "#projetos"}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
              >
                {content.action} <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://github.com/mkleeo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-white/50 hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mkleeo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-white/50 hover:text-white"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/10 pt-6">
              <span className="text-[11px] uppercase tracking-[0.16em] text-zinc-600">Stack</span>
              {technologies.map((technology) => (
                <span key={technology} className="text-xs font-medium text-zinc-400">{technology}</span>
              ))}
            </div>
          </div>

          <aside className="relative min-w-0 border-l border-white/15 py-3 pl-6 sm:pl-10" aria-label="Meu processo de desenvolvimento">
            <div className="absolute -left-px top-3 h-16 w-px bg-[#a2e8db]" aria-hidden="true" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a2e8db]">Como eu trabalho</p>
            <h2 className="mt-6 max-w-sm text-3xl font-medium leading-tight tracking-[-0.04em] text-zinc-100 sm:text-4xl">
              Clareza no processo. Atenção aos detalhes.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">
              Uma boa interface não depende só do visual. Ela precisa ser compreensível, responsiva e simples de evoluir.
            </p>

            <div className="mt-10 space-y-0 border-t border-white/10">
              {[
                { number: "01", title: "Entender", detail: "O problema antes da solução" },
                { number: "02", title: "Construir", detail: "Componentes claros e reutilizáveis" },
                { number: "03", title: "Validar", detail: "Comportamento, acesso e responsividade" },
              ].map((item) => (
                <div key={item.number} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-white/10 py-5">
                  <span className="pt-1 font-mono text-xs text-[#a2e8db]">{item.number}</span>
                  <div>
                    <p className="text-base font-medium text-zinc-200">{item.title}</p>
                    <p className="mt-1 text-sm text-zinc-500">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <Reveal><Projects view={view} /></Reveal>
        <Reveal delay={100}><About /></Reveal>
        <Reveal delay={150}><Terminal /></Reveal>
        <Reveal delay={100}><Contact /></Reveal>
      </div>
    </main>
  );
}
