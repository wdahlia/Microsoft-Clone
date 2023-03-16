import React from 'react';
import styles from './InfoCards.module.css';
import Btn from '../Btn/Btn';
import MoveToDetail from '../MoveToDetail/MoveToDetail';

export default function InfoCards({ infoList }) {

  const infoItemList = infoList;

  return (
    <div className={styles.container}>
      {
        infoItemList.map((info) => (
          <div className={styles.box}>
            <img className={styles.infoImg} src={info.image} alt={info.image}/>
            { info.release ? <Btn value='신제품'/> : ''}
            <h1 className={styles.title}>{info.title}</h1>
            <p className={styles.content}>{info.content}</p>
            <MoveToDetail>{info.linkContent}</MoveToDetail>
          </div>
        ))
      }
    </div>
  );
}