import React from 'react';
import { heading1, heading2 } from './utils';
import reactIcon from './icons/react.svg';
import javascriptIcon from './icons/javascript.svg';
import mongoIcon from './icons/mongodb.svg';
import nodejsIcon from './icons/nodejs-icon.svg';
import tailIcon from './icons/tailwindcss-icon.svg';
import tsIcon from './icons/typescript-icon.svg';
import nextIcon from './icons/nextjs.svg';
import expressIcon from './icons/express.svg';
import Image from 'next/image';
import FadeInner from './FadeInner';
import Skewed from './Skewed';
import Heading from './Heading';
const front = [javascriptIcon, tailIcon, tsIcon, reactIcon, nextIcon];
const back = [nodejsIcon, expressIcon, mongoIcon];
export default function Skills() {
  const dividerStyling =
    'lg:hidden w-3/4 mx-auto h-1 bg-gradient-to-r rounded-lg mt-8 ';
  const imgContainer = 'grid place-items-center max-w-[8rem] mx-auto';
  return (
    <article
      className='w-full before:h-12 before:block bg-container dark:bg-container-dark pb-20 overflow-hidden'
      id='skills'>
      <h2 className={heading1}>
        <Heading title='Skills' size='20rem' />
      </h2>
      <FadeInner>
        <div className='mt-8 pt-4 rounded -z-1 max-w-2xl mx-auto'>
          <div>
            <h3 className={heading2}>
              <Skewed text='Frontend' />
            </h3>
            <div
              className={
                dividerStyling + 'from-accent-secondary to-accent'
              }></div>
            <div className='grid gap-8 grid-cols-3 p-8'>
              {front.map((icon, i) => (
                <div className={imgContainer} key={'icon-front-' + i}>
                  <Image src={icon} alt='' />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className={heading2}>
              <Skewed text='Backend' background='bg-accent' />
            </h3>
            <div
              className={
                dividerStyling + 'from-accent to-accent-secondary'
              }></div>

            <div className='grid gap-8 grid-cols-3 p-8'>
              {back.map((icon, i) => (
                <div className={imgContainer} key={'icon-back-' + i}>
                  <Image src={icon} alt='' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeInner>
    </article>
  );
}
