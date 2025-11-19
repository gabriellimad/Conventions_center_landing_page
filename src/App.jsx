import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Sorocaba Conventions Center - O Lugar Perfeito Para Seu Evento</title>
        <meta name="description" content="Centro de convenções completo com infraestrutura moderna para casamentos, formaturas, eventos corporativos e celebrações especiais. Espaços personalizáveis e serviços de excelência." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <Gallery />
        <Partners />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;