import { CARS } from './actionTypes'

export const gotCars = (cars) => ({
    type: CARS.GOT_CARS,
    payload: {
        status: 'loaded',
        cars
    }
})

export const gotSingleCar = (car) => ({
    type: CARS.GOT_SINGLE_CAR,
    payload: {
        status: 'loaded',
        car
    }
})

export const addedCar = (newCar) => ({
    type: CARS.ADDED_CAR,
    payload: {
        status: 'loaded',
        newCar
    }
})

export const editedCar = (id, car) => ({
    type: CARS.EDITED_CAR,
    payload: {
        status: 'loaded',
        id,
        car
    }
})

export const removedCar = (id) => ({
    type: CARS.REMOVED_CAR,
    payload: {
        status: 'loaded',
        id
    }
})
