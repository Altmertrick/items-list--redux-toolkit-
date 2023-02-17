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

//@ts-ignore
window.store = store;

export { store };
export { changeName, changeCost };
export { changeSearchTerm, addItem, removeItem };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
