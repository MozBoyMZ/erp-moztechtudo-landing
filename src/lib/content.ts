import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  Calculator,
  CloudCog,
  FileCheck2,
  FolderKanban,
  Link2,
  Lock,
  ShoppingCart,
  Smartphone,
  Users,
  Wallet,
} from "lucide-react";

/** Endereço da aplicação Bindzu One ERP (botões "Entrar" e "Começar teste grátis"). */
export const ERP_URL = "https://erp.moztechtudo.com";

export const CONTACTO = {
  email: "info@moztechtudo.com",
  whatsapp: "258845488442",
  telefoneVisivel: "+258 84 548 8442",
  empresa: "MOZTECHTUDO",
  cidade: "Maputo, Moçambique",
};

export const SLOGAN = "Gestão integrada. Decisões mais inteligentes.";
export const TESTE_DIAS = 14;

export function whatsappLink(mensagem: string): string {
  return `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export const NAV_LINKS = [
  { href: "#modulos", label: "Módulos" },
  { href: "#vantagens", label: "Vantagens" },
  { href: "#precos", label: "Preços" },
  { href: "#faq", label: "Perguntas" },
  { href: "#contacto", label: "Contacto" },
];

export type Vantagem = { icon: LucideIcon; titulo: string; texto: string };

export const VANTAGENS: Vantagem[] = [
  {
    icon: FileCheck2,
    titulo: "Facturação em conformidade",
    texto:
      "Facturas, recibos, notas de crédito e débito e guias de remessa com IVA, NUIT e numeração sequencial, prontos a enviar em PDF.",
  },
  {
    icon: Link2,
    titulo: "Documentos interligados",
    texto:
      "Da cotação aprovada à ordem de compra, à factura e ao recibo: cada documento nasce do anterior, sem voltar a escrever nada.",
  },
  {
    icon: Smartphone,
    titulo: "Em qualquer dispositivo",
    texto:
      "Funciona no computador, no tablet e no telemóvel, directamente no navegador. Não precisa de instalar nada.",
  },
  {
    icon: Users,
    titulo: "Multi-utilizador",
    texto:
      "Toda a equipa a trabalhar sobre os mesmos dados, cada pessoa com o seu acesso e com as suas permissões.",
  },
  {
    icon: Lock,
    titulo: "Dados protegidos",
    texto:
      "Palavras-passe cifradas, autenticação em dois passos e cópias de segurança. Os seus dados podem ser exportados a qualquer momento.",
  },
  {
    icon: CloudCog,
    titulo: "Active só o que precisa",
    texto:
      "Cada módulo é completo e independente. Comece pelas vendas e acrescente projectos, contabilidade ou RH quando a empresa crescer.",
  },
];

export type Modulo = {
  id: string;
  icon: LucideIcon;
  nome: string;
  resumo: string;
  itens: string[];
};

export const MODULOS: Modulo[] = [
  {
    id: "vendas",
    icon: BadgeDollarSign,
    nome: "Vendas",
    resumo: "Do primeiro contacto ao recibo.",
    itens: [
      "Clientes e oportunidades comerciais",
      "Cotações, encomendas e facturas",
      "Recibos e notas de crédito e de débito",
      "Guias de remessa e PDF em duas vias",
    ],
  },
  {
    id: "compras",
    icon: ShoppingCart,
    nome: "Compras",
    resumo: "Fornecedores e encomendas sob controlo.",
    itens: [
      "Fornecedores e respectivo histórico",
      "Requisições e ordens de compra",
      "Recepção de mercadoria ligada ao stock",
      "Devoluções a fornecedores",
    ],
  },
  {
    id: "stock",
    icon: Boxes,
    nome: "Inventário",
    resumo: "Saiba sempre o que tem e onde está.",
    itens: [
      "Artigos, armazéns e lotes",
      "Movimentos e cartão do artigo",
      "Contagem física de inventário",
      "Sugestão de compra e quantidades encomendadas",
    ],
  },
  {
    id: "financas",
    icon: Wallet,
    nome: "Finanças",
    resumo: "Entradas, saídas e tesouraria.",
    itens: [
      "Contas a receber e a pagar",
      "Caixa e bancos",
      "Despesas por categoria",
      "Fluxo mensal de entradas e saídas",
    ],
  },
  {
    id: "projetos",
    icon: FolderKanban,
    nome: "Gestão de Projectos",
    resumo: "Rentabilidade de cada obra ou serviço.",
    itens: [
      "Ficha de projecto ligada à cotação",
      "Tarefas, custos e assiduidade",
      "Marcos de facturação",
      "Análise de rentabilidade",
    ],
  },
  {
    id: "contab",
    icon: Calculator,
    nome: "Contabilidade",
    resumo: "Adaptada ao normativo moçambicano.",
    itens: [
      "Plano de contas PGC-NIRF e PGC-PE",
      "Lançamentos a partir dos documentos",
      "Balancete",
      "Demonstração de resultados",
    ],
  },
  {
    id: "rh",
    icon: BriefcaseBusiness,
    nome: "Recursos Humanos",
    resumo: "Pessoas, salários e obrigações.",
    itens: [
      "Ficha do colaborador",
      "Processamento salarial com IRPS e INSS",
      "Recibos de vencimento",
      "Assiduidade e acerto final de contas",
    ],
  },
  {
    id: "painel",
    icon: BarChart3,
    nome: "Painel de gestão",
    resumo: "A empresa inteira num só ecrã.",
    itens: [
      "Indicadores de vendas e de tesouraria",
      "Documentos pendentes e vencidos",
      "Evolução mensal",
      "Incluído em todos os planos",
    ],
  },
];

export type Plano = {
  id: string;
  nome: string;
  mensal: number | null;
  titulo: string;
  utilizadores: string;
  empresas: string;
  inclui: string[];
  destaque?: boolean;
};

/** Valores em MT/mês, iguais aos da ERP. O plano anual corresponde a 10 meses. */
export const PLANOS: Plano[] = [
  {
    id: "essencial",
    nome: "Essencial",
    mensal: 990,
    titulo: "Organize as vendas e tenha maior controlo sobre as operações da sua empresa.",
    utilizadores: "2 utilizadores",
    empresas: "1 empresa",
    inclui: ["Vendas", "Compras", "Inventário", "Finanças"],
  },
  {
    id: "profissional",
    nome: "Profissional",
    mensal: 1990,
    titulo: "Acompanhe os seus projectos e tenha maior controlo sobre a sua rentabilidade.",
    utilizadores: "5 utilizadores",
    empresas: "1 empresa",
    inclui: ["Tudo do Essencial", "Gestão de Projectos"],
    destaque: true,
  },
  {
    id: "empresarial",
    nome: "Empresarial",
    mensal: 2990,
    titulo: "Centralize a gestão da sua empresa numa única plataforma.",
    utilizadores: "10 utilizadores",
    empresas: "Até 3 empresas",
    inclui: ["Tudo do Profissional", "Contabilidade", "Recursos Humanos"],
  },
  {
    id: "corporativo",
    nome: "Corporativo",
    mensal: null,
    titulo: "Uma solução adaptada à estrutura e às necessidades da sua organização.",
    utilizadores: "Utilizadores à medida",
    empresas: "Contrato anual",
    inclui: [
      "Todos os módulos",
      "Personalização dos módulos existentes",
      "Proposta comercial personalizada",
    ],
  },
];

export const PASSOS = [
  {
    titulo: "Crie a sua conta",
    texto: `Registe a empresa em poucos minutos e use todos os módulos durante ${TESTE_DIAS} dias, sem pagar nada.`,
  },
  {
    titulo: "Configure a empresa",
    texto: "Introduza o NUIT, o logótipo, os artigos e os clientes, e convide a sua equipa.",
  },
  {
    titulo: "Comece a facturar",
    texto: "Emita o primeiro documento no mesmo dia e escolha o plano que serve o seu negócio.",
  },
];

export const FAQ = [
  {
    p: "Preciso de instalar algum programa?",
    r: "Não. O Bindzu One ERP funciona no navegador, no computador, no tablet ou no telemóvel. Basta entrar com o seu e-mail e a sua palavra-passe.",
  },
  {
    p: `Como funciona o teste grátis de ${TESTE_DIAS} dias?`,
    r: `Ao criar a conta tem acesso a todos os módulos durante ${TESTE_DIAS} dias. No fim escolhe um plano. Se não continuar, os seus dados ficam guardados e pode exportá-los.`,
  },
  {
    p: "Os documentos cumprem as regras de Moçambique?",
    r: "Sim. Os documentos incluem NUIT, IVA e numeração sequencial, e a contabilidade trabalha com os planos PGC-NIRF e PGC-PE. Os salários calculam IRPS e INSS.",
  },
  {
    p: "Posso mudar de plano mais tarde?",
    r: "Pode. Comece no plano que precisa hoje e mude para outro quando a empresa crescer. Os dados mantêm-se.",
  },
  {
    p: "Há desconto no pagamento anual?",
    r: "Sim. No pagamento anual paga 10 meses e usa 12.",
  },
  {
    p: "Que suporte está disponível?",
    r: "Pode falar connosco por e-mail ou por WhatsApp. Também pode contratar suporte profissional com horas incluídas, para formação e configuração.",
  },
];

export function formatarMT(valor: number): string {
  return `${String(valor).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} MT`;
}
