import React from 'react';
import Section from './Section';

const Sinopse: React.FC = () => {
  return (
    <Section title="Sinopse">
      <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
        <p>
          Entre coincidências impossíveis e números que se repetem como sussurros do destino, Jacob começa a perceber que o universo o observa — e responde. Órfão desde criança, criado pela avó religiosa e severa, ele vive preso entre o trabalho e a universidade, esmagado por expectativas que não lhe pertencem. Mas há algo diferente nele: uma intuição quase sobrenatural, uma capacidade de perceber e moldar os acontecimentos antes que eles ocorram.
        </p>
        <p>
          Movido pela curiosidade e por uma sequência de eventos inexplicáveis, ele é lançado em uma jornada que desafia os limites da mente e da realidade.
        </p>
        <p>
          Quando o relógio marca 11:11, algo desperta. Um sonho revela portas flutuando no vazio — portais dentro de sua própria mente. E é ali, entre símbolos e luzes que dançam em sequência, que Jacob descobre o primeiro fragmento da Chave do Infinito.
        </p>
        <p>
          Guiado por Boris, um excêntrico bibliotecário com sabedoria ancestral, ele mergulha em um universo onde a lei da atração se mistura à ciência dos números, e os códigos sequenciais (222, 333, 444...) revelam mensagens ocultas do cosmos. Cada portal aberto o conduz a uma nova dimensão — reflexo de seus pensamentos, medos e desejos mais profundos.
        </p>
        <p>
          Mas quanto mais ele compreende o poder que carrega, mais real se torna a presença de sua versão sombria, um reflexo rebelde e caótico que tenta dominá-lo por dentro. Entre realidades paralelas, memórias distorcidas e lições vindas de culturas esquecidas, Jacob precisa decifrar o Enigma dos Portais antes que o próprio tempo se desfaça.
        </p>
        <p>
          Em uma trama onde mente e matéria se entrelaçam, CHAVE DO INFINITO – O ENIGMA DOS PORTAIS é uma jornada sobre consciência, sincronicidade e o poder oculto dos pensamentos. Um convite para enxergar o invisível — e descobrir que o verdadeiro portal sempre esteve dentro de nós.
        </p>
        <p>
          Uma história sobre consciência, poder e o confronto entre luz e sombra dentro da própria alma.
        </p>
      </div>
      <div className="mt-10 text-center">
        <img 
          src="https://images.pexels.com/photos/5579787/pexels-photo-5579787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Portal de luz em um corredor escuro" 
          className="mx-auto rounded-lg shadow-xl w-full max-w-2xl object-cover border-2 border-amber-800/50"
        />
      </div>
    </Section>
  );
};

export default Sinopse;