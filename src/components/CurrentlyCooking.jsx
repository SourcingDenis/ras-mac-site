import React from 'react'

const CurrentlyCooking = () => {
  return (
    <div className="flex flex-col mt-[2rem] w-full">
      <h1 className="font-normal">currently working on 🔍</h1>
      <div className="shrink-0 h-[1px] mt-2 w-full bg-zinc-800"></div>
      <div className="flex flex-col justify-center items-start w-full mt-[0.75rem] gap-2">
        <div className="flex flex-col w-full">
          <div className="flex gap-2">
            <a target="_blank" href="https://www.playson.com/">
              <p className="text-sm leading-7 hover:underline">Playson</p>
            </a>
          </div>
          <p className="text-sm text-gray-400">Sourcing specialist for a leading iGaming content provider.</p>
        </div>
      </div>
    </div>
  )
}

export default CurrentlyCooking