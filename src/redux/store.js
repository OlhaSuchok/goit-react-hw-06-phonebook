import { configureStore } from '@reduxjs/toolkit';
import { valueSlice } from './value/slice';
import { contactSlice } from './contact/slice';

export const store = configureStore({
  reducer: {
    myValue: valueSlice.reducer,
    contact: contactSlice.reducer,
  },
});
