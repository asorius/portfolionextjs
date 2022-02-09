import React from 'react';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Bulb({ theme, toggler }) {
  return (
    <div
      title='Light/dark mode'
      className='w-5 h-5 fixed bottom-10 right-5 backdrop-blur-md drop-shadow-md z-20 text-center cursor-pointer  '
      onClick={toggler}>
      <FontAwesomeIcon
        icon={faLightbulb}
        className='transition duration-300 hover:scale-112'
        color={theme === 'light' ? 'yellow' : 'gray'}
      />
    </div>
  );
}
