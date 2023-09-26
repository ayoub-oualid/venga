import React, { useState, useEffect } from "react";
import images from './images';

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrent((current) => (current + 1) % images.length);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [current, images.length]);

  return (
    <div style={{ width: '100%', height: '80%', overflow: 'hidden' }}>
      <img 
        src={images[current]} 
        alt="slideshow" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

export default ImageSlider;