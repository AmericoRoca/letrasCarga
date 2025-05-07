import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from "../../logo/logo"

export const FooterDos = () => {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()

  const goTo = (path) => navigate(path)

  return (
    <footer className="!py-12 bg-zinc-950 w-full">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold tracking-tighter">
              <Logo />
            </div>
          </div>
          <div className="flex gap-8 mb-6 md:mb-0">
            <button
              onClick={() => goTo('/')}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Home
            </button>
            <button
              onClick={() => goTo('/projects/static-websites')}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Static Websites
            </button>
            <button
              onClick={() => goTo('/projects/3d-web')}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              3D Websites
            </button>
            <button
              onClick={() => goTo('/projects/ecommerce')}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              E-Commerce
            </button>
            <button
              onClick={() => goTo('/projects/custom-web-app')}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Custom Web App
            </button>
          </div>
        </div>
        <div className="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm">
            © {currentYear} Americo Roca. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 text-gray-500 text-sm">
            Designed & Built with ♥ and Three.js
          </div>
        </div>
      </div>
    </footer>
  )
}
