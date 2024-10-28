import React from 'react'

const ClientLink = ({ href, title, description }) => (
  <a target="_blank" href={href} className="flex flex-col w-full">
    <div className="flex justify-between items-center w-full">
      <p className="hover:underline text-sm leading-7">{title}</p>
    </div>
    <p className="text-sm text-gray-400">{description}</p>
  </a>
)

const FreelanceClients = () => {
  const clients = [
    {
      href: "https://www.playson.com/",
      title: "Playson",
      description: "Leading talent sourcing initiatives for this major iGaming content provider"
    },
    {
      href: "https://www.linkedin.com/in/sourcingdenis/",
      title: "Various iGaming Companies",
      description: "Provided recruitment consulting services to multiple iGaming firms"
    }
  ]

  return (
    <div className="flex flex-col mt-[2rem] w-full">
      <h1 className="font-normal">professional experience 🧱</h1>
      <div className="shrink-0 h-[1px] mt-2 w-full bg-zinc-800"></div>
      <div className="flex flex-col justify-center items-start w-full mt-[0.75rem] gap-2">
        {clients.map((client, index) => (
          <ClientLink key={index} {...client} />
        ))}
      </div>
    </div>
  )
}

export default FreelanceClients