import styles from '../../styles/Loading.module.css';
import {useState, useRef} from 'react';
import classNames from 'classnames';

export default function Loading() {
  const [loaded, setLoaded] = useState(false);    
  const ref = useRef();

  const checkClasses = classNames(
    styles.checkmark,
    styles.draw,
  );

  const circleClasses = classNames(
    styles.circleLoader,
    loaded && styles.loadedComplete
  );

  setTimeout(() => { 
    setLoaded(true);
  }, 750)

  return (
    <>
      <input type="checkbox" id="check" className={styles.input} checked={loaded}/>
        <label htmlFor="check" className={styles.label}>
          <div className={styles.checkIcon}>
        </div>
      </label>
    </>
  );
}