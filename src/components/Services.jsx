import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  BedDouble,
  Utensils,
  Dumbbell,
  Car,
  Droplets,
  Goal,
} from 'lucide-react';

const Services = () => {
  const services = [
    
    {
      icon: Dumbbell,
      title: 'Academia com piscina coberta',
      description: `Mantenha-se ativo em nossa academia, equipada com aparelhos Life Fitness, e relaxe na piscina coberta (6 m x 10 m) ou na piscina resfriada (2 m x 3 m). Ambiente climatizado e espaços perfeitos para atividades físicas e bem‑estar em qualquer época do ano.`,
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Car,
      title: 'Estacionamento',
      description: `Oferecemos estacionamento amplo e seguro, facilitando o acesso e proporcionando tranquilidade para todos os visitantes do Sorocaba Conventions Center.`,
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Droplets,
      title: 'Lavanderia',
      description: `Conte com um serviço de lavanderia eficiente e ágil, garantindo praticidade e comodidade para grupos e hóspedes durante toda a estadia.`,
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: BedDouble,
      title: 'Acomodações',
      description: `Nossas acomodações oferecem conforto e praticidade, com suítes climatizadas e ambientes projetados para o bem‑estar dos hóspedes, tornando sua estadia ainda mais especial.
      Tipos de quartos: Standart Triplo (3 camas de solteiro), Luxo Duplo (2 camas de casal Queen size), Suíte Master 56m² (1 cama King Size) cozinha, banheira, varanda.
      Comodidades:
      - Ar-condicionado
      - Wi-Fi
      - TV LED
      - Cofre
      - Frigobar
      - Ducha
      - Telefone
      - Toalhas
      - Cortina com controle remoto`,
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Utensils,
      title: 'Refeitório',
      description: `Desfrute de um refeitório amplo, moderno e totalmente equipado, oferecendo café da manhã, almoço e jantar com cardápios variados para todos os perfis de público. As refeições são preparadas por uma equipe de profissionais especializados, garantindo sabor, qualidade e uma experiência gastronômica completa para todos os participantes do seu evento.
      O espaço também conta com ambiente climatizado, excelente capacidade de atendimento e estrutura pensada para proporcionar conforto durante todas as refeições.`,
      color: 'from-emerald-600 to-teal-800',
    },
    {
      icon: Goal,
      title: 'Campos de futebol',
      description: `Aproveite uma estrutura esportiva de alto padrão, composta por quatro campos de futebol com medidas oficiais FIFA (68 m x 105 m) e uma quadra de areia (20 m x 50 m). Três campos possuem grama esmeralda e um com grama bermuda, oferecendo condições ideais para treinamentos, competições, atividades recreativas e integração dos participantes.
      Toda a área é cuidadosamente mantida para garantir desempenho, segurança e a melhor experiência possível para atletas e equipes.`,
      color: 'from-purple-500 to-violet-500',
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Oferecemos espaços e infraestrutura completa para todos os tipos de eventos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
