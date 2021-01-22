import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import styles from '../../styles/Header.module.css';
import { cart } from './svg';
import Link from 'next/link';
import Cart from './cart';

const total = '$0.00'

export default function Header() {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div className={styles.navBar}>
      <div className={styles.logoWrapper}>
        <Link href='/'>
          <a>
            <p className={styles.logo}>Diego's Pizza</p>
          </a>
        </Link>
      </div>
      <div className={styles.linksWrapper}>
        <ul className={styles.links}>
          <li className={styles.linkItem}>
            <div className={styles.linkItem}>
              <Link href='/menu/'>
                <a>
                  menu
                </a>  
              </Link>
            </div>
          </li>
          <li className={styles.linkItem}>
            <div className={styles.linkItem}>
              <Link href='/specials/'>
                <a>
                  specials
                </a>  
              </Link>
            </div>
          </li>
          <li className={styles.linkItem}>
            <div className={styles.cartWrapper} onClick={handleClick}>
              {cart}
              <p className={styles.total}>{total}</p>
            </div>
          </li>
        </ul>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Cart/>
      </Popover>
    </div>
  )
}