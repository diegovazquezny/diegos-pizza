import React from 'react';
import styles from '../../styles/MenuItem.module.css';
import { Paper } from '@material-ui/core';

export default function MenuItem({ name, price, description }) {
  return (
    <Paper className={styles.root}>
      <div className={styles.topContainer}>
        <p className={styles.name}>
          {name}
        </p>
        <p className={styles.name}>
          {price}
        </p>
      </div>
      <div className={styles.bottomContainer}>
        <p className={styles.description}>
          {description}
        </p>
        <button className={styles.button}>
          +
        </button>
      </div>
    </Paper>
  );
}