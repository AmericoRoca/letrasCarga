document.addEventListener("DOMContentLoaded", () => {
    let tl = gsap.timeline();
  
    const paths = document.querySelectorAll("path");
  
    paths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
  
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 1,
        ease: "power2.out"
      });
    });
  
    // Después de dibujar las líneas, rellenar la figura
    tl.to(paths, { fill: "black", duration: 1 }, "+=0.5");
  });
  