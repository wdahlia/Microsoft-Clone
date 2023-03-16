import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../../assets/microsoft_logo.png';
import TabMenu from '../TabMenu/TabMenu';
import { ReactComponent as UserIcon } from '../../../assets/userIcon.svg';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.mainNav}>
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
      </div>
      <ul className={styles.tabList}>
        <TabMenu><span className={styles.dropdown}>Microsoft 전체</span></TabMenu>
        <TabMenu><i class="fa-solid fa-magnifying-glass"></i></TabMenu>
        <TabMenu><i class="fa-solid fa-cart-shopping"></i></TabMenu>
        <TabMenu><UserIcon width="30" height="30"/></TabMenu>
        <TabMenu></TabMenu>
        <TabMenu></TabMenu>
        <TabMenu></TabMenu>
      </ul>
    </div>
  );
}

