import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { ItemT } from '../types';

const initialItems = [
  { id: 'asdfsdf998', name: 'Pen', cost: 1.6 },
  { id: 'asdfsdf998', name: 'Backpack', cost: 38 },
  { id: 'a9989zkjs', name: 'Keyboard', cost: 29 },
];

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    itemsData: initialItems as Array<ItemT>,
    searchTerm: '',
  },
  reducers: {
    changeSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    addItem(state, action: PayloadAction<{ name: string; cost: number }>) {
      state.itemsData.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeItem(state, action: PayloadAction<string>) {
      state.itemsData = state.itemsData.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { changeSearchTerm, addItem, removeItem } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
