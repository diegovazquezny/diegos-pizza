import React from 'react';
import styles from '../../styles/Header.module.css';
import { cart } from './svg';
import Link from 'next/link';

const total = '$0.00'

export default function Header() {
  return (
    <div className={styles.navBar}>
      <div className={styles.logoWrapper}>
        <Link href='/'>
          <a>
            <p className={styles.logo}>Diego's Pizza</p>
          </a>
        </Link>
      </div>
      <div className={styles.linksWrapper}>
        <ul className={styles.links}>
          <li className={styles.linkItem}>
            <div className={styles.linkItem}>
              <Link href='/menu/'>
                <a>
                  menu
                </a>  
              </Link>
            </div>
          </li>
          <li className={styles.linkItem}>
            <div className={styles.linkItem}>
              <Link href='/specials/'>
                <a>
                  specials
                </a>  
              </Link>
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