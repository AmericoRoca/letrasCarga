import React, { useState, useEffect } from "react";
import CargaPagina from "./cargaPagina/CargaPagina.jsx"; // Asegúrate de usar el nombre correcto
import Home from "./HomePage/Home.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 10000); // Simula un retardo de carga de 3 segundos
  }, []);

  return (
    <>
      {loading && <CargaPagina onComplete={() => setLoading(false)} />} 
      {!loading && <Home />} 
    </>
  );
}

export default App;
