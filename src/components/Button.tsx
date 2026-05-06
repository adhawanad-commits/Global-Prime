import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
}

const shadows: Record<ButtonVariant, string> = {
  primary:
    'shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),0_17px_7px_0_rgba(5,26,36,0.01),0_26px_7px_0_rgba(5,26,36,0),inset_0_2px_8px_0_rgba(255,255,255,0.5)]',
  secondary:
    'shadow-[0_0_0_0.5px_rgba(0,0,0,0.05),0_4px_30px_rgba(0,0,0,0.08)]',
  tertiary:
    'shadow-[0_1px_2px_0_rgba(5,26,36,0.1),0_4px_4px_0_rgba(5,26,36,0.09),0_9px_6px_0_rgba(5,26,36,0.05),0_17px_7px_0_rgba(5,26,36,0.01),0_26px_7px_0_rgba(5,26,36,0),inset_0_2px_8px_0_rgba(255,255,255,0.5)]',
};

const base = 'inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-all duration-300 cursor-pointer';

const variants: Record<ButtonVariant, string> = {
  primary: `bg-[#051A24] text-white ${shadows.primary} hover:shadow-[0_4px_12px_rgba(5,26,36,0.2)]`,
  secondary: `bg-white text-[#051A24] ${shadows.secondary} hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)]`,
  tertiary: `bg-white text-[#051A24] ${shadows.tertiary} hover:shadow-[0_4px_12px_rgba(5,26,36,0.2)]`,
};

export function Button({ variant = 'primary', href, children, className = '', ...props }: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
