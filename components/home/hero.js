import React from 'react';
import styles from '../../styles/Hero.module.css'
import Link from 'next/link';

const line1 = 'TRY ONE OF OUR';
const line2 = 'TASTY SPECIALTY';
const line3 = 'PIZZA PIES';

export default function Hero() {
  return (
    <div className={styles.root} >
      <div className={styles.heroTextContainer}>
        <div className={styles.heroTextWrapper}>
          <span className={styles.heroText}>{line1}</span>
          <span className={styles.heroText}>{line2}</span>
          <span className={styles.heroTextB}>{line3}</span>
          <Link href='/menu'>
            <button className={styles.heroBtn}>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </div>
  )
}