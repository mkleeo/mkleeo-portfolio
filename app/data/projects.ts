export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  category: "recruiter" | "freelance" | "both";
  featured?: boolean;
  highlights: string[];
  label: string;
};

export const projects: Project[] = [
  {
    id: 1, title: "Finance Platform", label: "Projeto independente · Em evolução", featured: true,
    description: "Aplicação de gestão financeira pessoal com autenticação, cadastro e gerenciamento de receitas e despesas, relatórios, gráficos e acompanhamento de orçamento. Demonstração pública sem login.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    github: "https://github.com/mkleeo/finance-platform",
    demo: "https://finance-platform-chi-blond.vercel.app/demo", category: "both",
    highlights: ["Autenticação", "CRUD financeiro", "Relatórios", "Orçamentos"],
  },
  {
    id: 2, title: "Alura Play", label: "Projeto acadêmico", category: "recruiter",
    description: "Interface responsiva de plataforma de vídeos, com listagem de conteúdos, busca e componentes reutilizáveis.",
    technologies: ["React", "JavaScript", "Styled Components"],
    highlights: ["Componentização", "Busca", "Responsividade"],
  },
  {
    id: 3, title: "Shopping Cart App", label: "Projeto de aprendizagem", category: "both",
    description: "Carrinho de compras com adição e remoção de produtos, atualização de quantidades e cálculo de totais.",
    technologies: ["React", "JavaScript", "CSS"],
    highlights: ["Estado", "Carrinho", "Cálculo de totais"],
  },
  {
    id: 4, title: "React + GraphQL", label: "Projeto de aprendizagem", category: "recruiter",
    description: "Atividades práticas com consultas, mutations, filtros e gerenciamento de cache utilizando Apollo Client.",
    technologies: ["React", "GraphQL", "Apollo Client"],
    highlights: ["Queries", "Mutations", "Cache"],
  },
  {
    id: 5, title: "Santander Dev Week", label: "Projeto de aprendizagem", category: "recruiter",
    description: "Estudo de estruturação de aplicações back-end e fundamentos de APIs REST com Java e Spring Boot.",
    technologies: ["Java", "Spring Boot", "API REST"],
    github: "https://github.com/mkleeo/santander-dev-week",
    highlights: ["Back-end", "API REST"],
  },
];
