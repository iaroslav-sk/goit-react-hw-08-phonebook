import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  filteredContact,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from './contact-action.js';

const contacts = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    const { name } = payload.data;
    const isFinded = state.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (isFinded) {
      alert('Контакт уже есть в списке !');
      return;
    }
    return [payload.data, ...state];
  },
  [deleteContactSuccess]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const filter = createReducer('', {
  [filteredContact]: (_, { payload }) => payload,
});

const loading = createReducer(true, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  contacts,
  filter,
  loading,
  error,
});

// ========redux redusers withuout redux-toolkit=========//

// import types from './types';

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD_CONTACT:
//       const { name } = payload;
//       const isFinded = state.find(
//         contact => contact.name.toLowerCase() === name.toLowerCase(),
//       );
//       if (isFinded) {
//         alert('Контакт уже есть в списке !');
//         return state;
//       }
//       return [payload, ...state];
//     case types.DELETE_CONTACT:
//       return state.filter(contact => contact.id !== payload);
//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER_CONTACT:
//       return payload;

//     default:
//       return state;
//   }
// };
