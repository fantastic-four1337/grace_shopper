import { gotCars, gotSingleCar, removedCar, editedCar, addedCar } from '../actionCreators/cars.js'
import axios from 'axios'

export const getCars = () => async dispatch => {
    try {
        const allCars = await axios.get('/api/cars')
        const cars = allCars.data;
        dispatch(gotCars(cars))
    } catch (err) {
        console.log(err)
    }
}

export const getSingleCar = (id) => async dispatch => {
    try {
        const singleCar = await axios.get(`/api/cars/${id}`)
        const car = singleCar.data
        dispatch(gotSingleCar(car))
    } catch (err) {
        console.log(err)
    }
}

export const addCar = carInfo => async dispatch => {
    try {
        const newCar = await axios.post(`/api/cars/`, carInfo)
        dispatch(addedCar(newCar))
    } catch (err) {
        console.log(err)
    }
}

export const editCar = (id, carInfo) => async dispatch => {
    try {
        const updatedCar = await axios.put(`/api/cars/${id}`, carInfo)
        dispatch(editedCar(id, updatedCar))
    } catch (err) {
        console.log(err)
    }
}

export const removeCar = id => async dispatch => {
    try {
        await axios.delete(`/api/cars/${id}`, id)
        dispatch(removedCar(id))
    } catch (err) {
        console.log(err)
    }
}