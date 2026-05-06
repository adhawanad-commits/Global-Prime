import { Button } from './Button';

export function BottomNav() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white rounded-full px-8 py-2 shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),0_17px_7px_0_rgba(5,26,36,0.01),0_26px_7px_0_rgba(5,26,36,0)] flex items-center gap-4">
      <span className="font-serif text-2xl font-semibold text-[#051A24]">V</span>
      <Button href="https://halaskastudio.com/./book">Start a chat</Button>
    </div>
  );
}
