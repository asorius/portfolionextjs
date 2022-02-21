import React from 'react';

export default function FadeInner({ children }) {
  const [isVisible, setVisible] = React.useState(true);
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
      className={`  ${isVisible ? 'animate-fader' : 'animate-fade-out'}`}>
      {children}
    </div>
  );
}
