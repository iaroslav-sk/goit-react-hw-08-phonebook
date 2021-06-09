import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import style from './Style.module.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={style.wrapp}>
        <h1>Страница логина</h1>

        <form
          onSubmit={this.handleSubmit}
          autoComplete="off"
          className={style.form}
        >
          <label className={style.label}>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className={style.input}
            />
          </label>

          <label className={style.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className={style.input}
            />
          </label>

          <button type="submit" className={style.btn}>
            Войти
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(null, mapDispatchToProps)(LoginView);
