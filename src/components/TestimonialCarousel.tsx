import { useCallback, useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const testimonials = [
  {
    name: 'Marcus Anderson',
    role: 'CEO, Data.storage',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&dpr=1',
    text: 'With very little guidance team delivered designs that were consistently spot on. Their understanding of our brand and vision was remarkable.',
  },
  {
    name: 'alexwu',
    role: 'Founder, Nexgate',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&dpr=1',
    text: 'Viktor led the creation of our best fundraising deck to date! The design quality and strategic thinking were exactly what we needed.',
  },
  {
    name: 'James Mitchell',
    role: 'VP Product, LaunchPad',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&dpr=1',
    text: 'Working with Viktor transformed our product vision into something truly exceptional. The attention to detail is unmatched.',
  },
  {
    name: 'Rachel Foster',
    role: 'Co-founder, Nexus Labs',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&dpr=1',
    text: 'The design quality exceeded our expectations. Every pixel was considered, and the result speaks for itself.',
  },
  {
    name: 'David Zhang',
    role: 'Head of Design, Paradigm Labs',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&dpr=1',
    text: 'Incredible work from start to finish. The team understood our complex requirements and delivered beyond what we imagined.',
  },
];

const tripled = [...testimonials, ...testimonials, ...testimonials];

export function TestimonialCarousel() {
  const { ref, isInView } = useInViewAnimation();
  const [current, setCurrent] = useState(testimonials.length);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (index: number) => {
      setIsTransitioning(true);
      setCurrent(index);
    },
    []
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(next, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, next]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onEnd = () => {
      if (current >= testimonials.length * 2) {
        setIsTransitioning(false);
        setCurrent(testimonials.length);
      } else if (current < testimonials.length) {
        setIsTransitioning(false);
        setCurrent(testimonials.length);
      }
    };

    track.addEventListener('transitionend', onEnd);
    return () => track.removeEventListener('transitionend', onEnd);
  }, [current]);

  const cardWidth = typeof window !== 'undefined' && window.innerWidth >= 768 ? 427.5 + 24 : window.innerWidth - 48;

  return (
    <section ref={ref} className="py-20 overflow-hidden">
      <div className="md:max-w-4xl md:ml-auto px-6 flex items-center justify-between mb-12">
        <h2
          className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          What <span className="font-serif">builders</span> say
        </h2>
        <div
          className={`flex items-center gap-2 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-black text-black" />
          ))}
          <span className="text-sm font-medium ml-1">Clutch 5/5</span>
        </div>
      </div>

      <div className="relative">
        <div
          ref={trackRef}
          className="flex gap-6"
          style={{
            transform: `translateX(-${current * cardWidth}px)`,
            transition: isTransitioning ? 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {tripled.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white rounded-[32px] md:rounded-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-6 md:pl-10 md:pr-24 py-8"
              style={{ width: typeof window !== 'undefined' && window.innerWidth >= 768 ? 427.5 : 'calc(100vw - 48px)' }}
            >
              <svg width="32" height="24" viewBox="0 0 32 24" className="mb-4 text-[#0D212C]">
                <path d="M0 24V14.4C0 6.4 5.12 1.6 12.8 0L14.08 2.24C9.6 3.84 7.68 7.04 7.36 10.24H12.8V24H0ZM17.92 24V14.4C17.92 6.4 23.04 1.6 30.72 0L32 2.24C27.52 3.84 25.6 7.04 25.28 10.24H30.72V24H17.92Z" fill="currentColor" />
              </svg>
              <p className="text-base text-[#0D212C] leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-3 mt-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-sm text-[#0D212C]">{t.name}</p>
                  <p className="text-sm text-[#273C46]">&rarr; {t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button onClick={prev} className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-[#0D212C]/5 transition">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-[#0D212C]/5 transition">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
