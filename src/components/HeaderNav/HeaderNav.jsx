import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAntenticated } from '../../redux/auth/auth-selectors';
import style from './Style.module.css';

const HeaderNav = ({ isAutetnticated }) => (
  <div className={style.headerNav}>
    <NavLink to="/">
      <button className={style.btn}> Главная</button>
    </NavLink>
    <br />
    {isAutetnticated && (
      <NavLink to="/contacts">
        <button className={style.btn}> Мои контакты</button>
      </NavLink>
    )}
  </div>
);

const mapStateToProps = state => ({
  isAutetnticated: getIsAntenticated(state),
});

export default connect(mapStateToProps)(HeaderNav);
