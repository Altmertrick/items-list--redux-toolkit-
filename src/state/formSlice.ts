import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addItem } from '.';

const formSlice = createSlice({
  name: 'formSlice',
  initialState: {
    name: ' ',
    cost: 0,
  },
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    changeCost(state, action: PayloadAction<number>) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addItem, (state, action) => {
      state.cost = 0;
      state.name = '';
    });
  },
});

export const formReducer = formSlice.reducer;
export const { changeName, changeCost } = formSlice.actions;
