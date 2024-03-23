"use client";
import { useState, useEffect, useCallback } from 'react';
import styles from "./Carousel.module.css";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://www.mjpaia.com/wp-content/uploads/2012/06/SVMCangiographyUnit2-e1338927420110.jpg',
    'https://th.bing.com/th/id/OIP.kz5xmMLT3wa8FD59oK45mwHaFO?w=850&h=600&rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/R.ba84dc709a64a6efba414a8084f3fab3?rik=jTNGJhzO73v7yg&riu=http%3a%2f%2fwww.saintlukeskc.org%2fsites%2fdefault%2ffiles%2f2019-10%2fSLH+Cath+Lab+team_0.jpeg&ehk=Pite8vzWa4eT3dQQ2nhUPR2YkBmhbi3SJYHSCD%2f7DCI%3d&risl=&pid=ImgRaw&r=0',
    'https://yrmchealthconnect.org/wp-content/uploads/2019/11/CathLabTeam_Image3.jpg',
  ];

  const nextSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <div className={styles.carousel}>
      <button className={styles.prev} onClick={prevSlide}>&#10094;</button>
      <button className={styles.next} onClick={nextSlide}>&#10095;</button>
      <div className={styles.carouselInner} style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className={styles.carouselSlide}>
            <img src={image} alt={`slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
