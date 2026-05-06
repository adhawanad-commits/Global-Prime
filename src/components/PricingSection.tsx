import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';

export function PricingSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section ref={ref} className="py-12 px-6">
      <div className="md:flex md:justify-end md:max-w-4xl md:ml-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className={`bg-[#051A24] rounded-[40px] pl-10 pr-10 md:pr-24 pt-3 pb-10 shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)] ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          <h3 className="text-[22px] font-medium text-[#F6FCFF]">Monthly Partnership</h3>
          <p className="text-sm text-[#E0EBF0] mt-2">
            A dedicated creative design team.
            <br />
            You work directly with Viktor.
          </p>
          <div className="mt-6">
            <span className="text-2xl text-[#F6FCFF]">$5,000</span>
            <span className="text-sm text-[#E0EBF0] ml-2">Monthly</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button href="https://halaskastudio.com/./book">Start a chat</Button>
            <Button variant="secondary" href="https://halaskastudio.com/./book">How it works</Button>
          </div>
        </div>

        <div
          className={`bg-white rounded-[40px] pl-10 pr-10 md:pr-24 pt-3 pb-10 shadow-[0_4px_16px_rgba(0,0,0,0.08)] ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          <h3 className="text-[22px] font-medium text-[#0D212C]">Custom Project</h3>
          <p className="text-sm text-[#273C46] mt-2">
            Fixed scope, fixed timeline.
            <br />
            Same team, same standards.
          </p>
          <div className="mt-6">
            <span className="text-2xl text-[#0D212C]">$5,000</span>
            <span className="text-sm text-[#273C46] ml-2">Minimum</span>
          </div>
          <div className="mt-6">
            <Button variant="tertiary" href="https://halaskastudio.com/./book">Start a chat</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
