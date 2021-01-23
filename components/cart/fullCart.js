import styles from '../../styles/Cart.module.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function FullCart() {
  return (
    <div className={styles.cartContainer} >
      <p className={styles.cartTitle}>Your order</p>
      <div className={styles.itemWrapper}>
        <p className={styles.itemCount} >1</p>
        <p className={styles.itemName}>Pizza</p>
        <DeleteForeverIcon
          fontSize='small'  
        />
        <p className={styles.itemPrice}>$10.99</p>
      </div>
      <div className={styles.itemWrapper}>
        <p className={styles.orderSubtotalText}>Order subtotal:</p>
        <p className={styles.orderSubtotal}>$10.99</p>
      </div>
      <button className={styles.checkoutButton}>Checkout</button>
    </div>
  );
}
