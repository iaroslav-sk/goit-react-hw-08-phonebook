import React from 'react';
import { connect } from 'react-redux';
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import AuthNav from '../../components/AuthNav/AuthNav';
import UserMenu from './../UserMenu/UserMenu';
import style from '../../components/Style.module.css';
import { getIsAntenticated } from '../../redux/auth/auth-selectors';

const AppBar = ({ isAntenticated }) => (
  <div className={style.header_wrapp}>
    <HeaderNav />

    {isAntenticated ? <UserMenu /> : <AuthNav />}
  </div>
);

const mapStateToProps = state => ({
  isAntenticated: getIsAntenticated(state),
});

export default connect(mapStateToProps, null)(AppBar);
