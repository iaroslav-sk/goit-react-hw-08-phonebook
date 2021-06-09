import { createAction } from '@reduxjs/toolkit';

// ==================== fetch contact ================================//

const fetchContactRequest = createAction('contact/fetchContactRequest');
const fetchContactSuccess = createAction('contact/fetchContactSuccess');
const fetchContactError = createAction('contacts/fetchContactError');

// ==================== add contact ================================//
const addContactRequest = createAction('contact/addContactRequest');
const addContactSuccess = createAction('contact/addContactSuccess');
const addContactError = createAction('contacts/addContactError');
// ==================== delete contact ================================//
const deleteContactRequest = createAction('contact/deleteContactRequest');
const deleteContactSuccess = createAction('contact/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

const filteredContact = createAction('contact/filter');

export {
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
};
