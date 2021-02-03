import React from 'react';
import styles from '../../styles/Articles.module.css';
import { Paper } from '@material-ui/core';
import Link from 'next/link';

export default function Articles({ articleData }) {
  return (
    <div className={styles.root}>
      {
        articleData.map(article => {
          return (
            <Paper key={article.id} className={styles.article}>
              <h2
                className={styles.carouselTitle}
              >
                {article.title}
              </h2>
              <img 
                className={styles.articleImg}
                src={article.img}
              ></img>
              <p
                className={styles.articleText}
              >
                {article.description}
              </p>
              <Link href={article.url}>
                <button 
                  className={styles.articleButton}
                >
                  Order Now
                </button>
              </Link>
            </Paper>
          )
        })
      }
    </div>
  )
}