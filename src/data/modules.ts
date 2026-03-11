// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SENHAS DE ACESSO — Edite aqui facilmente
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const PASSWORDS: Record<string, string[]> = {
  COPA2026: ["copa", "whatsapp", "planilha", "precificacao"],
  COPAVIRAL: ["copa", "whatsapp", "planilha", "precificacao", "virais"],
  COPAZERO: ["iniciante", "copa", "whatsapp", "planilha", "precificacao"],
  COPACOMPLETA: ["iniciante", "copa", "whatsapp", "planilha", "precificacao", "virais"],
};

export interface Lesson {
  id: string;
  title: string;
  videoId: string;
  comingSoon?: boolean;
  isDownload?: boolean;
}

export interface Module {
  id: string;
  slug: string;
  icon: string;
  title: string;
  shortTitle: string;
  lessons: Lesson[];
}

export const MODULES: Module[] = [
  {
    id: "iniciante",
    slug: "iniciante",
    icon: "📚",
    title: "Módulo 1 — Introdução ao Crochê",
    shortTitle: "Introdução",
    lessons: [
      { id: "1.1", title: "Como segurar a agulha corretamente", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "1.2", title: "Tipos de fio e qual escolher", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "1.3", title: "Pontos básicos do crochê", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "1.4", title: "Seu primeiro ponto corrente", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "1.5", title: "Ponto baixo passo a passo", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "1.6", title: "Ponto alto passo a passo", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "1.7", title: "Como ler um gráfico de crochê", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "1.8", title: "Erros comuns de iniciante e como evitar", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
    ],
  },
  {
    id: "copa",
    slug: "copa",
    icon: "🏆",
    title: "Módulo 2 — Cropeds da Copa (+50 Aulas)",
    shortTitle: "Cropeds Copa",
    lessons: [
      { id: "2.1", title: "Cropped básico verde e amarelo", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "2.2", title: "Cropped com detalhes da camisa da Seleção", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "2.3", title: "Cropped listrado Copa", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "2.4", title: "Cropped com franjas temáticas", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "2.5", title: "Cropped modelo fitness Copa", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "2.6", title: "Cropped infantil verde e amarelo", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "2.7", title: "Cropped com bordado Copa do Mundo", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "2.8", title: "Cropped assimétrico temático", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "2.9", title: "Cropped com alças personalizadas", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "2.10", title: "Cropped modelo top Brasil", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      ...Array.from({ length: 40 }, (_, i) => ({
        id: `2.${i + 11}`,
        title: `Aula ${i + 11} — Em breve`,
        videoId: "",
        comingSoon: true,
      })),
    ],
  },
  {
    id: "whatsapp",
    slug: "whatsapp",
    icon: "📲",
    title: "Módulo 3 — Vendas pelo WhatsApp",
    shortTitle: "Vendas WhatsApp",
    lessons: [
      { id: "3.1", title: "Como montar seu catálogo pelo WhatsApp", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "3.2", title: "Como fotografar sua peça com o celular", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "3.3", title: "Scripts prontos para responder clientes", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "3.4", title: "Como criar lista de transmissão", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "3.5", title: "Como divulgar em grupos sem ser chata", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "3.6", title: "Como fechar a venda e receber pelo PIX", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
    ],
  },
  {
    id: "precificacao",
    slug: "precificacao",
    icon: "💰",
    title: "Módulo 4 — Precificação",
    shortTitle: "Precificação",
    lessons: [
      { id: "4.1", title: "Por que a maioria cobra errado", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "4.2", title: "Como calcular o custo real de cada peça", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "4.3", title: "Como definir sua margem de lucro", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "4.4", title: "Tabela de preços por tipo de peça", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "4.5", title: "Como reajustar o preço sem perder cliente", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
    ],
  },
  {
    id: "planilha",
    slug: "planilha",
    icon: "🎁",
    title: "Bônus — Planilha de Precificação",
    shortTitle: "Planilha",
    lessons: [
      { id: "B.0", title: "Download da Planilha", videoId: "", isDownload: true },
      { id: "B.1", title: "Como usar a planilha passo a passo", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "B.2", title: "Simulação real preenchendo a planilha", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
    ],
  },
  {
    id: "virais",
    slug: "virais",
    icon: "🔥",
    title: "Módulo 5 — Peças Virais (+30 Aulas)",
    shortTitle: "Peças Virais",
    lessons: [
      { id: "5.1", title: "Peça viral 1", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "5.2", title: "Peça viral 2", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      { id: "5.3", title: "Peça viral 3", videoId: "COLE_AQUI_O_ID_DO_VIDEO" },
      ...Array.from({ length: 27 }, (_, i) => ({
        id: `5.${i + 4}`,
        title: `Aula ${i + 4} — Em breve`,
        videoId: "",
        comingSoon: true,
      })),
    ],
  },
];
