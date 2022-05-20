import { configureStore } from '@reduxjs/toolkit';
import myReducer from './reducer';

const store = configureStore({
  reducer: {
    country: myReducer,
  },
});

export default store;
