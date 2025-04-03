import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import "../cargaPagina/Carga.css";
import { useGSAP } from "@gsap/react";

export const CargaPagina = ({ onComplete }) => {
  const svgRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  // Función que ejecuta la animación y la repite si la página no está cargada
  const runAnimation = () => {
    const paths = svgRef.current.querySelectorAll("path, polygon");
    let tl = gsap.timeline({
      onComplete: () => {
        if (isLoading) {
          // Si la página sigue cargando, reinicia la animación
          setTimeout(runAnimation); // Reinicia la animación después de 1 segundo
        } else {
          setIsLoading(false); // Finaliza cuando la página ha cargado
        }
      },
    });

    // Configura el estado inicial de la animación
    paths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    });

    // Anima cada uno de los paths
    paths.forEach((path) => {
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power2.out",
      });
    });

    // Cambia el color de relleno de los paths
    tl.to(paths, { fill: "#231f20", duration: 1 }, "+=0.5");

    tl.to(paths, { opacity: 0 }, "+=0.5");
  };

  useEffect(() => {
    runAnimation(); // Inicia la animación cuando el componente se monta
  }, []);

  // Llama a onComplete cuando se complete la animación y la carga
  useEffect(() => {
    if (!isLoading) {
      onComplete(); // Llamamos a la función cuando la animación termina
    }
  }, [isLoading, onComplete]);

  // Si la animación ya terminó, no mostramos el componente
  if (!isLoading) return null;

  return (
    <div className="carga-container">
      <div id="inicio-carga">
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          baseProfile="tiny"
          version="1.2"
          viewBox="0 0 600 300"
          className="carga-svg"
        >
          <g id="Layer_3">
            <path
              d="M191.61,62.79l-125.22,186.9h248.98L191.61,62.79Z"
              fill="none"
              stroke="#231f20"
              strokeWidth="3"
            />
          </g>
          <g id="Layer_4">
            <polygon
              points="315.37 75.21 315.37 249.69 490.2 251.33 460.18 200.74 467.52 196.12 471.93 191.93 476.97 186.26 481.38 180.17 483.9 175.34 486.42 169.46 488.1 163.27 490.2 158.13 490.2 132.94 486.63 123.7 482.64 114.88 477.6 106.7 472.98 100.61 468.36 96.2 463.75 92.42 457.45 88.22 450.31 83.81 441.91 79.83 434.36 76.89 428.48 75.21 315.37 75.21"
              fill="none"
              stroke="#231f20"
              strokeWidth="3"
            />
          </g>
          <g id="Layer_2">
            <polygon
              points="508.61 206.05 508.61 249.56 557.44 249.56 557.44 206.64 508.61 206.05"
              fill="none"
              stroke="#231f20"
              strokeWidth="3"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default CargaPagina;
