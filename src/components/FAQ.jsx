import React, { useState } from 'react'

const qa = [
  { q: 'Är behandlingarna medicinskt säkra?', a: 'Ja. Alla behandlingar sker under medicinskt ansvar av specialistläkare med etablerade protokoll och provtagning vid behov.' },
  { q: 'Hur bokar jag en konsultation?', a: 'Tryck på Boka konsultation och fyll i formuläret. Vi återkommer med tidförslag och information.' },
  { q: 'Var finns ni?', a: 'Vi finns i Sverige med expansion till Europa och Rio. Se Vårt nätverk för aktuella städer.' },
]

const Item = ({ q, a }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-neutral-200">
      <button className="w-full text-left py-5 flex items-center justify-between" onClick={() => setOpen(v => !v)}>
        <span className="font-serif text-lg">{q}</span>
        <span className="text-[#C8A96A]">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="pb-6 text-neutral-700 leading-7">{a}</div>
      )}
    </div>
  )
}

const FAQ = () => {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h3 className="font-serif text-3xl mb-8">Vanliga frågor</h3>
        <div className="divide-y divide-neutral-200">
          {qa.map((item, i) => (
            <Item key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
