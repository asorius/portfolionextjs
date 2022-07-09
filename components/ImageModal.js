import React from 'react';
import spinner from '../images/Spinner-2.gif';
export default function ImageModal({ src: image, handler }) {
  return (
    <div
      className='w-full h-64 lg:h-80 bg-cover rounded-lg shadow-md relative '
      style={{
        backgroundImage: `url(${image?.src || spinner.src})`,
      }}>
      <div className='duration-100 absolute top-0 left-0 w-full h-full rounded-lg bg-neutral-900/25'></div>
    </div>
  );
}
