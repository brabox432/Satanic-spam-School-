import { useEffect, useRef, useState } from 'react';
import { HEX_ENCODED, SITE_TITLE } from '@/types';

interface CryptoBannerProps {
  variant?: 'header' | 'footer';
}

const SCRAMBLE_CHARS = '01<>/{}[]#$%@*&+=ABCDEF0123456789';

function hexDecode(hex: string): string {
  let result = '';
  for (let i = 0; i < hex.length; i += 2) {
    result += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return result;
}

export default function CryptoBanner({ variant = 'header' }: CryptoBannerProps) {
  const [displayText, setDisplayText] = useState(HEX_ENCODED);
  const [isDecoded, setIsDecoded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const decodedText = hexDecode(HEX_ENCODED);

  useEffect(() => {
    if (isHovering && !isDecoded) {
      let step = 0;
      const totalSteps = 12;

      intervalRef.current = setInterval(() => {
        if (step >= totalSteps) {
          setDisplayText(decodedText);
          setIsDecoded(true);
          if (intervalRef.current) clearInterval(intervalRef.current);
          return;
        }

        const progress = step / totalSteps;
        const revealCount = Math.floor(progress * decodedText.length);
        let result = '';

        for (let i = 0; i < decodedText.length; i++) {
          if (i < revealCount) {
            result += decodedText[i];
          } else {
            result += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          }
        }
        setDisplayText(result);
        step++;
      }, 40);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering, isDecoded, decodedText]);

  const handleMouseLeave = () => {
    setIsHovering(false);
    setIsDecoded(false);
    setDisplayText(HEX_ENCODED);
  };

  const isHeader = variant === 'header';

  return (
    <div
      className={`w-full overflow-hidden ${isHeader ? 'py-1.5' : 'py-1'} cursor-pointer select-none`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      title="Passe o mouse para decodificar"
    >
      <div
        className={`hex-banner text-center font-mono whitespace-nowrap ${
          isHeader ? 'text-[10px] sm:text-xs' : 'text-[9px] sm:text-[10px]'
        } transition-colors duration-300 ${
          isDecoded
            ? 'text-cyber-green text-glow-green tracking-[0.3em]'
            : 'text-cyber-green/40 tracking-[0.1em]'
        }`}
      >
        {displayText}
        {!isDecoded && (
          <span className="ml-2 text-cyber-gray animate-blink">_</span>
        )}
      </div>
    </div>
  );
}
