import React, { useState, useEffect } from "react";
import Home from "./HomePage/Home.jsx"; 
import Carga from "./cargaPagina/Carga.jsx"

function App() {
  const [loading, setLoading] = useState(true);
  const [homeLoaded, setHomeLoaded] = useState(false);

  useEffect(() => {
    // Simula la carga inicial de la aplicación
    setTimeout(() => setLoading(false), 3000); // Simula carga de 3 segundos
  }, []);

  return (
    <>
      {/* Muestra la pantalla de carga hasta que Home haya cargado completamente */}
      {(loading || !homeLoaded) && <Carga isLoading={loading || !homeLoaded} />}
      
      {!loading && <Home onLoaded={() => setHomeLoaded(true)} />}
    </>
  );
}

export default App;
