"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { ERP_URL, PLANOS, TESTE_DIAS, formatarMT, whatsappLink } from "@/lib/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ButtonLink } from "@/components/ui/ButtonLink";

type Periodo = "mensal" | "anual";

export function Pricing() {
  const [periodo, setPeriodo] = useState<Periodo>("mensal");

  return (
    <section id="precos" className="bg-app-bg py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          etiqueta="Preços"
          titulo="Planos simples, em meticais"
          texto={`Experimente todos os módulos durante ${TESTE_DIAS} dias. Depois escolha o plano certo para a sua empresa.`}
        />

        <div className="mt-8 flex justify-center">
          <div role="radiogroup" aria-label="Período de pagamento" className="inline-flex rounded-full bg-white p-1 shadow-soft">
            {(["mensal", "anual"] as const).map((p) => (
              <button
                key={p}
                type="button"
                role="radio"
                aria-checked={periodo === p}
                onClick={() => setPeriodo(p)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  periodo === p ? "bg-navy-900 text-white" : "text-ink-soft hover:text-ink"
                }`}
              >
                {p === "mensal" ? "Mensal" : "Anual · 2 meses grátis"}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PLANOS.map((plano) => {
            const preco = plano.mensal === null ? null : periodo === "anual" ? plano.mensal * 10 : plano.mensal;
            const destaque = plano.destaque === true;
            return (
              <article
                key={plano.id}
                className={`relative flex flex-col rounded-2xl p-6 ${
                  destaque
                    ? "bg-gradient-to-b from-[#071C45] to-navy-950 text-white shadow-card ring-2 ring-brand-500"
                    : "border border-line-soft bg-white shadow-soft"
                }`}
              >
                {destaque ? (
                  <span className="bg-brand-gradient absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold text-white">
                    <Sparkles size={12} aria-hidden="true" /> Mais escolhido
                  </span>
                ) : null}
                <h3 className={`text-lg font-bold ${destaque ? "text-white" : "text-ink"}`}>{plano.nome}</h3>
                <p className={`mt-2 min-h-[3.75rem] text-sm ${destaque ? "text-[#B8CAE4]" : "text-ink-soft"}`}>
                  {plano.titulo}
                </p>

                <div className="mt-5">
                  {preco === null ? (
                    <p className={`text-3xl font-extrabold ${destaque ? "text-white" : "text-ink"}`}>Sob consulta</p>
                  ) : (
                    <p className="flex items-baseline gap-1">
                      <span className={`text-3xl font-extrabold tracking-tight ${destaque ? "text-white" : "text-ink"}`}>
                        {formatarMT(preco)}
                      </span>
                      <span className={`text-sm ${destaque ? "text-[#B8CAE4]" : "text-ink-soft"}`}>
                        /{periodo === "anual" ? "ano" : "mês"}
                      </span>
                    </p>
                  )}
                  <p className={`mt-1 text-xs ${destaque ? "text-[#7F96B8]" : "text-ink-faint"}`}>
                    {plano.utilizadores} · {plano.empresas}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {plano.inclui.map((item) => (
                    <li key={item} className={`flex gap-2 text-sm ${destaque ? "text-white/85" : "text-ink"}`}>
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${destaque ? "text-[#45D6AA]" : "text-ok"}`}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  {preco === null ? (
                    <ButtonLink
                      href={whatsappLink("Olá! Gostaria de uma proposta para o plano Corporativo do Bindzu One ERP.")}
                      variante="secundario"
                      externo
                      className="w-full"
                    >
                      Pedir proposta
                    </ButtonLink>
                  ) : (
                    <ButtonLink href={ERP_URL} variante={destaque ? "primario" : "secundario"} className="w-full">
                      Começar teste grátis
                    </ButtonLink>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-ink-soft">
          Preços em meticais. O plano anual corresponde a 10 meses de pagamento. Suporte profissional com horas
          incluídas disponível como opção.
        </p>
      </div>
    </section>
  );
}
