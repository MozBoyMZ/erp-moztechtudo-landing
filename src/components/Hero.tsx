import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { ERP_URL, SLOGAN, TESTE_DIAS, whatsappLink } from "@/lib/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProductMockup } from "@/components/ProductMockup";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[radial-gradient(900px_420px_at_92%_-8%,#DCEAF8_0,transparent_65%)] pt-28 pb-20 sm:pt-32 lg:pb-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-soft">
            <span className="size-1.5 rounded-full bg-leaf" />
            Feito em Moçambique, para empresas moçambicanas
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-balance text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
            Toda a gestão da sua empresa <span className="text-brand-gradient">num só sistema.</span>
          </h1>
          <p className="mt-6 text-lg text-pretty text-ink-soft">
            Facturação, compras, inventário, finanças, projectos, contabilidade e recursos humanos, ligados entre si e
            acessíveis em qualquer dispositivo. {SLOGAN}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={ERP_URL} className="px-6 py-3.5 text-base">
              Começar teste grátis
              <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href={whatsappLink("Olá! Gostaria de ver uma demonstração do Bindzu One ERP.")}
              variante="secundario"
              externo
              className="px-6 py-3.5 text-base"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Pedir demonstração
            </ButtonLink>
          </div>

          <ul className="mt-8 flex flex-col gap-2 text-sm text-ink-soft sm:flex-row sm:flex-wrap sm:gap-x-6">
            {[`${TESTE_DIAS} dias grátis`, "Sem instalação", "Sem cartão de crédito"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-ok" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="bg-brand-gradient absolute -inset-6 -z-10 rounded-[2rem] opacity-15 blur-3xl" />
          <ProductMockup />
          <p className="mt-3 text-center text-xs text-ink-faint">Imagem ilustrativa do painel do Bindzu One ERP</p>
        </div>
      </div>
    </section>
  );
}
