import React from 'react';
import Navbar from './Navbar';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Logo from './Logo';
import Atom from './Atom';
import FadeInner from './FadeInner';
export default function Landing() {
  const svgLister = () => {
    let svgs = [];
    for (let i = 0; i < 200; i++) {
      svgs.push(
        <div
          className='h-full w-full opacity-30  stroke-neutral-600 '
          key={i + 20}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-3 w-3  hover:animate-hoverer'
            viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 4v16m8-8H4'
            />
          </svg>
        </div>
      );
    }
    return svgs;
  };
  return (
    <div
      id='home'
      className='h-screen bg-neutral-300 dark:bg-neutral-900 text-text-primary dark:text-text-primary-dark relative '>
      <Navbar></Navbar>
      <div className='flex flex-col justify-center items-center h-full relative'>
        <FadeInner parentClassName='hidden absolute w-2/6 h-screen top-36 left-11 lg:grid grid-rows-[repeat(20,minmax(0,1fr))] grid-cols-[repeat(10,minmax(0,1fr))]'>
          {svgLister().map((el) => el)}
        </FadeInner>
        <div className='h-1/2 flex justify-center items-center z-10'>
          <Logo />
        </div>
        <div className=' w-full flex flex-col justify-between items-center pb-4'>
          <Atom />
          <h2 className='text-3xl text-text-primary dark:text-text-primary-dark pb-8 pt-4 mb-12 opacity-0 animate-fade-in-long '>
            Web Developer
          </h2>
          <button
            title='See my projects'
            className='opacity-0 animate-fade-in-long bg-accent dark:bg-accent-pink  text-text-primary-dark dark:text-text-primary-dark font-semibold py-2 px-4  rounded '>
            <Link href='#projects'>
              <a>
                My Projects{' '}
                <FontAwesomeIcon
                  icon={faAngleDoubleDown}
                  className='h-5 w-5 animate-bounce inline-block dark:text-text-primary'
                />
              </a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
