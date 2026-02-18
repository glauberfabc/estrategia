
import React from 'react';

export const Services: React.FC = () => {
  const items = [
    "Estrategia",
    "Autoconocimiento",
    "Proporción corporal",
    "Estilos",
    "Colores y colorimetría personal",
    "Revitalización del guardarropa",
    "Montaje de looks y planificación de compras",
    "Armado de looks",
    "Atención al cliente",
    "Estructura de negocio",
    "Comunicación",
    "Primera capa",
    "Segunda capa",
    "Tercera capa",
    "Cuarta capa"
  ];

  return (
    <section className="py-32 bg-neutral-blue/10 relative" id="servicos">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-primary text-xs font-black tracking-[0.5em] uppercase mb-4">Inversión</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Planes de Posicionamiento</h3>
          <p className="text-muted-blue text-lg max-w-2xl mx-auto">Soluciones personalizadas diseñadas para acelerar tu ascenso profesional y consolidar tu legado.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Image with round mask */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-[32rem] md:h-[32rem]">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl">
                <img
                  className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0 hover:scale-110"
                  alt="Lara Pires - Planes"
                  src="/espe1.png"
                />
              </div>
            </div>
          </div>

          {/* Right Side: List of 15 items */}
          <div className="flex flex-col">
            <h4 className="text-2xl font-black text-white mb-8 tracking-tight uppercase border-l-4 border-primary pl-4">El Proceso de Transformación</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-5">
              {items.map((item, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all duration-300 flex-shrink-0">
                    <span className="text-xs font-black text-primary group-hover:text-background-dark">{index + 1}</span>
                  </div>
                  <span className="text-sm font-bold text-muted-blue group-hover:text-white transition-colors duration-300 uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center lg:justify-start">
              <button className="bg-primary hover:bg-white text-background-dark px-12 py-5 rounded-lg font-black text-sm uppercase tracking-widest hover:shadow-[0_0_50px_rgba(13,242,242,0.4)] hover:-translate-y-1 transition-all duration-300 active:scale-95">
                Solicitar Propuesta Personalizada
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
