import React from "react";

interface ButtonMainProps {
  to: string; // Destination URL
  className?: string; // Additional custom styles
  children: React.ReactNode; // Button content
  isExternal?: boolean; // Flag for external links
}

const ButtonMain: React.FC<ButtonMainProps> = ({ to, className, children, isExternal = false }) => {
  const baseClasses =
    "relative font-sans font-normal inline-flex items-center justify-center leading-5 no-underline space-x-1 text-white bg-primary-600 h-10 p-3 text-sm rounded-md hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/20 tw-accessibility transition-all duration-300";

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
    <a href={to} className={`${baseClasses} ${className}`}>
      {children}
    </a>
  );
};

export default ButtonMain;
