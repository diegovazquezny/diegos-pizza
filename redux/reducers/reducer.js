// TODO: remove item from cart

export const types = {
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
}

const initialState = {
  total: 0,
  order: [],
  id: 1000
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_ITEM_TO_CART:
      const item = action.payload;
      item.id = state.id;
      const updatedOrder = [...state.order];
      updatedOrder.push(item);
      return {
        ...state,
        total: state.total + item.price,
        order: updatedOrder,
        id: state.id + 1
      }
      
    case types.REMOVE_ITEM_FROM_CART:
      console.log(action.payload);
      return {
        ...state
      }


    default:
      return state;
  }
}

export default reducer;