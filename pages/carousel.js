import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import styles from '../styles/Carousel.module.css';

//const path = process.env.NODE_ENV === 'production' ? '/diegovazquezny' : '';

export default function CarouselMUI(props) {
  const items = [
    [
      {
      title: 'Try our Supreme',
      description: 'Fresh vegetables and pepperoni',
      img: '/carousel/supr.png',
      url: '',
      id: 'vege'
      },
      {
        title: 'Meatzza Meatzza!',
        description: 'Packed with delicious protein',
        img: '/carousel/meat.png',
        url: '',
        id: 'meat'
      },
      {
        title: 'Classic Pepperoni',
        description: 'So simple, so tasty',
        img: '/carousel/pepp.png',
        url: '',
        id: 'pepp'
      },
    ],
    [
      {
        title: `GrandMa's Pie`,
        description: 'A little slice of Italian home cooking',
        img: '/carousel/grma.png',
        url: '',
        id: 'grma'
      },
      {
        title: 'Italian Margherita',
        description: 'Mouth watering elegance',
        img: '/carousel/marg.png',
        url: ''
      },
      {
        title: `Chef's Delight`,
        description: 'Peppers, onions, jalepeños, & chicken',
        img: '/carousel/chef.png',
        url: '',
        id: 'chef'
      }
    ]
  ];

  return (
    <Carousel
      autoPlay={false}
      className={styles.root}
    >
      {
        items.map((subArr, i) => {
          return (
            <div className={styles.carouselPage} key={`slide${i}`} >
              {subArr.map(item => <Item key={item.id} item={item} />)}  
            </div>
          )
        })
      }
    </Carousel>
  );
}

function Item(props)
{
  return (
    <Paper key={props.item.id} className={styles.carouselItem}>
      <img 
        className={styles.carouselImg}
        src={props.item.img}
      ></img>
      <h2
        className={styles.carouselTitle}
      >
        {props.item.title}
      </h2>
      <p
        className={styles.carouselDescription}
      >
        {props.item.description}
      </p>
      <button 
        className={styles.carouselButton}
      >
        ORDER NOW
      </button>
    </Paper>
  )
}