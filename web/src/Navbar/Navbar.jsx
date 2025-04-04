import React from "react";
import "../Navbar/Navbar.css";
import { LogoSvg } from "../assets/img/logo/LogoSvg.jsx";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCode,
  faAt,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

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
            <a href=""><FontAwesomeIcon icon={faHome} /></a>
          </li>
          <li className="text-white">
           <a href=""> <FontAwesomeIcon icon={faUser} /></a>
          </li>
          <li className="text-white">
            <a href=""><FontAwesomeIcon icon={faTools} /></a>
          </li>
          <li className="text-white">
            <a href=""><FontAwesomeIcon icon={faCode} /></a>
          </li>
          <li className="text-white">
           <a href=""><FontAwesomeIcon icon={faAt} /></a> 
          </li>
        </ul>
      </div>
    </div>
  );
};
