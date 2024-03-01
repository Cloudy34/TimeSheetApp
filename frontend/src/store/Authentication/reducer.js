//authReducer.js
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,

  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from "./actionTypes";

const initialState = {
  isAuthenticated: false,
  user: [],
  error: [],
  success: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // LOGIN reducer
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        error: null,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    // LOGOUT Reducer
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    // signup reducer
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: ""
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: ""
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default authReducer;
