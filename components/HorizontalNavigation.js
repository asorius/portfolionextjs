import React from 'react';
import Link from 'next/link';
export default function HorizontalNavigation() {
  const liClass =
    ' relative text-text-primary dark:text-text-primary-dark font-medium h-full flex items-center justify-center first-letter:text-1xl first-letter:font-bold cursor-pointer overflow-hidden';
  const aClass =
    " first-letter:text-1xl first-letter:font-bold duration:500 after:duration-300 after:content-[''] after:h-1 after:bg-bg-dark after:dark:bg-bg-light after:absolute after:rounded after:bottom-0 after:w-3/4 after:translate-x-1/2 after:right-1/2 after:translate-y-full after:scale-50 hover:after:translate-y-0 hover:after:scale-100 ";

  return (
    <div
      className={`hidden lg:inline-block max-w-max after:content-[''] after:h-0 after:lg:h-1 after:bg-accent after:dark:bg-accent-pink after:absolute after:left-0 after:bottom-0 after:w-full`}>
      <ul
        role='list'
        className='pl-5 space-x-3 text-slate-400 flex flex-row justify-between '>
        <li className={liClass}>
          <Link href='#home'>
            <a className={aClass}>Home</a>
          </Link>
        </li>
        <li className={liClass}>
          <Link href='#skills'>
            <a className={aClass}>Skills</a>
          </Link>
        </li>
        <li className={liClass}>
          <Link href='#projects'>
            <a className={aClass}>Projects</a>
          </Link>
        </li>
        <li className={liClass}>
          <Link href='#about'>
            <a className={aClass}>About Me</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
