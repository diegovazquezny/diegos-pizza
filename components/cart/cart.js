import { useState } from 'react';
import styles from '../../styles/Cart.module.css';
import EmptyCart from './emptyCart';
import FullCart from './fullCart';
import { connect } from 'react-redux';

const mapStateToProps = ({
  reducer: { total, itemCount }
}) => ({ total, itemCount });

function Cart({ itemCount }) {
  const [cart, setCart] = useState(itemCount);

  return (
    <div className={styles.root}>
      {cart ? <FullCart/> : <EmptyCart/>}
    </div>
  )
}

export default connect(mapStateToProps, null)(Cart);