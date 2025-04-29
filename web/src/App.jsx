import React, { useState, useEffect } from 'react';
import { Navbar } from './Components/Navbar';
import { Hero } from './Components/Hero';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import CargaPagina from './cargaPagina/CargaPagina';

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [showCarga, setShowCarga] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 7000); // puedes ajustar este tiempo o usar una lógica real de carga

    return () => clearTimeout(timer);
  }, []);

  const handleCargaComplete = () => {
    setShowCarga(false); // oculta la animación de carga cuando termina
  };

  return (
    <div className="relative bg-black text-white min-h-screen w-full">
      {/* Contenido principal */}
      <Navbar />
      <main className="w-full">
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />

      {/* Animación de carga encima */}
      {showCarga && (
        <div className="fixed inset-0 z-50">
          <CargaPagina isReady={isReady} onComplete={handleCargaComplete} />
        </div>
      )}
    </div>
  );
};

export default App;
