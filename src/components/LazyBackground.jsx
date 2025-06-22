import React, { useEffect, useRef, useState } from 'react';

const LazyBackground = ({ src, children, className }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  const element = ref.current;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Stop observing once loaded
      }
    },
    { threshold: 0.1 }
  );

  if (element) {
    observer.observe(element);
  }

  return () => {
    if (element) observer.unobserve(element);
  };
}, []);


  return (
    <div
      ref={ref}
      className={`relative h-80 md:h-[30rem] lg:h-[30rem] bg-cover bg-center text-white ${className}`}
      style={{
        backgroundImage: isVisible ? `url('${src}')` : 'none',
        backgroundColor: '#000', // Optional placeholder
      }}
    >
      {children}
    </div>
  );
};

export default LazyBackground;
