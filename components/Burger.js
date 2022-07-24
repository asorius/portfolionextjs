import React from 'react';
export default function Burger({ active, toggler }) {
  const burgerLineStyles = (custom) =>
    `h-px w-full bg-neutral-800 dark:bg-neutral-50 duration-300 ease-in-out ${custom}`;
  const divStyles = `h-full w-8 flex flex-col justify-around relative z-40 cursor-pointer `;
  return (
    <div
      className={`${divStyles} lg:hidden`}
      title='Navigation menu'
      onClick={() => {
        toggler(!active);
      }}>
      <div
        className={burgerLineStyles(
          active ? 'translate-y-2 rotate-45' : 'translate-y-0 rotate-0'
        )}></div>
      <div
        className={burgerLineStyles(
          active ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
        )}></div>
      <div
        className={burgerLineStyles(
          active ? '-translate-y-3 -rotate-45' : 'translate-y-0 rotate-0'
        )}></div>
    </div>
  );
}
