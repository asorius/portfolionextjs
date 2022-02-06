import React from 'react';
export default function Burger({ active, toggler }) {
  const activeStyles = active
    ? 'translate-y-2 rotate-45 ease-in-out duration-300'
    : ' rotate-0 ease-in-out duration-300';
  const burgerLineStyles = (custom) =>
    `h-px w-full bg-neutral-800 dark:bg-neutral-50 ${custom}`;
  const divStyles = `h-full w-8 flex flex-col justify-around relative z-40 cursor-pointer `;
  return (
    <div
      className={divStyles}
      onClick={() => {
        toggler(!active);
      }}>
      <div
        className={burgerLineStyles(
          active
            ? 'translate-y-2 rotate-45 ease-in-out duration-300 '
            : ' rotate-0 ease-in-out duration-300'
        )}></div>
      <div
        className={burgerLineStyles(
          active
            ? ' translate-x-full opacity-0 ease-in-out duration-300 '
            : ' translate-x-0 ease-in-out duration-300'
        )}></div>
      <div
        className={burgerLineStyles(
          active
            ? ' -translate-y-3 -rotate-45  ease-in-out duration-300 '
            : ' rotate-0  ease-in-out duration-300'
        )}></div>
    </div>
  );
}
