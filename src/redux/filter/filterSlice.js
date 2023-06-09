import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: {
      reducer(state, action) {
        return (state = action.payload);
      },
      prepare(value) {
        return {
          payload: value,
        };
      },
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
