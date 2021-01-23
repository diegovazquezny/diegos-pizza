import { types } from '../reducers/reducer';

export const addItemToCart = (item) => ({
  type: types.ADD_ITEM_TO_CART,
  payload: item
});

export const removeItemFromCart = (item) => ({
  type: types.REMOVE_ITEM_FROM_CART,
  payload: item
});