import React from 'react';
import styles from './Btn.module.css';

export default function Btn({ value }) {
  return (
    <butto className={styles.btn}>{value}</butto>
  );
}

