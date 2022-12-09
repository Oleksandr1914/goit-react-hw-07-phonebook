import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';
import { filtersReducer } from './filterSlice';

const rootReducer = combineReducers({
  filters: filtersReducer,
  contacts: contactReducer,
});

export const store = configureStore({
  reducer: {
    root: rootReducer,
  },
});
