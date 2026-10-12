import { Ban, Target, Trophy, Zap, TrendingUp, Flame } from 'lucide-react';

interface StatusBoardProps {
  bans: number;
  attempts: number;
  correctReports: number;
  totalChallenges: number;
  remaining: number;
  streak: number;
}

export default function StatusBoard({
  bans,
  attempts,
  correctReports,
  totalChallenges,
  remaining,
  streak,
}: StatusBoardProps) {
  const accuracy = attempts > 0 ? Math.round((correctReports / attempts) * 100) : 0;
  const progress = Math.round(((totalChallenges - remaining) / totalChallenges) * 100);

  const accuracyColor =
    accuracy >= 80 ? 'text-cyber-green' : accuracy >= 50 ? 'text-cyber-yellow' : 'text-cyber-red';

  return (
    <div className="cyber-border cyber-border-red rounded-lg bg-cyber-panel/60 backdrop-blur-sm p-4 sm:p-6 box-glow-green">
      <div className="mb-4 flex items-center gap-2 border-b border-cyber-green/10 pb-3">
        <Target className="h-4 w-4 text-cyber-green" />
        <h2 className="font-display text-sm font-bold tracking-wider text-cyber-green uppercase">
          Painel de Operações
        </h2>
        <span className="ml-auto font-mono text-[10px] text-cyber-gray animate-blink">
          ● REC
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {/* Bans */}
        <div className="rounded-md border border-cyber-green/20 bg-cyber-bg/60 p-3 sm:p-4">
          <div className="flex items-center gap-1.5 mb-2">
            <Ban className="h-3.5 w-3.5 text-cyber-red" />
            <span className="font-mono text-[10px] uppercase text-cyber-gray tracking-wider">
              Perfis Banidos
            </span>
          </div>
          <div className="font-display text-2xl sm:text-3xl font-black text-cyber-green text-glow-green">
            {bans.toString().padStart(3, '0')}
          </div>
          <div className="font-mono text-[9px] text-cyber-gray/60 mt-1">
            de {totalChallenges} alvos
          </div>
        </div>

        {/* Accuracy */}
        <div className="rounded-md border border-cyber-green/20 bg-cyber-bg/60 p-3 sm:p-4">
          <div className="flex items-center gap-1.5 mb-2">
            <TrendingUp className="h-3.5 w-3.5 text-cyber-green" />
            <span className="font-mono text-[10px] uppercase text-cyber-gray tracking-wider">
              Precisão
            </span>
          </div>
          <div className={`font-display text-2xl sm:text-3xl font-black ${accuracyColor}`}>
            {accuracy}%
          </div>
          <div className="font-mono text-[9px] text-cyber-gray/60 mt-1">
            {correctReports}/{attempts} denúncias
          </div>
        </div>

        {/* Streak */}
        <div className="rounded-md border border-cyber-green/20 bg-cyber-bg/60 p-3 sm:p-4">
          <div className="flex items-center gap-1.5 mb-2">
            <Flame className="h-3.5 w-3.5 text-cyber-yellow" />
            <span className="font-mono text-[10px] uppercase text-cyber-gray tracking-wider">
              Combo
            </span>
          </div>
          <div className="font-display text-2xl sm:text-3xl font-black text-cyber-yellow">
            {streak}x
          </div>
          <div className="font-mono text-[9px] text-cyber-gray/60 mt-1">
            acertos consecutivos
          </div>
        </div>

        {/* Progress */}
        <div className="rounded-md border border-cyber-green/20 bg-cyber-bg/60 p-3 sm:p-4">
          <div className="flex items-center gap-1.5 mb-2">
            <Trophy className="h-3.5 w-3.5 text-cyber-green" />
            <span className="font-mono text-[10px] uppercase text-cyber-gray tracking-wider">
              Progresso
            </span>
          </div>
          <div className="font-display text-2xl sm:text-3xl font-black text-cyber-green/80">
            {progress}%
          </div>
          <div className="font-mono text-[9px] text-cyber-gray/60 mt-1">
            {remaining} restantes
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="font-mono text-[10px] text-cyber-gray">MISSAO_PROGRESSO</span>
          <span className="font-mono text-[10px] text-cyber-green/60">{progress}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-cyber-bg border border-cyber-green/10">
          <div
            className="h-full bg-gradient-to-r from-cyber-green-dim to-cyber-green transition-all duration-500 ease-out"
            style={{ width: `${progress}%`, boxShadow: '0 0 8px rgba(0,255,159,0.5)' }}
          />
        </div>
      </div>

      {/* Accuracy Bar */}
      <div className="mt-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="font-mono text-[10px] text-cyber-gray">PRECISAO_RATE</span>
          <span className={`font-mono text-[10px] ${accuracyColor}`}>{accuracy}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-cyber-bg border border-cyber-green/10">
          <div
            className={`h-full transition-all duration-500 ease-out ${
              accuracy >= 80
                ? 'bg-gradient-to-r from-cyber-green-dim to-cyber-green'
                : accuracy >= 50
                ? 'bg-gradient-to-r from-yellow-600 to-cyber-yellow'
                : 'bg-gradient-to-r from-red-700 to-cyber-red'
            }`}
            style={{ width: `${accuracy}%` }}
          />
        </div>
      </div>
    </div>
  );
}
