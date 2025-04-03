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
      <div className="navbar"></div>
        <div className="element1"></div>
        <div className="element2"></div>
        <div className="element3"></div>
        <div className="element4"></div>
        <div className="element5"></div>
      </div>

  );
};

export default Home;
