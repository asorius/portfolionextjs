import React from 'react';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Bulb({ theme, toggler }) {
  return (
    <div
      title="Light/dark mode"
      className="w-5 h-10 pb-2 fixed bottom-10 right-5 z-20 text-center cursor-pointer  "
      onClick={toggler}
    >
      <FontAwesomeIcon
        icon={faLightbulb}
        className="w-full h-full duration-100 hover:border-b-4 hover:border-yellow-500 hover:rounded-md"
        color={theme !== 'light' ? 'yellow' : 'gray'}
      />
    </div>
  );
}
