import { configureStore } from "@reduxjs/toolkit";
// import { createWrapper } from "next-redux-wrapper";
import carsReducer from '../reducers/carsSlice';
import carReducer from '../reducers/carSlice';

// const makeStore = () => configureStore({
//   reducer: {
//     cars: carsReducer,
//     car: carReducer
//   }
// });

// export const wrapper = createWrapper(makeStore);

const store = configureStore({
  reducer: {
    cars: carsReducer,
    car: carReducer
  }
});

export default store;