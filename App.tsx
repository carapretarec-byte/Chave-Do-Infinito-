import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Sinopse from './components/Sinopse';
import ConceptArt from './components/ConceptArt';
import Game from './components/Game';
import Musica from './components/Musica';
import Loja from './components/Loja';
import SobreAutor from './components/SobreAutor';
import Footer from './components/Footer';
import Contato from './components/Contato';
import AudioPlayer from './components/AudioPlayer';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.SINOPSE);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case Page.SINOPSE:
        return <Sinopse />;
      case Page.CONCEPT_ARTE:
        return <ConceptArt />;
      case Page.GAME:
        return <Game />;
      case Page.MUSICA:
        return <Musica />;
      case Page.LOJA:
        return <Loja />;
      case Page.SOBRE_O_AUTOR:
        return <SobreAutor />;
      case Page.CONTATO:
        return <Contato />;
      default:
        return <Sinopse />;
    }
  };

  return (
    <div className="min-h-screen bg-[#071a1d] text-gray-300">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-25" 
        style={{backgroundImage: "url('https://images.pexels.com/photos/1578750/pexels-photo-1578750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-[#071a1d]/90 to-[#071a1d]" />
      
      <div className="relative z-10">
        <Navbar activePage={activePage} setActivePage={setActivePage} isScrolled={isScrolled} />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <Header />
          <div className="mt-12">
            {renderPage()}
          </div>
        </main>
        <Footer />
      </div>
      <AudioPlayer />
    </div>
  );
};

export default App;