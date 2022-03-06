import React from 'react';
export default function ImageModal({}) {
  return (
    <div
      className='w-full h-64 lg:h-80 bg-gray-300 bg-center bg-cover rounded-lg shadow-md'
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)`,
      }}></div>
  );
}
