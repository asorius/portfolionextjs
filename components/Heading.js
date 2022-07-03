import React from 'react';

export default function Heading({ title, sideText, left, size = '20rem' }) {
  return (
    <span className=' before:absolute before:-inset-1 before:h-1 before:w-1/3 before:mb-1 before:bg-accent before:animate-fade-in relative inline-block'>
      {title}
    </span>
  );
}
