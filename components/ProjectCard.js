import React from 'react';

import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function ProjectCard({
  name = 'Default name',
  subtitle = 'Subtitle',
  details = 'Placeholder',
}) {
  const [isVisible, setVisible] = React.useState(true);
  const [isOpen, setOpen] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    const current = domRef.current;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);

  return (
    <div
      ref={domRef}
      className={`relative flex flex-col items-center justify-center max-w-sm mx-auto p-2 m-10 py-10 ${
        isVisible ? 'animate-fade-in-down' : 'animate-fade-out'
      }`}>
      <div
        className='w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md'
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)`,
        }}></div>

      <div className='w-56 -mt-10 overflow-hidden bg-accent rounded-lg shadow-lg md:w-64 dark:bg-accent-dark z-20 '>
        <h3 className='py-2 font-bold tracking-wide text-center text-text-primary-dark uppercase '>
          {name}
        </h3>

        <div className='flex items-center justify-between px-3 py-2  bg-gray-200 dark:bg-gray-700'>
          <span className='font-bold text-sm text-gray-800 dark:text-gray-200 lg:text-center lg:w-full '>
            {subtitle}
          </span>
          <button
            className={`px-2 py-1 text-xs  text-white  transition-colors duration-200 transform lg:hidden ${
              isOpen ? 'bg-gray-400' : 'bg-accent-pink'
            } rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none`}
            onClick={() => {
              setOpen(!isOpen);
              console.log(isOpen);
            }}>
            {isOpen ? 'Close' : 'Details'}
          </button>
        </div>
      </div>
      <div
        className={` w-full duration-700 h-0 rounded drop-shadow-lg -mt-10 dark:text-text-primary-dark text-center  lg:z-10 ${
          isOpen
            ? 'translate-y-0 z-10 scale-1 h-auto '
            : '-translate-y-16 -z-10 scale-0 lg:h-auto lg:scale-100 lg:translate-y-2'
        }`}>
        <div className='bg-gray-200 dark:bg-gray-700 h-full w-full p-4 rounded-lg pt-14 '>
          <div className='p-2 font-thin'>{details.comment}</div>
          <div className='w-1/2 mx-auto'>
            <h4 className='font-semibold text-md p-4'>
              <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-accent-pink relative inline-block'>
                <span className='relative text-text-primary-dark'>Stack</span>
              </span>
            </h4>
            <ul className='list-outside'>
              {details.stack.map((el, i) => (
                <li className='' key={i}>
                  {el}
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full pt-4 flex items-center justify-end '>
            <a
              href={details.links.hub}
              target='_blank'
              className='inline-block'
              aria-label='autopare app source'
              rel='noopener noreferrer'>
              <FontAwesomeIcon
                icon={faCode}
                className='transition duration-300 text-accent dark:text-accent-dark-btn h-8 w-8  mr-8 dark:hover:text-accent-pink hover:text-accent-pink hover:scale-125'
              />
            </a>
            <a
              href={details.links.live}
              target='_blank'
              className='inline-block'
              aria-label='autopare app host'
              rel='noopener noreferrer'>
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className='transition duration-300 hover:scale-125 text-text-primary dark:text-text-primary-dark h-6 w-6 dark:hover:text-accent-pink hover:text-accent-pink '
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
