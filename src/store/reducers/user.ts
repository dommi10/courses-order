import {
  UserState,
  UserActionType,
  GET_USER_LOGOUT,
  GET_USER_LOGIN_ERROR,
  GET_USER_LOGIN_SUCCESS,
  GET_USER_LOGIN_LOADING,
} from "../types";

const initialState: UserState = {
  data: {},
  hasError: false,
  isLoading: false,
};

export default function reducer(state = initialState, action: UserActionType) {
  switch (action.type) {
    case GET_USER_LOGOUT:
      return null;
    case GET_USER_LOGIN_SUCCESS:
      return {
        ...state,
        data: action.playload,
        isLoading: false,
        error: false,
      };
    case GET_USER_LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    case GET_USER_LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    default:
      return state;
  }
}
