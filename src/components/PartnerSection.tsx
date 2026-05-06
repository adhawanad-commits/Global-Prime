import { useCallback, useEffect, useRef, useState } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
];

interface Spawn {
  id: number;
  x: number;
  y: number;
  src: string;
  rotation: number;
  createdAt: number;
}

export function PartnerSection() {
  const { ref, isInView } = useInViewAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [spawns, setSpawns] = useState<Spawn[]>([]);
  const lastSpawn = useRef(0);
  const idRef = useRef(0);
  const rafRef = useRef<number | undefined>(undefined);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = Date.now();
    if (now - lastSpawn.current < 80) return;
    lastSpawn.current = now;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotation = Math.random() * 20 - 10;
    const src = marqueeImages[Math.floor(Math.random() * marqueeImages.length)];

    setSpawns((prev) => [...prev, { id: idRef.current++, x, y, src, rotation, createdAt: now }]);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.addEventListener('mousemove', handleMouseMove);
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    const cleanup = () => {
      const now = Date.now();
      setSpawns((prev) => prev.filter((s) => now - s.createdAt < 1000));
      rafRef.current = requestAnimationFrame(cleanup);
    };
    rafRef.current = requestAnimationFrame(cleanup);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section ref={ref} className="py-12 px-6">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto py-48 rounded-[40px] shadow-[0_4px_30px_rgba(0,0,0,0.06)] relative overflow-hidden bg-white"
      >
        {spawns.map((s) => {
          const age = Date.now() - s.createdAt;
          const progress = Math.min(age / 1000, 1);
          const opacity = 1 - progress;
          const scale = 1 - progress * 0.3;

          return (
            <img
              key={s.id}
              src={s.src}
              alt=""
              className="absolute w-20 h-20 object-cover rounded-xl pointer-events-none"
              style={{
                left: s.x - 40,
                top: s.y - 40,
                transform: `rotate(${s.rotation}deg) scale(${scale})`,
                opacity,
              }}
            />
          );
        })}

        <div className="text-center relative z-10">
          <h2
            className={`font-serif text-[48px] md:text-[64px] lg:text-[80px] text-[#0D212C] mb-12 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            Partner with us
          </h2>
          <div className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <Button href="https://halaskastudio.com/./book">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1"
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
              Start chat with Viktor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
