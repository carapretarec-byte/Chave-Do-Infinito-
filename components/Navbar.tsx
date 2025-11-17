import React, { useState } from 'react';
import { Page } from '../types';

interface NavbarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  isScrolled: boolean;
}

const NavLink: React.FC<{
  page: Page;
  activePage: Page;
  onClick: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, activePage, onClick, children }) => (
  <button
    onClick={() => onClick(page)}
    className={`px-4 py-2 text-sm font-medium tracking-wider transition-colors duration-300 relative ${
      activePage === page ? 'text-amber-300' : 'text-gray-300 hover:text-white'
    }`}
  >
    {children}
    {activePage === page && (
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(252,211,77,0.5)]" />
    )}
  </button>
);

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage, isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const pages = Object.values(Page);

  const handleLinkClick = (page: Page) => {
    setActivePage(page);
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#071a1d]/80 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold font-cinzel text-white tracking-widest cursor-pointer" onClick={() => handleLinkClick(Page.SINOPSE)}>
              CHAVE DO <span className="text-amber-400">INFINITO</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {pages.map((page) => (
                <NavLink key={page} page={page} activePage={activePage} onClick={handleLinkClick}>
                  {page}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#071a1d]/95 backdrop-blur-md">
            {pages.map((page) => (
               <button
                  key={page}
                  onClick={() => handleLinkClick(page)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activePage === page ? 'bg-amber-900/50 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {page}
                </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;