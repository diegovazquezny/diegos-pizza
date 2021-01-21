import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/home/header';
import Hero from '../components/home/hero';
import CarouselMUI from '../components/home/carousel';
import Articles from '../components/home/articles';
import Footer from '../components/home/footer';

export default function Home() {
  return (
    <div className={styles.root}>
      <Head>
        <title>Diego's Pizza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Hero/>
      <CarouselMUI/>
      <Articles/>
      <Footer/>
    </div>
  );
}
