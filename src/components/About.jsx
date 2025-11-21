import React from 'react'

const About = () => {
  return (
    <section id="omoss" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-serif text-3xl mb-6">Om oss – internationellt varumärke</h2>
          <p className="text-neutral-700 leading-8">
            Vitaminkliniken drivs av specialistläkare och erbjuder medicinskt säkra, personligt anpassade vitaminbehandlingar med fokus på förebyggande hälsa. Genom vårt växande nätverk av exklusiva kliniker skapar vi en internationell standard för vitaminbehandling – från Sverige till Europa och hela vägen till Rio.
          </p>
        </div>
        <div className="relative">
          {/* Abstract luxury block */}
          <div className="border border-[#C8A96A]/60 h-72 md:h-96 w-full"/>
          <div className="absolute -top-6 -right-6 border border-[#C8A96A]/30 h-40 w-40"/>
          <div className="absolute -bottom-6 -left-6 border border-[#C8A96A]/20 h-28 w-28"/>
        </div>
      </div>
    </section>
  )
}

export default About
