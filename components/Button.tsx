import React from 'react';
import { ArrowUpRight } from './Icons';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <a 
      className={`
        inline-flex items-center justify-between gap-4 px-6 py-4 
        border border-white/20 rounded-full 
        text-white font-mono text-sm hover:bg-white/10 hover:border-white/40 
        transition-all duration-300 group
        ${className || ''}
      `}
      {...props}
    >
      <span>{children}</span>
      <div className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </a>
  );
};

export default Button;
