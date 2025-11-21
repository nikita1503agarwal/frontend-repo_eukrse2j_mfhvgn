import React from 'react'

const items = [
  { title: 'Medicinsk expertis', desc: 'Behandlingar utförda av specialistläkare med fokus på säkerhet och effekt.', icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8A96A" strokeWidth="1.25"><path d="M12 1v22M5 5h14M5 19h14"/></svg>
  )},
  { title: 'Personlig hälsoplan', desc: 'Skräddarsydda protokoll efter konsultation och provtagning.', icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8A96A" strokeWidth="1.25"><rect x="3" y="4" width="18" height="16"/><path d="M7 8h10M7 12h8M7 16h6"/></svg>
  )},
  { title: 'Exklusiva kliniker', desc: 'Diskreta, moderna miljöer i premiumlägen över hela Sverige och internationellt.', icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8A96A" strokeWidth="1.25"><path d="M3 22h18M4 22V8l8-5 8 5v14M9 22V12h6v10"/></svg>
  )}
]

const Features = () => {
  return (
    <section id="varfor" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid sm:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <div key={i} className="group border border-neutral-200 p-8 transition-all hover:border-[#C8A96A]">
              <div className="mb-6">{it.icon}</div>
              <h3 className="font-serif text-xl tracking-tight mb-2">{it.title}</h3>
              <p className="text-neutral-700 leading-7">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
