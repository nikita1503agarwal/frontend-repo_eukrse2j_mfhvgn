import React from 'react'

const cities = [
  { city: 'Stockholm', contact: 'info@vitaminkliniken.se' },
  { city: 'Göteborg', contact: 'goteborg@vitaminkliniken.se' },
  { city: 'Malmö', contact: 'malmo@vitaminkliniken.se' },
  { city: 'Oslo', contact: 'oslo@vitaminkliniken.com' },
  { city: 'Köpenhamn', contact: 'cph@vitaminkliniken.com' },
  { city: 'Marbella', contact: 'marbella@vitaminkliniken.com' },
  { city: 'Dubai', contact: 'dubai@vitaminkliniken.com' },
  { city: 'Rio de Janeiro', contact: 'rio@vitaminkliniken.com' },
]

const Network = () => {
  return (
    <section id="natverk" className="bg-[#FAF8F3]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h3 className="font-serif text-3xl mb-10">Vårt nätverk</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((c, i) => (
            <div key={i} className="border border-neutral-300 p-6 hover:border-[#C8A96A] transition-colors">
              <div className="text-sm tracking-[0.16em] uppercase text-neutral-600 mb-2">Klinik</div>
              <div className="font-serif text-xl">{c.city}</div>
              <div className="mt-4 text-neutral-700">{c.contact}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Network
