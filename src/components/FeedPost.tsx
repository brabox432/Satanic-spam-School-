import { Flag, Shield, AlertTriangle, MoreHorizontal, Clock, ExternalLink, CheckCircle2 } from 'lucide-react';
import type { SimulatedPost } from '@/types';

interface FeedPostProps {
  post: SimulatedPost;
  onReport: () => void;
  banned: boolean;
}

export default function FeedPost({ post, onReport, banned }: FeedPostProps) {
  if (banned) {
    return (
      <div className="cyber-border cyber-border-red rounded-lg bg-cyber-panel/30 p-4 animate-fade-in">
        <div className="flex items-center gap-3 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyber-red/40 bg-cyber-red/10">
            <Shield className="h-5 w-5 text-cyber-red" />
          </div>
          <div className="flex-1">
            <p className="font-mono text-sm text-cyber-red text-glow-red">
              CONTA SUSPENSA
            </p>
            <p className="font-mono text-[10px] text-cyber-gray">
              @ {post.author.handle} — perfil removido por violação
            </p>
          </div>
          <CheckCircle2 className="h-5 w-5 text-cyber-green/60" />
        </div>
      </div>
    );
  }

  const difficultyColor =
    post.difficulty === 'Iniciante'
      ? 'text-cyber-green border-cyber-green/30 bg-cyber-green/5'
      : post.difficulty === 'Intermediário'
      ? 'text-cyber-yellow border-cyber-yellow/30 bg-cyber-yellow/5'
      : 'text-cyber-red border-cyber-red/30 bg-cyber-red/5';

  return (
    <div className="cyber-border rounded-lg bg-cyber-panel/60 backdrop-blur-sm p-4 sm:p-5 animate-slide-up box-glow-green">
      {/* Post Header */}
      <div className="flex items-start gap-3 mb-4">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 font-display text-lg font-bold"
          style={{
            borderColor: post.author.avatarColor,
            color: post.author.avatarColor,
            backgroundColor: `${post.author.avatarColor}15`,
          }}
        >
          {post.author.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-sm text-white/90 truncate">
              {post.author.name}
            </span>
            {post.author.verified && (
              <span className="flex items-center gap-0.5 rounded bg-cyber-green/10 px-1.5 py-0.5">
                <CheckCircle2 className="h-3 w-3 text-cyber-green" />
                <span className="font-mono text-[8px] text-cyber-green">VERIFICADO</span>
              </span>
            )}
            <span className="font-mono text-xs text-cyber-gray truncate">
              {post.author.handle}
            </span>
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <Clock className="h-2.5 w-2.5 text-cyber-gray/50" />
            <span className="font-mono text-[10px] text-cyber-gray/60">
              {post.timestamp}
            </span>
            <span className={`font-mono text-[8px] px-1.5 py-0.5 rounded border ${difficultyColor}`}>
              {post.difficulty}
            </span>
          </div>
        </div>
        <button className="text-cyber-gray hover:text-cyber-green transition-colors">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="font-mono text-sm text-white/80 leading-relaxed whitespace-pre-wrap">
          {post.content}
        </p>
        {post.link && (
          <div className="mt-3 flex items-center gap-2 rounded border border-cyber-red/20 bg-cyber-red/5 px-3 py-2">
            <ExternalLink className="h-3.5 w-3.5 text-cyber-red/60 shrink-0" />
            <span className="font-mono text-xs text-cyber-red/70 truncate">
              {post.link}
            </span>
          </div>
        )}
      </div>

      {/* Post Metadata */}
      <div className="mb-4 flex items-center gap-2 border-t border-cyber-green/10 pt-3">
        <AlertTriangle className="h-3 w-3 text-cyber-yellow/50" />
        <span className="font-mono text-[10px] text-cyber-gray/70">
          CATEGORIA: {post.category}
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={onReport}
          className="group flex items-center gap-2 rounded-md border border-cyber-red/30 bg-cyber-red/10 px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-cyber-red transition-all hover:bg-cyber-red/20 hover:border-cyber-red/60 hover:shadow-[0_0_12px_rgba(255,0,60,0.3)]"
        >
          <Flag className="h-3.5 w-3.5 group-hover:animate-pulse" />
          Denunciar Postagem
        </button>
        <span className="ml-auto font-mono text-[9px] text-cyber-gray/40">
          ID: {post.id.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
