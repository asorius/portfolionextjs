import React from 'react';
import Image from 'next/image';

export default function Modal({ isOpen, image, handler }) {
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
      onClick={() => handler()}
      className={`${
        isOpen ? 'fixed z-[100] ' : 'hidden'
      } top-0 left-0 h-screen w-screen bg-neutral-900 cursor-pointer animate-fade-in-fast overflow-x-hidden overflow-y-scroll flex justify-center items-center`}
      title='Close'>
      <div className='h-11/12 w-11/12 lg:h-9/12 lg:w-10/12 children:w-full children:h-full'>
        {image && (
          <Image
            src={image}
            alt='Full size image'
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='contain'
            placeholder='blur'
          />
        )}
      </div>
    </div>
  );
}
