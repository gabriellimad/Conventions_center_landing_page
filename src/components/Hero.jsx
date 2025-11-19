import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover brightness-50" alt="Elegant event venue with beautiful lighting and decoration" src="/img-hotel/drone-todo-hotel.jpeg" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#003228]/50 to-slate-900/70 z-10" />

        <div className="container mx-auto px-4 z-20 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
        }} animate={{
            opacity: 1,
            y: 0
        }} transition={{
            duration: 0.8
        }} className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    O Lugar Ideal Para
                    <span className="block text-gradient">
                        Eventos Inesquecíveis
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto">
                    No Sorocaba Conventions Center, você encontra uma estrutura completa para convenções, treinamentos, congressos, casamentos e celebrações especiais. Tudo o que seu evento precisa para ser único.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={scrollToContact} size="lg" className="bg-[#003228] hover:bg-opacity-90 text-white text-lg px-8 py-6 group">
                        Agendar Visita
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button onClick={() => document.getElementById('servicos').scrollIntoView({
                    behavior: 'smooth'
                })} size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6">
                        Conhecer Espaços
                    </Button>
                </div>

                <motion.div initial={{
                opacity: 0
            }} animate={{
                opacity: 1
            }} transition={{
                delay: 1
            }} className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                    {[{
                    number: '1000+',
                    label: 'Eventos Realizados'
                }, {
                    number: '300+',
                    label: 'Capacidade'
                }, {
                    number: '10+',
                    label: 'Anos de Experiência'
                }].map((stat, index) => <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                            <div className="text-sm md:text-base text-slate-300">{stat.label}</div>
                        </div>)}
                </motion.div>
            </motion.div>
        </div>

        <motion.div animate={{
        y: [0, 10, 0]
    }} transition={{
        repeat: Infinity,
        duration: 2
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                <div className="w-1 h-3 bg-white/50 rounded-full" />
            </div>
        </motion.div>
    </section>;
};
export default Hero;