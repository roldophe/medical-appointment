import React from "react";
import { Link } from "react-router-dom";

interface ButtonSubProps {
  to: string; // Destination URL
  className?: string; // Additional custom styles
  children: React.ReactNode; // Button content
  isExternal?: boolean; // Flag for external links
}

const ButtonSub: React.FC<ButtonSubProps> = ({ to, className = "", children, isExternal = false }) => {
  const baseClasses =
    "relative font-sans font-normal inline-flex items-center justify-center gap-x-1 rounded-md leading-5 no-underline text-slate-700 bg-white border dark:text-white dark:bg-slate-700 dark:border-slate-600 h-10 p-3 text-sm hover:enabled:bg-slate-50 dark:hover:enabled:bg-slate-600 active:enabled:bg-slate-200 dark:active:enabled:bg-slate-700 tw-accessibility transition-all duration-300";

  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={`${baseClasses} ${className}`}>
      {children}
    </Link>
  );
};

export default ButtonSub;
