import React, {useEffect, useRef, useState} from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import styles from '../../styles/Carousel.module.css';
import useResizeObserver from '../../utils/useResizeObserver';
import Link from 'next/link';

const carouselList = (list, itemsPerPage) => {
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

export default function CarouselMUI({ carouselData }) {
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

  return (
    <div className={styles.root} ref={carouselRef}>
      <Carousel
        autoPlay={false}
        className={styles.container}
        navButtonsAlwaysVisible={true}
      >
        {
          carouselList(carouselData, itemsPerPage).map((subArr, i) => {
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