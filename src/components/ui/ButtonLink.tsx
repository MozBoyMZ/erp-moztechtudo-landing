import type { ReactNode } from "react";

type Variante = "primario" | "secundario" | "claro" | "fantasma";

const estilos: Record<Variante, string> = {
  primario:
    "bg-brand-gradient text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.25),0_6px_16px_rgb(10_88_184/0.3)] hover:brightness-110",
  secundario:
    "bg-white text-ink border border-line shadow-soft hover:border-ink-faint",
  claro: "bg-white text-navy-900 hover:bg-brand-50",
  fantasma: "text-white border border-white/25 hover:bg-white/10",
};

type Props = {
  href: string;
  children: ReactNode;
  variante?: Variante;
  externo?: boolean;
  className?: string;
};

export function ButtonLink({ href, children, variante = "primario", externo = false, className = "" }: Props) {
  return (
    <a
      href={href}
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${estilos[variante]} ${className}`}
    >
      {children}
    </a>
  );
}
