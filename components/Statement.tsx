
import React from 'react';

export const Statement: React.FC = () => {
    return (
        <section className="py-24 bg-background-dark relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <div className="inline-block w-20 h-1 bg-primary mb-12 opaciy-50"></div>
                <p className="text-2xl md:text-4xl font-black leading-tight tracking-tight text-white/90">
                    "En el mundo ejecutivo, <span className="text-primary">la primera impresión es la única</span>.
                    Si no proyectas seguridad y éxito desde el primer segundo, tus clientes y socios dudarán de tu capacidad.
                    No es solo ropa, es tu <span className="text-primary italic">herramienta de negociación</span> más poderosa."
                </p>
            </div>
        </section>
    );
};
