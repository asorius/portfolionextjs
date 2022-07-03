import ImageModal from './ImageModal';
import React from 'react';
<<<<<<< HEAD
import CardBody from './cardElements/CardBody';
import CardHeader from './cardElements/CardHeader';
=======

import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from './Modal';
>>>>>>> 3460fc7bebb4c5a3c57f32f7ffd21b139bb81b78
export default function ProjectCard({
  name = 'Default name',
  subtitle = 'Subtitle',
  details = 'Placeholder',
  src = false,
  modalHandler,
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
<<<<<<< HEAD
      className={`relative flex flex-col items-center justify-center max-w-sm mx-auto p-2 m-10 py-10 lg:max-h-[50rem]  overflow-hidden ${
        isVisible ? 'animate-fader' : 'animate-fade-out'
      }`}
    >
      <div
        className="w-full h-64 lg:h-80 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)`,
        }}
      ></div>

      <CardHeader
        name={name}
        subtitle={subtitle}
        openStatus={isOpen}
        openHandler={setOpen}
      />
=======
      className={`snap-proximity relative flex flex-col items-center justify-center max-w-sm mx-auto p-2 m-10 py-10 lg:max-h-[50rem] z-20 ${
        isVisible ? 'animate-fader' : 'animate-fade-out'
      }`}>
      <ImageModal src={src} handler={modalHandler} />
      <div className='w-56 -mt-10 overflow-hidden bg-accent rounded-lg shadow-lg md:w-64 dark:bg-accent-secondary z-20 '>
        <h3 className='py-2  tracking-wide text-center text-text-light dark:text-text-dark '>
          {name}
        </h3>
>>>>>>> 3460fc7bebb4c5a3c57f32f7ffd21b139bb81b78

      <CardBody
        comment={details.comment}
        stack={details.stack}
        links={details.links}
        openState={isOpen}
      />
    </div>
  );
}
