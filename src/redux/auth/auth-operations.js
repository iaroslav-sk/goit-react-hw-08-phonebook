import axios from 'axios';
import {
  loginRequest,
  registerError,
  registerRequest,
  registerSuccess,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserError,
  getCurrentUserSuccess,
} from './auth-actions';

// =========== base config operation================== //

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// =========== register operation================== //

const register = credentials => async dispatch => {
  dispatch(registerRequest());
  try {
    const responce = await axios.post('/users/signup', credentials);
    token.set(responce.data.token);
    dispatch(registerSuccess(responce.data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};
// ========= login operation =======================//

const login = credentials => async dispatch => {
  dispatch(loginRequest());

  try {
    const responce = await axios.post('/users/login', credentials);
    token.set(responce.data.token);
    dispatch(registerSuccess(responce.data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

// ========== logout oparetion =====================//

const logout = () => async dispatch => {
  dispatch(logoutRequest());

  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

// ========== get сurrent oparetion =====================//

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistToken },
  } = getState();

  if (!persistToken) {
    return;
  }
  token.set(persistToken);

  dispatch(getCurrentUserRequest());

  try {
    const responce = await axios.get('/users/current');
    dispatch(getCurrentUserSuccess(responce.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

export { register, login, logout, getCurrentUser };
