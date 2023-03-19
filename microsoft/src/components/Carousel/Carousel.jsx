import React from 'react';
import styles from './Carousel.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function Carousel({ carouselList }) {
  const carouselItemList = carouselList;
  return (
    <div className={styles.carousel}>
      { carouselItemList.map((item, index) => <ImageCard key={index} carouselItem={item}/>) }
      <button></button>
    </div>
  );
}

