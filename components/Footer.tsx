
import React from 'react';

const FooterLinkGroup: React.FC<{ title: string; links: string[] }> = ({ title, links }) => (
  <div>
    <h4 className="font-black mb-8 uppercase tracking-[0.3em] text-[10px] text-white">{title}</h4>
    <ul className="space-y-4">
      {links.map((link) => (
        <li key={link}>
          <a className="text-muted-blue text-sm font-medium hover:text-primary transition-colors duration-300" href="#">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer: React.FC = () => {
  return (
    <footer className="mt-40 bg-background-dark border-t border-neutral-blue/30 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-32 mb-32">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tighter">
              Recibe Insights de <br />
              <span className="text-primary italic">Estrategia Visual</span> Semanalmente.
            </h2>
            <p className="text-muted-blue text-lg mb-10 max-w-md leading-relaxed font-medium">
              Suscríbete a nuestra newsletter para consejos exclusivos sobre branding personal y comportamiento ejecutivo.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                className="flex-grow bg-neutral-blue/20 border-white/5 rounded-xl px-8 py-5 focus:ring-primary focus:border-primary text-white placeholder:text-muted-blue/50 outline-none transition-all"
                placeholder="Tu mejor correo electrónico"
                type="email"
                required
              />
              <button className="bg-primary text-background-dark px-10 py-5 rounded-xl font-black text-xs uppercase tracking-widest hover:shadow-[0_0_30px_rgba(13,242,242,0.3)] transition-all transform active:scale-95">
                Suscribirse
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <FooterLinkGroup
              title="Explorar"
              links={["Sobre Mí", "Servicios", "Portafolio", "Blog"]}
            />
            <FooterLinkGroup
              title="Legal"
              links={["Privacidad", "Términos", "Cookies"]}
            />
            <FooterLinkGroup
              title="Social"
              links={["Instagram", "LinkedIn", "Twitter"]}
            />
          </div>
        </div>

        <div className="pt-16 border-t border-neutral-blue/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-lg">
                <span className="material-symbols-outlined text-primary text-lg font-bold">architecture</span>
              </div>
              <span className="font-black uppercase tracking-tighter text-lg text-white">Estratégia Visual</span>
            </div>
            <div className="space-y-1">
              <p className="text-muted-blue text-xs font-bold uppercase tracking-widest">© 2024 Estrategia Visual. Todos los derechos reservados.</p>
              <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">Designed for High-Performance Impact.</p>
            </div>
          </div>

          <div className="flex gap-4">
            {['linkedin', 'instagram', 'twitter'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="w-12 h-12 rounded-xl border border-white/5 bg-neutral-blue/20 flex items-center justify-center text-muted-blue hover:text-primary hover:border-primary/30 transition-all duration-300"
              >
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
