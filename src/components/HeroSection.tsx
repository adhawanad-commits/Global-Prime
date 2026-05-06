import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';

export function HeroSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section ref={ref} className="flex justify-center pt-12 md:pt-16">
      <div className="max-w-[440px] px-6">
        <h1
          className={`font-serif text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-[#051A24] tracking-tight mb-4 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          Viktor Oddy
        </h1>
        <p
          className={`font-mono text-xs md:text-sm text-[#051A24] mb-2 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          The creative studio of Viktor Oddy
        </p>
        <h2
          className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight whitespace-nowrap ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.3s' }}
        >
          Build the <span className="font-serif">next wave,</span>
          <br />
          the <span className="font-serif">bold way.</span>
        </h2>
        <div
          className={`flex flex-col gap-6 text-sm md:text-base text-[#051A24] leading-relaxed mt-5 md:mt-6 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <p>
            I spent seven years at Apple crafting products used by over a billion people. I founded
            Vortex Studio to bring that same level of thinking to innovators shaping what comes next.
          </p>
          <p>
            The studio is deliberately small. I guide the creative vision on every project, backed by a
            veteran design crew that moves fast without cutting corners.
          </p>
          <p>Projects start at $5,000 per month.</p>
        </div>
        <div
          className={`flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-6 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.5s' }}
        >
          <Button href="https://halaskastudio.com/./book">Start a chat</Button>
          <Button variant="secondary">View projects</Button>
        </div>
      </div>
    </section>
  );
}
