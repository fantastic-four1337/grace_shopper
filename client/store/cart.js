import CARTS from '../actionTypes/carts';

const initialState = {
  carts: [],
  cart: {},
  status: 'unaasked'
};

export default function(state = initialState, action) {
  const payload = action.payload;

  switch (action.type) {
    case CARTS.GOT_CARTS: {
      return {
        ...state,
        carts: payload.instance
      };
    }
    case CARTS.GOT_SINGLE_CART: {
      return {
        ...state,
        cart: payload.selectedCart,
        status: payload.status
      };
    }
    case CARTS.ADDED_CART: {
      return {
        ...state,
        carts: [...state.carts, payload.selectedCart],
        status: payload.status
      };
    }
    case CARTS.REMOVED_CART: {
      return {
        ...state,
        carts: state.carts.filter(cart => {
          return cart.id !== payload.id;
        })
      };
    }
    case CARTS.EDITED_CART: {
      return {
        ...state,
        carts: [
          ...state.carts.filter(cart => {
            return cart.id !== payload.id;
          }),
          payload.selectedCart
        ],
        status: payload.status
      };
    }
    case CARTS.REQUESTED_CART: {
      return {
        ...state,
        status: payload.status
      };
    }
    default: {
      return state;
    }
  }
}
