import { useState } from 'react';
import styles from '../../styles/Cart.module.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


function EmptyCart() {
  return (
    <div className={styles.emptyCartContainer} >
      <ShoppingBasketIcon 
        fontSize='inherit'
      />
      <p className={styles.emptyCartText}>Your cart is empty</p>
    </div>
  )
}

export default function Cart() {
  const [cart, setCart] = useState(false);
  return (
    <div className={styles.root}>
      {
        !cart && <EmptyCart/>
      }
    </div>
  )
}