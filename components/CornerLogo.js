import React from 'react';
import Link from 'next/link';
export default function CornerLogo({ active }) {
  const toggleClasses = ` ${active ? 'scale-150' : 'scale-1'} `;
  return (
    <div
      title='Home'
      className={`h-full text-2xl pr-4 font-semibold flex flex-row justify-center z-10 ease-in-out duration-500 cursor-pointer dark:text-text-light ${toggleClasses}`}>
      <Link href='#home'>
        <a>
          <span className='relative pr-2'>
            A
            <span className='flex h-1 w-1 absolute bottom-1/2 -right-0'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-accent dark:bg-accent-darkmode opacity-75 '></span>
              <span className='relative inline-flex rounded-full h-1 w-1 bg-accent dark:bg-accent-darkmode '></span>
            </span>
          </span>
          <span className='pl-1 relative'>S</span>
        </a>
      </Link>
    </div>
  );
}
