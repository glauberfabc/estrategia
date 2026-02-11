
import React from 'react';

const ServiceList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-5 mb-12 flex-grow">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start gap-4 text-sm text-white/70 font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className="text-primary text-xl mt-[-2px] min-w-[20px]">
          <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-256L684-596q11-11 11-28t-11-28q-11-11-28-11t-28 11L396-424l-84-84q-11-11-28-11t-28 11q-11 11-11 28t11 28l112 112q11 11 28 11t28-11Z" />
        </svg>
        {item}
      </li>
    ))}
  </ul>
);

export const Services: React.FC = () => {
  return (
    <section className="py-32 bg-neutral-blue/10 relative" id="servicos">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-primary text-xs font-black tracking-[0.5em] uppercase mb-4">Inversión</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Planes de Posicionamiento</h3>
          <p className="text-muted-blue text-lg max-w-2xl mx-auto">Soluciones personalizadas diseñadas para acelerar tu ascenso profesional y consolidar tu legado.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Individual Plan */}
          <div className="group relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem] hover:from-white/20 transition-all duration-700">
            <div className="bg-background-dark p-12 rounded-[2.2rem] h-full flex flex-col border border-white/5">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-6">Enfoque Individual</span>
              <h4 className="text-4xl font-black mb-4 tracking-tight">Elite Personal Branding</h4>
              <p className="text-muted-blue text-base mb-10 leading-relaxed font-medium">Para ejecutivos, fundadores y C-levels que buscan el siguiente nivel de autoridad.</p>

              <ServiceList items={[
                "Análisis de Coloración y Visagismo",
                "Detox y Organización de Closet",
                "Personal Shopper Day en Boutiques de Lujo",
                "Dossier de Estilo Digital (Lookbook)"
              ]} />

              <button className="w-full border-2 border-primary/30 text-primary hover:bg-primary hover:text-background-dark py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300">
                Consultar Disponibilidad
              </button>
            </div>
          </div>

          {/* Corporate Plan */}
          <div className="group relative p-1 bg-gradient-to-br from-primary/40 to-primary/10 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(13,242,242,0.1)]">
            <div className="bg-background-dark p-12 rounded-[2.2rem] h-full flex flex-col border border-primary/20">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-6">Corporativo</span>
              <h4 className="text-4xl font-black mb-4 tracking-tight">Impacto Organizacional</h4>
              <p className="text-muted-blue text-base mb-10 leading-relaxed font-medium">Entrenamiento de imagen estratégica para liderazgos y equipos de alto rendimiento.</p>

              <ServiceList items={[
                "Workshop de Código de Vestimenta Corporativo",
                "Consultoría de Imagen para Equipos",
                "Branding Visual de Liderazgo Ejecutivo",
                "Sesiones de Fotos Corporativas (Dirección de Arte)"
              ]} />

              <button className="w-full bg-primary text-background-dark py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-[0_0_30px_rgba(13,242,242,0.4)] transition-all duration-300 transform active:scale-[0.98]">
                Solicitar Propuesta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
