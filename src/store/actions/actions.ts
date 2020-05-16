import {
  UserLogout,
  User,
  GET_USER_LOGOUT,
  GET_USER_LOGIN_SUCCESS,
  GET_USER_LOGIN_ERROR,
  UserLoginError,
  UserLoginSuccess,
  UserLoginLoading,
  ThunkResult,
  GET_USER_LOGIN_LOADING,
} from "../types";

import { sigin, signup } from "../../actions";

export const userLoginLoading = (): UserLoginLoading => ({
  type: GET_USER_LOGIN_LOADING,
});

export const logUserIn = (user: User): ThunkResult<void> => {
  return async (dispatch) => {
    dispatch(userLoginLoading());
    try {
      const newUser: User = await sigin(user);
      console.log(newUser);
      dispatch(userLoginSuccess(newUser));
    } catch {
      dispatch(userLoginFail(true));
    }
  };
};

export const signUpUser = (user: User): ThunkResult<void> => {
  return async (dispatch) => {
    dispatch(userLoginLoading());
    try {
      const newUser: any = await signup(user);
      const { username, levels } = newUser.result;
      dispatch(userLoginSuccess({ username, levels }));
    } catch {
      dispatch(userLoginFail(true));
    }
  };
};

export const logUserOut = (): UserLogout => ({
  type: GET_USER_LOGOUT,
});

export const userLoginSuccess = (user: User): UserLoginSuccess => ({
  type: GET_USER_LOGIN_SUCCESS,
  playload: user,
});

export const userLoginFail = (error: boolean): UserLoginError => ({
  type: GET_USER_LOGIN_ERROR,
  playload: error,
});
