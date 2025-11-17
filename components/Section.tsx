import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="py-12 animate-fade-in">
      <h2 className="text-4xl font-bold font-cinzel text-center mb-10 text-amber-300 tracking-wide" style={{ textShadow: '0 0 10px rgba(229, 184, 106, 0.3)' }}>
        {title}
      </h2>
      <div className="bg-black/20 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-amber-800/30 shadow-2xl shadow-black/30">
        {children}
      </div>
    </section>
  );
};

export default Section;