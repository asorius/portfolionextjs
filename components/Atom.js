import React from 'react';

export default function Atom() {
  return (
    <svg
      width='100'
      height='100'
      viewBox='0 0 198 207'
      fill='none'
      className='opacity-0 animate-fade-in-down'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M165 103.5C165 137.933 135.761 166 99.5 166C63.2387 166 34 137.933 34 103.5C34 69.0669 63.2387 41 99.5 41C135.761 41 165 69.0669 165 103.5Z'
        className='stroke-text-dark dark:stroke-text-light animate-wiggle'
        strokeWidth='4'
      />
      <circle
        r='10'
        className='fill-accent-secondary animate-baller'
        style={{
          offsetPath: `path('M165 103.5C165 137.933 135.761 166 99.5 166C63.2387 166 34 137.933 34 103.5C34 69.0669 63.2387 41 99.5 41C135.761 41 165 69.0669 165 103.5Z')`,
        }}
      />
      <circle
        cx='99'
        cy='103'
        r='20'
        className='fill-text-dark dark:fill-text-light  '
      />
    </svg>
  );
}
