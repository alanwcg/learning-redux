import { Reducer } from 'redux';
import produce from 'immer';

import { ActionTypes, CartState } from './types';

const INITIAL_STATE: CartState = {
  items: [],
  failedStockCheck: [],
}

export const cart: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type) {
      case ActionTypes.ADD_PRODUCT_TO_CART_SUCCESS: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(item =>
          item.product.id === product.id,  
        )

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity += 1;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }
        
        break;
      }
      case ActionTypes.ADD_PRODUCT_TO_CART_FAILURE: {
        draft.failedStockCheck.push(action.payload.productId);

        break;
      }
      default: {
        return state;
      }
    }
  })
};