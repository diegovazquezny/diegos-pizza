import React, {useEffect, useRef, useState} from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import styles from '../../styles/Carousel.module.css';
import useResizeObserver from '../../utils/useResizeObserver';
import Link from 'next/link';

export default function CarouselMUI(props) {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const carouselRef = useRef();
  const dimensions = useResizeObserver(carouselRef); 

  useEffect(() => {
    if (dimensions) {
      if (dimensions.width < 820) {
        setItemsPerPage(1);
      } else if (dimensions.width < 1210) {
        setItemsPerPage(2);
      } else setItemsPerPage(3);
    }
  }, [dimensions ? dimensions.width : null]);

  const items = [
    {
      title: 'Supreme Pizza',
      description: 'Fresh vegetables and pepperoni',
      img: '/carousel/supr.png',
      url: '/menu#pizza',
      id: 'vege'
    },
    {
      title: 'Meatzza Meatzza!',
      description: 'Packed with delicious protein',
      img: '/carousel/meat.png',
      url: '/menu#pizza',
      id: 'meat'
    },
    {
      title: 'Classic Pepperoni',
      description: 'So simple, so tasty',
      img: '/carousel/pepp.png',
      url: '/menu#pizza',
      id: 'pepp'
    },
    {
      title: `GrandMa's Pie`,
      description: 'A little slice of Italian home cooking',
      img: '/carousel/grma.png',
      url: '/menu#pizza',
      id: 'grma'
    },
    {
      title: 'Italian Margherita',
      description: 'Mouth watering elegance',
      img: '/carousel/marg.png',
      url: '/menu#pizza',
      id :'marg'
    },
    {
      title: `Chef's Delight`,
      description: 'Peppers, onions, jalepeños, & chicken',
      img: '/carousel/chef.png',
      url: '/menu#pizza',
      id: 'chef'
    }
  ];

  const carouselList = (list) => {
    const iterations = list.length / itemsPerPage;
    let count = 0;
    let index = 0;
    const listOfItems = [];
    while (count < iterations) {
      let innerCount = 0;
      const subArr = [];
      while (innerCount < itemsPerPage) {
        subArr.push(list[index]);
        innerCount += 1;
        index += 1;
      }
      listOfItems.push(subArr);
      count += 1;
    }
    return listOfItems;
  };

  return (
    <div className={styles.root} ref={carouselRef}>
      <Carousel
        autoPlay={false}
        className={styles.container}
        navButtonsAlwaysVisible={true}
      >
        {
          carouselList(items).map((subArr, i) => {
            return (
              <div className={styles.carouselPage} key={`slide${i}`} >
                {subArr.map((item, i) => <Item key={`${item.id}${i}`} item={item} />)}  
              </div>
            )
          })
        }
      </Carousel>

    </div>
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
      <Link href={props.item.url}>
        <button 
          className={styles.carouselButton}
        >
          ORDER NOW
        </button>
      </Link>
    </Paper>
  )
}