import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let columns: number;
    let drops: number[];
    const chars = '01<>/{}[]#$%@*&+=ABCDEF0123456789';

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / 14);
      drops = Array(columns).fill(0).map(() => Math.random() * canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00ff9f';
      ctx.font = '12px monospace';

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * 14, drops[i]);
        if (drops[i] > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 14;
      }
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-canvas" />;
}
