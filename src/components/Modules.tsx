import { Check } from "lucide-react";
import { MODULOS } from "@/lib/content";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Modules() {
  return (
    <section
      id="modulos"
      className="relative overflow-hidden bg-gradient-to-b from-[#071C45] to-navy-950 py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_360px_at_85%_0%,rgb(3_163_251/0.22),transparent_65%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          claro
          etiqueta="Módulos"
          titulo="Um ERP completo, módulo a módulo"
          texto="Cada módulo funciona sozinho e fica ainda melhor ligado aos outros. A sua empresa activa apenas o que precisa."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MODULOS.map(({ id, icon: Icon, nome, resumo, itens }) => (
            <article
              key={id}
              className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition hover:border-brand-300/40 hover:bg-white/[0.08]"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex size-10 items-center justify-center rounded-xl bg-white/10 text-brand-300">
                  <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-white">{nome}</h3>
              </div>
              <p className="mt-3 text-sm text-[#B8CAE4]">{resumo}</p>
              <ul className="mt-4 space-y-2">
                {itens.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-white/80">
                    <Check size={16} className="mt-0.5 shrink-0 text-[#45D6AA]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
