import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    addContact(state, action) {
      return [...state, action.payload];
    },
    removeContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;
