import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../../assets/microsoft_logo.png';
import TabMenu from '../TabMenu/TabMenu';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src={logo} className={styles.logo} alt='microsoft_logo'/>
      <ul className={styles.tabList}>
        <TabMenu>Microsoft 365</TabMenu>
        <TabMenu>Teams</TabMenu>
        <TabMenu>Windows</TabMenu>
        <TabMenu>Surface</TabMenu>
        <TabMenu>Xbox</TabMenu>
        <TabMenu>세일</TabMenu>
        <TabMenu>지원</TabMenu>
      </ul>
      <ul className={styles.tabList}>
        <TabMenu>Microsoft 전체</TabMenu>
        <TabMenu>Teams</TabMenu>
        <TabMenu>Windows</TabMenu>
        <TabMenu>Surface</TabMenu>
        <TabMenu></TabMenu>
        <TabMenu></TabMenu>
        <TabMenu></TabMenu>
      </ul>
    </div>
  );
}

