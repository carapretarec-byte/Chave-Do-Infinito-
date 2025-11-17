import React from 'react';
import Section from './Section';

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);


const Game: React.FC = () => {
  return (
    <Section title="Game: O Enigma dos Portais">
       <div className="text-center max-w-3xl mx-auto">
        <img
          src="https://images.pexels.com/photos/9072383/pexels-photo-9072383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Mão digitando em teclado mecânico para games"
          className="mx-auto mb-8 rounded-lg shadow-lg w-full max-w-lg object-cover border-2 border-amber-800/50 aspect-video"
        />
        <div className="text-gray-300 leading-relaxed text-lg mb-8 space-y-4">
          <p>
            Mergulhe no universo de Chave do Infinito com o game CHAVE DO INFINITO – O ENIGMA DOS PORTAIS, uma aventura de exploração e estratégia no estilo Visual Novel, desenvolvido pela HOLLY MOUNTAIN GAMES. Construa sua própria jornada, faça escolhas que realmente importam e molde o destino dessa história cheia de mistérios.
          </p>
          <p>
            Investigue enigmas, enfrente inimigos e descubra novas camadas do enredo enquanto vive tudo por uma perspectiva inédita. Desta vez, você assume o papel de protagonista, revisitando os caminhos trilhados por Jacob na enigmática cidade de Portmere.
          </p>
          <p>
            Prepare-se para atravessar portais, desafiar o desconhecido e desvendar segredos que podem mudar tudo. Quer começar?
          </p>
        </div>
        <div>
          <button 
            disabled
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-700 text-gray-400 font-bold text-lg rounded-lg shadow-inner cursor-not-allowed"
          >
            <DownloadIcon />
            <span>DOWNLOAD</span>
          </button>
          <p className="mt-4 text-amber-300/80 text-sm font-cinzel tracking-widest">EM DESENVOLVIMENTO</p>
        </div>
      </div>
    </Section>
  );
};

export default Game;