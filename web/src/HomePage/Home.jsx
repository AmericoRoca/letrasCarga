import React, { useEffect } from "react";

const Home = ({ onLoaded }) => {
  useEffect(() => {
    // Simula la carga de componentes internos en Home
    setTimeout(() => {
      onLoaded(); // Avisamos a App.js que Home ya cargó
    }, 2000);
  }, [onLoaded]);

  return (
    <div>
      <h1>Bienvenido a Home</h1>
      <p>Todos los componentes han cargado correctamente.</p>
    </div>
  );
};

export default Home;
