import React from 'react';
import styles from './TabMenu.module.css';

export default function TabMenu({ children }) {
  return (
    <li className={styles.li}>
      <button className={styles.listBtn}>{ children }</button>
    </li>
  );
}

