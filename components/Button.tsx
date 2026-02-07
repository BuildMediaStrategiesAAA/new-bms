import React from 'react';
import { ArrowUpRight } from './Icons';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  as?: 'a' | 'span';
}

const Button: React.FC<ButtonProps> = ({ children, className, href, as = 'a' }) => {
  const classes = `
    inline-flex items-center justify-between gap-4 px-6 py-4
    border border-white/20 rounded-full
    text-white font-mono text-sm hover:bg-white/10 hover:border-white/40
    transition-all duration-300 group cursor-pointer
    ${className || ''}
  `;

  const inner = (
    <>
      <span>{children}</span>
      <div className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </>
  );

  if (as === 'span') {
    return <span className={classes}>{inner}</span>;
  }

  return <a href={href} className={classes}>{inner}</a>;
};

export default Button;
