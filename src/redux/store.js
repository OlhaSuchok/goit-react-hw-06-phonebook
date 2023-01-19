import { configureStore } from '@reduxjs/toolkit';
import { valueSlice } from './value/slice';
import { contactSlice } from './contact/ContactSlice';

export const store = configureStore({
  reducer: {
    myValue: valueSlice.reducer,
    contacts: contactSlice.reducer,
    // tasks: tasksReducer,
    // filters: filtersReducer,
  },
});

// import { tasksReducer, filtersReducer } from './reducer';

// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//     filters: filtersReducer,
//   },
// });
