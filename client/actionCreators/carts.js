import CARTS from '../actionTypes/carts';

export const gotCarts = carts => ({
  type: CARTS.GOT_CARTS,
  payload: {
    status: 'loaded',
    instances: carts
  }
});

export const gotSingleCart = cart => ({
  type: CARTS.GOT_SINGLE_CART,
  payload: {
    status: 'loaded',
    selectedCart: cart
  }
});

export const addedCart = cart => ({
  type: CARTS.ADDED_CART,
  payload: {
    status: 'loaded',
    selectedCart: cart
  }
});

export const removedCart = id => ({
  type: CARTS.REMOVED_CART,
  payload: {
    status: 'loaded',
    id
  }
});

export const editedCart = (id, cart) => ({
  type: CARTS.EDITED_CART,
  payload: {
    status: 'loaded',
    selectedCart: cart,
    id
  }
});
