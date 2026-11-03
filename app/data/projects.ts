
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
};
 
export const projects: Project[] = [
  {
    id: 1,
    title: "Finance Platform — Prévia",
    description:
      "Dashboard financeiro com receitas, despesas e relatórios.",
    image: "",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    github: "",
    demo: "",
    featured: true,
    category: "both",
    status: "development",
  },
  {
    id: 2,
    title: "Projeto de Demonstração 02",
    description:
      "Espaço para visualizar a expansão dos cartões.",
    image: "",
    technologies: ["React", "CSS"],
    github: "",
    demo: "",
    featured: false,
    category: "both",
    status: "development",
  },
  {
    id: 3,
    title: "Projeto de Demonstração 03",
    description:
      "Outro cartão para testar a interação com o mouse.",
    image: "",
    technologies: ["TypeScript"],
    github: "",
    demo: "",
    featured: false,
    category: "both",
    status: "development",
  },
];

