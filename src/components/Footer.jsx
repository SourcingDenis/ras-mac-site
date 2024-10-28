import React from 'react'

const Footer = () => {
  return (
    <a
      target="_blank"
      href="https://www.linkedin.com/in/sourcingdenis/"
      className="fixed bottom-4 right-4 bg-black border text-white px-3 py-2 rounded-full shadow-lg text-xs font-semibold z-50 hover:bg-zinc-800 transition-colors duration-300"
    >
      Connect on LinkedIn
      <div
        style={{
          '--size': 60,
          '--duration': 4,
          '--anchor': 90,
          '--border-width': 1.5,
          '--color-from': '#ffaa40',
          '--color-to': '#9c40ff',
          '--delay': '-4s'
        }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]"
      ></div>
    </a>
  )
}

export default Footer