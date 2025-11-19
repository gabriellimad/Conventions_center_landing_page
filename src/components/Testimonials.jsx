import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria & João Silva',
      event: 'Casamento',
      text: 'Nosso casamento foi perfeito! A equipe cuidou de cada detalhe com muito carinho e profissionalismo. O espaço é simplesmente deslumbrante!',
      rating: 5
    },
    {
      name: 'Tech Solutions Ltda',
      event: 'Evento Corporativo',
      text: 'Realizamos nossa conferência anual aqui e superou todas as expectativas. Infraestrutura impecável e atendimento de primeira classe.',
      rating: 5
    },
    {
      name: 'Turma de Medicina 2024',
      event: 'Formatura',
      text: 'A formatura dos nossos sonhos! Tudo saiu perfeito, desde a decoração até o buffet. Recomendamos de olhos fechados!',
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Histórias reais de eventos inesquecíveis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-emerald-200" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-slate-200 pt-4">
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-600">{testimonial.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;