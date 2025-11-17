import React from 'react';
import Section from './Section';

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);


const Contato: React.FC = () => {
  return (
    <Section title="Contato">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-lg text-gray-300 leading-relaxed mb-10">
          Para propostas, parcerias, ou para saber mais sobre o universo de Chave do Infinito, entre em contato através dos canais abaixo.
        </p>
        
        <div className="space-y-8">
            {/* Email */}
            <div>
                <h3 className="text-2xl font-cinzel text-amber-300 tracking-wider">E-mail</h3>
                <a 
                    href="mailto:carapretarec@gmail.com" 
                    className="text-xl text-gray-100 hover:text-white transition-colors duration-300 break-all"
                    aria-label="Enviar email para carapretarec@gmail.com"
                >
                    carapretarec@gmail.com
                </a>
            </div>

            {/* Social */}
            <div>
                <h3 className="text-2xl font-cinzel text-amber-300 tracking-wider mb-4">Rede Social</h3>
                <a 
                  href="https://www.instagram.com/carapretarecords/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-amber-600 text-white font-bold text-lg rounded-lg shadow-lg shadow-amber-600/30 hover:bg-amber-500 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-400"
                >
                  <InstagramIcon />
                  <span>Instagram</span>
                </a>
            </div>
        </div>

      </div>
    </Section>
  );
};

export default Contato;