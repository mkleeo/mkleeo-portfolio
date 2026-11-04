const groups = [
  { title: "Front-end", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Styled Components", "shadcn/ui"] },
  { title: "Aplicações e dados", items: ["APIs REST", "CRUD", "Autenticação", "Prisma ORM", "PostgreSQL", "Recharts", "GraphQL", "Apollo Client"] },
  { title: "Ferramentas e fundamentos", items: ["Git", "GitHub", "Vercel", "Responsividade", "Componentização", "Testes manuais", "Java (fundamentos)", "Spring Boot (fundamentos)"] },
];
const courses = [
  { title: "React: utilizando GraphQL para integração de dados", school: "Alura · 2026" },
  { title: "Engenharia de Prompts na AWS com Claude", school: "Nexa / DIO · 2024" },
  { title: "Make: automatizando respostas de clientes", school: "Alura · 2025" },
];

export default function About() {
  return (
    <section id="sobre" className="scroll-mt-20 border-t border-white/10 py-20 sm:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a2e8db]">02 / Sobre</p>
      <div className="mt-5 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-zinc-100 sm:text-5xl">Desenvolvimento com <span className="text-zinc-500">propósito.</span></h2>
          <p className="mt-6 text-base leading-8 text-zinc-400">Sou Marcos Leonardo, desenvolvedor Front-end formado em Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá. Desenvolvo interfaces responsivas e aplicações web com foco em usabilidade, organização e manutenção do código.</p>
          <p className="mt-4 text-base leading-8 text-zinc-400">Tenho experiência prática em projetos independentes e acadêmicos, incluindo uma aplicação de gestão financeira com autenticação, operações CRUD e persistência de dados.</p>
          <div className="mt-8 rounded-xl border border-white/10 bg-[#151719] p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#a2e8db]">Formação acadêmica</p>
            <h3 className="mt-3 text-lg font-semibold text-white">Análise e Desenvolvimento de Sistemas</h3>
            <p className="mt-2 text-sm text-zinc-400">Universidade Estácio de Sá · Graduação concluída</p>
          </div>
          <div className="mt-4 rounded-xl border border-white/10 bg-[#151719] p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#a2e8db]">Idiomas e disponibilidade</p>
            <p className="mt-3 text-sm leading-7 text-zinc-300">Português nativo · Inglês básico a intermediário, em desenvolvimento, com leitura de documentação técnica.</p>
            <p className="mt-2 text-sm leading-7 text-zinc-400">Disponível para oportunidades remotas no Brasil e internacionais.</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-100">Competências técnicas</h3>
          <div className="mt-6 space-y-4">{groups.map(group => <div key={group.title} className="rounded-xl border border-white/10 bg-[#151719] p-5 sm:p-6">
            <h4 className="font-semibold text-zinc-100">{group.title}</h4>
            <div className="mt-4 flex flex-wrap gap-2">{group.items.map(item => <span key={item} className="rounded-md border border-white/10 px-3 py-2 text-xs text-zinc-300">{item}</span>)}</div>
          </div>)}</div>
          <h3 className="mt-10 text-2xl font-semibold tracking-tight text-zinc-100">Cursos e certificações</h3>
          <div className="mt-5 space-y-3">{courses.map(course => <div key={course.title} className="rounded-lg border border-white/10 bg-[#151719] p-5">
            <p className="text-sm font-medium leading-6 text-zinc-100">{course.title}</p><p className="mt-2 text-xs text-zinc-400">{course.school}</p>
          </div>)}</div>
        </div>
      </div>
    </section>
  );
}
