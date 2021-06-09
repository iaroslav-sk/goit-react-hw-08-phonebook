import React, { Component } from 'react';

import Form from '../../components/Form/Form.jsx';
import ContactList from '../../components/ContactList/ContactList.jsx';
import Filter from '../../components/Filter/Filter.jsx';
import { fetchContacts } from '../../redux/contacts/contacts-operations';
import { loadingContacts } from '../../redux/contacts/contacts-selectors';
import style from '../../components/Style.module.css';
import { connect } from 'react-redux';

class ContactsView extends Component {
  state = {
    filter: '',
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className={style.wrapper}>
        <Form onSubmitData={this.formSubmitData} />
        <Filter />
        <ContactList />
        {this.props.isLoadingContacts && <h1>Loading...</h1>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: loadingContacts(state),
});

const mapDiaspatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDiaspatchToProps)(ContactsView);
