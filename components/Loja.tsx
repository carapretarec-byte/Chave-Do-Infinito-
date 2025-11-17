import React from 'react';
import Section from './Section';

const storeItems = [
  {
    name: 'Livro Físico: Chave do Infinito',
    price: 'R$ 49,90',
    image: 'https://images.pexels.com/photos/267586/pexels-photo-267586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Camiseta "Olho que Tudo Vê"',
    price: 'R$ 79,90',
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Pôster "O Portal"',
    price: 'R$ 39,90',
    image: 'https://images.pexels.com/photos/13516304/pexels-photo-13516304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const book = storeItems[0];
const otherItems = storeItems.slice(1);


const OtherStoreItem: React.FC<{ item: typeof otherItems[0] }> = ({ item }) => {
  const isUnavailable = item.name === 'Camiseta "Olho que Tudo Vê"' || item.name === 'Pôster "O Portal"';

  return (
    <div className={`bg-gray-900/40 rounded-lg overflow-hidden border border-amber-900/50 flex flex-col group transition-all duration-300 ${isUnavailable ? '' : 'hover:shadow-2xl hover:shadow-amber-500/10 hover:border-amber-700/50'}`}>
      <div className="overflow-hidden relative">
          <img src={item.image} alt={item.name} className={`w-full h-56 object-cover transform transition-transform duration-500 ${isUnavailable ? 'grayscale' : 'group-hover:scale-105'}`}/>
          {isUnavailable && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-white text-lg font-bold font-cinzel tracking-widest border-2 border-white/80 px-4 py-2 rounded-sm">
                INDISPONÍVEL
              </span>
            </div>
          )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-gray-100 flex-grow">{item.name}</h3>
        <p className={`text-xl font-cinzel mt-2 ${isUnavailable ? 'text-gray-500 line-through' : 'text-amber-400'}`}>{item.price}</p>
      </div>
      <div className="p-4 mt-auto">
        {isUnavailable ? (
           <div className="w-full px-4 py-2 bg-gray-800 text-gray-400 font-bold rounded-md text-center cursor-not-allowed">
            INDISPONÍVEL
          </div>
        ) : (
          <button className="w-full px-4 py-2 bg-amber-700 text-white font-bold rounded-md shadow-lg shadow-amber-700/20 hover:bg-amber-600 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-500">
              Comprar
          </button>
        )}
      </div>
    </div>
  );
};

const Loja: React.FC = () => {
  return (
    <Section title="Loja">
      {/* Featured Book */}
      <div className="bg-black/30 rounded-lg overflow-hidden border border-amber-800/50 flex flex-col md:flex-row items-center gap-8 p-6 md:p-8 mb-12 shadow-2xl shadow-amber-500/10">
        <div className="md:w-1/3 flex-shrink-0">
          <img src={book.image} alt={book.name} className="w-full h-auto object-cover rounded-lg shadow-lg max-w-xs mx-auto"/>
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h3 className="text-3xl font-bold font-cinzel text-white">{book.name}</h3>
          <div className="flex items-baseline justify-center md:justify-start gap-4 mt-4">
            <p className="text-2xl font-cinzel text-gray-500 line-through">R$ 89,90</p>
            <p className="text-4xl font-cinzel text-amber-400 animate-pulse">R$ 66,99</p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="https://www.amazon.com.br/Livros/b?ie=UTF8&node=6740748011" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-amber-600 text-white font-bold rounded-lg shadow-lg shadow-amber-600/30 hover:bg-amber-500 transform hover:scale-105 transition-all duration-300 text-center">
                Comprar na Amazon
            </a>
            <div className="px-6 py-3 bg-gray-800 text-gray-400 font-bold rounded-lg shadow-inner cursor-not-allowed text-center">
                Esgotado na Editora
            </div>
          </div>
        </div>
      </div>

      {/* Other Items */}
      <h4 className="text-2xl font-cinzel text-center text-amber-300 mt-16 mb-8 border-t border-amber-900/50 pt-8">Outros Itens do Universo</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherItems.map((item, index) => (
          <OtherStoreItem key={index} item={item} />
        ))}
      </div>
    </Section>
  );
};

export default Loja;