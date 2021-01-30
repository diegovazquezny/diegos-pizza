import React, { useState } from 'react';
import styles from '../../styles/MenuItem.module.css';
import { Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions';
import Loading from './loading';


const mapStateToProps = ({
  reducer: { total, order }
}) => ({ total, order });

const mapDispatchToProps = dispatch => ({
  addItemToCart: (item) => dispatch(actions.addItemToCart(item)),
});

function MenuItem({ name, price, description, addItemToCart }) {
  const [itemChosen, setItemChosen] = useState(false);

  const handleClick = (event) => {
    const item = {
      name,
      price
    }
    addItemToCart(item);
    setItemChosen(true);
  }

  const showLoading = () => {
    setTimeout(() => {
      setItemChosen(false);
    }, 2000);
    return <Loading/>
  }

  return (
    <Paper className={styles.root}>
      <div className={styles.topContainer}>
        <p className={styles.name}>
          {name}
        </p>
        <p className={styles.name}>
          ${price}
        </p>
      </div>
      <div className={styles.bottomContainer}>
        <p className={styles.description}>
          {description}
        </p>
        {
          itemChosen 
            ?
              showLoading()
            : <button 
                className={styles.button}
                onClick={handleClick}
              >
                +
              </button>  
        }
      </div>
    </Paper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);