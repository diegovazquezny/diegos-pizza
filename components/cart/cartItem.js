import styles from '../../styles/Cart.module.css';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions';

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: (item) => dispatch(actions.removeItemFromCart(item)),
});

function CartItem({ itemCount, itemName, itemPrice, itemID, removeItemFromCart }) {
  return (
    <TableRow>
      <TableCell align="right">{itemCount}</TableCell>
      <TableCell align="right">{itemName}</TableCell>
      <TableCell align="right">
        <DeleteForeverIcon
          fontSize='small'
          onClick={() => removeItemFromCart({itemID, itemPrice})}  
        />
      </TableCell>
      <TableCell align="right">${itemPrice}</TableCell>
    </TableRow>
  )
}

export default connect(null, mapDispatchToProps)(CartItem);