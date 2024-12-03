import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  miniTitle: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, miniTitle, className }) => (
  <div className={`w-full max-w-xl mb-14 ${className || ""}`}>
    <p className="font-sans font-semibold text-xs tracking-widest uppercase mb-3 text-primary-500">{miniTitle}</p>
    <h2 className="font-sans text-4xl font-medium mb-4 text-muted-800 dark:text-muted-100">{title}</h2>
    <p className="text-lg text-muted-500 dark:text-muted-400">{subtitle}</p>
  </div>
);

export default SectionTitle;
