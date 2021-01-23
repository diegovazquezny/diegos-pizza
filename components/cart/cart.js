import { useState } from 'react';
import styles from '../../styles/Cart.module.css';
import EmptyCart from './emptyCart';
import FullCart from './fullCart';
import { connect } from 'react-redux';

const mapStateToProps = ({
  reducer: { total }
}) => ({ total });

function Cart({ total }) {
  const [cart, setCart] = useState(total);

  return (
    <div className={styles.root}>
      {cart ? <FullCart/> : <EmptyCart/>}
    </div>
  )
}

export default connect(mapStateToProps, null)(Cart);