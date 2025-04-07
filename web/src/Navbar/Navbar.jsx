import React from "react";
import "../Navbar/Navbar.css";
import { LogoSvg } from "../assets/img/logo/LogoSvg.jsx";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Route, Routes, NavLink } from 'react-router-dom';

import {
  faHome,
  faUser,
  faCode,
  faAt,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import Home from "../HomePage/Home.jsx";
import { Services } from "../Services/Services.jsx";
import { Stack } from "../Stack/Stack.jsx";
import { Contact } from "../Contact/Contact.jsx";
import { About } from "../About/About.jsx";

export const Navbar = () => {
  
  // const animationLogo = () => {
  //     let tl = gsap.timeline(); condicion que termine animacion carga
  //     tl.set(".logo-navbar", {duration: 0.5, y:20, delay:0.5})
  //     tl.to(".logo-navbar", {duration: 0.5, y:0, delay:0.5})
  // }

  return (
    <div className="navbar flex flex-col items-center py-4 h-[100px]">
      <div className="w-full flex justify-center logo mb-4">
        <LogoSvg />
      </div>
      <div className="div-ul w-full flex justify-center">
        <ul className="flex flex-col gap-6 items-center pl-0">
          <li className="text-white">
            <NavLink to="/home"><FontAwesomeIcon icon={faHome} className="text-white  enlace icon"/></NavLink>
          </li>
          <li className="text-white">
           <NavLink to="/about"> <FontAwesomeIcon icon={faUser} className="text-white  enlace icon"/></NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/services"><FontAwesomeIcon icon={faTools} className="text-white enlace icon"/></NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/stack"><FontAwesomeIcon icon={faCode} className="text-white enlace icon"/></NavLink>
          </li>
          <li className="text-white">
           <NavLink to="/contact"><FontAwesomeIcon icon={faAt} className="text-white enlace icon"/></NavLink> 
          </li>
        </ul>
      </div>


      <Routes>
      <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/stack" component={Stack} />
        <Route path="/contact" component={Contact} />
        {/* Define más rutas aquí según sea necesario */}
      </Routes>

    </div>
  );
};
