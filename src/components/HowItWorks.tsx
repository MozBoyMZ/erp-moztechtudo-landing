import { PASSOS } from "@/lib/content";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle etiqueta="Como começar" titulo="Pronto a usar no mesmo dia" />
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {PASSOS.map((p, i) => (
            <li key={p.titulo} className="relative rounded-2xl border border-line-soft p-6">
              <span className="bg-brand-gradient inline-flex size-10 items-center justify-center rounded-full font-mono text-sm font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{p.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
