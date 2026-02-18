
import React from 'react';

const PortfolioItem: React.FC<{ image: string; title: string; subtitle: string; offset?: boolean }> = ({ image, title, subtitle, offset }) => (
  <div className={`aspect-[3/4] rounded-3xl overflow-hidden group relative border border-white/5 ${offset ? 'lg:translate-y-16' : ''} shadow-2xl transition-transform duration-700 hover:-translate-y-2`}>
    <img
      className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
      alt={title}
      src={image}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-10 flex flex-col justify-end">
      <p className="text-primary font-black uppercase tracking-widest text-xs mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{title}</p>
      <p className="text-white text-2xl font-black tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{subtitle}</p>
    </div>
  </div>
);

export const Portfolio: React.FC = () => {
  return (
    <section className="py-40 overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-primary text-xs font-black tracking-[0.5em] uppercase mb-4">Casos</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">Transformaciones <br /> Reales</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PortfolioItem
            image="/2.jpeg"
            title="Liderazgo Tecnológico"
            subtitle="Transformación CEO"
          />
          <PortfolioItem
            image="/3.jpeg"
            title="Élite Financiera"
            subtitle="El Minimalista"
            offset
          />
          <PortfolioItem
            image="/4.jpeg"
            title="Autoridad Legal"
            subtitle="Presencia Distintiva"
          />
          <PortfolioItem
            image="/5.jpeg"
            title="Dirección Creativa"
            subtitle="Autoridad Redefinida"
            offset
          />
        </div>
      </div>
    </section>
  );
};
