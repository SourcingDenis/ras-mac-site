import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full border p-5 rounded border-zinc-800">
      <div className="flex flex-col justify-center items-start w-full">
        <div className="flex justify-center items-center gap-2">
          <div>
            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full animate-buttonheartbeat hover:cursor-pointer">
              <img
                className="aspect-square h-full w-full"
                alt="profile picture"
                src="https://media.licdn.com/dms/image/v2/D4D03AQELecM1vwV33g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728990617837?e=1734566400&v=beta&t=an5ykpo_I3WoosI9fVpZIpuTM7Cj-iqB0wrokGrSupc"
              />
            </span>
          </div>
          <div>
            <h1 className="font-semibold leading-7">Denys Dinkevych</h1>
            <p className="text-xs font-light">Talent Sourcing Enthusiast</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <a
          target="_blank"
          aria-label="Links to Denis's LinkedIn profile"
          href="https://www.linkedin.com/in/sourcingdenis/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a
          target="_blank"
          aria-label="Email Denys"
          href="mailto:den.dinkevych.edu@gmail.com"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 hover:cursor-pointer"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Header;
