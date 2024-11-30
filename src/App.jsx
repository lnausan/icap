import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import NossosServicos from './components/NossosServicos';
import Profissionais from './components/Profissionais'; // Importa el componente
import CTASection from './components/CTASection';
import Capacitation from './components/Capacitation'; // Importa la nueva página
import Founders from './components/Founders';
import Footer from './components/Footer';
import '@fontsource/dancing-script';
import '@fontsource/sacramento';




function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <NossosServicos />
      <Profissionais /> {/* Nueva sección */}
      <CTASection />
      <Capacitation />
      <Footer />
    </>
  );
}

export default App;








