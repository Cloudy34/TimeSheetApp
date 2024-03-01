import Axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from "./actionTypes";

const ENDPOINT_LOGIN = "http://localhost:8000/api/login";
const ENDPOINT_LOGOUT = "/logout";

export const login = (credentials, navigate) => async (dispatch) => {
  console.log("sent creds: ", credentials);
  try {
    const response = await Axios.post(ENDPOINT_LOGIN, credentials);

    if (!response.status) {
      throw new Error("Login failed");
    }

    const user = response.data;
    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });
    navigate("/admin/dashboard");
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    const response = await Axios.post(ENDPOINT_LOGOUT);

    if (!response.ok) {
      throw new Error("Logout failed");
    }

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.message });
  }
};

const ENDPOINT_SIGNUP = "http://localhost:8000/signup";

export const signupRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};

export const signupSuccess = () => {
  return {
    type: SIGNUP_SUCCESS,
  };
};

export const signupFailure = (error) => {
  return {
    type: SIGNUP_FAILURE,
    error,
  };
};

export const signup = (userData, navigate) => async (dispatch) => {
  console.log("ud=serdata: ", userData);
  dispatch(signupRequest());
  try {
    const response = await Axios.post(ENDPOINT_SIGNUP, userData);

    if (!response.status) {
      throw new Error("Signup failed");
    }

    dispatch(signupSuccess());
    navigate("/");
  } catch (error) {
    dispatch(signupFailure(error.message));
  }
};
