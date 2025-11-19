import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#003228] shadow-lg`}
    >
      <nav className="container mx-auto px-5 py-3 min-h-[80px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img
              className="h-16"
              alt="Sorocaba Conventions Center Logo"
              src="logo_small_soro.png"
            />
          </motion.div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {['Servicos', 'Galeria', 'Parceiros', 'Contato'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="font-semibold text-base lg:text-lg transition-colors text-white hover:text-green-200"
              >
                {item}
              </button>
            ))}

            <Button
              onClick={() => scrollToSection('contato')}
              className="bg-white hover:bg-slate-200 text-[#003228] font-semibold text-base lg:text-lg"
            >
              Agendar Visita
            </Button>
          </div>

          {/* Botão menu mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`md:hidden mt-4 rounded-lg shadow-xl p-4 ${
              isScrolled ? 'bg-[#003228]' : 'bg-black/20 backdrop-blur-md'
            }`}
          >
            {['Servicos', 'Galeria', 'Parceiros', 'Contato'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 px-4 text-base font-semibold text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {item}
              </button>
            ))}

            <Button
              onClick={() => scrollToSection('contato')}
              className="w-full mt-2 bg-white hover:bg-slate-200 text-[#003228] font-semibold text-base"
            >
              Agendar Visita
            </Button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
