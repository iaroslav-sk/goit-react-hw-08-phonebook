import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactsOperations from '../../redux/contacts/contacts-operations';
import { v4 as uuidv4 } from 'uuid';
import style from '../Style.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmitData(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className={style.form}>
        <h1>Phonebook</h1>
        <label htmlFor={this.nameInputId}>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
            className={style.input}
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Phone:
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
            className={style.input}
          />
        </label>
        <button type="submit" className={style.btn}>
          Add contact
        </button>
        <h2>Contacts</h2>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmitData: data => dispatch(contactsOperations.AddContact(data)),
});

export default connect(null, mapDispatchToProps)(Form);
