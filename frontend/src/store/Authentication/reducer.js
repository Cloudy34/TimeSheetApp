import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  PROFILE_FETCH_FAIL,
  PROFILE_FETCH_SUCCESS
} from "./actionTypes";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
  message: null,
  loading: false,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // LOGIN reducer
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.data.token); // Save token in localStorage
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.data.user,
        error: null,
        message: action.payload.message,
        loading: false,
        token: action.payload.data.token,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload,
        message: null,
        loading: false,
        token: null,
      };

    // LOGOUT Reducer
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token"); // Remove token from localStorage on logout
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null,
        message: null,
        loading: false,
        token: null,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        error: action.payload,
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
        message: action.payload,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        message: null,
      };
    default:
      return state;
  }
};

export default authReducer;
