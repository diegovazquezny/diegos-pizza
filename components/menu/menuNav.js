import styles from '../../styles/MenuNav.module.css';

export default function MenuNav() {
  return (
    <div className={styles.root}>
      <a href='#Pizza'><button className={styles.button}>Pizza</button></a>
      <a href='#Heros'><button className={styles.button}>Heros</button></a>
      <a href='#Desserts'><button className={styles.button}>Desserts</button></a>
      <a href='#Drinks'><button className={styles.button}>Drinks</button></a>
    </div>
  )
}