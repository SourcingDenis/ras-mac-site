import React from 'react'

const LatestBlog = () => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="font-normal">latest insights 📖</h1>
      <div className="shrink-0 h-[1px] mt-2 w-full bg-zinc-800"></div>
      <div className="flex flex-col justify-center items-start w-full mt-[0.75rem] gap-2">
        <a href="https://www.linkedin.com/in/sourcingdenis/recent-activity/" className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-200 hover:underline">Trends in iGaming Recruitment</p>
            <p className="text-sm text-gray-400">Insights on the latest recruitment trends in the iGaming industry</p>
          </div>
          <p className="text-xs text-gray-200">Check LinkedIn</p>
        </a>
      </div>
    </div>
  )
}

export default LatestBlog