import styles from '../../styles/Loading.module.css';
import { useState } from 'react';

export default function Loading() {
  const [loaded, setLoaded] = useState(false);    

  setTimeout(() => { 
    setLoaded(true);
  }, 750)

  return (
    <>
      <input type="checkbox" id="check" className={styles.input} checked={loaded} readOnly={true}/>
        <label htmlFor="check" className={styles.label}>
          <div className={styles.checkIcon}>
        </div>
      </label>
    </>
  );
}