import React from 'react';
import styles from './InfoCards.module.css';
import Button from '../Button/Button';
import MoveToDetail from '../MoveToDetail/MoveToDetail';

export default function InfoCards({ infoList }) {

  const infoItemList = infoList;

  return (
    <div className={styles.container}>
      {
        infoItemList.map((info) => (
          <div className={styles.box}>
            <img className={styles.infoImg} src={info.image} alt={info.image}/>
            { info.release ? 
              <Button 
                size='md' 
                color='yellow' 
                disabled>
                  신제품
              </Button> : ''}
            <h1 className={styles.title}>{info.title}</h1>
            <p className={styles.content}>{info.content}</p>
            <MoveToDetail>{info.linkContent}</MoveToDetail>
          </div>
        ))
      }
    </div>
  );
}