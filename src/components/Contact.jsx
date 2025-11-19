import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Mensagem Enviada! 🎉",
      description: "Entraremos em contato em breve para agendar sua visita.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      date: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua Laura Maiello Kook, 1711 - Ipanema das Pedras, Sorocaba - SP, 18052-445'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 98765-4321'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'magnoliaconventionscenter@gmail.com'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Seg - Sex: 9h às 18h | Sáb: 9h às 14h'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Agende uma visita e conheça nossos espaços pessoalmente
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-[#003228]" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{info.title}</h3>
                  <p className="text-slate-600">{info.content}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-64">
              <img 
                className="w-full h-full object-cover"
                alt="Event center location map view"
               src="/img-hotel/principal-hotel-old.jpg" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#003228] focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#003228] focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#003228] focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    placeholder="(11) 98765-4321"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Tipo de Evento
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#003228] focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  >
                    <option value="">Selecione</option>
                    <option value="corporativo">Evento Esportivo</option>
                    <option value="corporativo">Evento Corporativo</option>
                    <option value="casamento">Casamento</option>
                    <option value="formatura">Formatura</option>
                    <option value="festa">Festa/Celebração</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Data Prevista
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#003228] focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#003228] focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                  placeholder="Conte-nos mais sobre seu evento..."
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#003228] hover:bg-opacity-90 text-white py-6 text-lg group"
              >
                Enviar Mensagem
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;