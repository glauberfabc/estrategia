
import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background-dark/80 backdrop-blur-md border-b border-neutral-blue/30 py-4' : 'bg-transparent py-6'}`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-primary p-1.5 rounded transition-transform group-hover:scale-110">
            <span className="material-symbols-outlined text-background-dark text-xl font-bold">architecture</span>
          </div>
          <span className="text-xl font-extrabold tracking-tighter uppercase">Estratégia Visual</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a className="text-xs font-bold hover:text-primary transition-colors uppercase tracking-[0.2em]" href="#metodo">Método</a>
          <a className="text-xs font-bold hover:text-primary transition-colors uppercase tracking-[0.2em]" href="#expert">La Especialista</a>
          <a className="text-xs font-bold hover:text-primary transition-colors uppercase tracking-[0.2em]" href="#servicos">Servicios</a>
          <a className="text-xs font-bold hover:text-primary transition-colors uppercase tracking-[0.2em]" href="#portfolio">Portafolio</a>
        </div>

        <button className="bg-primary hover:bg-white text-background-dark px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all active:scale-95 shadow-[0_0_20px_rgba(13,242,242,0.15)]">
          Agendar Consulta
        </button>
      </nav>
    </header>
  );
};
