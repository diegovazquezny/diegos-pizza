import styles from '../../styles/Footer.module.css';
import Link from 'next/link';

export default function Footer () {
  return (
    <div className={styles.root}>
      <div>
        <Link href='/menu/'>
          <a>
            Menu
          </a>
        </Link>
      </div>
    </div>
  )
}