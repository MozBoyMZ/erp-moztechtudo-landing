import { ChevronDown } from "lucide-react";
import { FAQ } from "@/lib/content";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Faq() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionTitle etiqueta="Perguntas frequentes" titulo="Tire as suas dúvidas" />
        <div className="mt-12 divide-y divide-line-soft rounded-2xl border border-line-soft">
          {FAQ.map((item) => (
            <details key={item.p} className="group px-5 py-1 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-semibold text-ink">
                {item.p}
                <ChevronDown
                  size={18}
                  className="shrink-0 text-ink-faint transition group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-ink-soft">{item.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
