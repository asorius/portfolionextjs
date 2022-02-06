import React from 'react';
import { heading1 } from './utils';
import ProjectCard from './ProjectCard';
export default function Projects() {
  return (
    <article
      className='w-full min-h-screen  before:h-12 before:block'
      id='projects'>
      <h2 className={heading1}>Projects</h2>
      <div className='mt-8 pt-4 pb-8 -z-1 container mx-auto lg:grid lg:grid-cols-2 lg:max-w-4xl lg:place-items-start'>
        <ProjectCard
          name='AutoPare'
          subtitle='Frontend/Backend'
          details={{
            comment:
              'Web app to create and share lists of interested cars from AutoTrader with an instant check of MOT and mileage history. Ability to create shareable lists.',
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
          name='Portfolio'
          subtitle='Frontend'
          details={{
            comment:
              'Current portfolio page version. Main purpose was to use implement TailwindCSS and NextJS.',
            stack: ['React', 'NextJS', 'TailwindCSS'],
            links: {
              live: 'https://asorius.netlify.com/',
              hub: 'https://github.com/asorius/portfolionext',
            },
          }}></ProjectCard>
        <ProjectCard
          name='Grove Property'
          subtitle='Frontend'
          details={{
            comment:
              'A prototype for property listing page with headless content management system for easy updates.',
            stack: ['React', 'GatsbyJS', 'MaterialUI', 'Contentful'],
            links: {
              live: 'https://groveproperties.netlify.app/',
              hub: 'https://github.com/asorius/grove',
            },
          }}></ProjectCard>
        <ProjectCard
          name='Calendar/Bookings'
          subtitle='Frontend'
          details={{
            comment:
              'Attempt to create reusable custom styled calendar component with booking option.',
            stack: ['React', 'TypeScript'],
            links: {
              live: 'https://autopare.herokuapp.com/',
              hub: 'https://github.com/asorius/react-calendar',
            },
          }}></ProjectCard>
        <ProjectCard
          name='Weather Checker'
          subtitle='Frontend'
          details={{
            comment: "Early project to practice working with React and API's.",
            stack: ['React', 'WeatherAPI'],
            links: {
              live: 'https://asorius.github.io/WeatherApp/',
              hub: 'https://github.com/asorius/WeatherApp',
            },
          }}></ProjectCard>
      </div>
    </article>
  );
}
