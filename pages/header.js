import React from 'react';
import styles from '../styles/Header.module.css';
import { cart } from './svg';

const total = '$0.00'

export default function Header() {
  return (
    <div className={styles.navBar}>
      <div className={styles.logoWrapper}>
        <p className={styles.logo}>Diego's Pizza</p>
      </div>
      <div className={styles.linksWrapper}>
        <ul className={styles.links}>
          <li className={styles.linkItem}>
            <div className={styles.linkItem}>
              menu
            </div>
          </li>
          <li className={styles.linkItem}>
            <div className={styles.linkItem}>
              specials
            </div>
          </li>
          <li className={styles.linkItem}>
            <div className={styles.cartWrapper}>
              {cart}
              <p className={styles.total}>{total}</p>
              
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}