// components/ui/ResumeButton.tsx

import React from "react";

interface ResumeButtonProps {
  className?: string;
}

const ResumeButton: React.FC<ResumeButtonProps> = ({ className = "" }) => {
  return (
    <a
      aria-label="Download Resume"
      href="/Chisom_Muorah_Resume.pdf"
      download="Chisom_Muorah_Resume.pdf"
      className={`relative inline-flex items-center justify-center bg-background px-5 py-2 rounded-sm text-sm md:text-base lg:text-lg font-medium transition-all duration-300 ease-out shadow-[10px_10px_20px_rgba(150,150,150,0.25),-10px_-10px_20px_rgba(150,150,150,0.25)] hover:shadow-[inset_6px_6px_200px_gba(150,150,150,0.25), inset_-6px_-6px_20px_rgba(150,150,150,0.45)] hover:scale-[1.02] active:scale-[0.98] hover:bg-accent-gradient ${className}
      `}>
      Download Resume
    </a>
  );
};

export default ResumeButton;
