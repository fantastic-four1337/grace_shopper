import CARS from '../actionTypes/cars';

// Initial State
const initialState = {
  cars: [],
  singleCar: {},
  status: ''
};

// Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case CARS.GOT_CARS: {
      return {
        ...state,
        cars: action.payload.cars,
        status: action.payload.status
      };
    }
    case CARS.GOT_SINGLECAR: {
      return {
        ...state,
        singleCar: action.payload.car,
        status: action.payload.status
      };
    }
    case CARS.ADDED_CAR: {
      return {
        ...state,
        cars: [...state.cars, action.payload.newCar],
        status: action.payload.status
      };
    }
    case CARS.EDITED_CAR: {
      return {
        ...state,
        cars: [
          ...state.cars.filter(car => car.id !== action.payload.id),
          action.payload.car
        ]
      };
    }
    case CARS.REMOVED_CAR: {
      return {
        ...state,
        cars: [...state.cars.filter(car => car.id !== action.payload.id)],
        status: action.payload.status
      };
    }
    case CARS.REQUESTED_CAR: {
      return {
        ...state,
        status: action.payload.status
      };
    }
    case CARS.LOAD_FAILED: {
      return {
        ...state,
        status: action.payload.status
      };
    }
    default: {
      return state;
    }
  }
}
