import React from 'react';

export default function CardHeader({
  name,
  subtitle,
  openStatus,
  openHandler,
}) {
  return (
    <div className="w-56 -mt-10 overflow-hidden bg-accent rounded-lg shadow-lg md:w-64 dark:bg-accent-secondary z-20 ">
      <h3 className="py-2 tracking-wide text-center text-text-light dark:text-text-dark ">
        {name}
      </h3>

      <div className="flex items-center justify-between px-3 py-2  bg-gray-200 dark:bg-gray-900">
        <span className=" text-sm text-gray-800 dark:text-gray-200 lg:text-center lg:w-full lg:h-14 italic">
          {subtitle}
        </span>
        <button
          className={`px-2 py-1 text-xs  text-white  transition-colors duration-200 transform lg:hidden bg-button-primary rounded hover:bg-gray-700 dark:hover:bg-gray-600`}
          onClick={(e) => {
            openHandler(!openStatus);
            e.currentTarget.classList.toggle('bg-gray-400');
          }}
        >
          {openStatus ? 'Close' : 'Details'}
        </button>
      </div>
    </div>
  );
}
