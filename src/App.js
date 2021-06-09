import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar.jsx';
import style from './components/Style.module.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './redux/auth/auth-operations';
import PrivateRoute from './components/UserMenu/PrivateRoute';
import PublicRoute from './components/UserMenu/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView/ContactsView'));

class App extends Component {
  state = {
    filter: '',
  };
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <div className={style.wrapper}>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterView}
            />
            <PublicRoute
              path="/entry"
              restricted
              redirectTo="/contacts"
              component={LoginView}
            />
            <PrivateRoute path="/contacts" component={ContactsView} />
          </Switch>
        </Suspense>
        {this.props.isLoadingContacts && <h1>Loading...</h1>}
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};
export default connect(null, mapDispatchToProps)(App);
