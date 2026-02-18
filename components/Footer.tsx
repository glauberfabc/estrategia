
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-40 bg-background-dark border-t border-neutral-blue/30 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <span className="material-symbols-outlined text-primary text-lg font-bold">architecture</span>
              </div>
              <span className="font-black uppercase tracking-tighter text-lg text-white">Estratégia Visual</span>
            </div>
            <div className="space-y-1">
              <p className="text-muted-blue text-xs font-bold uppercase tracking-widest">© 2026 Estrategia Visual. Todos los derechos reservados.</p>
              <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">Designed for High-Performance Impact.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
