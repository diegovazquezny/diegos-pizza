import styles from '../../styles/Cart.module.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


export default function EmptyCart() {
  return (
    <div className={styles.cartContainer} >
      <ShoppingBasketIcon 
        fontSize='inherit'
      />
      <p className={styles.emptyCartText}>Your cart is empty</p>
    </div>
  );
}
