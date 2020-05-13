import {
  UserState,
  UserActionType,
  USER_LOGOUT,
  USER_LOGIN,
} from "../types";

const initialState: UserState = {
  user: {},
};

export default function reducer(state = initialState, action: UserActionType) {
  switch (action.type) {
    case USER_LOGIN:
      return action.playload;
    case USER_LOGOUT:
      return null;
    default:
      return state;
  }
}
