import React from 'react'

const ServiceCard = ({ title, description, href }) => (
  <a target="_blank" href={href}>
    <div className="relative w-full rounded-2xl border border-zinc-900 hover:cursor-pointer overflow-hidden">
      <div className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out" style={{background: 'radial-gradient(circle 150px at 0px 0px, rgba(255,255,255,0.2), transparent 80%)', opacity: 0, pointerEvents: 'none'}}></div>
      <div className="relative z-10 p-3">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-300">{title}</p>
          <p className="text-xs text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  </a>
)

const Services = () => {
  return (
    <div className="max-w-[700px] my-[2rem] w-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-gray-200">services 🛠️</h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-col:2 xl:grid-cols-2 gap-2 mt-[0.75rem]">
        <ServiceCard
          href="https://www.linkedin.com/in/sourcingdenis/"
          title="🎯 Talent Sourcing"
          description="Specialized in finding top-tier talent for the iGaming industry."
        />
        <ServiceCard
          href="https://www.linkedin.com/in/sourcingdenis/"
          title="💼 Recruitment Consulting"
          description="Expert advice on recruitment strategies and talent acquisition."
        />
        <ServiceCard
          href="https://www.linkedin.com/in/sourcingdenis/"
          title="🌐 iGaming Industry Insights"
          description="In-depth knowledge and trends in the iGaming sector."
        />
      </div>
    </div>
  )
}

export default Services