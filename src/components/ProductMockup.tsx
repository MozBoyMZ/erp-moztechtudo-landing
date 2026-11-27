import { FilePlus2, Search, TrendingUp } from "lucide-react";

const documentos = [
  { n: "FT 2026/0148", cli: "Construções Lda", estado: "Pago", cor: "text-[#45D6AA]" },
  { n: "CT 2026/0092", cli: "Hotel Polana Sul", estado: "Emitido", cor: "text-brand-300" },
  { n: "RC 2026/0131", cli: "AgroMatola", estado: "Pago", cor: "text-[#45D6AA]" },
  { n: "GR 2026/0057", cli: "Transportes Beira", estado: "Rascunho", cor: "text-[#B8CAE4]" },
];

const barras = [42, 58, 50, 66, 61, 78, 72, 88, 80, 94, 86, 100];
const meses = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

/** Pré-visualização ilustrativa do Bindzu One ERP, com o mesmo visual da aplicação. */
export function ProductMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line-soft bg-white shadow-card" aria-hidden="true">
      {/* barra da janela */}
      <div className="flex items-center gap-2 border-b border-line-soft bg-white px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#F28C80]" />
        <span className="size-2.5 rounded-full bg-[#E6B04A]" />
        <span className="size-2.5 rounded-full bg-[#45D6AA]" />
        <span className="ml-3 truncate rounded-full bg-app-bg px-3 py-1 font-mono text-[11px] text-ink-soft">
          erp.moztechtudo.com
        </span>
      </div>

      <div className="flex min-h-[340px] text-left">
        {/* menu lateral */}
        <div className="hidden w-48 shrink-0 flex-col gap-2 bg-gradient-to-b from-[#071C45] to-navy-950 p-3 sm:flex">
          <div className="bg-brand-gradient flex items-center gap-2 rounded-[10px] px-3 py-2 text-[11px] font-bold text-white shadow-[0_8px_20px_rgb(3_163_251/0.28)]">
            <FilePlus2 size={13} /> Novo documento
          </div>
          <div className="flex items-center gap-2 rounded-[10px] bg-white/6 px-3 py-2 text-[10.5px] text-[#7F96B8]">
            <Search size={12} /> Pesquisar…
          </div>
          <p className="mt-1 text-[10px] font-semibold text-[#7F96B8]">Documentos recentes</p>
          {documentos.map((d) => (
            <div key={d.n} className="rounded-[10px] bg-white/5 px-2.5 py-2">
              <div className="flex items-center justify-between gap-1">
                <span className="font-mono text-[10px] font-semibold text-white">{d.n}</span>
                <span className={`rounded-full bg-current/15 px-1.5 text-[9px] font-semibold ${d.cor}`}>{d.estado}</span>
              </div>
              <p className="mt-0.5 truncate text-[10px] text-[#B8CAE4]">{d.cli}</p>
            </div>
          ))}
        </div>

        {/* área principal */}
        <div className="flex-1 bg-[radial-gradient(600px_280px_at_92%_-8%,#DCEAF8_0,transparent_65%)] bg-app-bg p-4">
          <div className="flex flex-wrap gap-1.5">
            {["Painel", "Vendas", "Compras", "Inventário", "Finanças"].map((m, i) => (
              <span
                key={m}
                className={`rounded-full px-2.5 py-1 text-[10.5px] font-medium ${
                  i === 0 ? "bg-navy-900 text-white" : "bg-white text-ink-soft"
                }`}
              >
                {m}
              </span>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { l: "Vendas do mês", v: "1.284.500 MT" },
              { l: "A receber", v: "312.900 MT" },
              { l: "Projectos activos", v: "14" },
            ].map((k) => (
              <div key={k.l} className="rounded-xl bg-white p-2.5 shadow-soft">
                <p className="truncate text-[9.5px] text-ink-soft">{k.l}</p>
                <p className="mt-1 truncate text-[12px] font-bold text-ink sm:text-[13px]">{k.v}</p>
              </div>
            ))}
          </div>

          <div className="mt-2 rounded-xl bg-white p-3 shadow-soft">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold text-ink">Entradas por mês</p>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-ok">
                <TrendingUp size={11} /> +18%
              </span>
            </div>
            <div className="mt-3 flex gap-1.5">
              {barras.map((h, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1">
                  <div className="flex h-20 w-full items-end">
                    <div
                      className={`w-full rounded-t-[4px] ${i === barras.length - 1 ? "bg-brand-gradient" : "bg-[#C9DDF5]"}`}
                      style={{ height: `${h}%` }}
                    />
                  </div>
                  <span className="text-[8.5px] text-ink-faint">{meses[i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-2 overflow-hidden rounded-xl bg-white shadow-soft">
            <div className="bg-brand-gradient flex items-center justify-between px-3 py-2">
              <span className="text-[11px] font-bold text-white">Factura FT 2026/0148</span>
              <span className="rounded-full border border-white/40 bg-white/10 px-2 text-[9px] text-white">Original</span>
            </div>
            <div className="grid grid-cols-3 gap-2 px-3 py-2 text-[10px]">
              <span className="text-ink-soft">Subtotal</span>
              <span className="text-ink-soft">IVA 16%</span>
              <span className="font-semibold text-ink">Total</span>
              <span className="font-mono text-ink">85.000,00</span>
              <span className="font-mono text-ink">13.600,00</span>
              <span className="font-mono font-semibold text-brand-700">98.600,00 MT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
