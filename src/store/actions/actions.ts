import { UserActionType, User, USER_LOGIN, USER_LOGOUT } from "../types";

export function logUserIn(user: User): UserActionType {
  return {
    type: USER_LOGIN,
    playload: user,
  };
}

export function logUserOut(): UserActionType {
  return {
    type: USER_LOGOUT,
  };
}
