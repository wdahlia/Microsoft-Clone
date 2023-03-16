import React from 'react';
import styles from './MoveToDetail.module.css';

export default function MoveToDetail({ children }) {
  return <a href="#" className={styles.link}>{ children }</a>
}

