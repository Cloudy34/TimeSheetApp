import Axios from 'axios';
import { 
  LOGIN_SUCCESS, 
  LOGIN_FAIL, 
  LOGOUT_SUCCESS, 
  LOGOUT_FAIL 
} from './actionTypes';

const ENDPOINT_LOGIN = '/api/login';
const ENDPOINT_LOGOUT = '/api/logout';

export const login = (credentials) => async (dispatch) => {
    console.log("sent creds: ", credentials)
  try {
    const response = await Axios.post(ENDPOINT_LOGIN, credentials);

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const user = response.data;
    dispatch({ 
        type: LOGIN_SUCCESS, 
        payload: user 
    });
  } catch (error) {
    dispatch({ 
        type: LOGIN_FAIL, 
        payload: error.message });
  }
};

export const logout = () => async (dispatch) => {
  try {
    const response = await Axios.post(ENDPOINT_LOGOUT);

    if (!response.ok) {
      throw new Error('Logout failed');
    }

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.message });
  }
};
