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
      { id: "1.1", title: "Aprenda crochê do zero em 5 passos", videoId: "ZQM1GS3uDz8" },
      { id: "1.2", title: "Kit básico para iniciantes", videoId: "lgAarivNLJU" },
      { id: "1.3", title: "Laçada inicial e correntinha", videoId: "-64W_E0iMjo" },
      { id: "1.4", title: "Ponto baixo passo a passo", videoId: "J5vof2o91yM" },
      { id: "1.5", title: "Ponto alto passo a passo", videoId: "voNB2MvNxLU" },
      { id: "1.6", title: "Meio ponto alto", videoId: "KETfpt3qopo" },
      { id: "1.7", title: "Ponto baixíssimo", videoId: "OxiEZmDIZZA" },
      { id: "1.8", title: "Como fazer círculo normal e círculo mágico", videoId: "x6T7IuRpRxU" },
      { id: "1.9", title: "Como fazer quadrado simples", videoId: "7bpeaouqKcE" },
    ],
  },
  {
    id: "copa",
    slug: "copa",
    icon: "🏆",
    title: "Módulo 2 — Cropeds da Copa (+50 Aulas)",
    shortTitle: "Cropeds Copa",
    lessons: [
      { id: "2.1", title: "Cropped frente única Brasil (Canhoto)", videoId: "0Kt5seKElpM" },
      { id: "2.2", title: "Cropped de Crochê do Brasil 💚💛 | Copa 2026", videoId: "p3Vdv6UbUts" },
      { id: "2.3", title: "Top Crochê Copa Super Fácil", videoId: "NeV7NTHVhJU" },
      { id: "2.4", title: "Cropped de crochê da Copa", videoId: "xKmwIxfZJyo" },
      { id: "2.5", title: "Cropped Brasil 🇧🇷 muito fácil", videoId: "6LZIw470TJI" },
      { id: "2.6", title: "Top em Crochê do Brasil mais lindo da Copa", videoId: "-47yyxr4tuQ" },
      { id: "2.7", title: "Cropped Square Brasil PP ao GG", videoId: "DAARHmUp0cU" },
      { id: "2.8", title: "Bandana de Crochê Copa do Mundo 2022", videoId: "vWNa34w0Ai4" },
      { id: "2.9", title: "Cropped de Crochê Brasil (PP, P, M, G e GG)", videoId: "dQs1A5UtQCw" },
      { id: "2.10", title: "Top Biquíni de Crochê Brasil Copa (PP ao GG)", videoId: "llkI-Zzi2PY" },
      { id: "2.11", title: "Top/Cropped de Crochê Brasil PP ao GG", videoId: "6zcvUPE6bAQ" },
      { id: "2.12", title: "Bandana Vibra Brasil em Crochê", videoId: "lCrnI4igZj4" },
      { id: "2.13", title: "Bandana/Cropped/Lenço Copa 2026 Bandeira do Brasil", videoId: "JSVOLey6mAk" },
      { id: "2.14", title: "Cropped Copa do Mundo 2026 02 — Prof. Neddy Ghusmam", videoId: "LNW6jGG32mQ" },
      { id: "2.15", title: "Cropped de Crochê para Copa 2026 🇧🇷 Fácil e Perfeito para Vender", videoId: "JgdChzmTnn0" },
      { id: "2.16", title: "Como fazer brinco em crochê — Rápido e fácil", videoId: "54CMnSztuGM" },
      { id: "2.17", title: "Brinco de crochê da Copa", videoId: "S-neVj33M1k" },
      { id: "2.18", title: "Cropped Brasil Copa em crochê P ao GG — BYA FERREIRA", videoId: "W_FGdmJH--0" },
      { id: "2.19", title: "Regata em crochê", videoId: "le1mcep274s" },
      { id: "2.20", title: "Cropped Copa 2026 — Top faixa — Prof. Neddy Ghusmam", videoId: "Ihc2EPsGE0I" },
      { id: "2.21", title: "Brinco de Crochê Brasil 🇧🇷 Simples e Lucrativo — Copa 2026", videoId: "seXa9sk42js" },
      { id: "2.22", title: "Cropped Copa do Mundo 2026 04 — Prof. Neddy Ghusmam", videoId: "pPNHvjKicgc" },
      { id: "2.23", title: "Top de Crochê Copa do Mundo | Biquíni Brasil", videoId: "ZfKA6GL-M1M" },
      { id: "2.24", title: "Saia de Crochê Fácil do Brasil para Copa 2026", videoId: "7YAjay-vTPI" },
      { id: "2.25", title: "Bandana Moda Verão Copa 2026 — Passo a Passo", videoId: "1cGTLZ3Iu-g" },
      { id: "2.26", title: "Top de crochê Brasil Copa 2026", videoId: "d39wSKA7tRU" },
      { id: "2.27", title: "Top Brasil em Crochê 🇧🇷 Tendência Viral 2026", videoId: "AZ1C3W7j8Hc" },
      { id: "2.28", title: "Shorts de Crochê Cores da Bandeira — Copa do Mundo", videoId: "7c4LmG_rzIs" },
      { id: "2.29", title: "Short em Crochê nas Cores do Brasil", videoId: "b_GOrW-o0vc" },
      { id: "2.30", title: "Short de Crochê Fácil / Por medidas (Dicas Iniciantes)", videoId: "yoKi8WSSe3c" },
      { id: "2.31", title: "Short do Brasil em Crochê — Passo a passo fácil", videoId: "pyD2kCOumOg" },
      { id: "2.32", title: "Short de crochê Brasil sob medida — Faça e Venda Muito", videoId: "lYaNVplaWfQ" },
      { id: "2.33", title: "Biquíni de crochê Brasil (calcinha) PP ao GG", videoId: "S6g5r_bVONA" },
      { id: "2.34", title: "Bolsa Crochê do Brasil para Copa — Passo a Passo", videoId: "X7Pl2TJZoVs" },
      { id: "2.35", title: "A Bolsa da Copa que está bombando nas vendas no Brás", videoId: "SVyxtXXU_fE" },
      { id: "2.36", title: "Bolsa de crochê Brasil 🇧🇷", videoId: "udXqWE_AMx8" },
      { id: "2.37", title: "Bolsa de crochê inspirada na Copa 2026 — Passo a passo", videoId: "oTScLksIymQ" },
      { id: "2.38", title: "Como fazer bolsa de crochê com barbante", videoId: "Zumq6W2E1Ig" },
      { id: "2.39", title: "Cropped Asa Borboleta Bandeira do Brasil PP ao GG Plus Size", videoId: "MtWvESgHwPo" },
      { id: "2.40", title: "Cropped Flores do Brasil em Crochê", videoId: "KvC-OxMCNPs" },
      { id: "2.41", title: "Cropped Tomara que Caia Copa 2026 — Fácil para Iniciante", videoId: "V51l9DTZSRI" },
      { id: "2.42", title: "Top Crochê Copa Tendência Brasil Core", videoId: "hiM5S4wj74k" },
      { id: "2.43", title: "Camiseta Brasileirinha em Crochê — Neddy Ghusmam", videoId: "VkPnfCU4kmM" },
      { id: "2.44", title: "Como fazer Top de Crochê Bandeira do Brasil", videoId: "AfD939fnxzs" },
      { id: "2.45", title: "Top de Crochê com Miçangas Copa 2026", videoId: "zFC7NsaZHqw" },
      { id: "2.46", title: "Top de Crochê Cruzado — Copa", videoId: "8m3LohE58z4" },
      { id: "2.47", title: "O Cropped de Crochê Perfeito para Copa 2026", videoId: "gI2EnShWd64" },
      { id: "2.48", title: "Top Cropped do Brasil em Crochê — Para Iniciantes", videoId: "wjiVgFRCx_g" },
      { id: "2.49", title: "Cropped de Crochê para Copa 2026 — Passo a Passo", videoId: "EP0lXB0lrPw" },
      { id: "2.50", title: "Top-Cropped em Crochê Tamanho M e G", videoId: "TJaz4JiH7UE" },
      { id: "2.51", title: "Top Faixa com Gráfico em Pixel Super Fácil e Rápido", videoId: "pZcukl0Z0cs" },
      { id: "2.52", title: "Top Brasil em Crochê — Tutorial Fácil com Fio Conduzido", videoId: "OF8G4P7B07Y" },
    ],
  },
  {
    id: "whatsapp",
    slug: "whatsapp",
    icon: "📲",
    title: "Módulo 3 — Vendas pelo WhatsApp",
    shortTitle: "Vendas WhatsApp",
    lessons: [
      { id: "3.1", title: "Como usar WhatsApp para vender muito crochê sem sair de casa", videoId: "FEl2zlFYr0o" },
    ],
  },
  {
    id: "precificacao",
    slug: "precificacao",
    icon: "💰",
    title: "Módulo 4 — Precificação",
    shortTitle: "Precificação",
    lessons: [
      { id: "4.1", title: "Como precificar seu crochê (super fácil pra iniciante)", videoId: "I7CJriiiA3o" },
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
      { id: "B.1", title: "Planilha de Precificação Grátis — Preço certo", videoId: "6jwkpdghwTY" },
    ],
  },
  {
    id: "virais",
    slug: "virais",
    icon: "🔥",
    title: "Módulo 5 — Peças Virais (+30 Aulas)",
    shortTitle: "Peças Virais",
    lessons: [
      { id: "5.1", title: "Vestido de Crochê Esmeralda — Sandra Brum", videoId: "QZolpnZxUJw" },
      { id: "5.2", title: "Vestido de Crochê para o Réveillon — Sandra Brum", videoId: "GGt-IJyr-DE" },
      { id: "5.3", title: "Saída de Praia de Crochê Afeto — Sandra Brum", videoId: "VtBRufHyDBw" },
      { id: "5.4", title: "Colete de Crochê Areia — Sandra Brum", videoId: "0FHe43gjOns" },
      { id: "5.5", title: "Cardigan de Crochê Supreme — Sandra Brum", videoId: "WkoX0CnpwJM" },
      { id: "5.6", title: "Blusa Topdown Alento — Fácil de Fazer", videoId: "46ZeUFqEQM0" },
      { id: "5.7", title: "Colete Gisele de Crochê — Natasha Barbosa", videoId: "3dm07YkyfJk" },
      { id: "5.8", title: "Blusa de Crochê com Franjas — Natasha Barbosa", videoId: "oqWOmx9Pwro" },
      { id: "5.9", title: "Cropped Tendência para Carnaval 2025", videoId: "L_8Thw3DytI" },
      { id: "5.10", title: "Conjunto Cropped e Saia Parte 1 — Sandra Brum", videoId: "c3FJ7qmC_8o" },
      { id: "5.11", title: "Conjunto Cropped e Saia Parte 2 — Sandra Brum", videoId: "8WAxe02Shtc" },
      { id: "5.12", title: "Blusa Afeto com Brilho — Natasha Barbosa", videoId: "2d8F6KEcXJg" },
      { id: "5.13", title: "Top Abelhinha — Maratona Carnaval 2025", videoId: "svtpiw8OqT4" },
      { id: "5.14", title: "Regata Tainara — Sandra Brum", videoId: "yNc2CODFNAw" },
      { id: "5.15", title: "Cropped Segredo — Sandra Brum", videoId: "W2GKG1CFdhU" },
      { id: "5.16", title: "Conjunto Outono — Sandra Brum", videoId: "W3kWt27-6TM" },
      { id: "5.17", title: "Blusa Ciganinha — Sandra Brum", videoId: "jR9imRyCi_M" },
      { id: "5.18", title: "Quimono com Corações nas Costas — Natasha Barbosa", videoId: "U3kQI7rzsuQ" },
      { id: "5.19", title: "Blusinha Safira — Sandra Brum", videoId: "md3dVSu7jpI" },
      { id: "5.20", title: "Calça Alento — Sandra Brum", videoId: "wjMTvC5OfoA" },
      { id: "5.21", title: "Turbante e Cachecol — Sandra Brum", videoId: "EcaW4rzZEcg" },
      { id: "5.22", title: "Bandana Jasmin/Margarida — Sandra Brum", videoId: "AMhtWZDWMy0" },
      { id: "5.23", title: "Blusa Hanna — Natasha Barbosa", videoId: "yy2bRSfnemA" },
      { id: "5.24", title: "Casaco com Capuz — Sandra Brum", videoId: "ilpUSZmaK1w" },
      { id: "5.25", title: "Cachecol Estrela Ponto Jasmim — Sandra Brum", videoId: "jFzOMrsU6pk" },
      { id: "5.26", title: "Maxi Colete Boho Chic — Sandra Brum", videoId: "078Jo0GE_as" },
      { id: "5.27", title: "Colete Cru Especial — Sandra Brum", videoId: "9XC9eYCUqeM" },
      { id: "5.28", title: "Blusa Manga Morcego — Sandra Brum", videoId: "jnbZCSY1-Vw" },
      { id: "5.29", title: "Regata de Crochê — Sandra Brum", videoId: "qsO11HSAgDE" },
      { id: "5.30", title: "Blusa Nilo — Sandra Brum", videoId: "aAl1V_oBu0E" },
    ],
  },
];
