import React from 'react';
import { connect } from 'react-redux';
import style from './../Style.module.css';
import {
  deleteContact,
  fetchContacts,
} from '../../redux/contacts/contacts-operations';
import { filteredContacts } from '../../redux/contacts/contacts-selectors';

const ContactList = ({ contacts, onDeteleContact }) => (
  <>
    <ul className={style.list}>
      {contacts !== undefined &&
        contacts.map(({ id, name, number }) => (
          <li key={id} className={style.item}>
            {name}: {number};
            <button onClick={() => onDeteleContact(id)}>Delete contact</button>
          </li>
        ))}
    </ul>
  </>
);

const mapStateToProps = state => ({
  contacts: filteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeteleContact: id => dispatch(deleteContact(id)),
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
