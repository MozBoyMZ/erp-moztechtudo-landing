"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { LogIn, Menu, X } from "lucide-react";
import { ERP_URL, NAV_LINKS } from "@/lib/content";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Header() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 8);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(false);
    };
    window.addEventListener("keydown", aoTeclar);
    return () => window.removeEventListener("keydown", aoTeclar);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        rolou || aberto ? "bg-white/90 shadow-[0_4px_18px_rgb(6_24_58/0.06)] backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Principal">
        <a href="#inicio" className="flex shrink-0 items-center" aria-label="Bindzu One ERP · início">
          <Image src="/logo-bindzu-one.svg" alt="Bindzu One ERP" width={900} height={284} unoptimized priority className="h-9 w-auto" />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition hover:bg-app-bg hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={ERP_URL}
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-navy-900 transition hover:bg-app-bg"
          >
            <LogIn size={16} aria-hidden="true" />
            Entrar
          </a>
          <ButtonLink href={ERP_URL} className="py-2.5">
            Começar teste grátis
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg text-navy-900 hover:bg-app-bg lg:hidden"
          aria-expanded={aberto}
          aria-controls="menu-movel"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
        >
          {aberto ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {aberto ? (
        <div id="menu-movel" className="border-t border-line-soft bg-white px-4 pt-2 pb-6 lg:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setAberto(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-app-bg"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-2">
            <ButtonLink href={ERP_URL} variante="secundario">
              <LogIn size={16} aria-hidden="true" />
              Entrar
            </ButtonLink>
            <ButtonLink href={ERP_URL}>Começar teste grátis</ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
