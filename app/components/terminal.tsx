
"use client";

import { useState, type FormEvent } from "react";

type TerminalLine = {
  type: "command" | "output";
  text: string;
};

const commands: Record<string, string> = {
  help: "Comandos disponíveis: help, about, skills, projects, contact, github, linkedin, clear",
  about:
    "Marcos Leonardo | Desenvolvedor Front-end | Formado em Análise e Desenvolvimento de Sistemas.",
  skills:
    "React, Next.js, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, Git e GitHub.",
  projects:
    "Explore meus projetos na seção Projetos ou acesse github.com/mkleeo.",
  contact: "E-mail: markosspfc2@gmail.com",
  github: "GitHub: https://github.com/mkleeo",
  linkedin: "LinkedIn: https://www.linkedin.com/in/mkleeo/",
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      type: "output",
      text: "MK.LEEO Terminal v1.0",
    },
    {
      type: "output",
      text: "Digite help para visualizar os comandos disponíveis.",
    },
  ]);

  function executeCommand(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const command = input.trim().toLowerCase();

    if (!command) return;

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const response =
      commands[command] ??
      `Comando não encontrado: ${command}. Digite help.`;

    setHistory((current) => [
      ...current,
      { type: "command", text: command },
      { type: "output", text: response },
    ]);

    setInput("");
  }

  return (
    <section id="terminal" className="border-t border-white/10 py-20">
      <div className="mb-8">
        <span className="text-xs font-bold tracking-widest text-[#a2e8db]">
          EXPLORAR / TERMINAL
        </span>

        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
          Terminal <span className="text-zinc-500">interativo.</span>
        </h2>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          Explore meu perfil profissional utilizando comandos de terminal.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/15 bg-[#080b12] ">
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#151719] px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-500" />

          <span className="ml-4 font-mono text-xs text-gray-400">
            mkleeo@portfolio:~
          </span>
        </div>

        <div
          role="log"
          aria-live="polite"
          className="h-80 overflow-y-auto p-5 font-mono text-sm leading-7 sm:p-7"
        >
          {history.map((line, index) => (
            <p
              key={index}
              className={`mb-2 break-words whitespace-pre-wrap ${
                line.type === "command"
                  ? "text-[#a2e8db]"
                  : "text-gray-300"
              }`}
            >
              {line.type === "command" ? "$ " : ""}
              {line.text}
            </p>
          ))}
        </div>

        <form
          onSubmit={executeCommand}
          className="flex items-center gap-3 border-t border-white/10 px-5 py-4"
        >
          <label htmlFor="terminal-command" className="font-mono text-[#a2e8db]">
            $
          </label>

          <input
            id="terminal-command"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Digite um comando..."
            autoComplete="off"
            spellCheck={false}
            className="min-w-0 flex-1 bg-transparent font-mono text-sm text-white outline-none placeholder:text-gray-600"
          />

          <button
            type="submit"
            className="rounded-lg border border-white/25 px-4 py-2 text-xs font-semibold text-[#a2e8db] transition hover:bg-white/10"
          >
            Executar
          </button>
        </form>
      </div>

      <p className="mt-4 text-xs text-gray-500">
        Experimente: help, about, skills, projects ou clear.
      </p>
    </section>
  );
}
