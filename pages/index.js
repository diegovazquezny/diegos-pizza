import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/home/header';
import Hero from '../components/home/hero';
import CarouselMUI from '../components/home/carousel';
import Articles from '../components/home/articles';
import Footer from '../components/home/footer';
import { useEffect, useState } from 'react';

export default function Home() {
  const [fetchedData, setFetchedData] = useState(false);
  const [articleData, setArticleData] = useState([]);
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    if (!fetchedData) {
      fetch('/api/landing-page-data')
        .then(res => res.json())
        .then(data => {
          setFetchedData(true);
          setArticleData(data.articles);
          setCarouselData(data.carouselItems);
        })
        .catch(err => console.log(err));
    }
  });

  return (
    <div className={styles.root}>
      <Head>
        <title>Diego's Pizza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Hero/>
      {fetchedData 
        ? <>
            <CarouselMUI carouselData={carouselData} />
            <Articles articleData={articleData}/>
          </>
        : null
      }
      <Footer/>
    </div>
  );
}
