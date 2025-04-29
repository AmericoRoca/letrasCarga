import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
export function App() {
  return (
    <div className="bg-black text-white min-h-screen w-full">
      <Navbar />
      <main className="w-full">
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
