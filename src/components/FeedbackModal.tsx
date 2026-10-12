import { CheckCircle2, XCircle, Scale, X, RotateCcw, Ban } from 'lucide-react';
import type { SimulatedPost, ReportReason } from '@/types';

interface FeedbackModalProps {
  post: SimulatedPost;
  selectedReason: ReportReason;
  isCorrect: boolean;
  onClose: () => void;
  onContinue: () => void;
}

export default function FeedbackModal({
  post,
  selectedReason,
  isCorrect,
  onClose,
  onContinue,
}: FeedbackModalProps) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 modal-overlay animate-fade-in"
      onClick={onClose}
    >
      <div
        className={`cyber-border rounded-lg bg-cyber-panel max-w-lg w-full animate-slide-up ${
          isCorrect ? '' : 'cyber-border-red'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between px-5 py-4 border-b ${
            isCorrect
              ? 'border-cyber-green/20'
              : 'border-cyber-red/20'
          }`}
        >
          <div className="flex items-center gap-3">
            {isCorrect ? (
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyber-green/40 bg-cyber-green/10">
                <CheckCircle2 className="h-6 w-6 text-cyber-green text-glow-green" />
              </div>
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyber-red/40 bg-cyber-red/10">
                <XCircle className="h-6 w-6 text-cyber-red text-glow-red" />
              </div>
            )}
            <div>
              <h3
                className={`font-display text-base font-black uppercase tracking-wider ${
                  isCorrect ? 'text-cyber-green' : 'text-cyber-red'
                }`}
              >
                {isCorrect ? 'BANIDO!' : 'DENÚNCIA RECUSADA'}
              </h3>
              <p className="font-mono text-[10px] text-cyber-gray">
                ID: {post.id.toUpperCase()} — {post.category}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded p-1 text-cyber-gray hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-4">
          {isCorrect ? (
            <div className="space-y-4">
              <p className="font-mono text-sm text-cyber-green leading-relaxed">
                Parabéns! Você identificou a infração com precisão e baniu este usuário!
              </p>

              <div className="rounded-md border border-cyber-green/20 bg-cyber-green/5 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Ban className="h-4 w-4 text-cyber-red" />
                  <span className="font-mono text-xs font-bold text-cyber-red uppercase">
                    Perfil Removido
                  </span>
                </div>
                <p className="font-mono text-xs text-white/70">
                  <span className="text-cyber-gray">@{post.author.handle}</span> — conta suspensa permanentemente
                </p>
              </div>

              <div className="rounded-md border border-cyber-yellow/20 bg-cyber-yellow/5 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <Scale className="h-4 w-4 text-cyber-yellow" />
                  <span className="font-mono text-xs font-bold text-cyber-yellow uppercase">
                    Lei / Diretriz Violada
                  </span>
                </div>
                <p className="font-mono text-xs text-cyber-yellow/90">
                  {post.lawReference}
                </p>
              </div>

              <div className="rounded-md border border-cyber-green/10 bg-cyber-bg/40 p-3">
                <p className="font-mono text-[10px] text-cyber-green/60 mb-1 uppercase">
                  Análise Forense
                </p>
                <p className="font-mono text-xs text-white/70 leading-relaxed">
                  {post.explanation}
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="font-mono text-sm text-cyber-red leading-relaxed">
                Infelizmente você errou a denúncia. Tente novamente!
              </p>

              <div className="rounded-md border border-cyber-red/20 bg-cyber-red/5 p-3 animate-shake">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="h-4 w-4 text-cyber-red" />
                  <span className="font-mono text-xs font-bold text-cyber-red uppercase">
                    Denúncia Recusada
                  </span>
                </div>
                <p className="font-mono text-xs text-white/70 leading-relaxed">
                  {post.isViolation
                    ? 'O motivo selecionado não condiz com a infração apresentada. Analise novamente o conteúdo e identifique a violação correta.'
                    : 'Esta ação não configura violação de diretrizes. O conteúdo é legítimo e protegido pela liberdade de expressão. Não deve ser denunciado.'}
                </p>
              </div>

              <div className="rounded-md border border-cyber-yellow/15 bg-cyber-yellow/5 p-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <Scale className="h-3.5 w-3.5 text-cyber-yellow/70" />
                  <span className="font-mono text-[10px] text-cyber-yellow/70 uppercase">
                    Você selecionou
                  </span>
                </div>
                <p className="font-mono text-xs text-cyber-yellow/80">
                  {selectedReason.label}
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-md bg-cyber-bg/40 border border-cyber-green/10 p-3">
                <RotateCcw className="h-4 w-4 text-cyber-green/60 shrink-0" />
                <p className="font-mono text-xs text-cyber-green/70">
                  Você pode tentar novamente — sem perda de pontuação por tentativa incorreta.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Action */}
        <div className="flex items-center justify-end gap-2 border-t border-cyber-green/10 px-5 py-3">
          <button
            onClick={onContinue}
            className={`flex items-center gap-2 rounded-md px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all ${
              isCorrect
                ? 'border border-cyber-green bg-cyber-green/20 text-cyber-green hover:bg-cyber-green/30 hover:shadow-[0_0_10px_rgba(0,255,159,0.3)]'
                : 'border border-cyber-red bg-cyber-red/20 text-cyber-red hover:bg-cyber-red/30'
            }`}
          >
            {isCorrect ? (
              <>Próximo Desafio</>
            ) : (
              <>
                <RotateCcw className="h-3.5 w-3.5" />
                Tentar Novamente
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
