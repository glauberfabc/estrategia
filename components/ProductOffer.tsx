
import React from 'react';

export const ProductOffer: React.FC = () => {
    return (
        <section className="py-32 bg-background-dark relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Product Appearance */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-blue/20 p-8 md:p-12 shadow-2xl">
                            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-white/5 relative group/img">
                                <img
                                    className="w-full h-full object-cover transition-all duration-700 group-hover/img:scale-105"
                                    alt="Guía Ejecutiva cover"
                                    src="/libro.png"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-6 left-6 right-6 z-10">
                                    <p className="text-primary text-[10px] font-black tracking-widest uppercase mb-1">E-Book Premium</p>
                                    <h4 className="text-xl font-black tracking-tight leading-tight text-white uppercase italic">
                                        Guía Ejecutiva
                                    </h4>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -top-6 -right-6 bg-primary text-background-dark w-24 h-24 rounded-full flex flex-col items-center justify-center border-4 border-background-dark shadow-xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                <span className="text-[10px] font-black uppercase tracking-tighter leading-none">Solo</span>
                                <span className="text-3xl font-black leading-none">$19</span>
                            </div>
                        </div>
                    </div>

                    {/* Product Info & Proof */}
                    <div>
                        <h2 className="text-primary text-xs font-black tracking-[0.5em] uppercase mb-6">Oferta Especial</h2>
                        <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
                            Acelera tu resultado con la <br />
                            <span className="text-primary">Guía Ejecutiva de Impacto</span>
                        </h3>

                        <p className="text-muted-blue text-lg mb-10 leading-relaxed font-medium">
                            Obtén el manual práctico que utilizan los altos ejecutivos para dominar su presencia visual. Un paso a paso directo, sin rellenos, enfocado en resultados inmediatos.
                        </p>

                        {/* Social Proof Section */}
                        <div className="mb-14 p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span className="ml-3 text-white font-bold">+500 Ejecutivos Transformados</span>
                            </div>
                            <p className="text-muted-blue italic text-sm font-medium leading-relaxed">
                                "Este material fue el divisor de aguas en mi carrera. La forma en que mis socios me miran hoy es completamente diferente. Valió cada centavo."
                                <span className="block mt-2 text-white not-italic font-black text-xs uppercase tracking-widest">— Carlos R., CEO Tecnológico</span>
                            </p>
                        </div>

                        <button className="w-full bg-primary text-background-dark py-6 rounded-xl font-black text-lg uppercase tracking-[0.1em] hover:shadow-[0_0_50px_rgba(13,242,242,0.4)] hover:-translate-y-1 transition-all duration-300 active:scale-95 shadow-xl">
                            SÍ, QUIERO DOMINAR MI IMAGEN AHORA
                        </button>
                        <p className="text-center mt-6 text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">
                            Acceso Inmediato • Compra 100% Segura
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};
