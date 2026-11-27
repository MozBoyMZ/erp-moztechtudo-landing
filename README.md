# Bindzu One ERP · Landing page

Página de apresentação do **Bindzu One ERP** (MOZTECHTUDO), feita com Next.js (App Router), React, Tailwind CSS v4 e Lucide Icons.

## Executar localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run start
```

## Onde alterar

| O quê | Ficheiro |
| --- | --- |
| Endereço da ERP (botões "Entrar" e "Começar teste grátis") | `src/lib/content.ts` → `ERP_URL` |
| Contactos (e-mail, WhatsApp) | `src/lib/content.ts` → `CONTACTO` |
| Planos e preços | `src/lib/content.ts` → `PLANOS` |
| Módulos, vantagens, FAQ | `src/lib/content.ts` |
| Cores da marca | `src/app/globals.css` → `@theme` |
| Logótipo | `public/logo-bindzu-one.svg` |
| Ícone do separador | `src/app/icon.svg` |

## Estrutura

```
src/
  app/          layout.tsx, page.tsx, globals.css, icon.svg
  components/   Header, Hero, Benefits, Modules, Showcase, HowItWorks, Pricing, Faq, Cta, Footer
  components/ui ButtonLink, SectionTitle, WhatsAppButton
  lib/          content.ts (todos os textos e dados)
```

## Deploy

Ligado à Vercel: cada `push` para `main` publica uma nova versão automaticamente.
Variável opcional: `NEXT_PUBLIC_SITE_URL` (endereço público, usado nas metatags de partilha).
