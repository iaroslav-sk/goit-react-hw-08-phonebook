import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Style.module.css';

const AuthNav = () => (
  <div className={style.AuthNav}>
    <NavLink to="/register">
      <button className={style.btn}>Зарегистрироваться</button>{' '}
    </NavLink>
    <br />
    <NavLink to="/entry">
      <button className={style.btn}>Вход</button>{' '}
    </NavLink>
  </div>
);

export default AuthNav;
