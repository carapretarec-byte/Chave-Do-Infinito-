
import React from 'react';
import Section from './Section';

const ConceptArt: React.FC = () => {
  const images = [
    'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // O Portal Mental
    'https://images.pexels.com/photos/29893823/pexels-photo-29893823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Galáxia
    'https://images.pexels.com/photos/2889353/pexels-photo-2889353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Imagem cósmica para coesão
    'https://images.pexels.com/photos/16118860/pexels-photo-16118860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // A Dualidade
    'https://images.pexels.com/photos/9645766/pexels-photo-9645766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Vórtice/Portal
    'https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/14876121/pexels-photo-14876121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/23749430/pexels-photo-23749430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/9783353/pexels-photo-9783353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/9783346/pexels-photo-9783346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3798292/pexels-photo-3798292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2118983/pexels-photo-2118983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  return (
    <Section title="Concept Arte">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg aspect-square">
            <img src={src} alt={`Concept Art ${index + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ConceptArt;