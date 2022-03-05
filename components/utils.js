import React from 'react';
const heading1 =
  'text-4xl font-bold w-full text-center mt-8 pt-8 text-text-primary dark:text-text-primary-darkmode md:text-5xl';
const heading2 =
  'text-xl w-full pt-8 pl-8 text-text-primary dark:text-text-primary-darkmode underline decoration-accent underline-offset-8 decoration-2 md:text-center md:text-3xl md:mb-10';
const tooltip = (text = 'Default text') => (
  <span className='absolute left-0 right-0 bottom-0 '>{text}</span>
);
export { heading1, heading2 };
