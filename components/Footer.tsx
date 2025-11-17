import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black/30 border-t border-amber-900/50 mt-16">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>&copy; {currentYear} Jonathan Ojan. Todos os direitos reservados.</p>
        <p className="text-sm mt-1">Universo Criativo Chave do Infinito.</p>
      </div>
    </footer>
  );
};

export default Footer;