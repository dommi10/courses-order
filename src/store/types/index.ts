import { ThunkAction } from "redux-thunk";

export const GET_USER_LOGIN = "GET_USER_LOGIN";
export const GET_USER_LOGOUT = "GET_USER_LOGOUT";
export const COURSE_LIST = "COURSE_LIST";
export const SUBSCRIB_COURSE = "SUBSCRIB_COURSE";
export const GET_USER_LOGIN_SUCCESS = "GET_USER_LOGIN_SUCCESS";
export const GET_USER_LOGIN_ERROR = "GET_USER_LOGIN_ERROR";
export const GET_USER_LOGIN_LOADING = "GET_GET_USER_LOGIN_LOADING";
export const GET_ADD_TO_CARD = "GET_ADD_TO_CARD";
export const GET_DELETE_TO_CARD = "GET_DELETE_TO_CARD";

export interface User {
  username?: String;
  passwords?: String;
  levels?: number;
  token?: string;
}

export interface Token {
  token: String;
}

export interface Options {
  limit: number;
  offset: number;
  order?: Array<Array<String>>;
}

export interface Course {
  id: string;
  title: String;
  dates: String;
  prix: number;
  deleted?: number;
  description?: String;
}

export interface Subscription {
  user: User;
  course: Course;
  dates: String;
}

export interface AddToCard {
  type: typeof GET_ADD_TO_CARD;
  playload: Course;
}

export interface DeleteToCard {
  type: typeof GET_DELETE_TO_CARD;
  playload: Course;
}

export interface Login {
  type: typeof GET_USER_LOGIN;
  playload: User;
}

export interface UserLoginSuccess {
  type: typeof GET_USER_LOGIN_SUCCESS;
  playload: User;
}

export interface UserLoginError {
  type: typeof GET_USER_LOGIN_ERROR;
  playload: boolean;
}

export interface UserLoginLoading {
  type: typeof GET_USER_LOGIN_LOADING;
  playload?: any;
}

export interface UserLogout {
  type: typeof GET_USER_LOGOUT;
  playload?: any;
}

export interface Courses {
  type: typeof COURSE_LIST;
}

export interface UserState {
  data?: User;
  hasError: boolean;
  isLoading: boolean;
}

export interface CardState {
  data?: Course[];
}

export interface StateType {
  user: UserState;
  card: CardState;
}

export type UserActionType =
  | UserLogout
  | UserLoginError
  | UserLoginLoading
  | UserLoginSuccess;

export type CardActionType = AddToCard | DeleteToCard;

export interface SubscriptionSate {
  courses: Subscription[];
}

export type ThunkResult<R> = ThunkAction<
  R,
  UserState,
  undefined,
  UserActionType
>;
