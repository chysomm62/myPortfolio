// components/ui/ResumeButton.tsx

import React from "react";

interface ResumeButtonProps {
  className?: string;
}

const ResumeButton: React.FC<ResumeButtonProps> = ({ className = "" }) => {
  return (
    <a
      href="/Chisom_Muorah_Resume.pdf"
      download="Chisom_Muorah_Resume.pdf"
      className={`
        relative inline-flex items-center justify-center        px-5 py-2        rounded-sm font-medium
        transition-all duration-300 ease-out
      shadow-[5px_5px_15px_2px_rgba(150,150,150,0.25)]
  hover:shadow-[0_10px_30px_rgba(150,150,150,0.45)]
        hover:scale-[1.02]
        active:scale-[0.98]
        ${className}
      `}>
      Download Resume
    </a>
  );
};

export default ResumeButton;
