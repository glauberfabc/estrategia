
import React from 'react';

export const Expert: React.FC = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden" id="expert">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative group">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-white/5 relative z-10">
              <img
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-[0.5]"
                alt="Expert portrait"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNZ-gUeqYmt7IO6r3OR8KilDqe0fMVmzItbTLXOeLDr5TtKJnf1PDJph3oYUxZZv6qxvKYZJlzjz6PU7_z4WQIfT1zXB1mr3q-HqunMkOKD1MkGajMEUjZv9RZc9N_8G9-pABNzTUtWMxM1REJlgDgnTQCubGPOYmDJ8MyBP5UsclfJY63HY9KduMhvMnWy-sjFYmBTpfS3F-sd0GWMcUBsTqNrzxx2oGKwrbeccvQfi-8Nxv_YmDuWEMxyZMmOcz0o3o82boA9mk"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 flex flex-col">
            <span className="text-primary font-bold tracking-[0.4em] uppercase mb-4 text-xs">La Especialista</span>
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[1.1]">Experiencia que <br /> Define Estándares</h2>

            <div className="space-y-6 text-muted-blue text-lg leading-relaxed mb-12">
              <p>
                Con más de una década de experiencia en el mercado de lujo y branding personal, mi misión es elevar la presencia de líderes globales.
              </p>
              <p>
                Creo que la vestimenta no es sobre moda, sino sobre intención. A través de mi método, transformo la imagen personal en un activo tangible que abre puertas y consolida reputaciones.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 pt-8 border-t border-neutral-blue">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-14 h-14 rounded-full border-4 border-background-dark bg-neutral-blue/50 overflow-hidden shadow-lg transition-transform hover:scale-110 hover:z-20 cursor-pointer">
                    <img
                      className="w-full h-full object-cover"
                      alt={`Client ${i}`}
                      src={`https://picsum.photos/100/100?random=${i + 10}`}
                    />
                  </div>
                ))}
                <div className="w-14 h-14 rounded-full border-4 border-background-dark bg-primary flex items-center justify-center shadow-lg transition-transform hover:scale-110 hover:z-20">
                  <span className="text-[10px] font-black text-background-dark uppercase">+500</span>
                </div>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-white font-black uppercase tracking-widest text-sm mb-1">Impacto Global</p>
                <p className="text-muted-blue text-xs font-bold uppercase tracking-[0.2em]">Líderes transformados en 15 países.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
