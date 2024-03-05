import Axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  PROFILE_FETCH_FAIL,
  PROFILE_FETCH_SUCCESS,
} from "./actionTypes";
import { getHeaders } from "store/utils/tokenauth";

const ENDPOINT_LOGIN = "http://localhost:8000/api/login";
const ENDPOINT_LOGOUT = "http://localhost:8000/api/logout";
const ENDPOINT_PROFILE = "http://localhost:8000/api/user";

export const login = (credentials, navigate) => async (dispatch) => {
  console.log("sent creds: ", credentials);
  try {
    const response = await Axios.post(ENDPOINT_LOGIN, credentials);

    if (response.data.status === "success") {
      console.log("user ", response.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
      navigate("/admin/dashboard");
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: response.data,
      });
    }
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

const ENDPOINT_SIGNUP = "http://localhost:8000/api/signup";

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
    console.log("response:z");

    if (response.data.status === "success") {
      dispatch(signupSuccess());
      navigate("/");
    } else {
      dispatch(signupFailure(response.data.message));
    }
  } catch (error) {
    dispatch(signupFailure(error.message));
  }
};

// get user profile
export const Profile = () => async (dispatch) => {
  try {
    const response = await Axios.get(ENDPOINT_PROFILE, {
      headers: getHeaders,
    });

    if (response.data.status === "success") {
      console.log("user ", response.data);
      dispatch({
        type: PROFILE_FETCH_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({
        type: PROFILE_FETCH_FAIL,
        payload: response.data,
      });
    }
  } catch (error) {
    dispatch({
      type: PROFILE_FETCH_FAIL,
      payload: error.message,
    });
  }
};
