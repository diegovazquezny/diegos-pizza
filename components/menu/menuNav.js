import styles from '../../styles/MenuNav.module.css';

export default function MenuNav() {
  return (
    <div className={styles.root}>
      <a href='#pizza'><button className={styles.button}>Pizza</button></a>
      <a href='#heros'><button className={styles.button}>Heros</button></a>
      <a href='#desserts'><button className={styles.button}>Desserts</button></a>
      <a href='#drinks'><button className={styles.button}>Drinks</button></a>
    </div>
  )
}