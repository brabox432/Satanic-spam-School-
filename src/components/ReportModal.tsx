import { useState } from 'react';
import { X, Flag, ShieldAlert, FileText } from 'lucide-react';
import { REPORT_REASONS, type SimulatedPost } from '@/types';

interface ReportModalProps {
  post: SimulatedPost;
  onClose: () => void;
  onSubmit: (reasonId: string) => void;
}

export default function ReportModal({ post, onClose, onSubmit }: ReportModalProps) {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay animate-fade-in"
      onClick={onClose}
    >
      <div
        className="cyber-border cyber-border-red rounded-lg bg-cyber-panel max-w-2xl w-full max-h-[85vh] overflow-y-auto animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-cyber-red/20 bg-cyber-panel px-4 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded border border-cyber-red/30 bg-cyber-red/10">
              <Flag className="h-4 w-4 text-cyber-red" />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-cyber-red uppercase tracking-wider">
                Abrir Denúncia
              </h3>
              <p className="font-mono text-[9px] text-cyber-gray">
                Selecione o motivo exato da infração
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded p-1 text-cyber-gray hover:text-cyber-red transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Review Post */}
        <div className="px-4 py-3 border-b border-cyber-green/10">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full border font-display text-sm font-bold"
              style={{
                borderColor: post.author.avatarColor,
                color: post.author.avatarColor,
              }}
            >
              {post.author.name.charAt(0)}
            </span>
            <div className="flex-1 min-w-0">
              <span className="font-bold text-xs text-white/90">{post.author.name}</span>
              <span className="font-mono text-[10px] text-cyber-gray ml-1">
                {post.author.handle}
              </span>
            </div>
          </div>
          <p className="font-mono text-xs text-white/70 leading-relaxed whitespace-pre-wrap line-clamp-4">
            {post.content}
          </p>
        </div>

        {/* Reason Selection */}
        <div className="px-4 py-4">
          <div className="flex items-center gap-2 mb-3">
            <ShieldAlert className="h-4 w-4 text-cyber-yellow" />
            <h4 className="font-mono text-xs uppercase tracking-wider text-cyber-yellow">
              Selecione o motivo da denúncia
            </h4>
          </div>
          <div className="space-y-2">
            {REPORT_REASONS.map((reason) => (
              <button
                key={reason.id}
                onClick={() => setSelectedReason(reason.id)}
                className={`w-full text-left rounded-md border p-3 transition-all ${
                  selectedReason === reason.id
                    ? 'border-cyber-red bg-cyber-red/10 shadow-[0_0_10px_rgba(255,0,60,0.2)]'
                    : 'border-cyber-green/15 bg-cyber-bg/40 hover:border-cyber-green/40 hover:bg-cyber-bg/70'
                }`}
              >
                <div className="flex items-start gap-2">
                  <div
                    className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                      selectedReason === reason.id
                        ? 'border-cyber-red bg-cyber-red/30'
                        : 'border-cyber-gray/40'
                    }`}
                  >
                    {selectedReason === reason.id && (
                      <div className="h-2 w-2 rounded-full bg-cyber-red" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p
                      className={`font-mono text-xs font-bold ${
                        selectedReason === reason.id
                          ? 'text-cyber-red'
                          : 'text-white/80'
                      }`}
                    >
                      {reason.label}
                    </p>
                    <p className="font-mono text-[10px] text-cyber-gray/70 mt-0.5">
                      {reason.description}
                    </p>
                    {selectedReason === reason.id && (
                      <div className="mt-2 flex items-start gap-1.5 rounded bg-cyber-bg/60 p-2 border border-cyber-red/10">
                        <FileText className="h-3 w-3 text-cyber-red/60 shrink-0 mt-0.5" />
                        <span className="font-mono text-[10px] text-cyber-red/80">
                          {reason.law}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="sticky bottom-0 flex items-center justify-end gap-2 border-t border-cyber-green/10 bg-cyber-panel px-4 py-3">
          <button
            onClick={onClose}
            className="rounded-md border border-cyber-gray/30 px-4 py-2 font-mono text-xs uppercase text-cyber-gray hover:bg-cyber-gray/10 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={() => selectedReason && onSubmit(selectedReason)}
            disabled={!selectedReason}
            className={`flex items-center gap-2 rounded-md px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all ${
              selectedReason
                ? 'border border-cyber-red bg-cyber-red/20 text-cyber-red hover:bg-cyber-red/30 hover:shadow-[0_0_10px_rgba(255,0,60,0.3)]'
                : 'border border-cyber-gray/20 bg-cyber-gray/5 text-cyber-gray/40 cursor-not-allowed'
            }`}
          >
            <Flag className="h-3.5 w-3.5" />
            Confirmar Denúncia
          </button>
        </div>
      </div>
    </div>
  );
}
