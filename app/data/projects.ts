export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
  category: "recruiter" | "freelance" | "both";
  status: "completed" | "development";
  kind: "finance" | "placeholder";
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Finance Platform",
    description:
      "Aplicação de gestão financeira com registro de receitas e despesas, relatórios, filtros por período e acompanhamento de orçamento. Demonstração pública disponível; funcionalidades continuam em evolução.",
    image: "",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    github: "",
    demo: "https://finance-platform-chi-blond.vercel.app/demo",
    featured: true,
    category: "both",
    status: "development",
    kind: "finance",
    highlights: ["Receitas e despesas", "Relatórios e filtros", "Limites de orçamento"],
  },
  {
    id: 2,
    title: "Próximo projeto / 02",
    description:
      "Espaço reservado para um projeto real. Este cartão demonstra a navegação do portfólio; não representa um trabalho concluído.",
    image: "",
    technologies: [],
    github: "",
    demo: "",
    featured: false,
    category: "both",
    status: "development",
    kind: "placeholder",
    highlights: [],
  },
  {
    id: 3,
    title: "Próximo projeto / 03",
    description:
      "Outro espaço reservado para um futuro case, com contexto, resultados, tecnologias e links verificáveis.",
    image: "",
    technologies: [],
    github: "",
    demo: "",
    featured: false,
    category: "both",
    status: "development",
    kind: "placeholder",
    highlights: [],
  },
];
