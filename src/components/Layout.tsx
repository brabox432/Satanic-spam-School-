import { Shield, Skull, Terminal, Github, Bug } from 'lucide-react';
import CryptoBanner from './CryptoBanner';

export function Header() {
  return (
    <header className="relative z-10 border-b border-cyber-border bg-cyber-panel/80 backdrop-blur-sm">
      <div className="bg-cyber-green/5 border-b border-cyber-green/10">
        <CryptoBanner variant="header" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-4 sm:py-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-cyber-green/20 blur-lg rounded-lg" />
              <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg border border-cyber-green/40 bg-cyber-bg box-glow-green">
                <Skull className="h-6 w-6 text-cyber-green" />
              </div>
            </div>
            <div>
              <h1
                className="glitch-text font-display text-lg font-black tracking-wider text-cyber-green text-glow-green sm:text-2xl"
                data-text="SATANIC SPAM SCHOOL"
              >
                SATANIC SPAM SCHOOL
              </h1>
              <p className="font-mono text-[9px] text-cyber-green/50 sm:text-xs">
                &gt; CYBERSECURITY TRAINING PROTOCOL_v2.4
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <div className="flex items-center gap-1.5 rounded border border-cyber-green/20 bg-cyber-bg px-3 py-1.5">
              <Terminal className="h-3.5 w-3.5 text-cyber-green/70" />
              <span className="font-mono text-xs text-cyber-green/70">SYS_ONLINE</span>
              <span className="h-2 w-2 rounded-full bg-cyber-green animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-cyber-border bg-cyber-panel/80 backdrop-blur-sm mt-12">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-cyber-green/60" />
            <span className="font-mono text-xs text-cyber-gray">
              Treinamento educacional — Cibersegurança & Moderação
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] text-cyber-gray/60">
              © 2024 SATANIC SPAM SCHOOL
            </span>
            <div className="flex items-center gap-2">
              <Github className="h-3.5 w-3.5 text-cyber-green/40 hover:text-cyber-green transition-colors" />
              <Bug className="h-3.5 w-3.5 text-cyber-green/40 hover:text-cyber-green transition-colors" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cyber-green/5 border-t border-cyber-green/10">
        <CryptoBanner variant="footer" />
      </div>
    </footer>
  );
}
