import {
  gotCars,
  gotSingleCar,
  removedCar,
  removedFromSingleCar,
  editedCar,
  addedCar,
  loadedCar,
  failedCar
} from '../actionCreators/cars.js';
import axios from 'axios';

export const getCars = () => async dispatch => {
  try {
    dispatch(loadedCar());
    const allCars = await axios.get('/api/cars');
    const cars = allCars.data;
    console.log(cars);
    dispatch(gotCars(cars));
  } catch (err) {
    dispatch(failedCar());
    console.error(err);
  }
};

export const getSingleCar = id => async dispatch => {
  try {
    dispatch(loadedCar());
    const singleCar = await axios.get(`/api/cars/${id}`);
    const car = singleCar.data;
    dispatch(gotSingleCar(car));
  } catch (err) {
    dispatch(failedCar());
    console.error(err);
  }
};

export const addCar = carInfo => async dispatch => {
  try {
    const newCar = await axios.post(`/api/cars/`, carInfo);
    const { data } = newCar;
    dispatch(addedCar(data));
  } catch (err) {
    dispatch(failedCar());
    console.error(err);
  }
};

export const editCar = (id, carInfo) => async dispatch => {
  try {
    const updatedCar = await axios.put(`/api/cars/${id}`, carInfo);
    dispatch(editedCar(id, updatedCar));
  } catch (err) {
    dispatch(failedCar());
    console.error(err);
  }
};

export const removeCar = id => async dispatch => {
  try {
    await axios.delete(`/api/cars/${id}`, id);
    dispatch(removedCar(id));
  } catch (err) {
    dispatch(failedCar());
    console.error(err);
  }
};
