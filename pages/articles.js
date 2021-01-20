import React from 'react';
import styles from '../styles/Articles.module.css'
import { Paper } from '@material-ui/core';


const articles = [
  {
    title: 'World Class Desserts',
    description: `
      Nothing is better than finishing off a few slices of pizza with a
      delicous dessert. Try our ice cream or our cookies.
    `,
    img: './articles/brownies.png',
    url: '',
    id: 'dess'
  },
  {
    title: 'The Best Sandwiches',
    description: `
      Not in the mood for pizza? We got you covered. Our diverse selection
      of sandwiches will definitely hit the spot.
    `,
    img: './articles/sandwich.png',
    url: '',
    id: 'sand'
  },
  {
    title: 'Every Day Specials',
    description: `Save big bucks with our daily specials. Feed your family
      and friends or treat yourself.`,
    img: './articles/wings.png',
    url: '',
    id: 'spec'
  }
];

export default function Articles() {
  return (
    <div className={styles.root}>
      {
        articles.map(article => {
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
              <button 
                className={styles.articleButton}
              >
                Order Now
              </button>
            </Paper>
          )
        })
      }
    </div>
  )
}