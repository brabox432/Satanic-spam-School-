import { Skull, Terminal, Zap, Shield, Target, BookOpen, ChevronRight } from 'lucide-react';

interface IntroScreenProps {
  onStart: () => void;
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="relative z-10 flex min-h-[80vh] items-center justify-center px-4 py-12">
      <div className="cyber-border rounded-lg bg-cyber-panel/60 backdrop-blur-sm max-w-2xl w-full p-6 sm:p-10 box-glow-green animate-slide-up">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-cyber-green/20 blur-2xl rounded-full" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-cyber-green/40 bg-cyber-bg animate-pulse-glow">
              <Skull className="h-10 w-10 text-cyber-green animate-flicker" />
            </div>
          </div>

          <h1
            className="glitch-text font-display text-3xl font-black tracking-wider text-cyber-green text-glow-green sm:text-4xl mb-2"
            data-text="SATANIC SPAM SCHOOL"
          >
            SATANIC SPAM SCHOOL
          </h1>
          <p className="font-mono text-xs text-cyber-green/50 mb-1">
            &gt; PLATAFORMA DE TREINAMENTO GAMIFICADO
          </p>
          <p className="font-mono text-xs text-cyber-gray">
            Cibersegurança & Moderação de Conteúdo
          </p>
        </div>

        <div className="space-y-3 mb-8">
          <div className="flex items-start gap-3 rounded-md border border-cyber-green/15 bg-cyber-bg/40 p-3">
            <Target className="h-5 w-5 text-cyber-green shrink-0 mt-0.5" />
            <div>
              <p className="font-mono text-xs font-bold text-cyber-green uppercase">
                Missão
              </p>
              <p className="font-mono text-xs text-white/70 mt-1 leading-relaxed">
                Analise postagens e perfis simulados no feed. Identifique infrações
                reais como phishing, doxxing, discurso de ódio e ameaças — denunciando
                com o motivo EXATO da violação.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-md border border-cyber-green/15 bg-cyber-bg/40 p-3">
            <Shield className="h-5 w-5 text-cyber-green shrink-0 mt-0.5" />
            <div>
              <p className="font-mono text-xs font-bold text-cyber-green uppercase">
                Regras de Engajamento
              </p>
              <p className="font-mono text-xs text-white/70 mt-1 leading-relaxed">
                Cada denúncia deve identificar corretamente a infração. Acertos banem
                o perfil e somam pontos. Erros são recusados sem penalidade — você
                pode tentar novamente.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-md border border-cyber-green/15 bg-cyber-bg/40 p-3">
            <BookOpen className="h-5 w-5 text-cyber-green shrink-0 mt-0.5" />
            <div>
              <p className="font-mono text-xs font-bold text-cyber-green uppercase">
                Conhecimento Aplicado
              </p>
              <p className="font-mono text-xs text-white/70 mt-1 leading-relaxed">
                Cada acerto revela a lei brasileira violada: Código Penal, LGPD,
                Lei Caó, CDC e Termos de Uso. Aprenda enquanto treina.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-6">
          <Zap className="h-3.5 w-3.5 text-cyber-yellow animate-pulse" />
          <span className="font-mono text-[10px] text-cyber-gray uppercase">
            12 desafios // 7 categorias // 3 níveis
          </span>
          <Zap className="h-3.5 w-3.5 text-cyber-yellow animate-pulse" />
        </div>

        <button
          onClick={onStart}
          className="group flex w-full items-center justify-center gap-2 rounded-md border border-cyber-green bg-cyber-green/15 px-6 py-4 font-display text-base font-bold uppercase tracking-wider text-cyber-green transition-all hover:bg-cyber-green/25 hover:shadow-[0_0_20px_rgba(0,255,159,0.4)]"
        >
          <Terminal className="h-5 w-5" />
          Iniciar Treinamento
          <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
