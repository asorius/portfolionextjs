import React from 'react';
import Link from 'next/link';
export default function SideNavigation({ active = false, fn }) {
  const toggleClasses = active
    ? 'translate-x-0 opacity-100'
    : 'translate-x-[150%] opacity-0';
  const sidebar = React.useRef(null);
  React.useEffect(() => {
    const handleOutside = (e) => {
      const element = e.target;
      if (sidebar.current && !sidebar.current.contains(element)) {
        e.preventDefault();
        e.stopPropagation();
        fn(!active);
      }
    };
    active && document.addEventListener('click', handleOutside);

    return () => document.removeEventListener('click', handleOutside);
  }, [active]);
  const liClass =
    'text-text-dark dark:text-text-light font-medium h-full flex items-center justify-center first-letter:text-1xl first-letter:font-bold cursor-pointer';
  const aClass =
    ' first-letter:text-1xl first-letter:font-bold  hover:text-emerald-700';
  return (
    <div
      className={` w-screen h-screen absolute top-0 right-0  ease-in-out duration-300 z-30 ${toggleClasses} lg:hidden`}>
      <div
        ref={sidebar}
        className={`flex flex-col justify-center items-center rounded w-1/2 h-full absolute top-0 right-0  ease-in-out duration-300 backdrop-blur-md bg-white/95 dark:bg-neutral-700/95 drop-shadow-md ${toggleClasses} `}>
        <ul
          role='list'
          className='pl-5 space-y-3 text-slate-400 flex flex-col justify-between h-3/6 divide-y divide-gray-400 '>
          <li className={liClass} onClick={() => fn(!active)}>
            <Link href='#home'>
              <a className={aClass}>Home</a>
            </Link>
          </li>
          <li className={liClass} onClick={() => fn(!active)}>
            <Link href='#skills'>
              <a className={aClass}>Skills</a>
            </Link>
          </li>
          <li className={liClass} onClick={() => fn(!active)}>
            <Link href='#projects'>
              <a className={aClass}>Projects</a>
            </Link>
          </li>
          <li className={liClass} onClick={() => fn(!active)}>
            <Link href='#about'>
              <a className={aClass}>About Me</a>
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={` w-full h-screen absolute top-0 left-0  ease-in-out duration-800 -z-10  ${toggleClasses} backdrop-blur-3xl bg-black/30`}></div>
    </div>
  );
}
