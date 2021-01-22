import styles from '../../styles/Header.module.css';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <Link href='/'>
        <a>
          <p className={styles.logo}>Diego's Pizza</p>
        </a>
      </Link>
    </div>
  );
}