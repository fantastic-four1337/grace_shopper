import {expect} from 'chai'
import reducer from './car'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'
import {gotCars, gotSingleCar, addedCar, loadedCar, removedCar} from '../actionCreators/cars'
import CARS from '../actionTypes/cars';

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('carReducer', () => {
    const initialState = {
        cars: [],
        singleCar: {},
        status: 'unasked'
      };
    it('starts with an initital state of  empty cars, empty singleCar and status: unasked', () => {
      const newState = reducer(undefined, '@@INIT') // '@@INIT': the first action that is ever dispatched to any redux store is @@INIT
      expect(newState).to.deep.equal(initialState)
    })
  
    it('sets the state to be cars on the state when a GOT_CARS action is dispatched', () => {
     const cars = [{
        name: 'Corvette',
        model: 'ZF1',
        year: 2018,
        color: 'Ghost white',
        description: 'Brand New',
        specification: 'V20 engine',
        price: 100000,
        imageUrl:
          'http://www.stingrayforums.com/forum/attachments/purchasing/13098d1411290857-finally-got-my-2015-c7-arctic-white-great-site-great-people-zf1.1.jpg',
        country: 'USA',
      }, {
        name: 'Mustang',
        model: 'GT',
        year: 2018,
        color: 'Salmon',
        description: 'Ferocious hemi engine that eats squirrels',
        specification: 'V20 engine',
        price: 100500,
        imageUrl:
          'http://st.motortrend.com/uploads/sites/5/2018/05/2018-Ford-Mustang-GT-Performance-Pack-2-front-three-quarter-e1526508541250.jpg?interpolation=lanczos-none&fit=around|660:440',
        country: 'USA',
      } ]
      const newState = reducer(initialState, gotCars(cars))
      expect(newState.cars).to.deep.equal(cars)
    })

    it('gets a single car on the state when a GOT_SINGLECAR action is dispatched', () => {
      const cars = [{
        name: 'Corvette',
        model: 'ZF1',
        year: 2018,
        color: 'Ghost white',
        description: 'Brand New',
        specification: 'V20 engine',
        price: 100000,
        imageUrl:
          'http://www.stingrayforums.com/forum/attachments/purchasing/13098d1411290857-finally-got-my-2015-c7-arctic-white-great-site-great-people-zf1.1.jpg',
        country: 'USA',
      }]
      const newState = reducer(initialState, gotSingleCar(cars))
      
      expect(newState).to.deep.equal(newState)
    })

    it('adds cars to state when ADDED_CAR action is dispatched', () => {
      const cars = [{
        name: 'Corvette',
        model: 'ZF1',
        year: 2018,
        color: 'Ghost white',
        description: 'Brand New',
        specification: 'V20 engine',
        price: 100000,
        imageUrl:
          'http://www.stingrayforums.com/forum/attachments/purchasing/13098d1411290857-finally-got-my-2015-c7-arctic-white-great-site-great-people-zf1.1.jpg',
        country: 'USA',
      }]

      const newState = reducer(initialState, addedCar(cars))
      
      expect(newState.status).to.deep.equal('loaded')
    })

    it.only('loads cars on state when REQUESTED_CAR action is dispatched', () => {
      const cars = [{
        
        name: 'Corvette',
        model: 'ZF1',
        year: 2018,
        color: 'Ghost white',
        description: 'Brand New',
        specification: 'V20 engine',
        price: 100000,
        imageUrl:
          'http://www.stingrayforums.com/forum/attachments/purchasing/13098d1411290857-finally-got-my-2015-c7-arctic-white-great-site-great-people-zf1.1.jpg',
        country: 'USA',
      }]

      const newState = reducer(initialState, loadedCar(cars))
      console.log(newState)
      expect(newState.status).to.deep.equal('loading')




    })
  
    it('removes a car on the state when a removedCar action is dispatched', () => {
        const cars = [{
            name: 'Corvette',
            model: 'ZF1',
            year: 2018,
            color: 'Ghost white',
            description: 'Brand New',
            specification: 'V20 engine',
            price: 100000,
            imageUrl:
              'http://www.stingrayforums.com/forum/attachments/purchasing/13098d1411290857-finally-got-my-2015-c7-arctic-white-great-site-great-people-zf1.1.jpg',
            country: 'USA',
          }]
       const newState = reducer(initialState, removedCar(cars))
       expect(newState.status).to.deep.equal('loaded')
     })
  })