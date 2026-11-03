
"use client";

import { useState } from "react";

const email = "markosspfc2@gmail.com";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/mkleeo",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mkleeo/",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <section id="contato" className="scroll-mt-10 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-neon-pink/40 bg-surface px-6 py-14 text-center shadow-[0_0_50px_rgba(255,0,127,0.08)] sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-neon-pink/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-neon-cyan/10 blur-3xl" />

          <div className="relative">
            <span className="inline-flex rounded-full border border-neon-green/30 bg-neon-green/5 px-4 py-2 text-xs font-semibold text-neon-green">
              DISPONÍVEL PARA OPORTUNIDADES
            </span>

            <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Vamos construir algo{" "}
              <span className="bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">
                incrível juntos?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-400">
              Estou aberto a oportunidades em desenvolvimento
              Front-end, projetos freelancer e novas conexões
              profissionais.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-neon-pink px-6 py-3 text-sm font-semibold text-white transition hover:bg-pink-600"
              >
                Enviar e-mail
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold transition hover:border-neon-cyan hover:text-neon-cyan"
              >
                {copied ? "E-mail copiado!" : "Copiar e-mail"}
              </button>
            </div>

            <p className="mt-5 break-all text-sm text-gray-400">
              {email}
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div>
            <a
              href="#inicio"
              className="text-lg font-extrabold tracking-tight"
            >
              MK<span className="text-neon-pink">.</span>LEEO
            </a>

            <p className="mt-2 text-xs text-gray-500">
  © 2026 Marcos Leonardo. Todos os direitos reservados.
</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition hover:text-neon-cyan"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#inicio"
              className="text-sm text-gray-400 transition hover:text-neon-pink"
            >
              Voltar ao topo ↑
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
