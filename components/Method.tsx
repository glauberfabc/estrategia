
import React from 'react';

const MethodCard: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="group p-10 rounded-3xl bg-neutral-blue/20 border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500">
      <span className="material-symbols-outlined text-primary text-3xl group-hover:text-background-dark">{icon}</span>
    </div>
    <h4 className="text-2xl font-black mb-4 tracking-tight">{title}</h4>
    <p className="text-muted-blue leading-relaxed font-medium">{description}</p>
  </div>
);

export const Method: React.FC = () => {
  return (
    <section className="py-32 bg-neutral-blue/10 relative" id="metodo">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4">El Método</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">Arquitectando <br /> Autoridad Visual</h3>
          </div>
          <p className="text-muted-blue max-w-xs text-lg font-medium leading-relaxed border-l border-neutral-blue pl-8">
            Un enfoque holístico que une la psicología de la autoimagen y el branding personal.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <MethodCard
            icon="fingerprint"
            title="Análisis de Identidad"
            description="Mapeo genético de tu marca personal. Descubrimos tus valores esenciales y los traducimos en una esencia visual única."
          />
          <MethodCard
            icon="checkroom"
            title="Guardarropa Estratégico"
            description="Curaduría selectiva de prendas que funcionan como herramientas de trabajo. Cada ítem comunica tu autoridad sin esfuerzo."
          />
          <MethodCard
            icon="psychology"
            title="Presencia Ejecutiva"
            description="Dominio de la comunicación no verbal. Alineación total entre tu postura, habla y la imagen que proyectas al mundo."
          />
        </div>
      </div>
    </section>
  );
};
