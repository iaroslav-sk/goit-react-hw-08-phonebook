import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth/auth-operations';
import { getUserName } from '../../redux/auth/auth-selectors';
import style from './Style.module.css';

const UserMenu = ({ name, onLogout }) => (
  <div className={style.wrapp}>
    <span className={style.text}>Welcome, {name}</span>
    <button type="button" onClick={onLogout} className={style.btn}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: getUserName(state),
});

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
