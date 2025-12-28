import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  withArrow = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 border border-white",
    secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20",
    outline: "bg-transparent text-white border border-white/20 hover:border-white hover:bg-white/5",
    text: "bg-transparent text-secondary hover:text-white p-0 hover:translate-x-1"
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4"
  };

  const finalClass = `${baseStyles} ${variants[variant]} ${variant !== 'text' ? sizes[size] : ''} ${className}`;

  return (
    <button className={finalClass} {...props}>
      {children}
      {withArrow && <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </button>
  );
};