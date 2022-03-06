import React from 'react';
import Image from 'next/image';

export function Modal({ isOpen, image, handler }) {
  const parent = React.useRef();
  React.useEffect(
    () =>
      parent.current.scrollIntoView({
        behavior: 'smooth',
      }),
    [isOpen]
  );
  return (
    <div
      ref={parent}
      onClick={() => handler(false)}
      className={`${
        isOpen ? 'absolute z-[100]' : 'hidden'
      } top-0 -left-[29%] lg:-left-[100%] h-screen w-screen lg:w-[90vw] bg-neutral-700 cursor-pointer animate-fade-in-fast overflow-x-hidden overflow-y-scroll`}
      title='Close'>
      <div className='h-11/12 w-11/12 lg:h-9/12 mx-auto py-8'>
        {image && <Image src={image} alt='Full size image' />}
      </div>
    </div>
  );
}
