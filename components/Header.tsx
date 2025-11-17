import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="text-center py-16">
      <h1 className="text-5xl md:text-7xl font-bold font-cinzel text-white tracking-wider uppercase" style={{ textShadow: '0 0 15px rgba(229, 184, 106, 0.5)' }}>
        Chave do Infinito
      </h1>
      <h2 className="mt-4 text-2xl md:text-3xl font-cinzel text-amber-300 tracking-widest">
        O Enigma dos Portais
      </h2>
      <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
        Uma história de Jonathan Ojan sobre consciência, poder e o confronto entre luz e sombra.
      </p>
    </div>
  );
};

export default Header;