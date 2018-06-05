import CARTS from '../actionTypes/carts'

export const gotCarts = (carts) => ({
  type: CARTS.GOT_CARTS,
  payload: {
    status: 'loaded',
    instances: carts
  }
})

export const gotSingleCart = (cart) => ({
  type: CARTS.GOT_SINGLE_CART,
  payload: {
    status: 'loaded',
    selectedCart: cart
  }
})

export const addedCart = (cart) => ({
  type: CARTS.ADDED_CART,
  payload: {
    status: 'loaded',
    selectedCart: cart
  }
})

export const removedCart = (cart) => ({
  type: CARTS.REMOVED_CART,
  payload: {
    status: 'loaded',
    selectedCart: cart
  }
})

export const editedCart = (cart) => ({
  type: CARTS.EDITED_CART,
  payload: {
    status: 'loaded',
    selectedCart: cart
  }
})
