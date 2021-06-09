import { createSelector } from '@reduxjs/toolkit';

const getAllContacts = state => state.contacts.contacts;

const loadingContacts = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const filteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normaliseNameContact = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normaliseNameContact),
    );
  },
);

export { loadingContacts, getFilter, filteredContacts };
