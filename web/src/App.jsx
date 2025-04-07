import React, { useState, useEffect,  } from "react";
import CargaPagina from "./cargaPagina/CargaPagina.jsx"; // Asegúrate de usar el nombre correcto
import Home from "./HomePage/Home.jsx";

import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Simula carga de datos o componentes (ejemplo: API, imágenes)
    setTimeout(() => {
      setIsReady(true); // Marca que todo está listo
    }, 9000); // Simulación de carga de 3 segundos
  }, []);

  return (
    <>
      <CargaPagina isReady={isReady} onComplete={() => setLoading(false)} />
        <Router>       
          <Home />
          
        </Router>
    </>
  );
}

export default App;
