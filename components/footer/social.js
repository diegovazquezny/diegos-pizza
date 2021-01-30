import styles from '../../styles/Footer.module.css';
import React from 'react';
import { github, linkedin, email } from '../../public/social/svg';

export default function Social() {
  return (
    <div className={styles.socialContainer}>
      <div className={styles.socialLogos}>
        <a className={styles.linkedin} href="https://www.linkedin.com/in/diegovazquezny/">
          {linkedin}
        </a>
        <a className={styles.github} href="https://github.com/diegovazquezny">
          {github}
        </a>
        <a className={styles.email} href="mailto:diegovazquezny@gmail.com">
          {email} 
        </a>
      </div>
      <div className={styles.seeMore}>
        <a href="https://diegovazquezny.github.io/diegovazquezny/">
          See more projects from Diego Vazquez
        </a> 
      </div>
    </div>  
  );
}