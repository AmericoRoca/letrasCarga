import React from 'react'
export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="py-12 bg-zinc-950 w-full">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold tracking-tighter">
              <span className="text-white">DEV</span>
              <span className="text-gray-400">PORTFOLIO</span>
            </div>
          </div>
          <div className="flex gap-8 mb-6 md:mb-0">
            {['Home', 'Skills', 'Projects', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm">
            © {currentYear} Developer Portfolio. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 text-gray-500 text-sm">
            Designed & Built with ♥ and Three.js
          </div>
        </div>
      </div>
    </footer>
  )
}
