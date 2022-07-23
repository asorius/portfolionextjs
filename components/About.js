import React from 'react';
import { heading1 } from './utils';
import Image from 'next/image';
import FadeInner from './FadeInner';
import Link from 'next/link';
import Heading from './Heading';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function About() {
  return (
    <section id='about' className='bg-container dark:bg-container-dark pb-10'>
      <div className='container px-6 py-8 mx-auto'>
        <FadeInner>
          <h2 className={'dark:text-text-dark ' + heading1}>
            <Heading
              title='About me'
              sideText='me'
              size='15rem'
              left={true}></Heading>
          </h2>
          <div className='items-center md:flex max-w-3xl mx-auto pt-14'>
            <div className='md:w-1/2'>
              <p className='mt-4 text-text-dark lg:max-w-md py-6 md:text-right'>
                Hi I am Arturas (Arthur) , a{' '}
                <abbr
                  className='cursor-help'
                  title='JavaScript engines were originally used only in web browsers, but they are now core components of other software systems, most notably servers and a variety of applications.'>
                  <i>JavaScript</i>
                </abbr>{' '}
                software developer. For the past 5 years I&apos;ve been learning
                and practicing web development technologies on my spare time.
              </p>

              <div className='flex justify-end items-center mt-6 -mx-2 md:justify-end mb-10'>
                <h3 className='font-bold relative '>
                  Contact me here :{' '}
                  <svg
                    width='130'
                    height='130'
                    viewBox='0 0 130 130'
                    className='absolute h-20 w-30 right-0 top-2 rotate-90 translate-x-[75%] fill-neutral-500 dark:fill-text-light'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M41.4113 29.4292C41.5511 29.1869 41.6659 28.954 41.7374 28.749C42.5513 26.3819 42.9613 23.931 43.5825 21.5142C45.3407 14.674 45.0177 7.36169 42.4736 0.785541C42.2282 0.151845 41.5138 -0.1619 40.8801 0.0835021C40.2464 0.328904 39.9326 1.04022 40.178 1.67392C42.5388 7.7748 42.8308 14.5591 41.2 20.9023C40.5943 23.2569 40.1997 25.6426 39.4076 27.9506C39.2896 28.2954 38.9479 28.7303 38.6746 29.1496C38.3795 29.6094 38.1372 30.0567 38.0378 30.4139C37.8732 31.0041 37.9788 31.4949 38.2397 31.8708C38.4261 32.1379 38.7088 32.3834 39.1654 32.5138C39.3518 32.5666 39.6748 32.6039 40.119 32.5045C40.7962 32.3554 42.222 31.7807 44.092 31.029C47.1549 29.7926 51.4915 28.0655 55.595 27.1771C58.167 26.618 60.6396 26.3757 62.5935 26.8789C63.252 27.0498 63.923 26.6521 64.0939 25.9936C64.2647 25.3381 63.8671 24.664 63.2086 24.4932C60.9409 23.9092 58.0644 24.1205 55.073 24.7697C50.8297 25.6923 46.338 27.4691 43.1695 28.7458C42.5607 28.9912 41.9518 29.2273 41.4113 29.4292Z'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M44.3842 28.3628C46.9252 16.3972 52.9888 10.0477 59.9595 8.4604C70.4496 6.07161 82.6048 14.3967 87.0687 29.6054C98.2391 67.6644 71.0523 107.084 41.3525 127.347C40.7902 127.732 40.6473 128.496 41.0294 129.058C41.4115 129.621 42.1787 129.764 42.7409 129.381C73.2329 108.578 100.901 67.9875 89.4325 28.9127C84.5338 12.2222 70.9248 3.43743 59.4127 6.05919C51.7151 7.81428 44.7818 14.6359 41.9768 27.8503C41.837 28.5151 42.2626 29.1705 42.9243 29.3103C43.589 29.4532 44.2444 29.0276 44.3842 28.3628Z'
                    />
                  </svg>
                </h3>
                <Link href='linkedin.com/in/asorius'>
                  <a
                    className='mx-2 inline-block'
                    title='My LinkedIn'
                    aria-label='Linkden'>
                    <svg
                      className='w-7 h-7 text-accent fill-current dark:text-accent-darkmode-btn hover:text-accent-secondary dark:hover:text-accent-secondary hover:scale-125 duration-300'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'>
                      <path d='M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z' />
                    </svg>
                  </a>
                </Link>
                <Link
                  href='https://github.com/asorius'
                  className='mx-2 inline-block'>
                  <a title='My Github'>
                    <svg
                      className='w-7 h-7 text-text-dark fill-current hover:text-accent-secondary dark:hover:text-accent-secondary hover:scale-125 duration-300'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'>
                      <path d='M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z' />
                    </svg>
                  </a>
                </Link>
                <Link
                  href='mailto:sorius.arturas@gmail.com'
                  passHref
                  title='Email me'>
                  <a title='Email me' className='mx-2 inline-block'>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className='transition duration-300 hover:scale-112 w-7 h-7 text-text-dark fill-current dark:text-text-light dark:hover:text-accent-secondary hover:text-accent-secondary hover:scale-125'
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className='mt-8 lg:mt-0 md:w-1/2'>
              <div className='flex items-center justify-center md:justify-center'>
                <div className='max-w-lg'>
                  <Image
                    className='object-cover object-center w-full h-64 rounded-md shadow'
                    src='https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt=''
                    height={256}
                    width={256}
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeInner>
      </div>
    </section>
  );
}
