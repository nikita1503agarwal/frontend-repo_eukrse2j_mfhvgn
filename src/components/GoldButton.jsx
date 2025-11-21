import React from 'react'

const GoldButton = ({ children, href = '#', onClick, variant = 'solid', className = '' }) => {
  const base = 'inline-flex items-center justify-center px-6 py-3 uppercase tracking-[0.15em] text-[12px] font-semibold transition-colors duration-300 select-none'
  const solid = 'bg-[#C8A96A] text-[#1A1A1A] hover:bg-[#d6b97b] active:bg-[#b7945a]'
  const outline = 'border border-[#C8A96A] text-[#C8A96A] hover:bg-[#C8A96A]/10'
  const computed = `${base} ${variant === 'solid' ? solid : outline} ${className}`

  if (href) {
    return (
      <a href={href} className={computed} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <button className={computed} onClick={onClick}>
      {children}
    </button>
  )
}

export default GoldButton
