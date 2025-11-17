import React from 'react';
import Section from './Section';

const SobreAutor: React.FC = () => {
  return (
    <Section title="Sobre o Autor">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="md:w-1/3 flex-shrink-0">
          <img
            src="https://images.pexels.com/photos/6037572/pexels-photo-6037572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="A Essência Criativa"
            className="rounded-xl w-full max-w-xs mx-auto md:mx-0 h-96 object-cover border-4 border-amber-600 shadow-lg shadow-amber-500/20"
          />
        </div>
        <div className="md:w-2/3 space-y-4 text-gray-300 leading-relaxed text-lg">
           <h3 className="text-3xl font-cinzel text-white">Jonathan Ojan</h3>
          <p>
            Jonathan Ojan, artista mineiro nascido em São Lourenço — cidade acolhida pelas montanhas da Serra da Mantiqueira — é músico, produtor musical e contador de histórias. Conhecido como Ojan, é apaixonado pelas múltiplas formas de expressão artística, pelo cosmos e pelas infinitas possibilidades da fantasia e da ficção científica. Desde cedo, encontrou na música, nos livros e nas estrelas o impulso criativo que moldou sua sensibilidade, alimentando a construção de mundos ricos e personagens memoráveis.
          </p>
          <p>
            Ojan esteve por anos à frente da aclamada banda de reggae Ukiemana, com a qual percorreu boa parte do Brasil e diversos países ao redor do mundo. Em suas viagens, mergulhou em culturas distintas, tradições ancestrais e diferentes expressões de espiritualidade, ampliando profundamente sua bagagem humana, artística e intelectual. Essa vivência multicultural se tornou uma de suas maiores ferramentas criativas, permitindo-lhe incorporar às suas histórias elementos reais de contextos étnicos, culturais e religiosos que testemunhou.
          </p>
          <p>
            Com formação em produção musical e profundo apreço por narrativas épicas, Ojan descobriu na literatura mais uma maneira de dar vida às histórias que sempre o acompanharam. Seu trabalho busca unir a precisão de fatos históricos e elementos científicos à liberdade ilimitada da imaginação. Chave do Infinito é seu projeto de estreia — uma obra nascida de anos de pesquisa, experimentação e dedicação, que marca o início de um universo amplo e repleto de mistérios a serem explorados.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default SobreAutor;