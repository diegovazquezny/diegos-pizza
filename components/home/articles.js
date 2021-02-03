import React from 'react';
import styles from '../../styles/Articles.module.css';
import { Paper } from '@material-ui/core';
import Link from 'next/link';

const articles = [
  {
    title: 'World Class Desserts',
    description: `
      Nothing is better than finishing off a few slices of pizza with a
      delicious dessert. Try our ice cream or our cookies.
    `,
    img: './articles/brownies.png',
    url: '/menu#desserts',
    id: 'dess'
  },
  {
    title: 'Delicious Heros',
    description: `
      Not in the mood for pizza? We got you covered. Our diverse selection
      of heros will definitely hit the spot.
    `,
    img: './articles/sandwich.png',
    url: '/menu#heros',
    id: 'sand'
  },
  {
    title: 'Ice Cold Drinks',
    description: `Try our freshly brewed iced coffee, our amazing freshly squeezed orange juice,
      or a thirst quenching soft drink.`,
    img: './articles/icedcoffee.png',
    url: '/menu#drinks',
    id: 'drink'
  }
];

export default function Articles() {
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