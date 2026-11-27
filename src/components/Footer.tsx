import Image from "next/image";
import { CONTACTO, ERP_URL, NAV_LINKS, SLOGAN } from "@/lib/content";

export function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-[#B4C6E0]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="inline-flex rounded-xl bg-white px-4 py-3">
            <Image src="/logo-bindzu-one.svg" alt="Bindzu One ERP" width={900} height={284} unoptimized className="h-9 w-auto" />
          </div>
          <p className="mt-4 max-w-sm text-sm">{SLOGAN}</p>
          <p className="mt-2 text-sm text-[#7F96B8]">
            Um produto {CONTACTO.empresa} · {CONTACTO.cidade}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Navegação</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Bindzu One ERP</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={ERP_URL} className="hover:text-white">
                Entrar na conta
              </a>
            </li>
            <li>
              <a href={`${ERP_URL}/termos`} className="hover:text-white">
                Termos de Utilização
              </a>
            </li>
            <li>
              <a href={`${ERP_URL}/privacidade`} className="hover:text-white">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACTO.email}`} className="hover:text-white">
                {CONTACTO.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-[#7F96B8] sm:px-6 lg:px-8">
          © {ano} {CONTACTO.empresa}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
