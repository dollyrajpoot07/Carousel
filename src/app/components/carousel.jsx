'use client';
import { useState, useEffect } from 'react';
import styles from './carousel.module.css';

const images = [
  '/images/img1.png',
  '/images/img2.png',
  '/images/img3.png',
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const autoPlay = setInterval(nextSlide, 3000);
        return () => clearInterval(autoPlay);
    }, []);

    return (
        <div className={styles.carousel}>
            <button className={styles.prev} onClick={prevSlide}>❮</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
            <button className={styles.next} onClick={nextSlide}>❯</button>
        </div>
    );
};

export default Carousel;
