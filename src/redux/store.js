import { configureStore } from '@reduxjs/toolkit';
import { valueSlice } from './value/ValueSlice';
import { contactSlice } from './contact/ContactSlice';
import { filterSlice } from './filters/filterSlice';

export const store = configureStore({
  reducer: {
    myValue: valueSlice.reducer,
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
});

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
