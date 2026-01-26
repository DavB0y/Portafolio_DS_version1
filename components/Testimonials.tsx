
import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Carla R.",
      role: "Usuaria particular",
      text: "Excelente servicio. Diagnosticó el problema rápidamente y la laptop quedó mucho más rápida después del upgrade.",
      rating: 5,
      likes: 12
    },
    {
      name: "María L.",
      role: "Emprendedora",
      text: "Muy buena asesoría para el respaldo y la migración a la nube. El proceso fue seguro, claro y bien organizado.",
      rating: 4.5,
      likes: 8
    },
    {
      name: "Jorge P.",
      role: "Técnico administrativo",
      text: "Me ayudó a elegir los componentes adecuados sin gastar de más. Brinda confianza y explica cada paso con claridad.",
      rating: 4.5,
      likes: 15
    }
  ];

  return (
    <section id="testimonios" className="py-24 bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center text-center gap-4">
            <h2 className="text-4xl font-black">Lo que dicen mis clientes</h2>
            <p className="text-dark-text max-w-2xl text-lg">
              Compromiso con la calidad y soluciones técnicas efectivas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((rev, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-3xl bg-dark-card border border-dark-border flex flex-col gap-6 group overflow-hidden"
              >
                <span className="material-symbols-outlined absolute -top-4 -right-4 text-9xl text-white/5 pointer-events-none select-none">format_quote</span>
                
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 font-bold text-lg border border-primary-500/30">
                    {rev.name.substring(0, 2)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{rev.name}</h4>
                    <p className="text-dark-text text-sm">{rev.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 text-primary-500">
                  {[...Array(5)].map((_, i) => {
                    const isFull = i < Math.floor(rev.rating);
                    const isHalf = i === Math.floor(rev.rating) && rev.rating % 1 !== 0;
                    return (
                      <span 
                        key={i} 
                        className={`material-symbols-outlined text-[20px] ${isFull || isHalf ? 'filled-icon' : ''}`}
                      >
                        {isHalf ? 'star_half' : 'star'}
                      </span>
                    );
                  })}
                </div>

                <p className="text-dark-text leading-relaxed italic relative z-10 flex-1">
                  "{rev.text}"
                </p>

                <div className="pt-6 border-t border-dark-border flex justify-between items-center relative z-10">
                  <div className="flex items-center gap-2 text-dark-text hover:text-white cursor-pointer transition-colors">
                    <span className="material-symbols-outlined text-lg">thumb_up</span>
                    <span className="text-xs font-bold">{rev.likes}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Verificado</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
