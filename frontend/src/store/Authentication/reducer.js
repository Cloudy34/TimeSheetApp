// authReducer.js

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from "./actionTypes";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: "",
  message: "",
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // LOGIN reducer
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.data,
        error: action.payload.error,
        message: action.payload.message,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload.message,
        message: null,
        loading: false,
      };

    // LOGOUT Reducer
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null,
        message: null,
        loading: false,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        error: action.payload.message,
        loading: false,
      };

    // Signup reducers
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        message: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        message: action.payload.message,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        message: null,
      };
    default:
      return state;
  }
};

export default authReducer;
