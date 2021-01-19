import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './header';
import Hero from './hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Diego's Pizza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Hero/>
    </div>
  )
}
