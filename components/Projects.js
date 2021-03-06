import React from 'react';
import { heading1 } from './utils';
import ProjectCard from './ProjectCard';
import Heading from './Heading';
import FadeInner from './FadeInner';
import atp from '../images/atp.png';
import port from '../images/port.png';
import wap from '../images/wther.png';
import grove from '../images/grove.png';
export default function Projects() {
  return (
    <article
      className='w-full min-h-screen before:h-12 before:block relative '
      id='projects'>
      <h2 className={heading1}>
        <Heading title='Projects' direction={true}></Heading>
      </h2>
      <FadeInner parentClassName=' absolute w-2/6 h-1/3 -top-44 right-0 '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-full w-full'
          viewBox='0 0 800 800'>
          <rect className='fill-transparent w-1/3 h-full' />
          <g
            className='opacity-30  stroke-neutral-600 dark:stroke-neutral-50'
            fill='none'
            strokeWidth='1'>
            <path d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63' />
            <path d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764' />
            <path d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880' />
            <path d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382' />
            <path d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269' />
          </g>
          <g className='opacity-60  fill-accent'>
            <circle cx='769' cy='229' r='5' />
            <circle cx='539' cy='269' r='5' />
            <circle cx='603' cy='493' r='5' />
            <circle cx='731' cy='737' r='5' />
            <circle cx='520' cy='660' r='5' />
            <circle cx='309' cy='538' r='5' />
            <circle cx='295' cy='764' r='5' />
            <circle cx='40' cy='599' r='5' />
            <circle cx='102' cy='382' r='5' />
            <circle cx='127' cy='80' r='5' />
            <circle cx='370' cy='105' r='5' />
            <circle cx='578' cy='42' r='5' />
            <circle cx='237' cy='261' r='5' />
            <circle cx='390' cy='382' r='5' />
          </g>
        </svg>
      </FadeInner>
      <div className='mt-8 pt-4 pb-8 px-4 -z-1 container mx-auto lg:grid lg:grid-cols-2 lg:max-w-4xl lg:items-stretch bg-svg-pattern'>
        <ProjectCard
          name='AutoPare'
          subtitle='Frontend/Backend'
          src={atp}
          details={{
            comment:
              'Single page webb app to create and share lists of interested cars from AutoTrader with an instant check of MOT and mileage history. Ability to create shareable lists. Due to Autotraders move to GraphQL, website is no longer functional. Static exemplary data for display.',
            stack: [
              'React',
              'Material UI',
              'NodeJS',
              'MongoDB',
              'GraphQL',
              'GoogleMaps API',
            ],
            links: {
              live: 'https://auto-pare.netlify.app/',
              hub: 'https://github.com/asorius/autotest',
            },
          }}></ProjectCard>

        <ProjectCard
          name='Weather Checker'
          subtitle='Frontend'
          src={wap}
          details={{
            comment:
              'React/Typescript app for weather forecast display. Suggestive search (using 3rd party API for values). Data retrieved through API endpoints from WeatherAPI. Graph generation using SVG elements. Responsive layout.',
            stack: ['React', 'Typescript', 'WeatherAPI', 'TailwindCSS'],
            links: {
              live: 'https://wthere.netlify.app',
              hub: 'https://github.com/asorius/weatherer',
            },
          }}></ProjectCard>
        <ProjectCard
          name='Grove Property'
          subtitle='Frontend'
          src={grove}
          details={{
            comment:
              'A prototype for property listing page with headless content management system (Contentful). Individual property pages generated dynamically by GatsbyJS. Automatic display of recently added items in the landing page.',
            stack: ['React', 'GatsbyJS', 'MaterialUI', 'Contentful'],
            links: {
              live: 'https://groveproperties.netlify.app/',
              hub: 'https://github.com/asorius/grove',
            },
          }}></ProjectCard>
        <ProjectCard
          name='Portfolio'
          subtitle='Frontend'
          src={port}
          details={{
            comment:
              'Current portfolio page version. Main purpose was to use implement TailwindCSS, NextJS and to improve on web design. ',
            stack: ['React', 'NextJS', 'TailwindCSS'],
            links: {
              live: 'https://asorius.netlify.com/',
              hub: 'https://github.com/asorius/portfolionext',
            },
          }}></ProjectCard>
        {/* <ProjectCard
          name='Calendar/Bookings'
          subtitle='Frontend'
          src={grove}
          details={{
            comment:
              'Exemplary booking-type website. Main aspect - custom calendar component with actions. ',
            stack: ['React', 'TypeScript', 'TailwindCSS'],
            links: {
              live: 'https://autopare.herokuapp.com/',
              hub: 'https://github.com/asorius/react-calendar',
            },
          }}></ProjectCard> */}
      </div>
    </article>
  );
}
