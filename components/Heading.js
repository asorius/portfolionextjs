import React from 'react';

export default function Heading({ title, sideText, left, size = '20rem' }) {
  const directionBasedClassname = `text-[${size}]  lg:text-[${
    size || '20rem'
  }] top-1/4 left-full lg:left-80 [writing-mode:vertical-rl]  tracking-tighter[text-orientation:upright]`;
  // const directionBasedClassname = direction
  //   ? 'top-1/4 left-80 w-[25rem] max-h-min [writing-mode:vertical-rl]  tracking-tighter[text-orientation:upright]'
  //   : 'top-1/2 -left-64 whitespace-nowrap';
  return (
    <span className=' before:absolute before:-inset-1 before:h-1 before:w-1/3 before:mb-1 before:bg-accent before:animate-fade-in relative inline-block'>
      {title}
      {/* <span
        className={
          '-z-1 absolute blur-lg xl:blur-xl text-neutral-300 dark:text-neutral-500 hidden lg:inline-block pointer-events-none ' +
          directionBasedClassname
        }>
        {sideText || title}
      </span> */}
    </span>
  );
}
