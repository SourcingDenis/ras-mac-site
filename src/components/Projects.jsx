import React from 'react'

const ProjectCard = ({ href, title, description, image }) => (
  <a target="_blank" href={href}>
    <div className="relative w-full rounded-2xl border border-zinc-900 hover:cursor-pointer overflow-hidden">
      <div className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out" style={{background: 'radial-gradient(circle 150px at 0px 0px, rgba(255,255,255,0.2), transparent 80%)', opacity: 0, pointerEvents: 'none'}}></div>
      <div className="relative z-10 p-3">
        <div className="relative w-full aspect-[16/9] rounded overflow-hidden">
          <img alt="Project thumbnail" src={image} className="object-cover object-center w-full h-full" />
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <p className="text-sm text-gray-300">{title}</p>
          <p className="text-xs text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  </a>
)

const Projects = () => {
  const projects = [
    {
      href: "https://www.playson.com/",
      title: "Playson Talent Acquisition",
      description: "Leading talent sourcing initiatives for a major iGaming content provider.",
      image: "https://www.playson.com/wp-content/uploads/2022/03/playson-logo-1.svg"
    },
    {
      href: "https://www.linkedin.com/in/sourcingdenis/",
      title: "iGaming Recruitment Network",
      description: "Building and maintaining a network of top talent in the iGaming industry.",
      image: "https://media.licdn.com/dms/image/D4D16AQE7Za_s3bGWFw/profile-displaybackgroundimage-shrink_350_1400/0/1708506138135?e=1734566400&v=beta&t=KCDZq-Hy-RZZWwcmzBL8HUL-3CXL_5Hy5Yl2WVRlQXY"
    }
  ]

  return (
    <div className="max-w-[700px] mb-[2rem] w-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-gray-200">projects 🏗️</h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-col:2 xl:grid-cols-2 gap-2 mt-[0.75rem]">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects