import React from 'react';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
return (
    <footer className="bg-[#003228] text-white py-12">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <img
                            className="h-16 object-contain"
                            alt="Sorocaba Conventions Center Logo"
                         src="logo_small_soro.png" />
                    </div>
                    <p className="text-slate-400 leading-relaxed">
                        Transformando momentos especiais em memórias inesquecíveis há mais de 10 anos.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-4">Serviços</h3>
                    <ul className="space-y-2 text-slate-400">
                        <li className="hover:text-white transition-colors cursor-pointer">Eventos Esportivos</li>
                        <li className="hover:text-white transition-colors cursor-pointer">Eventos Corporativos</li>
                        <li className="hover:text-white transition-colors cursor-pointer">Festas & Celebrações</li>
                        <li className="hover:text-white transition-colors cursor-pointer">Casamentos</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-4">Contato</h3>
                    <ul className="space-y-2 text-slate-400">
                        <li>Rua Laura Maiello Kook, 1711, 18052-445</li>
                        <li>Ipanema das Pedras, Sorocaba - SP</li>
                        <li>+55 (15) 98190-0157</li>
                        <li className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            magnoliaconventionscenter@gmail.com
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
                    <div className="flex gap-4">
                        <a href="#" aria-label="Facebook" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" aria-label="Instagram" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
                <p>&copy; 2025 Sorocaba Conventions Center. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
);
};

export default Footer;