import React from 'react'
import "../Navbar/Navbar.css"
import { LogoSvg } from "../assets/img/logo/LogoSvg.jsx"

export const Navbar = () => {
  return (

    <div className='navbar d-flex flex-column'>
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
