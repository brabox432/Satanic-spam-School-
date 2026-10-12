import { Trophy, RotateCcw, Award, Target } from 'lucide-react';

interface CompletionScreenProps {
  bans: number;
  attempts: number;
  correctReports: number;
  streak: number;
  onRestart: () => void;
}

export default function CompletionScreen({
  bans,
  attempts,
  correctReports,
  streak,
  onRestart,
}: CompletionScreenProps) {
  const accuracy = attempts > 0 ? Math.round((correctReports / attempts) * 100) : 0;

  const rank =
    accuracy >= 90 ? { label: 'CYBER SENTINEL', color: 'text-cyber-green', desc: 'Elite da moderação' }
    : accuracy >= 70 ? { label: 'DIGITAL GUARDIAN', color: 'text-cyber-green-dim', desc: 'Moderador avançado' }
    : accuracy >= 50 ? { label: 'JUNIOR ANALYST', color: 'text-cyber-yellow', desc: 'Moderador em formação' }
    : { label: 'TRAINEE', color: 'text-cyber-red', desc: 'Continue treinando' };

  return (
    <div className="relative z-10 flex min-h-[70vh] items-center justify-center px-4 py-12">
      <div className="cyber-border rounded-lg bg-cyber-panel/60 backdrop-blur-sm max-w-2xl w-full p-6 sm:p-10 box-glow-green animate-slide-up">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-cyber-green/20 blur-2xl rounded-full" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-cyber-green/40 bg-cyber-bg animate-pulse-glow">
              <Trophy className="h-10 w-10 text-cyber-green text-glow-green" />
            </div>
          </div>

          <h2 className="font-display text-2xl font-black text-cyber-green text-glow-green uppercase tracking-wider mb-1">
            Treinamento Concluído
          </h2>
          <p className="font-mono text-xs text-cyber-gray">
            &gt; RELATORIO_FINAL.txt
          </p>
        </div>

        {/* Rank */}
        <div className="mb-6 rounded-md border border-cyber-green/20 bg-cyber-bg/40 p-4 text-center">
          <p className="font-mono text-[10px] text-cyber-gray uppercase mb-1">Patamar Alcançado</p>
          <p className={`font-display text-xl font-black ${rank.color} uppercase tracking-wider`}>
            {rank.label}
          </p>
          <p className="font-mono text-[10px] text-cyber-gray/70 mt-1">{rank.desc}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6 sm:grid-cols-4">
          <div className="rounded-md border border-cyber-green/15 bg-cyber-bg/40 p-3 text-center">
            <Target className="h-4 w-4 text-cyber-green mx-auto mb-1" />
            <p className="font-display text-xl font-black text-cyber-green">{bans}</p>
            <p className="font-mono text-[9px] text-cyber-gray uppercase">Banidos</p>
          </div>
          <div className="rounded-md border border-cyber-green/15 bg-cyber-bg/40 p-3 text-center">
            <Award className="h-4 w-4 text-cyber-green mx-auto mb-1" />
            <p className="font-display text-xl font-black text-cyber-green">{accuracy}%</p>
            <p className="font-mono text-[9px] text-cyber-gray uppercase">Precisão</p>
          </div>
          <div className="rounded-md border border-cyber-green/15 bg-cyber-bg/40 p-3 text-center">
            <Trophy className="h-4 w-4 text-cyber-yellow mx-auto mb-1" />
            <p className="font-display text-xl font-black text-cyber-yellow">{streak}x</p>
            <p className="font-mono text-[9px] text-cyber-gray uppercase">Maior Combo</p>
          </div>
          <div className="rounded-md border border-cyber-green/15 bg-cyber-bg/40 p-3 text-center">
            <RotateCcw className="h-4 w-4 text-cyber-red mx-auto mb-1" />
            <p className="font-display text-xl font-black text-cyber-red">{attempts - correctReports}</p>
            <p className="font-mono text-[9px] text-cyber-gray uppercase">Erros</p>
          </div>
        </div>

        <button
          onClick={onRestart}
          className="group flex w-full items-center justify-center gap-2 rounded-md border border-cyber-green bg-cyber-green/15 px-6 py-4 font-display text-base font-bold uppercase tracking-wider text-cyber-green transition-all hover:bg-cyber-green/25 hover:shadow-[0_0_20px_rgba(0,255,159,0.4)]"
        >
          <RotateCcw className="h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
          Reiniciar Treinamento
        </button>
      </div>
    </div>
  );
}
