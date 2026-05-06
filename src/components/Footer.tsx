import { ArrowUpRight } from 'lucide-react';
import { Button } from './Button';

export function Footer() {
  return (
    <footer className="py-12 px-6 max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <Button href="https://halaskastudio.com/./book">Start a chat</Button>
        <div className="flex items-start gap-8">
          <ArrowUpRight className="w-5 h-5 text-[#051A24] mt-1" />
          <div className="flex gap-12">
            <div className="flex flex-col gap-2">
              <a href="#services" className="text-base text-[#051A24] hover:opacity-70 transition">Services</a>
              <a href="#work" className="text-base text-[#051A24] hover:opacity-70 transition">Work</a>
              <a href="#about" className="text-base text-[#051A24] hover:opacity-70 transition">About</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-base text-[#051A24] hover:opacity-70 transition">x.com</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-base text-[#051A24] hover:opacity-70 transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
