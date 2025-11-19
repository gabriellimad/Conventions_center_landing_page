import React from "react";
import { motion } from "framer-motion";

const Partners = () => {
  const partners = [
    { alt: "Logo do parceiro 1", images: ["/logos/fifa.jpg"] },
    { alt: "Logo do parceiro 2", images: ["/logos/fpf.png"] },
    { alt: "Logo do parceiro 6", images: ["/logos/cbf.png"] },
    { alt: "Logo do parceiro 3", images: ["/logos/magnus.jpg"] },
    { alt: "Logo do parceiro 4", images: ["/logos/guarani.jpeg"] },
    { alt: "Logo do parceiro 8", images: ["/logos/red_bull.png"] },
    { alt: "Logo do parceiro 5", images: ["/logos/ferroviaria.png"] },
    { alt: "Logo do parceiro 9", images: ["/logos/corinthians.png"] },
  ];

  return (
    <section id="parceiros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nossos Clientes e Parceiros
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Temos a honra de trabalhar com grandes instituições e empresas
          </p>
        </motion.div>

        {/* grade de logos */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-32 h-32 md:w-32 md:h-36 flex items-center justify-center"
            >
              <motion.img
                src={partner.images[0]}
                alt={partner.alt}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.08 }}
                className="w-full h-full object-contain transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;