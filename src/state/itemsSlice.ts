import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { ItemT } from '../types';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [] as Array<ItemT>,
    searchTerm: '',
  },
  reducers: {
    changeSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    addItem(state, action: PayloadAction<{ name: string; cost: number }>) {
      state.items.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { changeSearchTerm, addItem, removeItem } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
