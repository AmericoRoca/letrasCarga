import React, { useEffect, useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter">
          <span className="text-white">DEV</span>
          <span className="text-gray-400">PORTFOLIO</span>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {['Home', 'Skills', 'Projects', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md absolute w-full">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {['Home', 'Skills', 'Projects', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
