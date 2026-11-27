import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { CONTACTO, ERP_URL, TESTE_DIAS, whatsappLink } from "@/lib/content";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Cta() {
  return (
    <section id="contacto" className="bg-app-bg py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-gradient relative overflow-hidden rounded-3xl px-6 py-14 text-center shadow-card sm:px-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(420px_200px_at_100%_0,rgb(255_255_255/0.18),transparent_65%)]" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">
              Comece hoje a organizar a sua empresa
            </h2>
            <p className="mt-4 text-lg text-white/80">
              {TESTE_DIAS} dias grátis, com todos os módulos. Se preferir, mostramos o sistema numa demonstração.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={ERP_URL} variante="claro" className="px-6 py-3.5 text-base">
                Começar teste grátis
                <ArrowRight size={18} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href={whatsappLink("Olá! Gostaria de saber mais sobre o Bindzu One ERP.")}
                variante="fantasma"
                externo
                className="px-6 py-3.5 text-base"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Falar no WhatsApp
              </ButtonLink>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-2 text-sm text-white/80 sm:flex-row sm:gap-6">
              <a href={`mailto:${CONTACTO.email}`} className="inline-flex items-center gap-2 hover:text-white">
                <Mail size={16} aria-hidden="true" /> {CONTACTO.email}
              </a>
              <a
                href={whatsappLink("Olá!")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <MessageCircle size={16} aria-hidden="true" /> {CONTACTO.telefoneVisivel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
