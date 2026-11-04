
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
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-surface px-6 py-14 text-center  sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

          <div className="relative">
            <span className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-[#a2e8db]">
              DISPONÍVEL PARA OPORTUNIDADES
            </span>

            <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Vamos construir algo{" "}
              <span className="text-zinc-500">
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
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-white"
              >
                Enviar e-mail
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 bg-background px-6 py-3 text-sm font-semibold transition hover:border-neon-cyan hover:text-[#a2e8db]"
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

      <footer className="border-t border-white/15 py-8">
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div>
            <a
              href="#inicio"
              className="text-lg font-semibold tracking-tight"
            >
              MK<span className="text-[#a2e8db]">.</span>LEEO
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
                className="text-sm text-gray-400 transition hover:text-[#a2e8db]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#inicio"
              className="text-sm text-gray-400 transition hover:text-[#a2e8db]"
            >
              Voltar ao topo ↑
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
