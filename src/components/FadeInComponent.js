import React, { useState, useRef, useEffect } from 'react';
import './../styles/FadeInComponent.css';

export default function FadeInComponent({ children, style }) {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef(null);
  // const Refvar = domRef.current

  useEffect(() => {
    const div = domRef.current
    const observer = new IntersectionObserver(entries => {
      // In your case there's only one element to observe:     
      if (entries[0].isIntersecting) {

        // Not possible to set it back to false like this:
        setVisible(true);

        // No need to keep observing:
        observer.unobserve(div);
      }
    });

    observer.observe(div);

    return () => { observer.unobserve(div) };
  }, [domRef]);

  return (
    <div ref={domRef} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} style={{ ...style }}>
      { children}
    </div>
  )
}