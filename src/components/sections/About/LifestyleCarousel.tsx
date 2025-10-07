import React, { useState, useEffect } from 'react';
import styles from './LifestyleCarousel.module.css';

interface LifestyleImage {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

const LifestyleCarousel: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images: LifestyleImage[] = [
    {
      src: '/assets/code.webp',
      alt: 'I Code',
      title: 'I Code',
      subtitle: 'Building innovative solutions with clean, efficient code'
    },
    {
      src: '/assets/run.webp',
      alt: 'I Run',
      title: 'I Run',
      subtitle: 'Staying fit and clearing my mind through running'
    },
    {
      src: '/assets/lift.webp',
      alt: 'I Lift',
      title: 'I Lift',
      subtitle: 'Building strength and discipline through weightlifting'
    }
  ];

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const currentImage = images[currentImageIndex];

  return (
    <div className={styles.carousel}>
      {/* Image Container */}
      <div className={styles.imageContainer}>
        <img 
          src={currentImage.src}
          alt={currentImage.alt}
          className={styles.image}
        />
      </div>

      {/* Text Description */}
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{currentImage.title}</h3>
        <p className={styles.subtitle}>{currentImage.subtitle}</p>
      </div>

      {/* Dots Indicator */}
      <div className={styles.dotsContainer}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`${styles.dot} ${currentImageIndex === index ? styles.active : ''}`}
            aria-label={`View ${images[index].title}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LifestyleCarousel;