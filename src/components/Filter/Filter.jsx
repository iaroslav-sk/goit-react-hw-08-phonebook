import React from 'react';
import { connect } from 'react-redux';
import style from '../Style.module.css';
import { filteredContact } from '../../redux/contacts/contact-action';
import { getFilter } from '../../redux/contacts/contacts-selectors';

const Filter = ({ value, onChange }) => (
  <label className={style.filter}>
    Filter by name:
    <input type="text" value={value} onChange={onChange}></input>
  </label>
);

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filteredContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
