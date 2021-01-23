import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import styles from '../../styles/Header.module.css';
import { cart } from '../home/svg';
import Link from 'next/link';
import Cart from '../home/cart';
import { connect } from 'react-redux';

const mapStateToProps = ({
  reducer: { total, order }
}) => ({ total, order });

const RightNav = ({ total }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <div className={styles.linksWrapper}>
      <ul className={styles.links}>
        <li className={styles.linkItemLogo}>
          <div className={styles.linkItem}>
            <Link href='/'>
              <a>
                D's Pizza
              </a>  
            </Link>
          </div>
        </li>

        <li className={styles.linkItem}>
          <div className={styles.linkItem}>
            <Link href='/menu/'>
              <a>
                Menu
              </a>  
            </Link>
          </div>
        </li>
        <li className={styles.linkItemSpecial}>
          <div className={styles.linkItem}>
            <Link href='/specials/'>
              <a className={styles.specialLink}>
                Specials
              </a>  
            </Link>
          </div>
        </li>
        <li className={styles.linkItem}>
          <div className={styles.cartWrapper} onClick={handleClick}>
            {cart}
            <p className={styles.total}>${(total.toFixed(2))}</p>
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
    </>
  )
}

export default connect(mapStateToProps, null)(RightNav);