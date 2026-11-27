import { ArrowRight, FileText, Receipt, ShoppingCart, ClipboardCheck } from "lucide-react";

const fluxo = [
  { icon: FileText, nome: "Cotação", codigo: "CT 2026/0092", estado: "Aprovada" },
  { icon: ShoppingCart, nome: "Ordem de compra", codigo: "OC 2026/0041", estado: "Recebida" },
  { icon: ClipboardCheck, nome: "Factura", codigo: "FT 2026/0148", estado: "Emitida" },
  { icon: Receipt, nome: "Recibo", codigo: "RC 2026/0131", estado: "Pago" },
];

export function Showcase() {
  return (
    <section className="bg-app-bg py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-brand-700">Documentos ligados</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance text-ink sm:text-4xl">
            Escreva uma vez. O sistema trata do resto.
          </h2>
          <p className="mt-4 text-lg text-pretty text-ink-soft">
            Quando o cliente aprova a cotação, cria a ordem de compra, a factura e o recibo com um clique. Os artigos,
            os preços e o IVA passam de documento para documento, e o stock, as finanças e o projecto ficam
            actualizados.
          </p>
          <ul className="mt-6 space-y-3 text-ink-soft">
            {[
              "Histórico completo: de cada factura chega à cotação que lhe deu origem",
              "PDF pronto a enviar ao cliente ou em duas vias (Original e Duplicado)",
              "Documentos emitidos ficam bloqueados para evitar alterações",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="bg-brand-gradient mt-2 size-1.5 shrink-0 rounded-full" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <ol className="relative space-y-3" aria-label="Exemplo de fluxo de documentos">
          {fluxo.map(({ icon: Icon, nome, codigo, estado }, i) => (
            <li key={codigo} className="relative">
              <div
                className="flex items-center gap-4 rounded-2xl border border-line-soft bg-white p-4 shadow-soft"
                style={{ marginLeft: `${i * 1.25}rem` }}
              >
                <div className="bg-brand-gradient inline-flex size-11 shrink-0 items-center justify-center rounded-xl text-white">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-ink">{nome}</p>
                  <p className="font-mono text-xs text-ink-soft">{codigo}</p>
                </div>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{estado}</span>
              </div>
              {i < fluxo.length - 1 ? (
                <ArrowRight
                  size={16}
                  className="absolute -bottom-3 rotate-90 text-brand-500"
                  style={{ left: `${i * 1.25 + 2.1}rem` }}
                  aria-hidden="true"
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
