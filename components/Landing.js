import React from 'react';
import Navbar from './Navbar';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Logo from './Logo';
import Atom from './Atom';
import FadeInner from './FadeInner';

const mainFill = 'fill-neutral-300 dark:fill-neutral-900 ';
const firstwaveFill =
  'fill-accent dark:fill-neutral-800 opacity-95 in animate-wave1';
const secondwaveFill =
  'fill-accent-darkmode dark:fill-neutral-700 opacity-80 animate-wave2';
const thirdwaveFill = 'fill-container dark:fill-container-dark';
// bg-container dark:bg-container-dark
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
            className='h-3 w-3 hover:animate-hoverer'
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
      className='h-screen bg-neutral-300 dark:bg-neutral-900 text-text-dark dark:text-text-dark-dark relative'>
      <Navbar></Navbar>
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden flex items-stretch animate-fader'>
        <svg
          viewBox='0 0 1198 747'
          className='self-end w-full'
          preserveAspectRatio='xMinYMin meet'>
          <g clipPath='url(#clip0_4_8)'>
            <rect width='1198' height='747' className={thirdwaveFill} />
            <ellipse
              cx='471.5'
              cy='521'
              rx='253.5'
              ry='226'
              className={secondwaveFill}
            />
            <ellipse
              cx='705.5'
              cy='500'
              rx='253.5'
              ry='226'
              className={secondwaveFill}
            />
            <ellipse
              cx='978.5'
              cy='453'
              rx='253.5'
              ry='226'
              className={secondwaveFill}
            />
            <ellipse
              cx='394'
              cy='499'
              rx='268'
              ry='226'
              className={firstwaveFill}
            />
            <ellipse
              cx='641.385'
              cy='478'
              rx='268'
              ry='226'
              className={firstwaveFill}
            />
            <ellipse
              cx='930'
              cy='431'
              rx='268'
              ry='226'
              className={firstwaveFill}
            />
            <ellipse
              cx='279.25'
              cy='465'
              rx='308.25'
              ry='226'
              className={mainFill}
            />
            <ellipse
              cx='563.788'
              cy='444'
              rx='308.25'
              ry='226'
              className={mainFill}
            />
            <ellipse
              cx='895.75'
              cy='397'
              rx='308.25'
              ry='226'
              className={mainFill}
            />
            <rect width='1198' height='414' className={mainFill} />
          </g>
          <defs>
            <clipPath id='clip0_4_8'>
              <rect width='1198' height='747' />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className='flex flex-col justify-center items-center h-full relative'>
        <FadeInner parentClassName='hidden absolute w-2/6 h-screen top-36 left-11 lg:grid grid-rows-[repeat(20,minmax(0,1fr))] grid-cols-[repeat(10,minmax(0,1fr))]'>
          {svgLister().map((el) => el)}
        </FadeInner>
        <div className='h-1/2 flex justify-center items-center z-10'>
          <Logo />
        </div>
        <div className=' w-full flex flex-col justify-between items-center pb-4'>
          <Atom />
          <h2 className='text-3xl text-text-dark dark:text-text-light pb-8 pt-4 mb-12 opacity-0 animate-fade-in-long '>
            Web Developer
          </h2>
          <button
            title='See my projects'
            className='opacity-0 animate-fade-in-long duration-500 bg-button-primary  text-text-light dark:text-text-light font-semibold py-2 px-4 rounded hover:bg-accent-darkmode hover:text-text-dark hover:dark:bg-accent-secondary hover:dark:text-text-dark'>
            <Link href='#projects'>
              <a>
                My Projects{' '}
                <FontAwesomeIcon
                  icon={faAngleDoubleDown}
                  className='h-5 w-5 animate-bounce inline-block dark:text-text-dark'
                />
              </a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
