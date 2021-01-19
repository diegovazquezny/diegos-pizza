import React from 'react';
import styles from '../styles/Hero.module.css'

const line1 = 'TRY ONE OF OUR';
const line2 = 'TASTY SPECIALTY';
const line3 = 'PIZZA PIES';

export default function Hero() {
  return (
    <div className={styles.root} >
      <div className={styles.heroTextContainer}>
        <div className={styles.heroTextWrapper}>
          <h1 className={styles.heroText}>{line1}</h1>
          <h1 className={styles.heroText}>{line2}</h1>
          <h1 className={styles.heroText}>{line3}</h1>
        </div>
        <button className={styles.heroBtn}>ORDER NOW</button>
      </div>
    </div>
  )
}