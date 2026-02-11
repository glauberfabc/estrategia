
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
          <button className="text-xs font-black uppercase tracking-[0.3em] border-b-2 border-primary/50 pb-2 hover:border-primary hover:text-primary transition-all duration-300">
            Ver Galería Completa
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PortfolioItem
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCRmeU2SiBCaZkMmGP1bjSHY9TOMUuT0I9C84xPduGi7mqJiKgwRGjuet309brMkhItQIJT1bo_eYoJjWtcXSb-41lP8OdBTpHMHn8sxVuFxnfaYBMFQ2-9Xfj_eJaxU0gje1QjAotd4mqOGdN8s0LvcUjpLBfvt5thwqRYWGuBlIGGBgETzIoLIU4RzxJBiZHWAXsmNeVysgO8F1m4hsbh5g6y2UQ-mkIg3-XZ-fYIPlkJRIxJfBSpqWFjtoq1HMmo12WYpPGOSS4"
            title="Tech Leadership"
            subtitle="CEO Transformation"
          />
          <PortfolioItem
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuDTOiYEw92wVVP1XgL0y95J7tAGd7BE_4BBPgKmCWaXXJQroTcscy39PDcpgTWUl45-u21hcrMoWYv78IhcgGSSqGNoY93WR6UUERaa-GJED4OnfjNZxMXs0uFmjBmrgQUomfE7fsrf241TStu9Djjz08MQhHiuBC0vSTVfQnQ7HjGfjoF_MHUH8T9X4kJyCIAggZZc_R6Hg7z6TcemsdJWMCu4DjXZegZeYLhemW7YNGDu1Nmck8wg2aHb_S914KZGDLcxVc7pm34"
            title="Finance Elite"
            subtitle="The Minimalist"
            offset
          />
          <PortfolioItem
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCuKub3kCQgGyLfIg7RMn9F3KJu1r_6oNlz5zsjCpBqxUb_jF-LDqJaboAuAbnNMr-8giOeWMpj1OqsIHY0E8fqDc3bJhyC9Oev5fNCbGqOEqGh54CQT1De_9W1InX1qK926mr4YpD_rGzSX0C7A_kBoIAEPlEydOH51CKkWBd7mOxBt_Xrf_-1pvcDBnB8YQyD8z__ZOhVpA40Zgi7eWOaseXooiII0ZCBT6NjhW3kX7KaX4DDSa9zgmjM6Z93S2vhDZAvsMabtd0"
            title="Legal Authority"
            subtitle="Signature Presence"
          />
          <PortfolioItem
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAe1d3J2Kxv6rQICUpIvVSnk4cfXctUO1szQiMQ9PB9kJntWZfeXbX7xvkRhLSJW_rHZXMBDBPZWfHXwXhW9Gq1rAQSrr8oi8VZYOewUa3v8Iov-0G-Jlcr2yBZX5ZISFPXbqzzBqqtGIiofuKZ9r8GneD4OrJfvpqw86ZJa4HrYRATYjgwxAANL7c6EsmlKylOGFxS5KpHuxUV58A0-k3E2nq0lKpXb-yb7uzthJolPlMyCKaft7zrp2eCyUMD3lvs7g77NDvDQdw"
            title="Creative Direction"
            subtitle="Authority Redefined"
            offset
          />
        </div>
      </div>
    </section>
  );
};
