import React from 'react';
import styles from '../../styles/Header.module.css';
import Logo from '../nav/logo';
import RightNav from '../nav/rightNav';

export default function Header() {
  return (
    <div className={styles.navBar}>
      <Logo/>
      <RightNav/>
    </div>
  )
}