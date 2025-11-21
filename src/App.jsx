import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import About from './components/About'
import Network from './components/Network'
import Vision from './components/Vision'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-[var(--font-manrope)] bg-white text-neutral-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <Process />
        <About />
        <Network />
        <Vision />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
