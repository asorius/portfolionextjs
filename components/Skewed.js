import React from 'react';

export default function Skewed({ text, color = 'accent-pink' }) {
  return (
    <span
      className={`before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-${color} relative inline-block`}>
      <span className='relative text-text-primary-dark'>{text}</span>
    </span>
  );
}
