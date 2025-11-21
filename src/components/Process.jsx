import React from 'react'

const steps = [
  { no: '01', title: 'Online hälsodeklaration', desc: 'Snabb, säker och diskret – grund för din personliga plan.' },
  { no: '02', title: 'Läkarkonsultation & provtagning', desc: 'Möte med specialistläkare och evidensbaserad provtagning.' },
  { no: '03', title: 'Vitaminbehandling', desc: 'Skräddarsydd infusion i exklusiv miljö – tryggt och effektivt.' },
]

const Process = () => {
  return (
    <section id="process" className="bg-[#FAF8F3]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((s, i) => (
            <div key={i} className="relative border-t border-neutral-300 pt-8">
              <div className="text-[#C8A96A] tracking-[0.18em] text-xs mb-3">{s.no}</div>
              <h4 className="font-serif text-2xl mb-3">{s.title}</h4>
              <p className="text-neutral-700 leading-7">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
