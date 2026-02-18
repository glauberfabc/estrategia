
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10 order-2 md:order-1">
          <p className="text-primary font-bold tracking-[0.4em] uppercase mb-4 text-xs">Personal Styling Premium</p>
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] mb-8 tracking-tighter uppercase">
            Vístete para el puesto <br />
            <span className="text-primary italic">que deseas</span>, <br className="hidden lg:block" /> no para el que tienes.
          </h1>
          <p className="text-muted-blue text-2xl mb-10 max-w-lg leading-relaxed font-bold italic">
            Domina tu mercado a través de tu Imagen Ejecutiva.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-primary text-background-dark px-10 py-5 rounded-lg font-black text-sm uppercase tracking-widest hover:shadow-[0_0_40px_rgba(13,242,242,0.3)] hover:-translate-y-1 transition-all duration-300">
              Comienza Tu Transformación
            </button>
            <button className="border border-neutral-blue text-white/70 hover:text-white px-10 py-5 rounded-lg font-black text-sm uppercase tracking-widest hover:border-primary transition-all duration-300">
              Ver Casos de Éxito
            </button>
          </div>
        </div>

        <div className="relative order-1 md:order-2 group">
          <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/5">
            <img
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              alt="Professional woman in executive suit"
              src="/principal.jpeg"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-background-dark border border-neutral-blue p-8 rounded-xl shadow-xl backdrop-blur-md">
            <p className="text-primary text-5xl font-black mb-1">10+</p>
            <p className="text-muted-blue text-xs uppercase tracking-widest font-bold">Años de Experiencia</p>
          </div>
        </div>
      </div>
    </section>
  );
};
