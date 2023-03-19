import React from 'react';
import Button from '../Button/Button';
import MoveToDetail from '../MoveToDetail/MoveToDetail';
import styles from './ImageCard.module.css';

export default function ImageCard({ carouselItem }) {
  const item = carouselItem;
  return (
    <div className={styles.background} style={{ backgroundImage: `url(${item.image})`, backgroundPosition: '50% 50%' }}>
      <div className={styles.infoBox} style={ item.switch ? { left : '48em' } : {left : '5em'} }>
        <h1>{item.title}</h1>
        <p className={styles.content}>{item.content}</p>
        <div className={styles.btnArea}>
          <Button size='sm' color='blue'>{item.btnContent}</Button>
          { item.linkContent ? <MoveToDetail>{item.linkContent}</MoveToDetail> : '' }
        </div>
      </div>
    </div>
  );
}

