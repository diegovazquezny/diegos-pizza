export const types = {
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
}

const initialState = {
  total: 0,
  order: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_ITEM_TO_CART:
      const item = action.payload;
      console.log(action.payload);
      const updatedOrder = [...state.order];
      updatedOrder.push(item);
      return {
        ...state,
        total: state.total + item.price,
        order: updatedOrder
      }

    default:
      return state;
  }
}

export default reducer;