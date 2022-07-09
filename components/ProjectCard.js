import ImageModal from './ImageModal';
import React from 'react';
import CardBody from './cardElements/CardBody';
import CardHeader from './cardElements/CardHeader';
export default function ProjectCard({
  name = 'Default name',
  subtitle = 'Subtitle',
  details = 'Placeholder',
  src = false,
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
      className={`snap-proximity relative flex flex-col items-center grow max-w-sm mx-auto p-2 m-10 py-10  z-20 ${
        isVisible ? 'animate-fader' : 'animate-fade-out'
      }`}>
      <ImageModal src={src} />
      <CardHeader
        name={name}
        subtitle={subtitle}
        openStatus={isOpen}
        openHandler={setOpen}
      />

      <CardBody
        comment={details.comment}
        stack={details.stack}
        links={details.links}
        openState={isOpen}
      />
    </div>
  );
}
