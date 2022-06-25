import React from 'react';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function CardBody({ comment, stack, links, openState }) {
  return (
    <div
      className={`w-full transition duration-200 ease-in-out rounded drop-shadow-lg dark:text-text-dark-dark text-center lg:-z-10 p-0 transform -translate-y-10 lg:-translate-y-1 max-h-auto ${
        openState
          ? 'opacity-1'
          : 'opacity-0 max-h-1 lg:max-h-auto scale-0 lg:h-full '
        //fucking not showing on lg viewport
      }`}
    >
      <div className="bg-gray-200 dark:bg-gray-700 text-text-dark dark:text-text-light h-full w-full p-4 flex flex-col rounded-lg pt-14 ">
        <div className="p-2 font-thin lg:min-h-[8rem] lg:flex lg:flex-col lg:justify-center">
          {comment}
        </div>
        <div className="w-1/2 mx-auto lg:grow">
          <h4 className="font-semibold text-md p-4">
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-accent-secondary before:dark:bg-accent-darkmode  relative inline-block">
              <span className="relative text-text-light dark:text-text-dark lg:text-lg">
                Stack
              </span>
            </span>
          </h4>
          <ul className="list-outside lg:pt-4">
            {stack.map((el, i) => (
              <li className="" key={i}>
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full pt-4 flex items-center justify-end ">
          <a
            href={links.hub}
            title="Source code"
            target="_blank"
            className="inline-block"
            aria-label="autopare app source"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faCode}
              className="transition duration-300 text-accent dark:text-accent-secondary-darkmode h-8 w-8  mr-8  hover:text-button-primary hover:scale-125 dark:hover:text-button-primary"
            />
          </a>
          <a
            href={links.live}
            target="_blank"
            title="Live page"
            className="inline-block"
            aria-label="autopare app host"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className="transition duration-300 hover:scale-125 text-text-dark dark:text-text-light h-6 w-6  hover:text-button-primary dark:hover:text-button-primary"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
