
import React from 'react';

const MethodCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="group p-10 rounded-3xl bg-neutral-blue/20 border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500 text-primary group-hover:text-background-dark">
      {icon}
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
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="currentColor">
                <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-525q-10 20-30 32.5T366-560q-27 0-46.5-19.5T300-626q0-28 19.5-49t48.5-23q15-1 29 4t26 15l48-43q-24-21-52.5-31T366-764q-58 0-99 41t-41 99q0 51 32 89.5t82 48.5v66q-83-14-138.5-78T146-646q0-131 92.5-222.5T461-960q21 0 41.5 3t40.5 9l-22 66q-14-5-29-7.5t-31-2.5q-103 0-175.5 73.5T213-644q0 73 37.5 133t99.5 86v-70q-21-9-34.5-28T302-566q0-24 19-39.5t45-12.5q24 3 41 21t13 36Zm80 445v-62q66-13 109-66t43-122q0-21-5.5-44.5T652-498l62-28q18 35 27 72t9 74q0 99-62.5 174T520-160Zm0-138v-66q37-14 58.5-47t21.5-73q0-54-38-92t-92-38q-11 0-21.5 2t-20.5 6l-20-64q19-7 39.5-10.5T468-684q79 0 135.5 56.5T660-492q0 49-23 94t-63 76.5l-54-36.5ZM246-240l50-50q26 26 59 40t69 14v70q-50 0-95.5-18.5T246-240Zm438-432-58-54q38-31 85-47.5t97-16.5v72q-35 0-68 11.5T684-672Z" />
              </svg>
            }
            title="Análisis de Identidad"
            description="Mapeo genético de tu marca personal. Descubrimos tus valores esenciales y los traducimos en una esencia visual única."
          />
          <MethodCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="currentColor">
                <path d="M480-120 200-280v-400l280-160 280 160v400L480-120Zm0-80 200-114v-292L480-720 280-606v292l200 114Zm0-460 200-114-66-38-134 78-134-78-66 38 200 114Zm0 60-154-88-46 26 200 114 200-114-46-26-154 88Zm0 0Z" />
              </svg>
            }
            title="Guardarropa Estratégico"
            description="Curaduría selectiva de prendas que funcionan como herramientas de trabajo. Cada ítem comunica tu autoridad sin esfuerzo."
          />
          <MethodCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="currentColor">
                <path d="M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0-400q167 0 283.5 116.5T880-480q0 167-116.5 283.5T480-80q-167 0-283.5-116.5T80-480q0-167 116.5-283.5T480-680Zm0-80q-33 0-56.5-23.5T400-840q0-33 23.5-56.5T480-920q33 0 56.5 23.5T560-840q0 33-23.5 56.5T480-760Z" />
              </svg>
            }
            title="Presencia Ejecutiva"
            description="Dominio de la comunicación no verbal. Alineación total entre tu postura, habla y la imagen que proyectas al mundo."
          />
        </div>
      </div>
    </section>
  );
};
