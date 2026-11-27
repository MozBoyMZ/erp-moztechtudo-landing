type Props = {
  etiqueta: string;
  titulo: string;
  texto?: string;
  claro?: boolean;
};

export function SectionTitle({ etiqueta, titulo, texto, claro = false }: Props) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className={`text-sm font-semibold ${claro ? "text-brand-300" : "text-brand-700"}`}>{etiqueta}</p>
      <h2
        className={`mt-2 text-3xl font-bold tracking-tight text-balance sm:text-4xl ${claro ? "text-white" : "text-ink"}`}
      >
        {titulo}
      </h2>
      {texto ? (
        <p className={`mt-4 text-base text-pretty sm:text-lg ${claro ? "text-white/70" : "text-ink-soft"}`}>{texto}</p>
      ) : null}
    </div>
  );
}
