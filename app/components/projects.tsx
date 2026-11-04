"use client";

import { useState } from "react";
import { projects, type Project } from "../data/projects";

type View = "recruiter" | "freelance" | "complete";

function Preview({ project }: { project: Project }) {
  if (project.id === 2) {
    return (
      <div className="overflow-hidden border-b border-white/10 bg-[#101618] p-4 sm:p-6" aria-label="Ilustração conceitual de uma plataforma de vídeos, não uma captura real">
        <div className="mx-auto max-w-xl rounded-lg border border-white/10 bg-[#0b1012] p-3 shadow-xl sm:p-4">
          <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2"><span className="flex h-7 w-7 items-center justify-center rounded bg-[#a2e8db]/15 text-[#a2e8db]">▶</span><span className="text-xs font-semibold text-white">Alura Play</span></div>
            <div className="w-28 rounded border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-zinc-500 sm:w-44">Buscar vídeos…</div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[{name:"React na prática",tone:"from-cyan-900 to-slate-800",symbol:"⚛"},{name:"JavaScript",tone:"from-amber-900 to-stone-800",symbol:"JS"},{name:"Componentes",tone:"from-violet-900 to-slate-800",symbol:"</>"}].map(video => (
              <div key={video.name} className="min-w-0"><div className={`flex aspect-video items-center justify-center rounded bg-gradient-to-br ${video.tone}`}><span className="text-lg font-semibold text-white/80">{video.symbol}</span></div><p className="mt-2 truncate text-[10px] font-medium text-zinc-300">{video.name}</p><p className="mt-1 text-[9px] text-zinc-600">Conteúdo em vídeo</p></div>
            ))}
          </div>
        </div><p className="mt-3 text-right text-[10px] text-zinc-500">Representação conceitual · não é captura real</p>
      </div>
    );
  }
  if (project.id === 3) {
    return (
      <div className="overflow-hidden border-b border-white/10 bg-[#151713] p-4 sm:p-6" aria-label="Ilustração conceitual de uma loja com carrinho, não uma captura real">
        <div className="mx-auto max-w-xl rounded-lg border border-white/10 bg-[#0f1210] p-3 shadow-xl sm:p-4">
          <div className="mb-3 flex items-center justify-between"><span className="text-xs font-semibold text-zinc-100">Shopping Cart</span><span className="rounded-full border border-[#a2e8db]/30 px-2 py-1 text-[10px] text-[#a2e8db]">Carrinho · 2</span></div>
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(100px,0.7fr)] gap-2 sm:gap-3">
            <div className="grid grid-cols-2 gap-2">{[{n:"Produto A",v:"R$ 89",icon:"◈"},{n:"Produto B",v:"R$ 120",icon:"◇"}].map(item=><div key={item.n} className="min-w-0 rounded border border-white/10 bg-white/[0.03] p-2"><div className="flex aspect-[4/3] items-center justify-center rounded bg-[#25332c] text-2xl text-[#a2e8db]">{item.icon}</div><p className="mt-2 truncate text-[10px] text-zinc-200">{item.n}</p><p className="text-[10px] text-zinc-500">{item.v}</p></div>)}</div>
            <div className="rounded border border-white/10 p-2 sm:p-3"><p className="text-[10px] font-semibold text-zinc-200">Resumo</p><div className="mt-3 flex justify-between gap-1 text-[9px] text-zinc-500"><span>2 itens</span><span>R$ 209</span></div><div className="my-2 border-t border-white/10"/><div className="flex justify-between gap-1 text-[10px] font-semibold text-zinc-100"><span>Total</span><span>R$ 209</span></div><div className="mt-3 rounded bg-[#a2e8db] px-1 py-2 text-center text-[9px] font-semibold text-[#101819]">Finalizar</div></div>
          </div>
        </div><p className="mt-3 text-right text-[10px] text-zinc-500">Valores fictícios · representação conceitual</p>
      </div>
    );
  }
  if (project.id === 4) {
    return (
      <div className="overflow-hidden border-b border-white/10 bg-[#12141b] p-4 sm:p-6" aria-label="Ilustração conceitual de consultas GraphQL, não uma captura real">
        <div className="mx-auto max-w-xl overflow-hidden rounded-lg border border-white/10 bg-[#0c0f15] shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 text-[10px] text-zinc-400"><span>GraphQL Playground</span><span className="text-[#a2e8db]">● Consulta</span></div>
          <div className="grid grid-cols-2 divide-x divide-white/10 font-mono text-[9px] leading-5 sm:text-xs"><div className="min-w-0 p-3 text-zinc-300"><p className="text-pink-300">query <span className="text-zinc-200">GetItems</span> {'{'}</p><p className="pl-2 text-[#a2e8db]">items {'{'}</p><p className="pl-4">id</p><p className="pl-4">name</p><p className="pl-2 text-[#a2e8db]">{'}'}</p><p>{'}'}</p></div><div className="min-w-0 p-3 text-zinc-400"><p>{'{'}</p><p className="pl-2">"data": {'{'}</p><p className="pl-3">"items": [</p><p className="pl-4 text-[#a2e8db]">{'{'} "id": 1,</p><p className="pl-4 text-[#a2e8db]">"name": "Item" {'}'}</p><p className="pl-3">]</p><p className="pl-2">{'}'}</p><p>{'}'}</p></div></div>
        </div><p className="mt-3 text-right text-[10px] text-zinc-500">Exemplo fictício de consulta · representação conceitual</p>
      </div>
    );
  }
  if (project.id === 5) {
    return (
      <div className="overflow-hidden border-b border-white/10 bg-[#14181a] p-4 sm:p-6" aria-label="Ilustração conceitual de API REST, não uma captura real">
        <div className="mx-auto max-w-xl overflow-hidden rounded-lg border border-white/10 bg-[#0c1113] shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 px-3 py-3"><span className="text-xs font-semibold text-zinc-200">REST API</span><span className="rounded bg-[#a2e8db]/10 px-2 py-1 font-mono text-[10px] text-[#a2e8db]">Spring Boot</span></div>
          <div className="space-y-2 p-3 font-mono text-[10px] sm:p-4 sm:text-xs">{[{method:"GET",path:"/api/items",tone:"text-[#a2e8db]"},{method:"POST",path:"/api/items",tone:"text-amber-300"},{method:"GET",path:"/api/items/{id}",tone:"text-[#a2e8db]"}].map(route=><div key={route.method+route.path} className="flex items-center gap-3 rounded border border-white/10 bg-white/[0.03] px-3 py-2"><span className={`w-10 shrink-0 font-bold ${route.tone}`}>{route.method}</span><span className="min-w-0 truncate text-zinc-300">{route.path}</span><span className="ml-auto text-zinc-600">↗</span></div>)}</div>
        </div><p className="mt-3 text-right text-[10px] text-zinc-500">Endpoints ilustrativos · não representam rotas verificadas</p>
      </div>
    );
  }
  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-[#11191a] p-5 sm:p-7" aria-label="Prévia ilustrativa da Finance Platform com dados fictícios">
      <div className="mx-auto max-w-xl rounded-lg border border-white/10 bg-[#0d1113] p-4 shadow-2xl">
        <div className="mb-4 flex items-center justify-between text-[10px] font-medium uppercase tracking-widest text-zinc-400">
          <span>Finance / Overview</span><span className="text-[#a2e8db]">Prévia ilustrativa</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[["Entradas", "R$ 8.450"], ["Saídas", "R$ 3.120"], ["Saldo", "R$ 5.330"]].map(([label, value]) => (
            <div key={label} className="min-w-0 rounded border border-white/10 bg-white/[0.03] p-2 sm:p-3">
              <p className="text-[10px] text-zinc-500">{label}</p><p className="mt-2 truncate text-xs font-semibold text-zinc-100 sm:text-base">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded border border-white/10 p-3">
          <p className="mb-3 text-xs text-zinc-400">Evolução financeira · Ilustração</p>
          <div className="flex h-20 items-end gap-2">
            {[38, 56, 47, 72, 62, 87, 67, 95, 76, 100, 85, 93].map((h, i) => <span key={i} className="flex-1 rounded-t-sm bg-[#a2e8db]/60" style={{ height: `${h}%` }} />)}
          </div>
        </div>
      </div>
      <p className="mt-3 text-right text-[10px] text-zinc-500">Dados fictícios apenas para apresentação visual</p>
    </div>
  );
}

export default function Projects({ view }: { view: View }) {
  const [expanded, setExpanded] = useState<number>(1);
  const visible = projects.filter(p => view === "complete" || p.category === "both" || p.category === view);

  return (
    <section id="projetos" className="scroll-mt-24 border-t border-white/10 py-20 sm:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a2e8db]">01 / Trabalhos</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] text-zinc-100 sm:text-5xl">Projetos <span className="text-zinc-500">selecionados.</span></h2>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400">Projetos independentes, acadêmicos e de aprendizagem. Selecione um cartão para conhecer os detalhes. Links disponíveis apenas quando informados no currículo.</p>
      <div className="mt-9 grid items-start gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visible.map(project => {
          const active = expanded === project.id;
          return (
            <article key={project.id} className={`min-w-0 overflow-hidden rounded-xl border bg-[#141819] transition-colors ${active ? "border-[#a2e8db]/50" : "border-white/15"} ${project.featured ? "md:col-span-2" : ""}`}>
              <button type="button" onClick={() => setExpanded(active ? 0 : project.id)} aria-expanded={active} aria-controls={`project-${project.id}`} className="flex min-h-20 w-full items-center gap-4 px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#a2e8db]">
                <span className="font-mono text-xs text-[#a2e8db]">{String(project.id).padStart(2,"0")}</span>
                <span className="min-w-0 flex-1"><span className="block text-base font-semibold text-zinc-100">{project.title}</span><span className="mt-1 block text-xs text-zinc-500">{project.label}</span></span>
                <span className="text-xl text-zinc-400" aria-hidden="true">{active ? "−" : "+"}</span>
              </button>
              {active && <div id={`project-${project.id}`}>
                <Preview project={project} />
                <div className="p-5 sm:p-6">
                  <p className="text-sm leading-7 text-zinc-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{project.highlights.map(item => <span key={item} className="rounded-full border border-[#a2e8db]/25 px-3 py-1 text-xs text-[#a2e8db]">{item}</span>)}</div>
                  <div className="mt-4 flex flex-wrap gap-2">{project.technologies.map(item => <span key={item} className="rounded border border-white/15 px-2 py-1 text-xs text-zinc-300">{item}</span>)}</div>
                  {(project.demo || project.github) && <div className="mt-6 flex flex-wrap gap-3">
                    {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="rounded-md bg-zinc-100 px-4 py-2.5 text-xs font-semibold text-zinc-950 hover:bg-white">Abrir demonstração ↗</a>}
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/25 px-4 py-2.5 text-xs font-semibold text-zinc-100 hover:bg-white/10">Ver código ↗</a>}
                  </div>}
                </div>
              </div>}
            </article>
          );
        })}
      </div>
    </section>
  );
}
