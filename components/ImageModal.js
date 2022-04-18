import React from 'react';
import spinner from '../images/Spinner-2.gif';
export default function ImageModal({ src: image, handler }) {
  return (
    <div
      className='w-full h-64 lg:h-80 bg-gray-300 bg-cover rounded-lg shadow-md relative'
      style={{
        backgroundImage: `url(${image?.src || spinner})`,
      }}>
      <button
        onClick={() => {
          handler(
            image?.src ||
              'https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
          );
        }}
        className='absolute top-0 left-0 w-full h-full bg-neutral-900 opacity-70 text-8xl text-text-light hover:opacity-50'
        title='enlarge'>
        +
      </button>
    </div>
  );
}
