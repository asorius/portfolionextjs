import React from 'react';
import Navbar from './Navbar';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Logo from './Logo';
import Atom from './Atom';
export default function Landing() {
  return (
    <div
      id='home'
      className='h-screen bg-neutral-300 dark:bg-neutral-900 text-text-primary dark:text-text-primary-dark relative '>
      <Navbar></Navbar>
      <div className='flex flex-col justify-center items-center h-full '>
        <div className='h-1/2 flex justify-center items-center'>
          <Logo />
        </div>
        <div className=' w-full flex flex-col justify-between items-center pb-4'>
          <Atom />
          <h2 className='text-3xl text-text-primary dark:text-text-primary-dark pb-8 pt-4 animate-fade-in-long'>
            Web Developer
          </h2>
          <button
            title='See my projects'
            className='animate-fade-in-long bg-accent dark:bg-accent-pink  text-text-primary-dark dark:text-text-primary-dark font-semibold py-2 px-4  rounded '>
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
