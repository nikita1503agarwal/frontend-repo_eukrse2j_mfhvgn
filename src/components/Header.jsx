import React, { useEffect, useState } from 'react'
import GoldButton from './GoldButton'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${scrolled ? 'bg-white/95 backdrop-blur border-b border-neutral-200' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="font-serif text-xl tracking-wide text-neutral-900">Vitaminkliniken</a>
          <nav className="hidden md:flex items-center gap-10">
            <a href="#varfor" className="text-sm text-neutral-700 hover:text-neutral-900 uppercase tracking-[0.14em]">Varför oss</a>
            <a href="#process" className="text-sm text-neutral-700 hover:text-neutral-900 uppercase tracking-[0.14em]">Process</a>
            <a href="#omoss" className="text-sm text-neutral-700 hover:text-neutral-900 uppercase tracking-[0.14em]">Om oss</a>
            <a href="#natverk" className="text-sm text-neutral-700 hover:text-neutral-900 uppercase tracking-[0.14em]">Vårt nätverk</a>
            <a href="#faq" className="text-sm text-neutral-700 hover:text-neutral-900 uppercase tracking-[0.14em]">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <GoldButton href="#bokning">Boka konsultation</GoldButton>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
