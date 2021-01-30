import styles from '../../styles/Footer.module.css';
import Social from '../footer/social';

export default function Footer () {
  return (
    <div className={styles.root}>
      <div className={styles.footerContainer}>
        <p>Diego's Pizza isn't a real pizzeria 😉. This project was built using NextJS, Redux, Material-UI, and Postgres.</p>
        <Social/>
      </div>
    </div>
  )
}