import React from 'react';
import Section from './Section';

const MusicIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-13c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
    </svg>
);

const Musica: React.FC = () => {
  return (
    <Section title="Trilha Sonora">
       <div className="text-center max-w-3xl mx-auto">
        <img 
          src="https://images.pexels.com/photos/5720721/pexels-photo-5720721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Teclas de piano em close-up compondo a trilha sonora"
          className="mx-auto mb-8 rounded-lg shadow-lg w-full max-w-lg object-cover border-2 border-amber-800/50"
        />
        <div className="text-gray-300 leading-relaxed text-lg mb-8 space-y-4">
          <p>
            Acompanhe a leitura do livro com a trilha sonora envolvente de CHAVE DO INFINITO – O ENIGMA DOS PORTAIS, produzida por Jonathan Ojan e Cara Preta Records. Deixe-se levar por uma atmosfera única e vivencie uma imersão completa no universo de Chave do Infinito.
          </p>
          <p>
            As músicas do álbum irão transportá-lo para as ruas de Portmere, criando cenários vivos como o Lago Oco, o Beco Onde o Vento Não Sopra, a Velha Biblioteca de Portmere, e até mesmo para além dos mundos e portais, guiado pela harmonia da frequência 432 Hz.
          </p>
          <p>
            Entre faixas relaxantes, momentos de tensão e toques de suspense, este álbum oferece uma experiência sonora profunda, emocional e totalmente envolvente — o complemento perfeito para sua jornada literária.
          </p>
        </div>
        <a 
          href="https://onerpm.link/120152070153"
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white font-bold text-lg rounded-lg shadow-lg shadow-amber-600/30 hover:bg-amber-500 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-400"
        >
          <MusicIcon />
          <span>Ouvir nas Plataformas</span>
        </a>
      </div>
    </Section>
  );
};

export default Musica;