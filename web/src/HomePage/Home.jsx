import React, { useEffect } from "react";
import "../HomePage/Home.css"

const Home = ({ onLoaded }) => {
  useEffect(() => {
    // Simula la carga de componentes internos en Home
    setTimeout(() => {
      onLoaded(); // Avisamos a App.js que Home ya cargó
    }, 2000);
  }, [onLoaded]);

  return (
    <div className="container-fluid">
    <div className="row w-100 h-100">
      {/* Navbar ocupa toda la pantalla en desktop, pero en móvil se apila arriba */}
      <div className="navbar col-12 col-md-2 bg-primary text-white text-center py-3">
        Navbar
      </div>
  
      {/* Contenedor de los demás elementos */}
      <div className="col-12 col-md-10 d-flex flex-column">
        <div className="row flex-grow-1">
          {/* Elemento 1 y 2 se apilan en móvil y ocupan 6 columnas en desktop */}
          <div className="col-12 col-md-6 bg-success text-white p-3">Elemento 1</div>
          <div className="col-12 col-md-6 bg-danger text-white p-3">Elemento 2</div>
        </div>
  
        <div className="row flex-grow-1">
          {/* Elementos 3, 4 y 5 se apilan en móvil y ocupan 4 columnas en desktop */}
          <div className="col-12 col-md-4 bg-warning text-dark p-3">Elemento 3</div>
          <div className="col-12 col-md-4 bg-info text-white p-3">Elemento 4</div>
          <div className="col-12 col-md-4 bg-secondary text-white p-3">Elemento 5</div>
        </div>
      </div>
    </div>
  </div>
  

           
  );
};

export default Home;
