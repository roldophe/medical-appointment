import React from "react";

interface SectionMutedProps {
  className?: string;
  children: React.ReactNode;
}

const SectionMuted: React.FC<SectionMutedProps> = ({ children , className}) => {
  return (

    <div className={`w-full py-16 px-4 bg-muted-100 dark:bg-muted-1000 ${className}`}>

      {children}

    </div>

  );

};



export default SectionMuted;
