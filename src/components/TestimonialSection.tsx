import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export function TestimonialSection() {
  const { ref, isInView } = useInViewAnimation();
  const imgRef = useRef<HTMLImageElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const vh = window.innerHeight;
          const center = rect.top + rect.height / 2;
          const dist = (center - vh / 2) / vh;
          setOffset(dist * 200);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={ref} className="py-12 px-6 flex justify-center">
      <div className="max-w-2xl">
        <div
          className={`mb-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          <Quote className="w-6 h-6 text-slate-900" />
        </div>
        <p
          className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          I left <span className="font-serif">Apple</span> to build the studio I always wanted to work with
        </p>
        <p
          className={`italic text-sm text-[#273C46] mt-4 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.3s' }}
        >
          Viktor Oddy
        </p>
        <div
          className={`flex items-center gap-8 mt-6 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <span className="font-medium text-slate-900" style={{ width: 80, fontSize: 24 }}>Apple</span>
          <span className="font-medium text-slate-900" style={{ width: 83, fontSize: 24 }}>IDEO</span>
          <span className="font-medium text-slate-900" style={{ width: 110, fontSize: 24 }}>Polygon</span>
        </div>
        <div
          className={`mt-8 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.5s' }}
        >
          <img
            ref={imgRef}
            src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260330_103804_7aa5494f-4d5b-432e-9dc7-20715275f143.png&w=1280&q=85"
            alt="Chris Halaska"
            className="w-full max-w-xs rounded-2xl shadow-lg"
            style={{ transform: `translateY(${offset}px)` }}
          />
        </div>
      </div>
    </section>
  );
}
