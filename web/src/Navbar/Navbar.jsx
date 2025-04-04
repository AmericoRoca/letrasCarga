import React from 'react'
import "../Navbar/Navbar.css"
import { LogoSvg } from "../assets/img/logo/LogoSvg.jsx"
import gsap from "gsap";

export const Navbar = () => {

    // const animationLogo = () => {
    //     let tl = gsap.timeline(); condicion que termine animacion carga
    //     tl.set(".logo-navbar", {duration: 0.5, y:20, delay:0.5})
    //     tl.to(".logo-navbar", {duration: 0.5, y:0, delay:0.5})
    // }

  return (

    <div className='navbar'>
    <div className='caja'>
        <div className='logo-navbar'>
            <LogoSvg />
        </div>
    </div>
    <div className='caja'>
        <ul>
            <li className="text-white">1</li>
            <li className="text-white">2</li>
            <li className="text-white">3</li>
            <li className="text-white">4</li>
            <li className="text-white">5</li>
        </ul>
    </div>
</div>

  )
}
