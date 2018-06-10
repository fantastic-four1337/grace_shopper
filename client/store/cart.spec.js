import {expect} from 'chai'
import reducer from './cart'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'
import {gotCarts, removedCart} from '../actionCreators/carts'
import CARTS from '../actionTypes/carts';

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('cartReducer', () => {
    const initialState = {
        carts: [],
        cart: {},
        status: 'unasked'
      };
    it('starts with an initital state of  empty carts, empty cart and status: unasked', () => {
      const newState = reducer(undefined, '@@INIT') // '@@INIT': the first action that is ever dispatched to any redux store is @@INIT
      expect(newState).to.deep.equal(initialState)
    })
  })