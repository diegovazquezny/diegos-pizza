import styles from '../../styles/Cart.module.css';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { connect } from 'react-redux';

const mapStateToProps = ({
  reducer: { total }
}) => ({ total });

function CartTotal({ total }) {
  return (
    <TableRow>
      <TableCell align="right"></TableCell>
      <TableCell align="right">
        <p className={styles.orderTotal}>
          Order Total
        </p>
      </TableCell>
      <TableCell align="right"></TableCell>
      <TableCell align="right">
      <p className={styles.orderTotal}>
        ${total.toFixed(2)}
      </p>
      </TableCell>
    </TableRow>
  )
}

export default connect(mapStateToProps, null)(CartTotal);