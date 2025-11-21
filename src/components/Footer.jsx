import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#151311] text-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-serif text-xl mb-2">Vitaminkliniken</div>
            <p className="text-neutral-400">Medicinsk vitaminbehandling i världsklass.</p>
          </div>
          <div>
            <div className="uppercase tracking-[0.16em] text-xs text-neutral-400">Kontakt</div>
            <div className="mt-3 space-y-2 text-neutral-300">
              <div>info@vitaminkliniken.se</div>
              <div>+46 (0)8 123 45 67</div>
            </div>
          </div>
          <div>
            <div className="uppercase tracking-[0.16em] text-xs text-neutral-400">Följ oss</div>
            <div className="mt-3 space-y-2 text-neutral-300">
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#C8A96A]/30 mt-12 pt-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} Vitaminkliniken. Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
  )
}

export default Footer
