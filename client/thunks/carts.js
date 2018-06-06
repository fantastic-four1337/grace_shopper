import {
  gotCarts,
  gotSingleCart,
  addedCart,
  removedCart,
  editedCart,
  loadedCart,
  failedCart
} from '../actionCreators/carts';
import axios from 'axios';

export const getCarts = () => async dispatch => {
  try {
    dispatch(loadedCart())
    const allCarts = await axios.get('/api/carts');
    const carts = allCarts.data;
    dispatch(gotCarts(carts));
  } catch (err) {
      dispatch(failedCart())
      console.error(err);
  }
};

export const getSingleCart = id => async dispatch => {
  try {
    dispatch(loadedCart())
    const singleCart = await axios.get(`/api/carts/${id}`);
    const cart = singleCart.data;
    dispatch(gotSingleCart(cart));
  } catch (err) {
      dispatch(failedCart())
      console.error(err);
  }
};

export const addCart = cartInfo => async dispatch => {
  try {
    const newCart = await axios.post(`/api/carts`, cartInfo);
    dispatch(addedCart(newCart));
  } catch (err) {
      dispatch(failedCart())
      console.error(err);
  }
};

export const editCart = (id, cartInfo) => async dispatch => {
  try {
    const updatedCart = await axios.put(`/api/carts/${id}`, cartInfo);
    dispatch(editedCart(id, updatedCart));
  } catch (err) {
      dispatch(failedCart())
      console.error(err);
  }
};

export const removeCart = id => async dispatch => {
  try {
    await axios.delete(`/api/carts/${id}`, id);
    dispatch(removedCart(id));
  } catch (err) {
      dispatch(failedCart())
      console.error(err);
  }
};
