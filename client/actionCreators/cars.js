import CARS from '../actionTypes/cars';

export const gotCars = cars => ({
  type: CARS.GOT_CARS,
  payload: {
    status: 'loaded',
    cars
  }
});

export const gotSingleCar = (car) => ({
    type: CARS.GOT_SINGLECAR,
    payload: {
        status: 'loaded',
        car
    }
})

export const addedCar = newCar => ({
  type: CARS.ADDED_CAR,
  payload: {
    status: 'loaded',
    newCar
  }
});

export const editedCar = (id, car) => ({
  type: CARS.EDITED_CAR,
  payload: {
    status: 'loaded',
    id,
    car
  }
});

export const removedCar = id => ({
  type: CARS.REMOVED_CAR,
  payload: {
    status: 'loaded',
    id
  }
});

export const loadedCar = () => ({
  type: CARS.REQUESTED_CAR,
  payload: {
    status: 'loading'
  }
});

export const failedCar = () => ({
  type: CARS.LOAD_FAILED,
  payload: {
    status: 'failed'
  }
});

