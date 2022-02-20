import React from 'react';

export default function Skewed({ text, background = 'bg-accent-pink' }) {
  console.log(background);
  return (
    <span
      className={`before:block before:absolute before:-inset-1 before:-skew-y-3 before:${background} relative inline-block`}>
      <span className='relative text-text-primary-dark'>{text}</span>
    </span>
  );
}
