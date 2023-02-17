import { configureStore } from '@reduxjs/toolkit';

import { changeName, changeCost, formReducer } from './formSlice';
import {
  changeSearchTerm,
  addItem,
  removeItem,
  itemsReducer,
} from './itemsSlice';

const store = configureStore({
  reducer: {
    items: itemsReducer,
    form: formReducer,
  },
});

export { store };
export { changeName, changeCost };
export { changeSearchTerm, addItem, removeItem };
