import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './contactInatialState';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContactAction(state, action) {
      return [...state, action.payload];
    },
    removeContactAction(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContactAction, removeContactAction } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
