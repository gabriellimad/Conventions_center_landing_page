import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const srcs = [
      '/img-hotel/drone-todo-hotel-contrast-30.jpeg',
    '/img-hotel/principal-hotel-old.jpg',
    '/img-hotel/recepcao.png',
    '/img-hotel/quarto-two.png',
    '/img-hotel/salão-hotel.jpg',
    '/img-hotel/inst-academia.png',
    '/img-hotel/drone-principal-parte-hotel-contrast-30.jpeg',
    '/img-hotel/01-campo-large.jpg',
    '/img-hotel/campos-cortados-contraste.jpeg',
    
  ];

  return (
    <section id="galeria" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nossos Espaços
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Conheça nossos ambientes versáteis e sofisticados
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {srcs.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer aspect-[4/3]"
            >
              <img
                src={src}
                alt={`Imagem ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                style={{
                  imageRendering: 'auto',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
