import { useState, useCallback } from 'react';
import { CHALLENGES, REPORT_REASONS, type SimulatedPost, type ReportReason } from '@/types';
import { Header, Footer } from '@/components/Layout';
import MatrixRain from '@/components/MatrixRain';
import StatusBoard from '@/components/StatusBoard';
import FeedPost from '@/components/FeedPost';
import ReportModal from '@/components/ReportModal';
import FeedbackModal from '@/components/FeedbackModal';
import IntroScreen from '@/components/IntroScreen';
import CompletionScreen from '@/components/CompletionScreen';
import { Radar, Filter } from 'lucide-react';

type GameState = 'intro' | 'playing' | 'complete';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [feed] = useState<SimulatedPost[]>(CHALLENGES);
  const [bannedIds, setBannedIds] = useState<Set<string>>(new Set());
  const [bans, setBans] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [correctReports, setCorrectReports] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  const [activeReport, setActiveReport] = useState<SimulatedPost | null>(null);
  const [feedback, setFeedback] = useState<{
    post: SimulatedPost;
    selectedReason: ReportReason;
    isCorrect: boolean;
  } | null>(null);

  const remaining = feed.filter(p => !bannedIds.has(p.id)).length;

  const startGame = () => setGameState('playing');

  const resetGame = () => {
    setBannedIds(new Set());
    setBans(0);
    setAttempts(0);
    setCorrectReports(0);
    setStreak(0);
    setMaxStreak(0);
    setGameState('playing');
  };

  const handleReport = useCallback((post: SimulatedPost) => {
    setActiveReport(post);
  }, []);

  const handleSubmitReport = useCallback(
    (reasonId: string) => {
      if (!activeReport) return;
      const post = activeReport;
      const selectedReason = REPORT_REASONS.find(r => r.id === reasonId);
      if (!selectedReason) return;

      const isCorrect = post.correctReasonId === reasonId;
      setActiveReport(null);
      setFeedback({ post, selectedReason, isCorrect });

      if (isCorrect) {
        setBannedIds(prev => {
          const next = new Set([...prev, post.id]);
          if (next.size >= feed.length) {
            setTimeout(() => setGameState('complete'), 100);
          }
          return next;
        });
        setBans(prev => prev + 1);
        setAttempts(prev => prev + 1);
        setCorrectReports(prev => prev + 1);
        setStreak(prev => {
          const next = prev + 1;
          setMaxStreak(m => Math.max(m, next));
          return next;
        });
      } else {
        setAttempts(prev => prev + 1);
        setStreak(0);
      }
    },
    [activeReport, feed.length]
  );

  const handleFeedbackClose = useCallback(() => {
    if (!feedback) return;
    const wasCorrect = feedback.isCorrect;
    const post = feedback.post;
    setFeedback(null);
    if (!wasCorrect) {
      setTimeout(() => setActiveReport(post), 150);
    }
  }, [feedback]);

  if (gameState === 'intro') {
    return (
      <div className="relative min-h-screen cyber-grid-bg cyber-scanlines">
        <MatrixRain />
        <Header />
        <IntroScreen onStart={startGame} />
        <Footer />
      </div>
    );
  }

  if (gameState === 'complete') {
    return (
      <div className="relative min-h-screen cyber-grid-bg cyber-scanlines">
        <MatrixRain />
        <Header />
        <CompletionScreen
          bans={bans}
          attempts={attempts}
          correctReports={correctReports}
          streak={maxStreak}
          onRestart={resetGame}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen cyber-grid-bg cyber-scanlines">
      <MatrixRain />
      <Header />

      <main className="relative z-10 mx-auto max-w-6xl px-4 py-6">
        <div className="mb-6">
          <StatusBoard
            bans={bans}
            attempts={attempts}
            correctReports={correctReports}
            totalChallenges={feed.length}
            remaining={remaining}
            streak={streak}
          />
        </div>

        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Radar className="h-4 w-4 text-cyber-green animate-spin-slow" />
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-cyber-green">
              Feed de Monitoramento
            </h2>
            <span className="font-mono text-[10px] text-cyber-gray">
              ({remaining} ativos)
            </span>
          </div>
          <div className="flex items-center gap-1.5 rounded border border-cyber-green/20 bg-cyber-panel/60 px-2.5 py-1">
            <Filter className="h-3 w-3 text-cyber-green/60" />
            <span className="font-mono text-[10px] text-cyber-green/60 uppercase">
              Ao Vivo
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-cyber-red animate-pulse" />
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {feed.map(post => (
            <FeedPost
              key={post.id}
              post={post}
              onReport={() => handleReport(post)}
              banned={bannedIds.has(post.id)}
            />
          ))}
        </div>
      </main>

      {activeReport && (
        <ReportModal
          post={activeReport}
          onClose={() => setActiveReport(null)}
          onSubmit={handleSubmitReport}
        />
      )}

      {feedback && (
        <FeedbackModal
          post={feedback.post}
          selectedReason={feedback.selectedReason}
          isCorrect={feedback.isCorrect}
          onClose={handleFeedbackClose}
          onContinue={handleFeedbackClose}
        />
      )}

      <Footer />
    </div>
  );
}
