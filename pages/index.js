import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './header';
import Hero from './hero';
import CarouselMUI from './carousel';

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
    </div>
  )
}
