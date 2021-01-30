import styles from '../../styles/Cart.module.css';
import { connect } from 'react-redux';
import CartItem from './cartItem';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import { useRouter } from 'next/router';

const mapStateToProps = ({
  reducer: { order }
}) => ({ order });

function FullCart({order}) {
  const router = useRouter();
  console.log(router.route);
  const generateCartItems = () => {
    return order.map((item, i) => {
      return (
        <CartItem
          key={`I${i}`}
          itemCount={'1'}
          itemName={item.name}
          itemPrice={item.price}
          itemID={item.id}
        />  
      );  
    })
  }

  return (
    <div className={styles.cartContainer} >
      <p className={styles.cartTitle}>Your order</p>
      <Table>
        <TableHead>
          {generateCartItems()}
        </TableHead>
      </Table>
      <button 
        className={styles.checkoutButton}
        onClick={()=>router.push('/checkout')}
      >
        Checkout
      </button>
    </div>
  );
}

export default connect(mapStateToProps, null)(FullCart);