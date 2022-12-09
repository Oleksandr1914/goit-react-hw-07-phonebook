import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterTask(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterTask } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
