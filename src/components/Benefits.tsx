import { VANTAGENS } from "@/lib/content";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Benefits() {
  return (
    <section id="vantagens" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          etiqueta="Porquê o Bindzu One"
          titulo="Menos papel, menos folhas de Excel, mais controlo"
          texto="Um sistema pensado para a realidade das empresas moçambicanas, do pequeno negócio à empresa com várias equipas."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VANTAGENS.map(({ icon: Icon, titulo, texto }) => (
            <article
              key={titulo}
              className="group rounded-2xl border border-line-soft bg-app-bg/60 p-6 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-card"
            >
              <div className="bg-brand-gradient inline-flex size-11 items-center justify-center rounded-xl text-white shadow-[0_6px_16px_rgb(10_88_184/0.25)]">
                <Icon size={22} strokeWidth={1.9} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
