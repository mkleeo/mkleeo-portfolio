
const skills = [
  {
    title: "Front-end",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "GitHub", "VS Code", "APIs REST", "Bootstrap"],
  },
  {
    title: "Qualidade & Desenvolvimento",
    items: ["Responsividade", "Componentização", "Testes", "Boas práticas", "UX/UI"],
  },
];

export default function About() {
  return (
    <section id="sobre" className="scroll-mt-10 border-t border-border py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <span className="text-xs font-bold tracking-widest text-neon-cyan">
            QUEM SOU EU
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Mais que código,{" "}
            <span className="bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">
              soluções digitais.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400">
            Sou Marcos Leonardo, desenvolvedor Front-end formado
            em Análise e Desenvolvimento de Sistemas.
          </p>

          <p className="mt-4 text-base leading-8 text-gray-400">
            Tenho experiência prática com React, JavaScript,
            HTML e CSS, desenvolvendo interfaces modernas,
            responsivas e organizadas. Atualmente aprofundo
            meus conhecimentos em Next.js e TypeScript,
            aplicando novas tecnologias em projetos reais.
          </p>

          <div className="mt-8 rounded-xl border border-border bg-surface/90 p-6">
            <span className="text-xs font-bold text-neon-pink">
              FORMAÇÃO ACADÊMICA
            </span>

            <h3 className="mt-3 text-lg font-bold">
              Análise e Desenvolvimento de Sistemas
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Centro Universitário Estácio
            </p>

            <span className="mt-4 inline-flex rounded-md border border-neon-green/30 bg-neon-green/5 px-3 py-1.5 text-xs text-neon-green">
              Graduação concluída
            </span>
          </div>
        </div>

        <div>
          <span className="text-xs font-bold tracking-widest text-neon-pink">
            STACK & COMPETÊNCIAS
          </span>

          <h2 className="mt-4 text-2xl font-bold">
            Tecnologias que utilizo
          </h2>

          <div className="mt-7 space-y-5">
            {skills.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-border bg-surface/90 p-6 transition-colors hover:border-neon-cyan/40"
              >
                <h3 className="font-semibold text-white">
                  {group.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-background/70 px-3 py-2 text-xs text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-neon-cyan/20 bg-neon-cyan/5 p-5">
            <p className="text-sm leading-7 text-gray-300">
              Meu objetivo é construir experiências digitais
              que combinem código limpo, boa usabilidade
              e soluções práticas para pessoas e empresas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
