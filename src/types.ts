import type { LucideIcon } from 'lucide-react';

export interface ReportReason {
  id: string;
  label: string;
  description: string;
  law: string;
}

export interface SimulatedPost {
  id: string;
  author: {
    name: string;
    handle: string;
    avatarColor: string;
    verified: boolean;
    bio: string;
  };
  timestamp: string;
  content: string;
  imageUrl?: string;
  link?: string;
  linkDomain?: string;
  isViolation: boolean;
  correctReasonId: string | null;
  explanation: string;
  lawReference: string;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  category: string;
}

export const REPORT_REASONS: ReportReason[] = [
  {
    id: 'phishing',
    label: 'Phishing / Golpe Financeiro',
    description: 'Link falso solicitando PIX, dados bancários ou credenciais',
    law: 'Art. 171 do Código Penal — Estelionato (Golpe Financeiro)',
  },
  {
    id: 'doxxing',
    label: 'Doxxing / Vazamento de Dados (LGPD)',
    description: 'Post revelando CPF, telefone, endereço ou dados privados de terceiros',
    law: 'LGPD Art. 7º e Art. 52 — Vazamento de Dados Pessoais',
  },
  {
    id: 'hate',
    label: 'Discurso de Ódio / Incitação à Violência',
    description: 'Ataques direcionados a grupos protegidos, incitação à violência',
    law: 'Lei nº 7.716/1989 (Lei Caó) + Art. 286 CP — Incitação à Violência',
  },
  {
    id: 'threat',
    label: 'Ameaça / Coação',
    description: 'Ameaças de violência física, psicológica ou coerção',
    law: 'Art. 147 do Código Penal — Ameaça',
  },
  {
    id: 'impersonation',
    label: 'Falsificação de Perfil / Roubo de Identidade',
    description: 'Perfil falso se passando por outra pessoa ou instituição',
    law: 'Art. 307 do Código Penal — Falsificação de Identidade',
  },
  {
    id: 'spam',
    label: 'Spam / Publicidade Enganosa',
    description: 'Postagens repetitivas, anúncios falsos ou enganosos',
    law: 'Termos de Uso da Plataforma + CDC Art. 30 — Publicidade Enganosa',
  },
  {
    id: 'legitimate',
    label: 'Nenhuma Infração — Postagem Legítima',
    description: 'O conteúdo não viola diretrizes e não deve ser denunciado',
    law: 'Sem violação — conteúdo protegido pela liberdade de expressão',
  },
];

export const CHALLENGES: SimulatedPost[] = [
  {
    id: 'ch-001',
    author: {
      name: 'Promoções Banco Seguro',
      handle: '@promo_banco_seguro',
      avatarColor: '#ff003c',
      verified: false,
      bio: 'Promoções exclusivas e sorteios diários',
    },
    timestamp: 'há 12 minutos',
    content: '🔥 URGENTE! O Banco Central está devolvendo R$ 2.500 para todo brasileiro cadastrado! Acesse o link abaixo, informe seu CPF e dados bancários para receber o reembolso em até 24h. Não perca! ⏰\n\n👉 recupera-valor[.]pix-brasil.xyz/resgate',
    link: 'recupera-valor.pix-brasil.xyz/resgate',
    linkDomain: 'pix-brasil.xyz',
    isViolation: true,
    correctReasonId: 'phishing',
    explanation: 'Este post é um clássico golpe de Phishing. O domínio "pix-brasil.xyz" imita o sistema oficial PIX para enganar vítimas, solicitando CPF e dados bancários — caracterizando tentativa de estelionato. O Banco Central nunca solicita dados bancários via links externos.',
    lawReference: 'Art. 171 do Código Penal — Estelionato (Golpe Financeiro)',
    difficulty: 'Iniciante',
    category: 'Phishing / Golpe Financeiro',
  },
  {
    id: 'ch-002',
    author: {
      name: 'João Vingador',
      handle: '@joao_vinganca_99',
      avatarColor: '#ff6b00',
      verified: false,
      bio: 'Justiceiro digital. Expondo quem precisa ser exposto.',
    },
    timestamp: 'há 34 minutos',
    content: 'Vou expor essa gente! A Sra. Maria Santos, moradora na Rua das Flores, 42, São Paulo — CPF: 123.456.789-00, Tel: (11) 99999-1234. Ela me deve dinheiro há meses e se recusa a pagar. Compartilhem para que todos saibam quem ela é! 📢\n\n#expondo #caloteira',
    isViolation: true,
    correctReasonId: 'doxxing',
    explanation: 'Este post configura Doxxing — a divulgação não consentida de dados pessoais sensíveis (CPF, endereço e telefone) de uma pessoa identificável. Independentemente da dívida alegada, expor dados privados de terceiros viola a LGPD e pode configurar crime. A via correta para cobranças é judicial.',
    lawReference: 'LGPD Art. 7º e Art. 52 — Vazamento de Dados Pessoais',
    difficulty: 'Iniciante',
    category: 'Doxxing / LGPD',
  },
  {
    id: 'ch-003',
    author: {
      name: 'Fórum Tecnologia BR',
      handle: '@forumtechbr',
      avatarColor: '#00ff9f',
      verified: true,
      bio: 'Comunidade de tecnologia e programação. Debates e tutoriais.',
    },
    timestamp: 'há 1 hora',
    content: 'Pessoal, postamos o tutorial completo sobre como configurar um servidor VPN em casa usando WireGuard! Está gratuito no nosso blog. Quem tiver dúvidas, é só comentar aqui embaixo. 🔧\n\n#tecnologia #vpn #wireguard #tutorial',
    isViolation: false,
    correctReasonId: 'legitimate',
    explanation: 'Este post é totalmente legítimo. Trata-se de um tutorial educacional sobre configuração de VPN, conteúdo protegido pela liberdade de expressão. Não há golpe, vazamento de dados, discurso de ódio ou qualquer violação. Denunciar este post seria abuso do sistema de denúncias.',
    lawReference: 'Sem violação — conteúdo protegido pela liberdade de expressão',
    difficulty: 'Iniciante',
    category: 'Postagem Legítima',
  },
  {
    id: 'ch-004',
    author: {
      name: 'Brasil Puro SanguE',
      handle: '@brasil_puro_x9',
      avatarColor: '#cc0030',
      verified: false,
      bio: 'Defendendo nossa pátria dos invasores. Brasil acima de tudo!',
    },
    timestamp: 'há 22 minutos',
    content: 'Basta de deixar esses estrangeiros roubar nosso país! Temos que expulsar todo imigrante desse Brasil. Se a lei não resolve, o povo resolve na força. Organizem grupos, levem armas, vamos limpar nossas ruas! 💪🇧🇷\n\n#foraestrangeiros #brasilpuro #açãodireta',
    isViolation: true,
    correctReasonId: 'hate',
    explanation: 'Este post configura Discurso de Ódio e Incitação à Violência. O discurso ataca diretamente um grupo (imigrantes) e faz chamadas explícitas à violência física ("levem armas", "limpar nossas ruas"). Não se trata de debate político — é incitação criminosa à violência contra grupo protegido.',
    lawReference: 'Lei nº 7.716/1989 (Lei Caó) + Art. 286 CP — Incitação à Violência',
    difficulty: 'Intermediário',
    category: 'Discurso de Ódio',
  },
  {
    id: 'ch-005',
    author: {
      name: 'Dra. Silvia Moraes',
      handle: '@dra_silvia_moraes',
      avatarColor: '#00cc7f',
      verified: true,
      bio: 'Advogada criminalista. Compartilhando informações jurídicas úteis.',
    },
    timestamp: 'há 3 horas',
    content: 'Muita gente me pergunta sobre direitos do consumidor. Lembrando: se você comprou um produto com defeito, tem 90 dias para reclamar (art. 26 do CDC). O código de defesa do consumidor é uma das leis mais importantes do país. Conheçam seus direitos! ⚖️\n\n#direito #consumidor #dicasjurídicas',
    isViolation: false,
    correctReasonId: 'legitimate',
    explanation: 'Post perfeitamente legítimo. Trata-se de informação jurídica educacional sobre direitos do consumidor, com referência legal correta ao CDC. Não há golpe, vazamento, ódio ou qualquer infração. É exatamente o tipo de conteúdo que deve circular livremente na plataforma.',
    lawReference: 'Sem violação — conteúdo protegido pela liberdade de expressão',
    difficulty: 'Iniciante',
    category: 'Postagem Legítima',
  },
  {
    id: 'ch-006',
    author: {
      name: 'Conheci o sabido 📍',
      handle: '@conheci_o_sabido',
      avatarColor: '#ff003c',
      verified: false,
      bio: 'Se eu achar, ele vai ver o que é bom.',
    },
    timestamp: 'há 8 minutos',
    content: 'Aquele tal de @carlos_empresario tá se achando o maioral. Sei onde ele trabalha, sei onde os filhos estudam. Fica de olho, Carlos. A próxima vez que você abrir a boca, eu vou aí te encontrar. Pode preparar. 😈\n\n#agoravai',
    isViolation: true,
    correctReasonId: 'threat',
    explanation: 'Este post configura Ameaça e Coação. A mensagem faz referência explícita ao local de trabalho e escola dos filhos da vítima, seguida de intimidação direta ("vou aí te encontrar", "pode preparar"). O tom é claramente ameaçador e visa incutir medo — crime de ameaça independe de intenção real de agredir.',
    lawReference: 'Art. 147 do Código Penal — Ameaça',
    difficulty: 'Intermediário',
    category: 'Ameaça / Coação',
  },
  {
    id: 'ch-007',
    author: {
      name: 'Receita Federal BR',
      handle: '@receita_federal_br',
      avatarColor: '#0099cc',
      verified: false,
      bio: 'Órgão oficial do governo. Restituição e serviços.',
    },
    timestamp: 'há 45 minutos',
    content: '⚡ RESTITUIÇÃO DO IR 2024 LIBERADA! Faça seu resgate urgente antes do prazo expirar. Acesse: consulta-restituicao[.]receita-br.org.net e informe seus dados bancários para depósito imediato. Última chance! ⏰',
    link: 'consulta-restituicao.receita-br.org.net',
    linkDomain: 'receita-br.org.net',
    isViolation: true,
    correctReasonId: 'impersonation',
    explanation: 'Este perfil comete Falsificação de Identidade — se passa pela Receita Federal usando nome, handle e bio que imitam o órgão oficial. O domínio "receita-br.org.net" é falso (o real seria gov.br). Note que ESTE NÃO É um caso de phishing puro — a infração principal é a falsificação do perfil/instituição. O golpe de phishing é consequência da usurpação de identidade.',
    lawReference: 'Art. 307 do Código Penal — Falsificação de Identidade',
    difficulty: 'Avançado',
    category: 'Falsificação de Perfil',
  },
  {
    id: 'ch-008',
    author: {
      name: 'Carlos Mendonça',
      handle: '@carlos_mendonca_real',
      avatarColor: '#00ff9f',
      verified: true,
      bio: 'Empresário e investidor. Opiniões sobre mercado e economia.',
    },
    timestamp: 'há 2 horas',
    content: 'Houe assisti a uma palestra muito interessante sobre o mercado brasileiro. O palestrante trouxe dados sobre o agronegócio que me fizeram repensar algumas posições. Acho que o setor tem muito a crescer nos próximos anos. Alguém mais acompanha esse segmento? 📈\n\n#agronegócio #investimentos #mercado',
    isViolation: false,
    correctReasonId: 'legitimate',
    explanation: 'Postagem totalmente legítima. Trata-se de opinião pessoal sobre palestra de mercado, sem golpe, vazamento, ódio ou qualquer infração. O erro de digitação ("Houe") é comum e não configura nada. Não deve ser denunciado.',
    lawReference: 'Sem violação — conteúdo protegido pela liberdade de expressão',
    difficulty: 'Iniciante',
    category: 'Postagem Legítima',
  },
  {
    id: 'ch-009',
    author: {
      name: 'VENDAS FLASH 90%OFF',
      handle: '@vendas_flash_promo',
      avatarColor: '#ff6b00',
      verified: false,
      bio: 'Promoções relâmpago. Preços que duram minutos!',
    },
    timestamp: 'há 5 minutos',
    content: '🎁 IPHONE 15 PRO MAX R$ 299!!! PROMOÇÃO RELÂMPAGO! Últimas 3 unidades! Pague via PIX e receba em 24h! Garanta já → mercado-flash[.]shop/iphone15\n\n🎁 IPHONE 15 PRO MAX R$ 299!!! PROMOÇÃO RELÂMPAGO!\n🎁 IPHONE 15 PRO MAX R$ 299!!! PROMOÇÃO RELÂMPAGO!\n🎁 IPHONE 15 PRO MAX R$ 299!!! PROMOÇÃO RELÂMPAGO!',
    link: 'mercado-flash.shop/iphone15',
    linkDomain: 'mercado-flash.shop',
    isViolation: true,
    correctReasonId: 'spam',
    explanation: 'Este post configura Spam e Publicidade Enganosa. O conteúdo é repetitivo (spam puro), o preço é irreal (iPhone por R$ 299), e o link leva a site fraudulento. Note que a infração PRINCIPAL aqui é o spam repetitivo e a publicidade enganosa — o golpe financeiro é secundário. A categoria mais precisa é Spam/Enganosa.',
    lawReference: 'Termos de Uso da Plataforma + CDC Art. 30 — Publicidade Enganosa',
    difficulty: 'Intermediário',
    category: 'Spam / Publicidade Enganosa',
  },
  {
    id: 'ch-010',
    author: {
      name: 'Desapega da Maria',
      handle: '@desapega_maria_sp',
      avatarColor: '#ff003c',
      verified: false,
      bio: 'Vendendo roupas e acessórios usados. Ótimo estado!',
    },
    timestamp: 'há 18 minutos',
    content: 'Olá meninas! Desapego de roupas em ótimo estado. Vestido floral tamanho M — R$ 35. Jaqueta jeans tamanho G — R$ 50. Pagamento via PIX ou na entrega. Entrego no centro de SP ou envio via Sedex. Quem interessar, manda DM! 👗👗\n\n#desapego #roupas #moda #saopaulo',
    isViolation: false,
    correctReasonId: 'legitimate',
    explanation: 'Postagem legítima de desapego (venda de itens usados). Não há golpe (preços realistas, formas de pagamento normais), não há vazamento de dados, não é spam repetitivo (uma única postagem de desapego). Vendas de desapego são uso normal da plataforma. Denunciar seria abuso do sistema.',
    lawReference: 'Sem violação — conteúdo protegido pela liberdade de expressão',
    difficulty: 'Intermediário',
    category: 'Postagem Legítima',
  },
  {
    id: 'ch-011',
    author: {
      name: 'ngl_truth_420',
      handle: '@ngl_truth_420',
      avatarColor: '#cc0030',
      verified: false,
      bio: 'Expondo tudo e todos. Sem medo de nada.',
    },
    timestamp: 'há 3 minutos',
    content: 'Aquele professor @prof_roberto silícia que fica de papo com alunas menores na escola Estadual João Silva, centro de Campinas. Já fiz BO e nada. Vou resolver do meu jeito. Já que a justiça não faz nada, eu faço. Tô de olho na saída da escola. 🚗',
    isViolation: true,
    correctReasonId: 'threat',
    explanation: 'Embora haja elementos de doxxing (nome e local de trabalho do alvo), a infração PRINCIPAL e mais grave é Ameaça. O post faz ameaça explícita de violência ("vou resolver do meu jeito", "tô de olho na saída da escola"). Acusações não comprovadas + ameaças de ação "própria" configuram coação e ameaça criminal. O caminho correto seria denúncia formal às autoridades.',
    lawReference: 'Art. 147 do Código Penal — Ameaça',
    difficulty: 'Avançado',
    category: 'Ameaça / Coação',
  },
  {
    id: 'ch-012',
    author: {
      name: 'Movimento Anti-Corrupção SP',
      handle: '@movimento_ac_sp',
      avatarColor: '#00cc7f',
      verified: true,
      bio: 'Cidadania ativa. Fiscalização e transparência.',
    },
    timestamp: 'há 5 horas',
    content: 'Reproduzimos abaixo matéria publicada pelo jornal Folha de S.Paulo sobre denúncias de corrupção na prefeitura local. É fundamental que a sociedade civil acompanhe e cobre investigações. Leia a matéria completa no link do jornal (fonte oficial). \n\n#cidadania #transparência #fiscalização',
    isViolation: false,
    correctReasonId: 'legitimate',
    explanation: 'Postagem legítima de ativismo cívico. Reproduz matéria de jornal (fonte oficial) sobre corrupção, exercendo direito legítimo de fiscalização e cobrança por transparência. Não há doxxing (a matéria é pública), não há ameaça, não há discurso de ódio. É exercício de liberdade de imprensa e expressão.',
    lawReference: 'Sem violação — conteúdo protegido pela liberdade de expressão',
    difficulty: 'Avançado',
    category: 'Postagem Legítima',
  },
];

export const HEX_ENCODED = '534154414e4943205350414d205343484f4f4c';
export const SITE_TITLE = 'SATANIC SPAM SCHOOL';
