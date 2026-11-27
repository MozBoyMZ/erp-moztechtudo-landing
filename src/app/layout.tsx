import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

// As fontes são descarregadas no build e servidas pelo próprio site (sem pedidos ao Google no navegador).
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-plex-mono",
});

const titulo = "Bindzu One ERP · Gestão integrada para empresas em Moçambique";
const descricao =
  "Facturação, compras, inventário, finanças, projectos, contabilidade e recursos humanos num só sistema online. Teste grátis durante 14 dias.";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: titulo,
  description: descricao,
  applicationName: "Bindzu One ERP",
  keywords: [
    "ERP Moçambique",
    "software de facturação",
    "facturação Maputo",
    "gestão empresarial",
    "contabilidade PGC-NIRF",
    "processamento salarial IRPS INSS",
    "Bindzu One",
  ],
  authors: [{ name: "MOZTECHTUDO" }],
  openGraph: {
    type: "website",
    locale: "pt_MZ",
    siteName: "Bindzu One ERP",
    title: titulo,
    description: descricao,
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descricao,
  },
};

export const viewport: Viewport = {
  themeColor: "#06183a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${inter.variable} ${plexMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
