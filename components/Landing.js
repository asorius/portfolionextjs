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
          width='100%'
          className='self-end'
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
          {/* <Atom /> */}
          <h2 className='text-3xl text-text-dark dark:text-text-light pb-8 pt-4 mb-12 opacity-0 animate-fade-in-long text-center w-full'>
            Web Developer
            <svg
              width='100%'
              height='62'
              viewBox='0 0 517 62'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M238.104 8.99289C236.235 9.09919 234.367 9.21379 232.499 9.32009C207.738 10.3095 182.971 11.4951 158.179 12.9588C142.607 13.8746 131.764 14.5696 122.844 15.2074C82.5104 17.3579 42.2745 20.4651 2.31746 24.8479C1.58318 24.9297 1.21111 25.0767 1.1645 25.1013C0.108048 25.6001 0.0172869 26.4588 0.00175088 26.8758C-0.0186913 27.4645 0.127681 28.2412 1.09173 28.7563C1.20703 28.8135 1.4638 28.9526 1.90453 28.9853C2.08524 29.0016 4.27987 28.8464 8.43045 28.5275C8.20967 28.9854 8.19987 29.4269 8.28327 29.8275C8.36668 30.22 8.73221 31.3648 10.2711 31.4875C11.5172 31.5856 20.1504 30.3427 23.5029 30.0156C35.141 28.8872 46.7636 27.587 58.4099 26.5404C76.6304 24.8969 94.864 23.4088 113.1 21.9615C125.532 20.9639 137.965 19.9908 150.404 19.0423C166.025 18.0611 181.652 17.1534 197.285 16.3357C242.2 15.1173 287.118 14.8393 331.78 15.0601C385.003 15.3299 438.504 14.8965 491.384 21.1845L488.751 21.2827L487.811 21.3155C464.801 19.2059 437.122 20.8412 417.629 20.6449C333.693 19.8109 251.091 22.5338 167.477 29.2224C134.659 31.8554 101.859 35.5269 69.2165 39.738C57.9267 41.2016 28.611 44.644 24.6198 45.9277C23.2568 46.3611 22.8896 47.3015 22.8103 47.6286C22.6909 48.1192 22.7424 48.5934 22.9755 49.0595C23.1267 49.3621 23.3835 49.7138 23.8855 49.9836C24.0769 50.0899 24.4236 50.2288 24.9657 50.3024C25.4613 50.3678 26.3427 50.4088 27.6657 50.4088C134.31 49.9755 240.549 37.3912 347.013 31.9945C386.303 29.9994 425.593 28.1105 464.891 26.2707C472.585 25.9109 480.288 25.6737 487.99 25.3957C489.609 25.5511 491.196 25.7227 492.758 25.919L475.063 26.8512C439.796 28.7074 404.627 31.3404 369.426 34.235C287.903 40.9318 206.752 52.0768 125.159 57.6616C124.034 57.7434 123.183 58.7164 123.26 59.8448C123.337 60.9732 124.314 61.8236 125.439 61.7418C207.05 56.157 288.222 45.0039 369.761 38.307C404.922 35.4206 440.05 32.7876 475.276 30.9315C487.802 30.2773 505.342 29.3532 508.686 29.1652C509.087 29.1406 509.316 29.1244 509.357 29.1162C510.321 29.0099 510.665 28.4374 510.714 28.372C511.213 27.7588 511.254 27.1292 511.098 26.5486C511 26.1888 510.747 25.4366 509.708 25.1258C509.43 25.0441 509.152 24.9623 508.866 24.8887C511.941 24.8396 514.508 24.7743 515.219 24.6108C516.724 24.2592 516.961 23.098 516.994 22.6728C517.026 22.223 516.937 21.7406 516.577 21.2664C516.43 21.0701 516.184 20.8084 515.743 20.5958C515.522 20.4977 515.023 20.3342 514.148 20.1952C486.003 15.7551 457.646 13.523 429.207 12.3619L446.845 12.5008C447.09 12.5008 447.204 12.4926 447.229 12.4926C448.267 12.4027 448.627 11.7648 448.709 11.6504C449.101 11.1025 449.175 10.5383 449.036 9.98226C449.028 9.94138 448.799 8.85381 447.703 8.51039L459.142 8.36326C461.465 8.33873 462.618 8.30615 462.822 8.28979C463.828 8.19167 464.188 7.60277 464.261 7.50465C464.744 6.89956 464.793 6.26993 464.613 5.65667C464.539 5.40319 464.286 4.48739 463.051 4.24209C462.986 4.22573 462.667 4.18499 462.111 4.17681C457.033 4.08686 420.384 4.16032 406.287 4.24209C383.646 4.37292 360.996 4.51204 338.354 4.96994C321.894 5.29701 305.45 5.81204 289.007 6.48254C242.729 5.37049 196.498 3.48169 150.818 0.00652763C149.693 -0.0834179 148.71 0.767016 148.624 1.88725C148.539 3.01565 149.383 3.99683 150.508 4.08677C179.529 6.28635 208.772 7.86449 238.104 8.99289ZM412.101 24.6842C330.177 24.0219 249.475 26.7612 167.803 33.3027C135.051 35.9193 102.317 39.5908 69.7398 43.7937C65.5434 44.3415 58.8139 45.151 51.8562 46.0178C150.306 44.0226 248.46 32.894 346.809 27.9061C368.567 26.8022 390.334 25.7309 412.101 24.6842Z'
                className='fill-text-dark dark:fill-accent-secondary-darkmode'
              />
            </svg>
          </h2>
          <Link href='#projects'>
            <a>
              <button
                title='See my projects'
                className='opacity-0 animate-fade-in-long bg-button-primary  text-text-light dark:text-text-light font-semibold py-2 px-4 rounded hover:bg-accent-darkmode hover:text-text-dark hover:dark:bg-accent-secondary hover:dark:text-text-dark'>
                My Projects{' '}
                <FontAwesomeIcon
                  icon={faAngleDoubleDown}
                  className='h-5 w-5 animate-bounce inline-block dark:text-text-dark'
                />
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
