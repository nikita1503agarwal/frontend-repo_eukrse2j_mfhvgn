import React from 'react'
import GoldButton from './GoldButton'

const Hero = () => {
  return (
    <section className="relative h-[100svh] min-h-[680px] bg-[#FAF8F3] text-neutral-900" id="hero">
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle vertical lines for luxury feel */}
        <div className="absolute inset-0 opacity-[0.06]" aria-hidden>
          <div className="absolute left-0 top-0 h-full w-px bg-neutral-300/70" />
          <div className="absolute left-1/3 top-0 h-full w-px bg-neutral-300/70" />
          <div className="absolute left-2/3 top-0 h-full w-px bg-neutral-300/70" />
          <div className="absolute right-0 top-0 h-full w-px bg-neutral-300/70" />
        </div>
        {/* Abstract golden ellipse/particles */}
        <div className="pointer-events-none absolute right-[-12%] top-1/4 h-[70vh] w-[70vh] rounded-[0] border border-[#C8A96A]/30" />
        <div className="pointer-events-none absolute right-[-4%] top-[18%] h-[60vh] w-[60vh] border border-[#C8A96A]/20" />
        <div className="pointer-events-none absolute right-[6%] top-[12%] h-[50vh] w-[50vh] border border-[#C8A96A]/10" />
        <div className="pointer-events-none absolute right-[16%] top-[8%] h-[40vh] w-[40vh] border border-[#C8A96A]/5" />
      </div>

      <div className="relative mx-auto max-w-7xl h-full px-6 flex items-center">
        <div className="max-w-2xl">
          <h1 className="font-serif text-[40px] sm:text-[54px] lg:text-[68px] leading-[1.05] tracking-tight">
            Vitaminkliniken – Medicinsk vitaminbehandling i världsklass
          </h1>
          <p className="mt-6 text-[17px] leading-8 text-neutral-700">
            Där medicinsk expertis möter modern lyx. Vitaminbehandlingar utförda av specialistläkare – i exklusiva miljöer över hela Sverige och snart världen.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <GoldButton href="#bokning">Boka konsultation</GoldButton>
            <GoldButton href="#natverk" variant="outline">Hitta närmaste klinik</GoldButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
